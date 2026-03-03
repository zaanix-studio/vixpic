import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="py-12 px-4 bg-inverted text-inverted-muted">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand to-info rounded-lg" />
              <span className="font-bold text-xl text-inverted-foreground">VixPic</span>
            </div>
            <p className="text-sm">BYOK AI Image Generation. Your keys, your rules, your savings.</p>
          </div>
          <div>
            <h4 className="font-semibold text-inverted-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/generate" className="hover:text-inverted-foreground">Generate Images</Link></li>
              <li><Link href="/tools" className="hover:text-inverted-foreground">Free Tools</Link></li>
              <li><Link href="/gallery" className="hover:text-inverted-foreground">Gallery</Link></li>
              <li><Link href="/#pricing" className="hover:text-inverted-foreground">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-inverted-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-inverted-foreground">Blog</Link></li>
              <li><Link href="/styles" className="hover:text-inverted-foreground">Style Guides</Link></li>
              <li><Link href="/providers" className="hover:text-inverted-foreground">AI Providers</Link></li>
              <li><Link href="/use-cases" className="hover:text-inverted-foreground">Use Cases</Link></li>
              <li><Link href="/alternatives" className="hover:text-inverted-foreground">Alternatives</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-inverted-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-inverted-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-inverted-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/10 pt-8 text-center text-sm">
          <p>&copy; 2026 VixPic. Built with ❤️ for creators who refuse to overpay.</p>
        </div>
      </div>
    </footer>
  );
}
