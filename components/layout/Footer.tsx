import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale = locale === "en" ? "es" : "en";
  const localizedPath = pathname ? pathname.replace(/^\/(en|es)/, "") : "/";

  return (
    <footer className="border-t border-white/10 bg-black/80 py-10">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 text-sm text-white/60">
          <div className="font-display text-base text-white">
            Black Label Detailing
          </div>
          <div>{t("copyright")}</div>
        </div>
        <div className="flex items-center gap-4 text-sm text-white/70">
          <Link
            href={`/${otherLocale}${localizedPath || ""}`}
            className="hover:text-white"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <a href="#privacy" className="hover:text-white">
            {t("privacy")}
          </a>
          <a href="#terms" className="hover:text-white">
            {t("terms")}
          </a>
        </div>
      </div>
    </footer>
  );
}
