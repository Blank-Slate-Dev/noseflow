// src/app/layout.tsx
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "NoseFlow — Breathe Better. Sleep Better. Perform Better.",
  description:
    "Medical-grade silicone nasal dilators designed to improve airflow, reduce snoring, and optimise breathing for sleep and performance.",
  keywords: [
    "nasal dilator",
    "nose breathing",
    "nasal breathing",
    "snoring",
    "sleep optimisation",
    "breathing",
    "airflow",
    "silicone nasal dilator",
  ],
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
