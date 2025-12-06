"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { pricePlanIds } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  const t = useTranslations("pricing");

  return (
    <section
      id="pricing"
      className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {pricePlanIds.map((id, index) => {
          const features = t.raw(`cards.${id}.features`) as string[];
          const isFeatured = id === "luxury";
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className={`group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-white/7 via-white/3 to-black/78 p-7 shadow-[0_16px_70px_rgba(0,0,0,0.35)] backdrop-blur ${
                isFeatured ? "ring-1 ring-slate-200/30" : ""
              }`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_42%)]" />
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">
                    {t("subtitle")}
                  </p>
                  <h3 className="font-display text-2xl text-white sm:text-3xl">
                    {t(`cards.${id}.label`)}
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-2 text-[12px] font-semibold leading-[1.1] text-white/80 whitespace-nowrap">
                  {t(`cards.${id}.duration`) || ""}
                </div>
              </div>
              {isFeatured && (
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
                  ★ Premium Pick
                </span>
              )}
              <div className="text-4xl font-semibold text-white sm:text-4xl">
                {t(`cards.${id}.price`)}
              </div>
              <p className="text-sm text-white/70">
                {t(`cards.${id}.frequency`)}
              </p>
              <ul className="flex flex-col gap-2 text-sm text-white/80">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-100" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-auto w-full bg-white text-black shadow-lg shadow-slate-300/30 transition hover:-translate-y-0.5 hover:shadow-slate-200/60"
                asChild
              >
                <a href="#contact">
                  {t("cta", { defaultMessage: "Book now" })}
                </a>
              </Button>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/6" />
              <div className="pointer-events-none absolute inset-x-6 bottom-4 h-16 rounded-full bg-gradient-to-b from-white/10 via-white/6 to-transparent blur-2xl" />
            </motion.div>
          );
        })}
      </div>
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_50px_rgba(0,0,0,0.25)]">
        <h4 className="font-display text-lg text-white">{t("addons.title")}</h4>
        <div className="mt-3 flex flex-wrap gap-2 text-sm text-white/70">
          {(t.raw("addons.items") as string[]).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
