import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
