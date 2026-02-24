import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rotate Image Online Free - Flip & Mirror Photos | VixPic",
  description: "Rotate images 90°, 180°, or any custom angle. Flip horizontally or vertically. Free online tool - no upload required, works entirely in your browser.",
  keywords: ["rotate image online", "flip image", "mirror image", "rotate photo", "rotate jpg", "rotate png", "flip photo horizontally", "rotate image 90 degrees"],
  openGraph: {
    title: "Free Online Image Rotator - Rotate & Flip Photos | VixPic",
    description: "Rotate images to any angle and flip them horizontally or vertically. No upload required - 100% private and free.",
    type: "website",
    url: "https://vixpic.com/tools/rotate",
    images: [
      {
        url: "/og-rotate.png",
        width: 1200,
        height: 630,
        alt: "VixPic Image Rotate Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Image Rotator | VixPic",
    description: "Rotate and flip images instantly. No upload, 100% private.",
  },
  alternates: {
    canonical: "https://vixpic.com/tools/rotate",
  },
};

export default function RotateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
