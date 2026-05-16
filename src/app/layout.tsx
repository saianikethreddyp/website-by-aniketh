import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AXIOM — Digital Strategy & Growth Studio",
  description:
    "A research-driven digital growth studio for ambitious founders. We engineer growth through deep understanding of users, markets, and systems.",
  keywords: [
    "product strategy",
    "growth systems",
    "SaaS development",
    "startup growth",
    "digital product studio",
    "brand positioning",
    "performance systems",
    "AI automation",
  ],
  openGraph: {
    title: "AXIOM — Digital Strategy & Growth Studio",
    description: "Growth is engineered through understanding.",
    type: "website",
    siteName: "AXIOM",
  },
  twitter: {
    card: "summary_large_image",
    title: "AXIOM — Digital Strategy & Growth Studio",
    description: "Growth is engineered through understanding.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
