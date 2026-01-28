import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Procevo AI | Intelligent Automation for Mid-Market Companies",
  description: "We build custom AI and automation systems that eliminate repetitive work, connect disconnected systems, and free your team to focus on growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${newsreader.variable}`}>
      <body className="font-sans antialiased bg-slate-950 text-slate-100">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
