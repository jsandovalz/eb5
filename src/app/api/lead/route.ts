import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/lib/config";

export const runtime = "nodejs";

const leadSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  phone: z.string().min(3).max(50),
  country: z.string().min(1).max(100),
  investmentRange: z.string().min(1).max(100),
  message: z.string().max(2000).optional().nullable(),
  locale: z.string().min(2).max(5).optional(),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const lead = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.LEAD_NOTIFICATION_EMAIL || siteConfig.contact.email;
  const fromAddress = process.env.LEAD_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey) {
    console.warn(
      "RESEND_API_KEY is not set — lead was received but no email was sent.",
      lead
    );
    // Don't fail the user's submission just because email isn't configured yet.
    return NextResponse.json({ ok: true, emailed: false });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `${siteConfig.brandName} <${fromAddress}>`,
      to: notifyTo,
      replyTo: lead.email,
      subject: `New EB-5 lead: ${lead.name} (${lead.investmentRange})`,
      html: `
        <h2>New consultation request</h2>
        <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
        <p><strong>Country:</strong> ${escapeHtml(lead.country)}</p>
        <p><strong>Investment range:</strong> ${escapeHtml(lead.investmentRange)}</p>
        <p><strong>Message:</strong> ${escapeHtml(lead.message || "—")}</p>
        <p><strong>Site language:</strong> ${escapeHtml(lead.locale || "en")}</p>
      `,
    });

    return NextResponse.json({ ok: true, emailed: true });
  } catch (err) {
    console.error("Lead email error", err);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
