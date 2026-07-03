import { useTranslations } from "next-intl";

export default function VisaProcess() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as { step: string; title: string; description: string }[];

  return (
    <section id="process" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-navy/70">{t("subtitle")}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {steps.map((step) => (
            <div key={step.step} className="relative rounded-2xl bg-white border border-navy/10 p-6">
              <div className="text-4xl font-bold text-navy/10">{step.step}</div>
              <h3 className="mt-2 text-base font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
