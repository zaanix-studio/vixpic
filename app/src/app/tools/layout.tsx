import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Image Tools - Compress, Convert, Resize, Upscale | VixPic",
  description: "Professional image editing tools powered by AI. Compress, convert, resize, remove backgrounds, and upscale images. Free tools + BYOK AI for maximum savings.",
  keywords: ["image tools", "ai image tools", "free image editing", "compress image", "convert image", "resize image", "remove background", "upscale image"],
  openGraph: {
    title: "Free AI Image Tools | VixPic",
    description: "Professional image editing tools powered by AI. Compress, convert, resize, remove backgrounds, and upscale images.",
    type: "website",
    url: "https://vixpic.com/tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Image Tools | VixPic",
    description: "Professional image editing tools powered by AI. Free tools + BYOK AI pricing.",
  },
  alternates: {
    canonical: "https://vixpic.com/tools",
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
