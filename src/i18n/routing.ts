import { defineRouting } from "next-intl/routing";

/**
 * Central place to add or remove supported languages.
 * To add a new language:
 *   1. Add its code to `locales` below.
 *   2. Create src/messages/<code>.json (copy en.json as a starting point and translate).
 *   3. Add its label to `localeNames` in src/lib/config.ts.
 * That's it — routing, sitemap, hreflang tags and the language switcher all pick it up automatically.
 */
export const locales = ["en", "es", "pt", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
