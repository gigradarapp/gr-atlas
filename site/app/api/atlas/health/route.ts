import { apiHeaders } from "@/app/lib/atlasApiSecurity";

export async function GET() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return Response.json(
      {
        status: "unconfigured",
        message: "OpenAI API key is not configured.",
      },
      { status: 503, headers: apiHeaders() },
    );
  }

  // Do not call OpenAI for a browser health poll: that endpoint is public and
  // polled every 45 seconds by each visitor. The chat route is the real check.
  return Response.json(
    { status: "online", model: "gpt-4o-mini" },
    { headers: apiHeaders() },
  );
}
