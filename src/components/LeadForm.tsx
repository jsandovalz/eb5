"use client";

import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const t = useTranslations("leadForm");
  const locale = useLocale();
  const rangeOptions = t.raw("rangeOptions") as string[];
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      country: data.get("country"),
      investmentRange: data.get("investmentRange"),
      message: data.get("message"),
      locale,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-navy/70">{t("subtitle")}</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-navy" htmlFor="name">
              {t("name")}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1.5 w-full rounded-lg border border-navy/20 px-3.5 py-2.5 text-sm text-navy focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-navy" htmlFor="email">
              {t("email")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1.5 w-full rounded-lg border border-navy/20 px-3.5 py-2.5 text-sm text-navy focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-navy" htmlFor="phone">
              {t("phone")}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="mt-1.5 w-full rounded-lg border border-navy/20 px-3.5 py-2.5 text-sm text-navy focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-navy" htmlFor="country">
              {t("country")}
            </label>
            <input
              id="country"
              name="country"
              type="text"
              required
              className="mt-1.5 w-full rounded-lg border border-navy/20 px-3.5 py-2.5 text-sm text-navy focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-navy" htmlFor="investmentRange">
              {t("investmentRange")}
            </label>
            <select
              id="investmentRange"
              name="investmentRange"
              required
              defaultValue=""
              className="mt-1.5 w-full rounded-lg border border-navy/20 bg-white px-3.5 py-2.5 text-sm text-navy focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            >
              <option value="" disabled>
                {t("investmentRangePlaceholder")}
              </option>
              {rangeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-navy" htmlFor="message">
              {t("message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="mt-1.5 w-full rounded-lg border border-navy/20 px-3.5 py-2.5 text-sm text-navy focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            />
          </div>

          <div className="sm:col-span-2 flex items-start gap-2.5">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 rounded border-navy/30"
            />
            <label htmlFor="consent" className="text-xs leading-relaxed text-navy/70">
              {t("consent")}
            </label>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition disabled:opacity-60"
            >
              {status === "submitting" ? t("submitting") : t("submit")}
            </button>
          </div>

          {status === "success" && (
            <p className="sm:col-span-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
              {t("success")}
            </p>
          )}
          {status === "error" && (
            <p className="sm:col-span-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              {t("error")}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
