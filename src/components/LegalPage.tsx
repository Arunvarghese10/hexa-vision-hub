import { Link } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import logo from "@/assets/hexa-logo.jpeg.asset.json";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const MAIL = "mailto:admin@hexaventures.com.au";

function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-3">
      <img src={logo.url} alt="Hexa Ventures" className="h-8 w-auto" style={{ mixBlendMode: "screen" }} />
    </Link>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/#pillars", label: "pillars" },
    { href: "/#vision", label: "vision" },
    { href: "/#founders", label: "founders" },
    { href: "/#contact", label: "contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-md bg-background/70 border-b border-hairline">
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-10 text-sm lowercase text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href={MAIL} className="hidden md:inline-flex btn-base btn-ghost lowercase text-xs">
          get in touch <span aria-hidden>→</span>
        </a>
        <button
          aria-label="Menu"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-hairline"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-4 h-px bg-foreground relative before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-4 before:h-px before:bg-foreground after:content-[''] after:absolute after:top-1.5 after:left-0 after:w-4 after:h-px after:bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-hairline bg-background">
          <div className="container-x py-6 flex flex-col gap-5 text-sm lowercase">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">{l.label}</a>
            ))}
            <a href={MAIL} className="btn-base btn-light lowercase mt-2 self-start text-xs">get in touch →</a>
          </div>
        </div>
      )}
    </header>
  );
}

export function LegalFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-x py-10 flex flex-col gap-6 text-xs text-muted-foreground">
        <div className="flex flex-wrap gap-x-8 gap-y-3 lowercase">
          <Link to="/privacy-policy" className="hover:text-foreground transition-colors">privacy policy</Link>
          <Link to="/terms-of-use" className="hover:text-foreground transition-colors">terms of use</Link>
          <Link to="/refund-policy" className="hover:text-foreground transition-colors">refund policy</Link>
          <Link to="/complaint-policy" className="hover:text-foreground transition-colors">complaint policy</Link>
          <a href={MAIL} className="hover:text-foreground transition-colors">admin@hexaventures.com.au</a>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Logo />
          <span className="lowercase">© {new Date().getFullYear()} hexa ventures pty ltd. all rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Nav />
      <main className="flex-1 pt-[72px]">
        <section className="border-b border-border bg-surface">
          <div className="narrow-x py-12 md:py-16">
            <Breadcrumb className="mb-8">
              <BreadcrumbList className="lowercase text-xs tracking-wider">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="hover:text-foreground">home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="hover:text-foreground">legal</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-foreground">{title.toLowerCase()}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="eyebrow mb-4">Legal</div>
            <h1 className="display text-[clamp(34px,5vw,60px)] lowercase">{title}</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
          </div>
        </section>
        <section>
          <div className="narrow-x py-16 md:py-20">
            <article className="prose-legal space-y-8 text-foreground/90 leading-relaxed">
              {children}
            </article>
            <div className="mt-16 pt-10 border-t border-hairline">
              <p className="text-sm text-muted-foreground">
                Questions about this policy? Email{" "}
                <a href={MAIL} className="text-foreground underline underline-offset-4 hover:no-underline">
                  admin@hexaventures.com.au
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <LegalFooter />
    </div>
  );
}

export function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="display text-2xl md:text-3xl lowercase">{heading}</h2>
      <div className="space-y-3 text-muted-foreground">{children}</div>
    </section>
  );
}
