import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Watermark to Image Online - Free Tool | VixPic",
  description: "Add text watermarks to images online for free. Customize position, size, color, and opacity. Tile patterns for maximum protection. 100% private - your images never leave your device.",
  keywords: [
    "add watermark online",
    "image watermark tool",
    "free watermark maker",
    "photo watermark",
    "copyright watermark",
    "text watermark",
    "watermark generator",
    "protect images",
    "batch watermark",
    "watermark photos free"
  ],
  openGraph: {
    title: "Add Watermark to Image Online - Free | VixPic",
    description: "Add custom text watermarks to protect your images. 100% private - your images never leave your device.",
    type: "website",
  },
};

export default function WatermarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
