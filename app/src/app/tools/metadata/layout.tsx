import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Metadata Viewer & Remover - EXIF Data Tool | VixPic",
  description: "View and remove EXIF metadata from photos. See camera info, GPS location, date taken, and more. Strip metadata for privacy. Free online tool.",
  keywords: ["exif viewer", "metadata viewer", "remove exif data", "image metadata", "photo metadata", "strip exif", "exif remover", "view image info"],
  openGraph: {
    title: "Free EXIF Metadata Viewer & Remover | VixPic",
    description: "View image metadata including camera, GPS, and date info. Remove EXIF data for privacy. No upload required.",
    type: "website",
    url: "https://vixpic.com/tools/metadata",
    images: [
      {
        url: "/og-metadata.png",
        width: 1200,
        height: 630,
        alt: "VixPic Metadata Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free EXIF Metadata Viewer | VixPic",
    description: "View and remove image metadata instantly. 100% private.",
  },
  alternates: {
    canonical: "https://vixpic.com/tools/metadata",
  },
};

export default function MetadataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
