import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Filters Online Free - Instagram Style Effects | VixPic",
  description: "Apply beautiful photo filters instantly. Sepia, grayscale, vintage, warm, cool and more. Free online tool - no upload required, works in your browser.",
  keywords: ["photo filters online", "instagram filters", "free photo filters", "sepia filter", "grayscale filter", "vintage filter", "photo effects", "image filters free"],
  openGraph: {
    title: "Free Online Photo Filters - Beautiful Effects Instantly | VixPic",
    description: "Apply Instagram-style filters to your photos. Sepia, vintage, grayscale and more. No upload required - 100% private and free.",
    type: "website",
    url: "https://vixpic.com/tools/filters",
    images: [
      {
        url: "/og-filters.png",
        width: 1200,
        height: 630,
        alt: "VixPic Photo Filters Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Photo Filters | VixPic",
    description: "Apply beautiful filters to photos instantly. No upload, 100% private.",
  },
  alternates: {
    canonical: "https://vixpic.com/tools/filters",
  },
};

export default function FiltersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
