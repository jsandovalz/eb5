import { useTranslations } from "next-intl";

const icons = [
  <path key="1" d="M12 2l2.4 6.6L21 10l-5.4 4.2L17 21l-5-3.6L7 21l1.4-6.8L3 10l6.6-1.4L12 2z" />,
  <path key="2" d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />,
  <path key="3" d="M12 4a4 4 0 100 8 4 4 0 000-8zM4 21c0-4 4-6 8-6s8 2 8 6" />,
  <path key="4" d="M12 2l9 4.5v6c0 5-3.6 8.7-9 9.5-5.4-.8-9-4.5-9-9.5v-6L12 2z" />,
];

export default function Benefits() {
  const t = useTranslations("benefits");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section id="benefits" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-navy/70">{t("subtitle")}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl border border-navy/10 bg-surface p-6 hover:shadow-md transition"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-gold-light">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {icons[i % icons.length]}
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
