import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Image Resizer - Resize Photos Online | VixPic",
  description: "Resize images to any size with pixel dimensions, percentage scaling, or social media presets. 100% free, no upload needed - everything runs in your browser.",
  keywords: ["image resizer", "resize image online", "photo resizer", "resize photo", "free image resizer", "instagram size", "twitter image size", "facebook cover size"],
  openGraph: {
    title: "Free Image Resizer - Resize Photos Online",
    description: "Resize images to any size with pixel dimensions, percentage scaling, or social media presets. 100% free.",
    type: "website",
    url: "https://vixpic.com/tools/resize",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Resizer | VixPic",
    description: "Resize images to any size with custom dimensions or social media presets. 100% free.",
  },
  alternates: {
    canonical: "https://vixpic.com/tools/resize",
  },
};

export default function ResizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
