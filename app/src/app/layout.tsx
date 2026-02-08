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
  title: "VixPic - BYOK AI Image Generation | Pay Per Use, No Subscriptions",
  description: "Create stunning AI images with DALL-E, Stable Diffusion, and FLUX using your own API keys. No subscriptions, no rate limits. Pay only for what you create.",
  keywords: ["AI image generation", "BYOK", "DALL-E", "Stable Diffusion", "FLUX", "API", "no subscription"],
  openGraph: {
    title: "VixPic - Professional AI Images. Pay Per Use.",
    description: "Use your own API keys. No subscriptions. No rate limits. 80% cheaper than Midjourney.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VixPic - BYOK AI Image Generation",
    description: "Use your own API keys. No subscriptions. No rate limits. 80% cheaper than Midjourney.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
