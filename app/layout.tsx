import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gurusthetics.com"),
  title: {
    default: "Gurusthetics | Online Fitness Coaching & Transformation",
    template: "%s | Gurusthetics",
  },
  description:
    "Gurusthetics offers expert online fitness coaching programs. Train from home or gym with structured plans, real results, and real transformations.",
  openGraph: {
    type: "website",
    siteName: "Gurusthetics",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <noscript>
          <style>{`.opacity-0 { opacity: 1 !important; }`}</style>
        </noscript>
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
