"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { faqIds } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function FAQ() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<string | null>(faqIds[0]);

  return (
    <section id="faq" className="mx-auto max-w-screen-xl px-6 py-16">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-8 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        {faqIds.map((id) => {
          const isOpen = open === id;
          return (
            <div key={id} className="group">
              <button
                onClick={() => setOpen(isOpen ? null : id)}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-white"
              >
                <span className="text-sm font-semibold">
                  {t(`items.${id}.q`)}
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isOpen ? "rotate-180 text-white" : "text-white/60"
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-4 text-sm text-white/70"
                  >
                    {t(`items.${id}.a`)}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
