# EB5 Pathway — EB-5 Referral Landing Page

Multilingual (EN / ES / PT / ZH) landing page that explains the EB-5 Immigrant
Investor Program and captures leads for referral to **InvestAmerica**
(https://investamericap.com). Built with Next.js App Router, TypeScript,
Tailwind CSS and next-intl. Deploys to Vercel.

## Features

- **Multilingual by design** — English, Spanish, Portuguese, Mandarin today;
  add more languages by dropping in one JSON file (see below).
- **SEO-ready** — per-locale metadata, `hreflang` alternates, sitemap.xml,
  robots.txt, and JSON-LD structured data.
- **FAQ chatbot** powered by the Claude API, grounded on a fixed knowledge
  base (`src/lib/knowledge-base.ts`) so it only answers on-topic questions.
- **"Talk to a human" button** that opens WhatsApp with your advisor number.
- **Lead capture form** that emails you (via Resend) whenever someone submits
  their details.

## 1. Install & run locally

```bash
npm install
cp .env.example .env.local   # then fill in the keys below
npm run dev
```

Open http://localhost:3000 — it redirects to `/en` (or your browser's
preferred language among the supported ones).

## 2. Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `ANTHROPIC_API_KEY` | For the chatbot to answer | Claude API key from https://console.anthropic.com |
| `RESEND_API_KEY` | For lead emails to send | Resend API key from https://resend.com |
| `LEAD_NOTIFICATION_EMAIL` | Optional | Where lead-form emails are sent (defaults to the address in `src/lib/config.ts`) |
| `LEAD_FROM_EMAIL` | Optional | "From" address for lead emails; must be on a domain verified in Resend, or use `onboarding@resend.dev` for testing |

Without `ANTHROPIC_API_KEY`, the chat widget's send button will show an
error message but the WhatsApp button still works. Without
`RESEND_API_KEY`, the lead form still shows a success message to the user
and logs the lead to the server console, but no email is sent — add the key
before going live.

## 3. Before you launch — things to customize

Everything brand/contact-specific lives in **`src/lib/config.ts`**:

- `brandName` and `url` — replace with your real site name and domain.
- `contact.whatsappNumber` — the number the chat widget's WhatsApp button
  messages (international format, digits only).
- `contact.email` — fallback lead-notification address.
- `partner.*` — InvestAmerica's public contact details (already filled in
  from investamericap.com; update if anything changes on their end).

Also review the legal disclaimers in each `src/messages/<locale>.json`
(`footer.disclaimer`, `hero.disclaimer`) with your compliance/legal advisor
before launch — this is a securities-adjacent referral funnel.

## 4. Adding another language

1. Add the locale code to `locales` in `src/i18n/routing.ts`.
2. Copy `src/messages/en.json` to `src/messages/<code>.json` and translate it.
3. Add a label + flag emoji for it in `localeNames` in `src/lib/config.ts`.

Routing, the language switcher, the sitemap and hreflang tags all update
automatically — no other code changes needed.

## 5. Deploying to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In Vercel: **New Project** → import the repo → framework preset
   "Next.js" is auto-detected.
3. Add the environment variables from step 2 under **Settings → Environment
   Variables**.
4. Deploy. Once you have a custom domain, update `url` in
   `src/lib/config.ts` and redeploy so metadata/sitemap use the right domain.

## Project structure

```
src/
  app/
    [locale]/         # localized routes (layout + page)
    api/chat/          # Claude-powered FAQ chatbot endpoint
    api/lead/           # lead form -> email notification endpoint
    sitemap.ts, robots.ts
  components/          # Header, Hero, Benefits, FAQ, LeadForm, ChatWidget, ...
  i18n/                # next-intl routing/middleware config
  lib/
    config.ts          # brand, contact & partner details — edit this first
    knowledge-base.ts   # facts the chatbot is grounded on
  messages/            # en.json, es.json, pt.json, zh.json translations
```

## Compliance note

This site is a referral/informational funnel, not a broker-dealer or
investment adviser. It should not present itself as offering legal,
tax or investment advice. Securities-related language throughout the
content reflects that InvestAmerica offers securities through Sequence
Financial Specialists LLC (FINRA/SIPC member) — keep this attribution
intact, and have your compliance advisor review all copy before launch.
