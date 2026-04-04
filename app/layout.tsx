import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "AfriLens — Scan the Culture. Own the Craft.",
  description:
    "Transforming Kuriftu African Village from a passive hotel stay into an interactive, zero-inventory revenue engine. AI-powered cultural discovery meets artisan commerce.",
  keywords: [
    "AfriLens",
    "Kuriftu",
    "African Village",
    "AI",
    "cultural discovery",
    "artisan commerce",
    "hackathon",
  ],
  openGraph: {
    title: "AfriLens — Scan the Culture. Own the Craft.",
    description:
      "AI-powered cultural discovery meets artisan commerce at Kuriftu African Village.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
