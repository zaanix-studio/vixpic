import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crop Image Online Free - No Upload Required | VixPic",
  description: "Crop images online for free with custom aspect ratios and social media presets. No upload needed - everything happens in your browser. Perfect for Instagram, Twitter, YouTube thumbnails and more.",
  keywords: ["crop image online", "free image cropper", "crop photo", "aspect ratio crop", "instagram crop", "crop image for social media", "crop jpg online", "crop png online"],
  openGraph: {
    title: "Free Online Image Cropper - Crop Photos Instantly | VixPic",
    description: "Crop images to any size or aspect ratio. Perfect for social media, profile pictures, and thumbnails. No upload required - 100% private.",
    type: "website",
    url: "https://vixpic.com/tools/crop",
    images: [
      {
        url: "/og-crop.png",
        width: 1200,
        height: 630,
        alt: "VixPic Image Cropper Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Image Cropper | VixPic",
    description: "Crop images instantly with aspect ratio presets. No upload, 100% private.",
  },
  alternates: {
    canonical: "https://vixpic.com/tools/crop",
  },
};

export default function CropLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
