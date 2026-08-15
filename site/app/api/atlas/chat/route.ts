import OpenAI from "openai";
import { buildAtlasSystemPrompt } from "@/app/lib/atlasPortfolioContext";
import {
  apiHeaders,
  checkAtlasRateLimit,
  jsonError,
  parseAtlasChatRequest,
  requireSameOrigin,
} from "@/app/lib/atlasApiSecurity";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return jsonError("Atlas is not configured.", 503);
  }

  const originError = requireSameOrigin(request);
  if (originError) return originError;

  const rateLimitError = checkAtlasRateLimit(request);
  if (rateLimitError) return rateLimitError;

  const parsed = await parseAtlasChatRequest(request);
  if ("error" in parsed) return parsed.error;
  const { messages, context } = parsed.value;

  const openai = new OpenAI({ apiKey, maxRetries: 0, timeout: 15_000 });

  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      temperature: 0.4,
      max_completion_tokens: 350,
      messages: [{ role: "system", content: buildAtlasSystemPrompt(context) }, ...messages],
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content;
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(readable, {
      headers: {
        ...apiHeaders(),
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch {
    return jsonError("Atlas could not respond right now. Please try again.", 502);
  }
}
