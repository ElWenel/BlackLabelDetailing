"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/Button";

const socialBlocks = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    bg: "from-[#128C7E] to-[#25D366]",
    icon: "/assets/redes/whatsapp_logo.png",
  },
  {
    id: "instagram",
    label: "Instagram",
    bg: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    icon: "/assets/redes/Instagram_logo.png",
  },
  {
    id: "facebook",
    label: "Facebook",
    bg: "from-[#0b5be0] to-[#0a47b1]",
    icon: "/assets/redes/facebook_logo.png",
  },
];

export function Contact() {
  const t = useTranslations("contact");
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMessage(t("form.success"));
  };

  return (
    <section id="contact" className="mx-auto max-w-screen-xl px-6 py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 overflow-hidden rounded-3xl border border-white/14 bg-gradient-to-br from-white/10 via-[#0b0c10] to-black p-8 shadow-[0_18px_70px_rgba(0,0,0,0.26)]">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="flex flex-wrap gap-3 text-sm text-white/80">
          <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1">
            {t("whatsapp")}
          </span>
          <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1">
            {t("call")}
          </span>
          <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1">
            {t("hours")}: {t("hoursValue")}
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          {socialBlocks.map((social) => (
            <a
              key={social.id}
              href="#"
              className={`flex items-center gap-2 rounded-full bg-gradient-to-r ${social.bg} px-4 py-2 text-white transition hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black shadow-none`}
            >
              <span className="relative inline-block h-6 w-6 overflow-hidden rounded-md bg-transparent">
                <Image
                  src={social.icon}
                  alt={social.label}
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </span>
              <span className="text-sm font-semibold text-white drop-shadow-sm">
                {social.label}
              </span>
            </a>
          ))}
        </div>

        <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
          <label className="md:col-span-1">
            <span className="text-sm text-white/60">{t("form.name")}</span>
            <input
              required
              className="mt-1 w-full rounded-xl border border-white/20 bg-white/12 px-3 py-2 text-sm text-white focus:border-white/45 focus:outline-none"
              type="text"
              name="name"
            />
          </label>
          <label className="md:col-span-1">
            <span className="text-sm text-white/60">{t("form.email")}</span>
            <input
              required
              className="mt-1 w-full rounded-xl border border-white/20 bg-white/12 px-3 py-2 text-sm text-white focus:border-white/45 focus:outline-none"
              type="email"
              name="email"
            />
          </label>
          <label className="md:col-span-1">
            <span className="text-sm text-white/60">{t("form.phone")}</span>
            <input
              className="mt-1 w-full rounded-xl border border-white/20 bg-white/12 px-3 py-2 text-sm text-white focus:border-white/45 focus:outline-none"
              type="tel"
              name="phone"
            />
          </label>
          <label className="md:col-span-1">
            <span className="text-sm text-white/60">{t("form.service")}</span>
            <input
              className="mt-1 w-full rounded-xl border border-white/20 bg-white/12 px-3 py-2 text-sm text-white focus:border-white/45 focus:outline-none"
              type="text"
              name="service"
            />
          </label>
          <label className="md:col-span-2">
            <span className="text-sm text-white/60">{t("form.message")}</span>
            <textarea
              required
              rows={4}
              className="mt-1 w-full rounded-xl border border-white/20 bg-white/12 px-3 py-2 text-sm text-white focus:border-white/45 focus:outline-none"
              name="message"
            />
          </label>
          <div className="md:col-span-2">
            <Button type="submit">{t("form.submit")}</Button>
          </div>
          {message ? (
            <p className="md:col-span-2 text-sm text-emerald-400">{message}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
