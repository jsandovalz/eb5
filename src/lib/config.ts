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
  url: "https://www.americaInvestorVisa.com", // TODO: update once the domain is live
  // Referral partner — the licensed broker-dealer this site refers leads to.
  partner: {
    name: "InvestAmerica",
    legalName:
      "InvestAmerica offers securities through Sequence Financial Specialists LLC, member FINRA/SIPC, dba InvestAmerica. InvestAmerica LLC is a subsidiary of Sequence Holdings LLC.",
  },
  contact: {
    // TODO: replace with the referral desk's own contact details.
    email: "jsandovalz@gmail.com",
    // WhatsApp number in international format, no symbols (used for wa.me links).
    whatsappNumber: "18438538222",
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
