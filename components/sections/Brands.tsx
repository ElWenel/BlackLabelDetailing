"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionHeader } from "./SectionHeader";

export function Brands() {
  const t = useTranslations("brands");
  const logos = [
    { src: "/assets/marcas/marca1.png", alt: "Meguiar's" },
    { src: "/assets/marcas/marca2.png", alt: "Chemical Guys" },
    { src: "/assets/marcas/marca3.png", alt: "Griot's Garage" },
    { src: "/assets/marcas/marca4.png", alt: "Turtle Wax" },
    { src: "/assets/marcas/marca5.png", alt: "Adams Polishes" },
    { src: "/assets/marcas/marca6.png", alt: "Auto Finesse" },
    { src: "/assets/marcas/marca7.png", alt: "Shine Armor" },
  ];

  return (
    <section id="brands" className="mx-auto max-w-screen-xl px-6 py-16">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/5 bg-black/20 px-2 py-4">
        <motion.div
          className="flex min-w-full items-center gap-12 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 14 }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <Image
              key={`${logo.src}-${idx}`}
              src={logo.src}
              alt={logo.alt}
              width={220}
              height={120}
              className="h-20 w-auto object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
              priority={idx < logos.length}
            />
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/70 to-transparent" />
      </div>
    </section>
  );
}
