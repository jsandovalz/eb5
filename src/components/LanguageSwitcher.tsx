"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { localeNames } from "@/lib/config";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 transition"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{localeNames[locale]?.flagEmoji}</span>
        <span>{localeNames[locale]?.label}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-40 overflow-hidden rounded-lg border border-black/10 bg-white shadow-lg z-50"
        >
          {routing.locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  router.replace(pathname, { locale: l });
                }}
                className={`flex w-full items-center gap-2 px-3 py-2 text-sm text-left hover:bg-surface transition ${
                  l === locale ? "font-semibold text-navy" : "text-navy/80"
                }`}
              >
                <span>{localeNames[l]?.flagEmoji}</span>
                <span>{localeNames[l]?.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
