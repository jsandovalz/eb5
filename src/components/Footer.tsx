import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy text-sm font-bold">
                EB5
              </span>
              {siteConfig.brandName}
            </div>
            <p className="mt-4 text-sm leading-relaxed">{t("about")}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              {t("quickLinks")}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#benefits" className="hover:text-white">{nav("benefits")}</a></li>
              <li><a href="#investment" className="hover:text-white">{nav("investment")}</a></li>
              <li><a href="#process" className="hover:text-white">{nav("process")}</a></li>
              <li><a href="#faq" className="hover:text-white">{nav("faq")}</a></li>
              <li><a href="#contact" className="hover:text-white">{nav("contact")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              {t("partner")}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{siteConfig.partner.name}</li>
              <li>{siteConfig.partner.phone}</li>
              <li>{siteConfig.partner.email}</li>
              <li>
                <a
                  href={siteConfig.partner.finraBrokerCheck}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="underline underline-offset-2 hover:text-white"
                >
                  {t("brokerCheck")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/50">{t("disclaimer")}</p>
          <p className="mt-4 text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.brandName}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
