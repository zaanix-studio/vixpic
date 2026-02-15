import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Background Remover - Remove Image Backgrounds Free | VixPic",
  description: "Remove backgrounds from any image instantly using AI. Perfect for product photos, portraits, and more. BYOK pricing: ~$0.005/image with your own API key.",
  keywords: ["background remover", "remove background", "transparent background", "remove image background", "ai background remover", "product photo background"],
  openGraph: {
    title: "AI Background Remover - Remove Image Backgrounds",
    description: "Remove backgrounds from any image instantly using AI. Perfect for product photos, portraits.",
    type: "website",
    url: "https://vixpic.com/tools/background-remover",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Background Remover | VixPic",
    description: "Remove backgrounds from any image instantly using AI. ~$0.005/image with BYOK.",
  },
  alternates: {
    canonical: "https://vixpic.com/tools/background-remover",
  },
};

export default function BackgroundRemoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
