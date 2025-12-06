"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeader } from "./SectionHeader";

export function About() {
  const t = useTranslations("about");
  const stats = t.raw("stats") as {
    label: string;
    value: string;
  }[];

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6" id="about">
      <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-black via-[#0e0d0c] to-[#0b0b0b] p-10 shadow-[0_20px_100px_rgba(0,0,0,0.45)] sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(210,216,224,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(210,216,224,0.08),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_38%,rgba(255,255,255,0)_100%)]" />
        <div className="relative grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="flex max-w-3xl flex-col gap-7">
            <SectionHeader title={t("title")} subtitle={t("body")} />
            <p className="text-white/75 leading-relaxed">{t("mission")}</p>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:gap-6">
            {stats.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/6 via-white/2 to-black/60 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(210,216,224,0.12),transparent_45%)]" />
                <span className="relative font-display text-2xl text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
                  {item.value}
                </span>
                <span className="relative text-xs uppercase tracking-[0.2em] text-white/65">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
