type ChatRole = "user" | "assistant";

export type ValidatedAtlasChatRequest = {
  messages: Array<{ role: ChatRole; content: string }>;
  context: { workspace?: string; tabId?: string };
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 8;
const MAX_REQUEST_BYTES = 24_000;
const MAX_MESSAGES = 10;
const MAX_MESSAGE_CHARS = 2_000;
const MAX_TOTAL_MESSAGE_CHARS = 8_000;
const MAX_CONTEXT_CHARS = 80;

const responseHeaders = {
  "Cache-Control": "no-store",
  "Content-Type": "application/json; charset=utf-8",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "no-referrer",
};

type RateLimitEntry = { count: number; resetAt: number };

// This protects a single warm function instance. Configure a Vercel WAF rate-limit
// rule for /api/atlas/* as the durable, deployment-wide control.
const requestBuckets = new Map<string, RateLimitEntry>();

export function jsonError(error: string, status: number, headers?: HeadersInit) {
  return Response.json(
    { error },
    { status, headers: { ...responseHeaders, ...headers } },
  );
}

export function apiHeaders(headers?: HeadersInit) {
  return { ...responseHeaders, ...headers };
}

export function requireSameOrigin(request: Request): Response | null {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");

  if (!origin || !host) {
    return jsonError("This endpoint only accepts same-origin browser requests.", 403);
  }

  const configuredOrigins = (process.env.ATLAS_ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const allowedOrigins = new Set([
    `https://${host}`,
    `http://${host}`,
    ...configuredOrigins,
  ]);

  return allowedOrigins.has(origin)
    ? null
    : jsonError("This origin is not allowed to use Atlas.", 403);
}

export function checkAtlasRateLimit(request: Request): Response | null {
  const now = Date.now();
  const clientId =
    request.headers.get("x-vercel-ja4-digest") ??
    request.headers.get("x-vercel-forwarded-for") ??
    request.headers.get("x-forwarded-for") ??
    "unknown";
  const existing = requestBuckets.get(clientId);
  const entry = !existing || existing.resetAt <= now
    ? { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS }
    : existing;

  entry.count += 1;
  requestBuckets.set(clientId, entry);

  const retryAfterSeconds = Math.max(1, Math.ceil((entry.resetAt - now) / 1_000));
  const headers = {
    "RateLimit-Limit": String(RATE_LIMIT_MAX_REQUESTS),
    "RateLimit-Remaining": String(Math.max(0, RATE_LIMIT_MAX_REQUESTS - entry.count)),
    "RateLimit-Reset": String(retryAfterSeconds),
  };

  if (entry.count > RATE_LIMIT_MAX_REQUESTS) {
    return jsonError("Too many Atlas requests. Please try again shortly.", 429, {
      ...headers,
      "Retry-After": String(retryAfterSeconds),
    });
  }

  return null;
}

export async function parseAtlasChatRequest(
  request: Request,
): Promise<{ value: ValidatedAtlasChatRequest } | { error: Response }> {
  const contentType = request.headers.get("content-type") ?? "";
  const contentLength = Number(request.headers.get("content-length") ?? "0");

  if (!contentType.toLowerCase().startsWith("application/json")) {
    return { error: jsonError("Expected an application/json request body.", 415) };
  }

  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return { error: jsonError("Request body is too large.", 413) };
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
    return { error: jsonError("Request body is too large.", 413) };
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return { error: jsonError("Invalid request body.", 400) };
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { error: jsonError("Invalid request body.", 400) };
  }

  const candidate = body as { messages?: unknown; context?: unknown };
  if (!Array.isArray(candidate.messages) || candidate.messages.length === 0 || candidate.messages.length > MAX_MESSAGES) {
    return { error: jsonError(`Provide between 1 and ${MAX_MESSAGES} messages.`, 400) };
  }

  let totalChars = 0;
  const messages: ValidatedAtlasChatRequest["messages"] = [];
  for (const message of candidate.messages) {
    if (!message || typeof message !== "object" || Array.isArray(message)) {
      return { error: jsonError("Each message must be valid.", 400) };
    }

    const { role, content } = message as { role?: unknown; content?: unknown };
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") {
      return { error: jsonError("Each message must include a valid role and text.", 400) };
    }

    const trimmedContent = content.trim();
    if (!trimmedContent || trimmedContent.length > MAX_MESSAGE_CHARS) {
      return { error: jsonError(`Each message must be between 1 and ${MAX_MESSAGE_CHARS} characters.`, 400) };
    }

    totalChars += trimmedContent.length;
    if (totalChars > MAX_TOTAL_MESSAGE_CHARS) {
      return { error: jsonError("Conversation is too large. Start a new Atlas chat.", 400) };
    }

    messages.push({ role, content: trimmedContent });
  }

  const context = parseContext(candidate.context);
  if (!context) {
    return { error: jsonError("Invalid Atlas context.", 400) };
  }

  return { value: { messages, context } };
}

function parseContext(value: unknown): ValidatedAtlasChatRequest["context"] | null {
  if (value === undefined) return {};
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;

  const candidate = value as { workspace?: unknown; tabId?: unknown };
  const context: ValidatedAtlasChatRequest["context"] = {};

  for (const key of ["workspace", "tabId"] as const) {
    const field = candidate[key];
    if (field === undefined) continue;
    if (typeof field !== "string" || field.length > MAX_CONTEXT_CHARS) return null;
    context[key] = field.trim();
  }

  return context;
}
