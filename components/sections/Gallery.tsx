"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { galleryIds } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

const galleryMedia: Record<
  (typeof galleryIds)[number],
  { before: string; after: string }
> = {
  beforeAfter1: {
    before: "/assets/antes_despues/revival_gloss_antes.jpg",
    after: "/assets/antes_despues/revival_gloss_despues.jpg",
  },
  beforeAfter2: {
    before: "/assets/antes_despues/interior_reset_antes.jpg",
    after: "/assets/antes_despues/interior_reset_despues.jpg",
  },
  beforeAfter3: {
    before: "/assets/antes_despues/engine_clarity_antes.jpg",
    after: "/assets/antes_despues/engine_clarity_despues.jpg",
  },
  beforeAfter4: {
    before: "/assets/antes_despues/wheel_perfection_antes.jpg",
    after: "/assets/antes_despues/wheel_perfection_despues.jpg",
  },
  beforeAfter5: {
    before: "/assets/antes_despues/headlight_clarity_antes.jpg",
    after: "/assets/antes_despues/headlight_clarity_despues.jpg",
  },
  beforeAfter6: {
    before: "/assets/antes_despues/ceramic_finish_antes.jpg",
    after: "/assets/antes_despues/ceramic_finish_despues.jpg",
  },
};

export function Gallery() {
  const t = useTranslations("gallery");
  const [hoveredId, setHoveredId] = useState<
    (typeof galleryIds)[number] | null
  >(null);
  const [splits, setSplits] = useState<Record<string, number>>(() =>
    Object.fromEntries(galleryIds.map((id) => [id, 62]))
  );
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const dragFrame = useRef<number | null>(null);

  const updateSplitFromEvent = (
    id: string,
    clientX: number,
    bounds?: DOMRect
  ) => {
    const rect = bounds || cardRefs.current[id]?.getBoundingClientRect();
    if (!rect) return;
    const relative = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.min(90, Math.max(10, relative));

    if (dragFrame.current) cancelAnimationFrame(dragFrame.current);
    dragFrame.current = requestAnimationFrame(() => {
      setSplits((prev) => ({ ...prev, [id]: clamped }));
      dragFrame.current = null;
    });
  };

  return (
    <section id="gallery" className="mx-auto max-w-screen-xl px-6 py-16">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {galleryIds.map((id, index) => {
          const media = galleryMedia[id];
          const isActive = hoveredId === id;
          const split = splits[id] ?? 62;

          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/5 p-4 cursor-pointer select-none touch-pan-y"
              ref={(el) => {
                cardRefs.current[id] = el;
              }}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => {
                setHoveredId(null);
                if (!draggingId) setSplits((prev) => ({ ...prev, [id]: 62 }));
              }}
              onFocus={() => setHoveredId(id)}
              onBlur={() => setHoveredId(null)}
              onPointerDown={(e) => {
                setDraggingId(id);
                updateSplitFromEvent(id, e.clientX);
                e.currentTarget.setPointerCapture(e.pointerId);
              }}
              onPointerMove={(e) => {
                if (draggingId === id) {
                  updateSplitFromEvent(id, e.clientX);
                }
              }}
              onPointerUp={(e) => {
                if (draggingId === id) {
                  setDraggingId(null);
                  e.currentTarget.releasePointerCapture(e.pointerId);
                }
              }}
              onPointerCancel={(e) => {
                if (draggingId === id) {
                  setDraggingId(null);
                  e.currentTarget.releasePointerCapture(e.pointerId);
                }
              }}
            >
              <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-900/60">
                <Image
                  src={media.after}
                  alt={`${t(`items.${id}`)} after`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority={index < 2}
                />

                <div
                  className={`pointer-events-none absolute inset-0 overflow-hidden rounded-xl ${
                    draggingId === id
                      ? ""
                      : "transition-[width] duration-150 ease-out"
                  }`}
                  style={{ width: `${isActive && !draggingId ? 18 : split}%` }}
                >
                  <Image
                    src={media.before}
                    alt={`${t(`items.${id}`)} before`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    priority={index < 2}
                  />
                  <div className="absolute inset-y-0 right-0 w-[2px] bg-white/70 shadow-[0_0_16px_rgba(0,0,0,0.45)]" />
                  <div
                    className="absolute right-[-12px] top-1/2 h-8 w-8 -translate-y-1/2 rounded-full border border-white/25 bg-black/60 shadow-lg backdrop-blur-sm"
                    style={{ touchAction: "none" }}
                  >
                    <div className="absolute left-1/2 top-1/2 h-0.5 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/85" />
                  </div>
                  <div className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
                    {t("beforeLabel")}
                  </div>
                </div>

                <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/65 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
                  {t("afterLabel")}
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 text-sm text-white/90">
                  {t(`items.${id}`)}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm text-white/80">
                <span>{t(`items.${id}`)}</span>
                <span className="text-xs text-white/50">{t("hoverHint")}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
