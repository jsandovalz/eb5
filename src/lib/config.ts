/**
 * Site-wide configuration. Edit these values to rebrand the site, change
 * contact details, or point the referral flow at a different partner.
 */
export const siteConfig = {
  // TODO: replace with your final brand name / domain before launch.
  brandName: "EB5 Pathway",
  tagline: {
    en: "Your trusted guide to U.S. residency through investment",
    es: "Tu guía de confianza hacia la residencia en EE.UU. a través de inversión",
    pt: "Seu guia de confiança para a residência nos EUA através de investimento",
    zh: "您通往美国投资移民之路的可信向导",
  },
  url: "https://www.eb5pathway.com", // TODO: update once the domain is live

  // Referral partner — the licensed broker-dealer that interested leads are
  // eventually introduced to, AFTER you've spoken with them and explained
  // how EB-5 works. Intentionally NOT shown anywhere on the public site or
  // in the chatbot's default answers (see src/lib/knowledge-base.ts) — this
  // data exists purely so you have it on hand for your own follow-up.
  partner: {
    name: "InvestAmerica",
    legalName:
      "InvestAmerica offers securities through Sequence Financial Specialists LLC, member FINRA/SIPC, dba InvestAmerica. InvestAmerica LLC is a subsidiary of Sequence Holdings LLC.",
    website: "https://investamericap.com",
    phone: "+1 843 853 8222",
    email: "info@investamericap.com",
    address: "181 E Evans St, Suite C-1, Florence, SC 29506, USA",
    finraBrokerCheck: "https://brokercheck.finra.org/firm/summary/132915",
  },

  contact: {
    // Where lead-form notification emails are sent.
    email: "jsandovalz@gmail.com",
    // TODO: set this to YOUR OWN WhatsApp number (international format, no
    // symbols, e.g. "15551234567") so visitors reach you first — not the
    // partner directly. Leave blank to hide the WhatsApp button entirely.
    whatsappNumber: "",
  },
  social: {
    linkedin: "",
  },
};

export const localeNames: Record<string, { label: string; flagEmoji: string }> = {
  en: { label: "English", flagEmoji: "🇺🇸" },
  es: { label: "Español", flagEmoji: "🇪🇸" },
  pt: { label: "Português", flagEmoji: "🇧🇷" },
  zh: { label: "中文", flagEmoji: "🇨🇳" },
};
