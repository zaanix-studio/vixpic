import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function APIKeysSecurityGuidePost() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg" />
            <span className="font-bold text-xl">VixPic</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">← Back to Blog</Link>
            <Link href="/generate"><Button>Try VixPic</Button></Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
              Guide
            </span>
            <span className="text-sm text-gray-500">4 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Keeping Your API Keys Safe: A Non-Technical Guide
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Everything you need to know about API key security, explained simply. No developer background required.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-b py-4">
            <span>February 24, 2026</span>
            <span>•</span>
            <span>By VixPic Team</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl">
            Using BYOK (Bring Your Own Key) tools means handling API keys — those long strings 
            of letters and numbers that give you access to AI services. If you're new to this, 
            you might wonder: <strong>is it safe?</strong>
          </p>

          <p>
            The short answer: yes, if you follow a few simple rules. This guide covers everything 
            you need to know — no technical background required.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">What Is an API Key, Really?</h2>
          
          <p>
            Think of an API key like a password that lets software talk to other software. When you 
            create an API key on OpenAI or Replicate, you're essentially getting a unique ID that says 
            "this person is allowed to use our AI services."
          </p>

          <p>
            Unlike a regular password, you don't type it in every time. You give it to a tool 
            (like VixPic), and that tool uses it automatically when generating images for you.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">The Golden Rules of API Key Safety</h2>

          <h3 className="text-xl font-semibold mt-8 mb-3">1. Never Share Your Key Publicly</h3>
          <p>
            This is the big one. Don't post your API key on social media, in forums, or anywhere 
            public. If someone gets your key, they can use your account — and you'll pay for 
            whatever they generate.
          </p>

          <Card className="my-6 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <p className="font-semibold text-red-800 mb-2">⚠️ What to avoid:</p>
              <ul className="list-disc pl-6 text-red-700 space-y-1">
                <li>Posting API keys in Discord servers or forums</li>
                <li>Sharing screenshots that show your key</li>
                <li>Pasting keys in public GitHub repos</li>
                <li>Sending keys in unencrypted emails</li>
              </ul>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold mt-8 mb-3">2. Use Spending Limits</h3>
          <p>
            Every major AI provider lets you set spending limits. This is your safety net. Even if 
            something goes wrong, you won't wake up to a $10,000 bill.
          </p>

          <Card className="my-6 border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <p className="font-semibold text-green-800 mb-2">✓ How to set limits:</p>
              <ul className="list-disc pl-6 text-green-700 space-y-1">
                <li><strong>OpenAI:</strong> Settings → Billing → Usage limits</li>
                <li><strong>Replicate:</strong> Account → Billing → Set monthly limit</li>
                <li><strong>FAL:</strong> Dashboard → Budget alerts</li>
              </ul>
              <p className="text-green-700 mt-3">
                Start with a $10-20 limit. You can always increase it later.
              </p>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold mt-8 mb-3">3. One Key Per Tool</h3>
          <p>
            Create a separate API key for each tool you use. That way, if one tool turns out 
            to be untrustworthy, you can revoke that specific key without affecting everything else.
          </p>
          <p>
            Most providers let you create multiple keys. Name them clearly: "VixPic Key," 
            "Zapier Key," etc.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">4. Check Your Usage Regularly</h3>
          <p>
            Make it a habit to glance at your usage dashboard weekly. Most providers email you 
            about spending, but it's good to check manually too. Unusual spikes = time to 
            investigate.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">How VixPic Handles Your Keys</h2>

          <p>
            Not all BYOK tools are created equal. Here's how VixPic protects your keys:
          </p>

          <ul className="list-disc pl-6 space-y-3 my-6">
            <li>
              <strong>Local storage only:</strong> Your API keys are stored in your browser, 
              not on our servers. We literally cannot see them.
            </li>
            <li>
              <strong>Direct API calls:</strong> When you generate an image, your browser talks 
              directly to OpenAI/Replicate/FAL. VixPic is just the interface.
            </li>
            <li>
              <strong>No logging:</strong> We don't log your prompts, your images, or your API requests.
            </li>
            <li>
              <strong>Edge proxy option:</strong> For users who want extra privacy, our edge 
              proxy ensures even your IP address stays hidden from providers.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">What If My Key Gets Compromised?</h2>

          <p>
            If you suspect someone has your API key, don't panic. Here's what to do:
          </p>

          <ol className="list-decimal pl-6 space-y-3 my-6">
            <li>
              <strong>Revoke the key immediately</strong> — Go to your provider's dashboard and 
              delete/deactivate the compromised key.
            </li>
            <li>
              <strong>Create a new key</strong> — Generate a fresh key and update it in VixPic.
            </li>
            <li>
              <strong>Check your billing</strong> — Look for unauthorized charges. Most providers 
              will help you dispute fraudulent usage.
            </li>
            <li>
              <strong>Review your limits</strong> — Make sure spending limits are in place to 
              prevent future issues.
            </li>
          </ol>

          <p>
            The whole process takes about 5 minutes. Because you can revoke and regenerate keys 
            instantly, the damage from a compromised key is usually limited.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Common Myths Debunked</h2>

          <h3 className="text-xl font-semibold mt-8 mb-3">"API keys are too risky for non-developers"</h3>
          <p>
            Not true. API keys are actually simpler than most password systems. You create one, 
            paste it once, and set a spending limit. That's it. If anything, it's more transparent 
            than subscription services where you don't know what you're paying for.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">"If I lose my key, I lose my account"</h3>
          <p>
            Nope. Your API key is not your login. If you lose a key, you just create a new one. 
            Your account, billing history, and settings all stay the same.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">"BYOK tools can steal my key"</h3>
          <p>
            A legitimate concern — which is why you should only use BYOK tools you trust. VixPic 
            stores keys locally in your browser and never transmits them to our servers. But yes, 
            always research a tool before giving it your API key.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Quick Security Checklist</h2>

          <Card className="my-8">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">☐</span>
                  <span>Set spending limits on all API providers ($10-20 to start)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">☐</span>
                  <span>Create separate keys for each tool you use</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">☐</span>
                  <span>Name your keys clearly (e.g., "VixPic - Feb 2026")</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">☐</span>
                  <span>Check usage dashboard weekly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">☐</span>
                  <span>Enable billing alerts/notifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">☐</span>
                  <span>Never share keys publicly or in screenshots</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 my-12">
            <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              VixPic makes BYOK simple and secure. Your keys stay in your browser — we never 
              see them. Set up takes 5 minutes.
            </p>
            <Link href="/providers">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                View Setup Guides →
              </Button>
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">The Bottom Line</h2>

          <p>
            API keys sound technical, but they're just passwords for software. Set spending limits, 
            don't share publicly, and use tools you trust. That's really all there is to it.
          </p>

          <p>
            The security benefits of BYOK — like keeping your prompts private and controlling 
            exactly what you spend — far outweigh the small learning curve. Once you're set up, 
            you'll never want to go back to subscriptions.
          </p>

          <p className="text-gray-500 mt-8 pt-8 border-t">
            <em>
              Need help setting up your API keys? Check our{" "}
              <Link href="/providers" className="text-purple-600 hover:underline">
                provider guides
              </Link>{" "}
              for step-by-step instructions for OpenAI, Replicate, and FAL.
            </em>
          </p>
        </div>
      </article>

      {/* Related Posts */}
      <section className="border-t py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/byok-explained">
              <Card className="hover:border-purple-200 transition-all">
                <CardContent className="pt-6">
                  <span className="text-xs font-medium text-purple-600">Guide</span>
                  <h3 className="font-semibold mt-2">BYOK Explained: Why It Changes Everything</h3>
                  <p className="text-sm text-gray-500 mt-2">Learn how BYOK saves money and gives you control.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/save-money-ai-images">
              <Card className="hover:border-purple-200 transition-all">
                <CardContent className="pt-6">
                  <span className="text-xs font-medium text-purple-600">Guide</span>
                  <h3 className="font-semibold mt-2">How to Save 80% on AI Image Generation</h3>
                  <p className="text-sm text-gray-500 mt-2">Detailed cost breakdown with real numbers.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded" />
            <span className="font-semibold">VixPic</span>
          </div>
          <p className="text-sm text-gray-500">© 2026 VixPic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
