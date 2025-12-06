"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { serviceIds } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

const iconMap: Record<string, JSX.Element> = {
  exterior: (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-slate-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 16h16M6 12h12M8 8h8" strokeLinecap="round" />
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="2"
        ry="2"
        className="opacity-60"
      />
    </svg>
  ),
  interior: (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-slate-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M7 5h10l3 6-3 8H7l-3-8 3-6Z" className="opacity-70" />
      <path d="M9 10h6" strokeLinecap="round" />
      <path d="M10 14h4" strokeLinecap="round" />
    </svg>
  ),
  engine: (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-slate-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="4" y="7" width="16" height="10" rx="2" className="opacity-70" />
      <path d="M9 7V5m6 2V5m-9 5h12m-9 4h6" strokeLinecap="round" />
    </svg>
  ),
  paint: (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-slate-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M7 14c0-3.5 2-8 5-8s5 4.5 5 8-2 5-5 5-5-1.5-5-5Z"
        className="opacity-70"
      />
      <path d="M7 10h10" strokeLinecap="round" />
    </svg>
  ),
  ceramic: (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-slate-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="5" y="6" width="14" height="12" rx="3" className="opacity-70" />
      <path
        d="M9 10.5 11 13l4-4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  headlight: (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-slate-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M5 8c0-1.1.9-2 2-2h5c3.5 0 6 2.5 6 6s-2.5 6-6 6H7c-1.1 0-2-.9-2-2V8Z"
        className="opacity-70"
      />
      <path d="M5 10h-1m1 3h-1m1 3h-1" strokeLinecap="round" />
    </svg>
  ),
  full: (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-slate-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="4" y="5" width="16" height="14" rx="2" className="opacity-70" />
      <path d="M4 9h16m-9 0v-4m-3 9h8" strokeLinecap="round" />
    </svg>
  ),
};

export function Services() {
  const t = useTranslations("services");

  return (
    <section
      id="services"
      className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6"
    >
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {serviceIds.map((id, index) => {
          const features = t.raw(`cards.${id}.features`) as string[];
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 via-white/2 to-black/70 p-6 shadow-[0_14px_60px_rgba(0,0,0,0.35)] backdrop-blur"
              data-animate
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(210,216,224,0.08),transparent_45%)]" />
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-white">
                  {t(`cards.${id}.title`)}
                </h3>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/30 bg-white/5 shadow-inner shadow-slate-400/20">
                  {iconMap[id] ?? <span className="text-white/70">•</span>}
                </div>
              </div>
              <p className="text-sm text-white/70">
                {t(`cards.${id}.description`)}
              </p>
              <ul className="flex flex-col gap-2 text-sm text-white/80">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
