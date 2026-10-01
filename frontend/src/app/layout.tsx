import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { profile } from "@/content/portfolio";
import { absoluteUrl, seoDescription, seoKeywords, siteUrl } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Nikoo Asadnejad | Software Engineer & Backend Developer", template: "%s | Nikoo Asadnejad" },
  description: seoDescription,
  keywords: seoKeywords,
  authors: [{ name: profile.name, url: absoluteUrl("/") }],
  creator: profile.name,
  publisher: profile.name,
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: absoluteUrl("/") },
  verification: { google: "PkcQPOiUeQGno3Kruto9m23YQtLQf9RMAEOC4y066oM" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    siteName: "Nikoo Asadnejad",
    title: "Nikoo Asadnejad | Software Engineer & Backend Developer",
    description: seoDescription,
    images: [{ url: profile.portrait, width: 400, height: 400, alt: "Nikoo Asadnejad, Senior Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikoo Asadnejad | Software Engineer & Backend Developer",
    description: seoDescription,
    images: [profile.portrait],
  },
  robots: { index: true, follow: true },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: absoluteUrl("/"),
    image: absoluteUrl(profile.portrait),
    jobTitle: "Senior Software Engineer",
    description: seoDescription,
    knowsAbout: [
      "Software engineering",
      "Backend development",
      "Software consulting",
      "C#",
      ".NET",
      "Distributed systems",
      "Software architecture",
      "Cloud-native platforms",
    ],
    sameAs: [profile.github, profile.linkedin, profile.medium],
    address: { "@type": "PostalAddress", addressLocality: "Tehran", addressCountry: "IR" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nikoo Asadnejad | Software Engineer & Backend Developer",
    url: absoluteUrl("/"),
    description: seoDescription,
    inLanguage: "en",
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
