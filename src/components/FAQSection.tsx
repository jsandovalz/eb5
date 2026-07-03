"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { q: string; a: string }[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-navy/70">{t("subtitle")}</p>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="overflow-hidden rounded-xl border border-navy/10 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-navy">{item.q}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`shrink-0 text-navy/50 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm leading-relaxed text-navy/70">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
