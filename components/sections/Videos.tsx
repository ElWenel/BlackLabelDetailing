"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { videoIds } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

const videoSources: Record<(typeof videoIds)[number], string> = {
  v1: "/assets/motion_proof/studio_finish_walkthrough.mp4",
  v2: "/assets/motion_proof/ceramic_coating_water_behavior.mp4",
  v3: "/assets/motion_proof/interior_detox_process.mp4",
};

export function Videos() {
  const t = useTranslations("videos");

  return (
    <section id="videos" className="mx-auto max-w-screen-xl px-6 py-16">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {videoIds.map((id, idx) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="card-glow overflow-hidden"
          >
            <div className="relative aspect-video bg-gray-900/70">
              <video
                className="h-full w-full object-cover"
                src={videoSources[id]}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                preload="metadata"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-3 text-sm text-white/90">
                {t(`items.${id}`)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
