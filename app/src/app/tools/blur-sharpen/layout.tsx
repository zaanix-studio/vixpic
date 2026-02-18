import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blur & Sharpen Image Online - Free Tool | VixPic",
  description: "Blur or sharpen images online for free. Add blur effects or enhance image clarity. 100% client-side processing - your images never leave your device.",
  keywords: [
    "blur image online",
    "sharpen image free",
    "image blur tool",
    "photo sharpening",
    "blur effect online",
    "enhance image clarity",
    "unsharp mask tool",
    "gaussian blur online",
    "free blur tool",
    "image enhancement"
  ],
  openGraph: {
    title: "Blur & Sharpen Image Online - Free | VixPic",
    description: "Blur or sharpen images online for free. 100% private - your images never leave your device.",
    type: "website",
  },
};

export default function BlurSharpenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
