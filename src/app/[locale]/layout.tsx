import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { siteConfig } from "@/lib/config";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const languages: Record<string, string> = {};
  routing.locales.forEach((l) => {
    languages[l] = `${siteConfig.url}/${l}`;
  });

  return {
    metadataBase: new URL(siteConfig.url),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.brandName,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brandName,
    url: siteConfig.url,
    description:
      "Independent informational site about the EB-5 Immigrant Investor Program, referring investors to a licensed EB-5 broker-dealer.",
    sameAs: [siteConfig.partner.website],
  };

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider locale={locale as Locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
