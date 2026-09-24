import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const metadata: Metadata = {
  title: { default: "Nikoo Asadnejad | Senior Software Engineer", template: "%s | Nikoo Asadnejad" },
  description: "Portfolio of Nikoo Asadnejad, a Senior Software Engineer specializing in .NET, distributed systems, software architecture, cloud-native platforms, and AI engineering.",
  icons: { icon: "/favicon.svg" },
  alternates: siteUrl ? { canonical: `${siteUrl}/` } : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
