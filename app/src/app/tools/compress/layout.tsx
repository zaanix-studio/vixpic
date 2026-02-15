import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Image Compressor - Reduce File Size Online | VixPic",
  description: "Compress images up to 90% smaller without losing quality. 100% free, no upload needed - everything runs in your browser. Works with PNG, JPG, WEBP.",
  keywords: ["image compressor", "compress image online", "reduce image size", "image compression", "free image compressor", "online image compressor"],
  openGraph: {
    title: "Free Image Compressor - Reduce File Size Online",
    description: "Compress images up to 90% smaller without losing quality. 100% free, no upload needed.",
    type: "website",
    url: "https://vixpic.com/tools/compress",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Compressor | VixPic",
    description: "Compress images up to 90% smaller without losing quality. 100% free, no upload needed.",
  },
  alternates: {
    canonical: "https://vixpic.com/tools/compress",
  },
};

export default function CompressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
