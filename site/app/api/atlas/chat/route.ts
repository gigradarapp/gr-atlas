import OpenAI from "openai";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

type ChatContext = {
  workspace?: string;
  tabId?: string;
};

function buildSystemPrompt(context: ChatContext) {
  const workspace = context.workspace ?? "Command centre";

  return `You are Atlas, the agentic operating assistant for Buzo Atlas — an AI-native family-office workspace for the nightlife and culture economy.

You help operators learn from evidence, coordinate partners and rights, and allocate capital, attention, technology, and relationships. You speak clearly, concisely, and like a trusted operating partner — not a generic chatbot.

Current workspace: ${workspace}
Active portfolio mechanisms:
1. Strategic partnerships — artists, venues, promoters, hospitality, brands, technology, distributors, capital
2. Buzo Originals — owned or licensed event IP such as Moonphase Assembly
3. Digital art — provenance, ownership, exhibition, and commercial rights
4. Concierge IP + technology — reusable agents, workflows, and operating infrastructure

When answering:
- Ground responses in portfolio operating logic: rights windows, partner readiness, evidence confidence, dependencies, and human review gates
- Be explicit when something is an inference versus a fact from the demo data
- Prefer actionable briefs, decision options, and next steps
- Keep replies focused unless the user asks for depth
- Do not claim to execute trades, sign contracts, or bypass human approval
- Remind the user that demo data is fictional when relevant`;
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return Response.json({ error: "OpenAI API key is not configured." }, { status: 500 });
  }

  let body: { messages?: ChatMessage[]; context?: ChatContext };

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const messages = body.messages?.filter((message) => message.content.trim()) ?? [];
  const context = body.context ?? {};

  if (messages.length === 0) {
    return Response.json({ error: "At least one message is required." }, { status: 400 });
  }

  const openai = new OpenAI({ apiKey });

  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      temperature: 0.6,
      messages: [{ role: "system", content: buildSystemPrompt(context) }, ...messages],
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
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to reach OpenAI.";
    return Response.json({ error: message }, { status: 502 });
  }
}
