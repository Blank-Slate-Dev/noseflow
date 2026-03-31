// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-config";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | NoseFlow Australia",
  },
  description: siteConfig.description,
  keywords: [
    "nasal dilator",
    "nasal dilator Australia",
    "nose breathing",
    "nasal breathing",
    "snoring",
    "snoring aid",
    "snoring aid Australia",
    "sleep optimisation",
    "breathing",
    "airflow",
    "silicone nasal dilator",
    "medical grade nasal dilator",
    "drug-free snoring relief",
    "reusable nasal dilator",
    "mouth breathing solution",
    "athletic breathing",
    "nasal valve dilator",
    "nose dilator for sleep",
    "anti snoring device Australia",
    "nasal congestion relief",
  ],
  authors: [{ name: "NoseFlow", url: siteConfig.url }],
  creator: "NoseFlow",
  publisher: "NoseFlow",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: "NoseFlow — Medical-Grade Silicone Nasal Dilators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/icon.png" }],
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "AU",
    "geo.country": "AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>
        <JsonLd />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
