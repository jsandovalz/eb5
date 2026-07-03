import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/config";

export default function Trust() {
  const t = useTranslations("trust");
  const points = t.raw("points") as string[];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">{t("title")}</h2>
            <p className="mt-4 text-navy/70">{t("subtitle")}</p>
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-navy/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-navy p-8 text-white">
            <p className="text-sm uppercase tracking-wide text-gold-light">{siteConfig.partner.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{siteConfig.partner.legalName}</p>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <p>{siteConfig.partner.address}</p>
              <p>{siteConfig.partner.phone}</p>
              <p>{siteConfig.partner.email}</p>
            </div>
            <a
              href={siteConfig.partner.finraBrokerCheck}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-6 inline-block text-xs font-medium text-gold-light underline underline-offset-2"
            >
              FINRA BrokerCheck →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
