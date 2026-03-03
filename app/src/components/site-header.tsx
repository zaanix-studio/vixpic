"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/tools", label: "Free Tools" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/blog", label: "Blog" },
  { href: "/#pricing", label: "Pricing" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg" />
          <span className="font-bold text-xl">VixPic</span>
        </Link>
        <div className="flex items-center gap-4">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/#pricing"
                ? false
                : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={
                  isActive
                    ? "text-purple-600 font-medium hidden sm:block"
                    : "text-gray-600 hover:text-gray-900 hidden sm:block"
                }
              >
                {label}
              </Link>
            );
          })}
          <Link href="/generate">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
