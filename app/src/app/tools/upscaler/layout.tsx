import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Image Upscaler - Enhance Resolution 4x | VixPic",
  description: "Upscale images up to 4x resolution with AI. Enhance photos, preserve details, and fix low-resolution images. BYOK pricing: ~$0.01/image with your own API key.",
  keywords: ["image upscaler", "upscale image", "ai upscaler", "enhance image resolution", "increase image size", "photo enhancer", "4x upscale"],
  openGraph: {
    title: "AI Image Upscaler - Enhance Resolution 4x",
    description: "Upscale images up to 4x resolution with AI. Enhance photos and preserve details.",
    type: "website",
    url: "https://vixpic.com/tools/upscaler",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Image Upscaler | VixPic",
    description: "Upscale images up to 4x resolution with AI. ~$0.01/image with BYOK.",
  },
  alternates: {
    canonical: "https://vixpic.com/tools/upscaler",
  },
};

export default function UpscalerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
