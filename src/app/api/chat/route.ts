import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { knowledgeBase } from "@/lib/knowledge-base";

export const runtime = "nodejs";

const messageSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(2000),
      })
    )
    .min(1)
    .max(20),
  locale: z.string().min(2).max(5).default("en"),
});

const localeNames: Record<string, string> = {
  en: "English",
  es: "Spanish",
  pt: "Portuguese",
  zh: "Mandarin Chinese",
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Chat is not configured. Set ANTHROPIC_API_KEY." },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => null);
  const parsed = messageSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { messages, locale } = parsed.data;
  const languageName = localeNames[locale] ?? "English";

  try {
    const anthropic = new Anthropic({ apiKey });

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 400,
      system: `You are the helpful FAQ assistant embedded on an EB-5 investor referral website. Respond in ${languageName}. Use only the information below as your factual source.\n\n${knowledgeBase}`,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    });

    const reply = response.content
      .filter((block): block is Anthropic.TextBlock => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    return NextResponse.json({ reply: reply || "…" });
  } catch (err) {
    console.error("Chat API error", err);
    return NextResponse.json({ error: "Chat request failed" }, { status: 500 });
  }
}
