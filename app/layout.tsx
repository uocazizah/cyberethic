import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CreditPopup } from "@/components/CreditPopup";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyber Ethic — Panduan Etika dan Keamanan Komunikasi Digital",
  description:
    "Panduan praktis tentang etika dan keamanan komunikasi digital untuk pelajar dan umum.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <CreditPopup />
      </body>
    </html>
  );
}
