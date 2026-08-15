import OpenAI from "openai";

export async function GET() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return Response.json(
      {
        status: "unconfigured",
        message: "OpenAI API key is not configured.",
      },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  const openai = new OpenAI({ apiKey });
  const started = Date.now();

  try {
    await openai.models.retrieve("gpt-4o-mini");
    const latencyMs = Date.now() - started;

    return Response.json(
      {
        status: "online",
        model: "gpt-4o-mini",
        latencyMs,
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    const latencyMs = Date.now() - started;
    const message = error instanceof Error ? error.message : "OpenAI ping failed.";

    return Response.json(
      {
        status: "offline",
        message,
        latencyMs,
      },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }
}
