import { useTranslations } from "next-intl";

export default function Trust() {
  const t = useTranslations("trust");
  const points = t.raw("points") as string[];
  const panelSteps = t.raw("panelSteps") as string[];

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
            <p className="text-sm uppercase tracking-wide text-gold-light">{t("panelTitle")}</p>
            <ol className="mt-5 space-y-5">
              {panelSteps.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-gold-light">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-white/80">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
