import "./locale.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import { manrope, space } from "@/lib/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Black Label Auto Detailing",
  description: "Luxury mobile and studio auto detailing",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html
      lang={params.locale}
      className={`${space.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen bg-black text-white font-body">
        <NextIntlClientProvider
          messages={messages}
          locale={params.locale}
          timeZone="America/New_York"
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
