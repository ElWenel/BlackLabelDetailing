import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Label Auto Detailing",
  description: "Premium auto detailing experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
