import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "CGC University, Mohali | Best University in North India",
  description:
    "CGC University, Mohali (formerly CGC Jhanjeri) – One of the best universities in North India, offering high-quality education across engineering, management, pharmacy, law, and more. UGC recognized.",
  keywords:
    "CGC University, Mohali, Punjab, CGC Jhanjeri, best university North India, engineering college Punjab, UGC recognized university",
  authors: [{ name: "CGC University" }],
  openGraph: {
    title: "CGC University, Mohali | Best University in North India",
    description:
      "Experience world-class education at CGC University, Mohali. UGC recognized, established 2025.",
    url: "https://www.cgcuniversity.in",
    siteName: "CGC University",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
