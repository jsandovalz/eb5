"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { siteConfig } from "@/lib/config";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const t = useTranslations("chat");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => [
    { role: "assistant", content: t("greeting") },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hi, I'd like to speak with an advisor about the EB-5 program."
  )}`;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, locale }),
      });
      if (!res.ok) throw new Error("Chat request failed");
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: t("errorMessage") }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        {open && (
          <div className="flex h-[28rem] w-[22rem] max-w-[90vw] flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-2xl">
            <div className="flex items-center justify-between bg-navy px-4 py-3 text-white">
              <div>
                <p className="text-sm font-semibold">{t("title")}</p>
                <p className="text-xs text-white/60">{t("subtitle")}</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="text-white/70 hover:text-white" aria-label="Close chat">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-surface px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "ml-auto bg-navy text-white"
                      : "mr-auto bg-white text-navy border border-navy/10"
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="mr-auto max-w-[85%] rounded-2xl border border-navy/10 bg-white px-3.5 py-2 text-sm text-navy/50">
                  …
                </div>
              )}
            </div>

            {siteConfig.contact.whatsappNumber && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-t border-navy/10 bg-[#25D366]/10 px-4 py-2.5 text-sm font-medium text-[#128C7E] hover:bg-[#25D366]/20 transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.51 3.62 1.4 5.13L2 22l5.13-1.5a9.87 9.87 0 004.91 1.32c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.03c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.13.11-1.83-.11-.42-.13-.96-.32-1.65-.62-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.13 1.02-2.42.27-.29.58-.36.78-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.68.79 1.97.94.29.14.48.21.55.33.07.13.07.72-.17 1.4z" />
                </svg>
                {t("whatsapp")}
              </a>
            )}

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-navy/10 p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("placeholder")}
                className="flex-1 rounded-full border border-navy/20 px-3.5 py-2 text-sm text-navy focus:border-navy focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
              >
                {t("send")}
              </button>
            </form>
            <p className="border-t border-navy/10 px-4 py-2 text-[11px] leading-snug text-navy/40">
              {t("disclaimer")}
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-xl hover:bg-gold-light transition"
          aria-label={t("bubbleLabel")}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 11.5a8.5 8.5 0 01-8.5 8.5 8.36 8.36 0 01-3.65-.82L3 21l1.9-5.7a8.5 8.5 0 1116.1-3.8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
