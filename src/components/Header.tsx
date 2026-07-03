"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/config";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";

export default function Header() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#benefits", label: t("benefits") },
    { href: "#investment", label: t("investment") },
    { href: "#process", label: t("process") },
    { href: "#faq", label: t("faq") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-40 bg-navy/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-white font-semibold text-lg">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy text-sm font-bold">
            EB5
          </span>
          {siteConfig.brandName}
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy hover:bg-gold-light transition"
          >
            {t("cta")}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-md p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-navy px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-white/85"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-1 inline-block rounded-full bg-gold px-4 py-2 text-center text-sm font-semibold text-navy"
            >
              {t("cta")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
