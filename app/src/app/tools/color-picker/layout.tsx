import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Picker from Image - Free Online Tool | VixPic",
  description: "Extract colors from any image instantly. Get HEX, RGB, and HSL values with one click. 100% free, no sign-up required. Works in your browser.",
  keywords: ["color picker", "image color picker", "extract color from image", "hex color picker", "rgb color", "eyedropper tool", "free color picker"],
  openGraph: {
    title: "Free Image Color Picker - VixPic",
    description: "Click anywhere on an image to extract colors. Get HEX, RGB, and HSL values instantly. 100% free.",
    type: "website",
  },
};

export default function ColorPickerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
