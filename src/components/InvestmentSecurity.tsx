import { useTranslations } from "next-intl";

export default function InvestmentSecurity() {
  const t = useTranslations("investment");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section id="investment" className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-white/70">{t("subtitle")}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-light">
              {t("amountsTitle")}
            </h3>
            <div className="mt-6 space-y-5">
              <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-2xl font-bold">{t("tea")}</div>
                  <div className="text-sm text-white/60">{t("teaLabel")}</div>
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-2xl font-bold">{t("nonTea")}</div>
                  <div className="text-sm text-white/60">{t("nonTeaLabel")}</div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/60">{t("jobsNote")}</p>

            <div className="mt-6 rounded-xl border border-gold/30 bg-gold/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-light">
                {t("returnNoteLabel")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{t("returnNote")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {items.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h4 className="font-semibold text-gold-light">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
