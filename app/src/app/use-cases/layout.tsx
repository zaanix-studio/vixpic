import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function UseCasesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
