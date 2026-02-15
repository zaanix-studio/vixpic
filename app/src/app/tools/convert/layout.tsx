import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Image Format Converter - PNG to JPG, WebP Online | VixPic",
  description: "Convert images between PNG, JPG, and WebP formats instantly. 100% free, no upload needed - everything runs in your browser. Adjust quality settings.",
  keywords: ["image converter", "png to jpg", "jpg to png", "webp converter", "convert image format", "free image converter", "online image converter"],
  openGraph: {
    title: "Free Image Format Converter - PNG, JPG, WebP",
    description: "Convert images between PNG, JPG, and WebP formats instantly. 100% free, no upload needed.",
    type: "website",
    url: "https://vixpic.com/tools/convert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Converter | VixPic",
    description: "Convert images between PNG, JPG, and WebP formats instantly. 100% free, no upload needed.",
  },
  alternates: {
    canonical: "https://vixpic.com/tools/convert",
  },
};

export default function ConvertLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
