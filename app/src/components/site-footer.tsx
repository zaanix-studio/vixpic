import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg" />
              <span className="font-bold text-xl text-white">VixPic</span>
            </div>
            <p className="text-sm">BYOK AI Image Generation. Your keys, your rules, your savings.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/generate" className="hover:text-white">Generate Images</Link></li>
              <li><Link href="/tools" className="hover:text-white">Free Tools</Link></li>
              <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link href="/#pricing" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/styles" className="hover:text-white">Style Guides</Link></li>
              <li><Link href="/providers" className="hover:text-white">AI Providers</Link></li>
              <li><Link href="/use-cases" className="hover:text-white">Use Cases</Link></li>
              <li><Link href="/alternatives" className="hover:text-white">Alternatives</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 VixPic. Built with ❤️ for creators who refuse to overpay.</p>
        </div>
      </div>
    </footer>
  );
}
