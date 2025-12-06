"use client";

import { Car, Sparkles, Stars } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { specIds } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

const icons = [Car, Sparkles, Stars, Car, Sparkles];

export function Specs() {
  const t = useTranslations("specs");

  return (
    <section id="specs" className="mx-auto max-w-screen-xl px-6 py-16">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {specIds.map((id, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="card-glow flex items-center gap-3 p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-white">
                {t(`items.${id}`)}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
