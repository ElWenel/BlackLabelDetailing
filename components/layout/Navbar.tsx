"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "#services", key: "services" },
  { href: "#pricing", key: "pricing" },
  { href: "#brands", key: "brands" },
  { href: "#gallery", key: "gallery" },
  { href: "#reviews", key: "reviews" },
  { href: "#faq", key: "faq" },
  { href: "#contact", key: "contact" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale = locale === "en" ? "es" : "en";
  const localizedPath = pathname ? pathname.replace(/^\/(en|es)/, "") : "/";

  const navLinks = useMemo(
    () =>
      navItems.map((item) => (
        <a
          key={item.key}
          href={item.href}
          className="text-sm font-medium text-white/70 transition hover:text-white"
        >
          {t(item.key as any)}
        </a>
      )),
    [t]
  );

  const creditText =
    locale === "es"
      ? "Desarrollado por CodeKey Solutions"
      : "Developed by CodeKey Solutions";

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/45">
            {creditText}
          </span>
          <Link
            href={`/${locale}`}
            className="font-display text-lg tracking-tight text-white"
          >
            Black Label Detailing
          </Link>
        </div>
        <nav className="hidden items-center gap-6 md:flex">{navLinks}</nav>
        <div className="flex items-center gap-3">
          <Link
            href={`/${otherLocale}${localizedPath || ""}`}
            className="text-sm text-white/70 transition hover:text-white"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <Button asChild>
            <a href="#contact">{t("book")}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
