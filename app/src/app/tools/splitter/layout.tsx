import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Splitter - Split Photos into Grid Tiles | VixPic",
  description: "Split images into grid tiles for Instagram carousel posts. Create 3x3, 2x2, or custom grids. Free online tool - no upload required.",
  keywords: ["image splitter", "split photo into grid", "instagram grid maker", "photo grid splitter", "image grid cutter", "split image into tiles", "instagram carousel maker"],
  openGraph: {
    title: "Free Image Splitter - Create Photo Grids | VixPic",
    description: "Split images into tiles for Instagram grids and carousel posts. No upload required - 100% private and free.",
    type: "website",
    url: "https://vixpic.com/tools/splitter",
    images: [
      {
        url: "/og-splitter.png",
        width: 1200,
        height: 630,
        alt: "VixPic Image Splitter Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Splitter | VixPic",
    description: "Split images into grid tiles instantly. Perfect for Instagram.",
  },
  alternates: {
    canonical: "https://vixpic.com/tools/splitter",
  },
};

export default function SplitterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
