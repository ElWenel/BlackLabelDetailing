"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { reviewIds } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function Reviews() {
  const t = useTranslations("reviews");

  return (
    <section id="reviews" className="mx-auto max-w-screen-xl px-6 py-16">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 py-6">
          {reviewIds.map((id, idx) => {
            const item = t.raw(`items.${id}`) as any;
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="card-glow w-80 flex-shrink-0 snap-center p-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-xs uppercase tracking-wide text-white/50">
                      {item.car}
                    </p>
                  </div>
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <p className="mt-3 text-sm text-white/80">{item.quote}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
