"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const t = useTranslations("hero");
  const bullets = t.raw("bullets") as string[];

  return (
    <section id="hero" className="relative overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/assets/videointro.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-200/18 via-transparent to-slate-500/10 mix-blend-screen" />
      <div className="absolute -left-16 top-6 h-64 w-64 rounded-full bg-slate-100/18 blur-3xl" />
      <div className="absolute right-[-10%] top-16 h-72 w-72 rounded-full bg-slate-400/14 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.12),transparent_42%)]" />
      <div className="relative mx-auto grid max-w-screen-xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/35 p-8 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
            {t("eyebrow")}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.45)] md:text-6xl"
          >
            Black Label Detailing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-lg text-white/85"
          >
            {t("subtitle")}
          </motion.p>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="bg-white text-black shadow-lg shadow-slate-300/30 transition hover:-translate-y-0.5 hover:shadow-slate-200/60"
            >
              <a href="#contact">{t("ctaPrimary")}</a>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="border border-white/40 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/20"
            >
              <a href="#contact">{t("ctaSecondary")}</a>
            </Button>
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            {bullets.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden h-full items-center justify-center lg:flex">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              Luxury Auto Detailing
            </p>
            <p className="mt-3 font-display text-4xl font-semibold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              Black Label
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
