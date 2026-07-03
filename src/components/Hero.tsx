import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--gold-light) 0, transparent 40%), radial-gradient(circle at 80% 60%, var(--gold) 0, transparent 35%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-light">
            {t("eyebrow")}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-full bg-gold px-7 py-3 text-center text-sm font-semibold text-navy hover:bg-gold-light transition sm:w-auto"
            >
              {t("ctaPrimary")}
            </a>
            <a
              href="#process"
              className="w-full rounded-full border border-white/30 px-7 py-3 text-center text-sm font-semibold text-white hover:bg-white/10 transition sm:w-auto"
            >
              {t("ctaSecondary")}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="text-3xl font-bold text-gold-light">{stat.value}</div>
              <div className="mt-2 text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-white/50">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}
