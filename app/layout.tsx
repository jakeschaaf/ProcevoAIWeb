import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Procevo AI",
  description: "AI-powered automation for mid-market companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
