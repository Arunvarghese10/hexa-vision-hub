import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/hexa-logo.jpeg";

const LINKEDIN_URL = "https://www.linkedin.com/company/hexa-ventures-pty-ltd/?viewAsMember=true";


function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const pos = window.scrollY + 120;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  return { active, scrolled };
}




export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hexa Ventures — NDIS & property services across Australia" },
      {
        name: "description",
        content:
          "Hexa Ventures delivers NDIS support, property maintenance and bond cleaning across Australia — named teams, agreed scope, fair pricing.",
      },
      { property: "og:title", content: "Hexa Ventures — NDIS & property services across Australia" },
      {
        property: "og:description",
        content:
          "Six connected service pillars built deliberately — honest work, clear accountability, long-term commitment.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const MAIL = "mailto:admin@hexaventures.com.au";

type Pillar = {
  n: string;
  status: string;
  title: string;
  blurb: string;
};

const pillars: Pillar[] = [
  {
    n: "01",
    status: "Active",
    title: "NDIS & Property Maintenance",
    blurb:
      "NDIS-related support alongside rental property maintenance — lawn mowing, gardening and general external works delivered by accountable, fairly-remunerated teams.",
  },
  {
    n: "02",
    status: "Building",
    title: "Bond Cleaning Consultancy",
    blurb:
      "The trusted bridge between residents, property managers and cleaning providers — coordinating outsourced bond cleans across residential communities.",
  },
  {
    n: "03",
    status: "In qualification",
    title: "Real Estate Services",
    blurb:
      "With two directors completing real estate qualifications, we are preparing to deliver acquisition, sales, property management and consulting under one roof.",
  },
  {
    n: "04",
    status: "In exploration",
    title: "Mortgage Broking",
    blurb:
      "Actively evaluating the pathway to a mortgage broking licence — a natural complement to our future real estate operations.",
  },
  {
    n: "05",
    status: "In development",
    title: "Education & Training",
    blurb:
      "Facilitated learning — Diploma programs, Certificate IV courses and community-based vocational training. Initial course design is underway.",
  },
  {
    n: "06",
    status: "Strategy",
    title: "Diversified Investment",
    blurb:
      "A deliberately diversified model — multiple service and investment streams structured for resilience, accountability and long-term value creation.",
  },
];

const standards = [
  { k: "Honest work.", v: "We say what we do, do what we said, and record it properly." },
  { k: "Clear accountability.", v: "Named teams, agreed scope, fair pricing — across every pillar." },
  { k: "Long-term commitment.", v: "Built deliberately to serve communities steadily, not to chase moments." },
];

const tracks = [
  { s: "Active", t: "NDIS services & property maintenance operations being established" },
  { s: "Building", t: "Bond cleaning consultancy — partnering with cleaners and property managers" },
  { s: "In qualification", t: "Two directors completing real estate licence requirements" },
  { s: "Exploring", t: "Mortgage broking licence pathway under evaluation" },
  { s: "In design", t: "Diploma, Certificate IV and community vocational courses" },
];

const places = [
  { e: "Heritage", t: "Kerala", s: "South India" },
  { e: "Based in", t: "Australia", s: "Home today" },
  { e: "Lived & worked", t: "United Kingdom", s: "Years on the ground" },
  { e: "Lived & worked", t: "Singapore", s: "Years on the ground" },
  { e: "Lived & worked", t: "Muscat", s: "Years on the ground" },
];

function Logo() {
  return (
    <a href="#top" className="inline-flex items-center">
      <img
        src={logo}
        alt="Hexa Ventures"
        className="h-8 w-auto"
        style={{ filter: "invert(1)", mixBlendMode: "screen" }}
      />
    </a>
  );
}


function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#pillars", id: "pillars", label: "pillars" },
    { href: "#vision", id: "vision", label: "vision" },
    { href: "#founders", id: "founders", label: "founders" },
    { href: "#contact", id: "contact", label: "contact" },
  ];
  const { active, scrolled } = useScrollSpy(links.map((l) => l.id));
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? "backdrop-blur-xl bg-background/60 border-hairline shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
          : "backdrop-blur-md bg-background/30 border-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-10 text-sm lowercase text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative transition-colors ${
                active === l.id ? "text-foreground" : "hover:text-foreground"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                  active === l.id ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </a>
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
        <div className="md:hidden border-t border-hairline bg-background/90 backdrop-blur-xl">
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

function Index() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-background text-foreground">
      <Nav />
      <main className="flex-1 pt-[72px]">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 hex-pattern opacity-60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
          <div className="container-x relative pt-28 md:pt-40 pb-32 md:pb-44 text-center">
            <div className="inline-flex items-center gap-4 text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-10">
              <span className="hairline w-10" />
              NDIS &amp; property services · Australia
              <span className="hairline w-10" />
            </div>
            <h1 className="display text-[clamp(48px,9vw,140px)] leading-[0.95] lowercase">
              we show up, do the work,<br />
              and <span className="display-italic">record it properly.</span>
            </h1>
            <p className="mt-10 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground lowercase">
              ndis support, property maintenance and bond cleaning across australia — named teams, agreed scope, fair pricing.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <a href="#pillars" className="btn-base btn-light lowercase">explore the pillars ↓</a>
              <a href="#vision" className="btn-base btn-ghost lowercase">our direction</a>
            </div>
            <dl className="mt-24 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <dt className="display text-4xl md:text-5xl">6</dt>
                <dd className="mt-3 eyebrow">Service pillars</dd>
              </div>
              <div className="text-center">
                <dt className="display text-4xl md:text-5xl">Fixed</dt>
                <dd className="mt-3 eyebrow">Scope agreed before we start</dd>
              </div>
              <div className="text-center">
                <dt className="display text-4xl md:text-5xl">Every job</dt>
                <dd className="mt-3 eyebrow">Documented &amp; accountable</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Pillars */}
        <section id="pillars" className="border-t border-border bg-surface">
          <div className="container-x py-24 md:py-32">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <div className="eyebrow mb-6">What we do</div>
                <h2 className="display text-[clamp(34px,5vw,60px)] max-w-2xl">
                  Built on six <span className="display-italic">connected</span> pillars.
                </h2>
              </div>
              <p className="text-muted-foreground max-w-sm">
                A multi-stream business, structured so each piece strengthens the others — active operations, qualifications in progress, and future-focused pathways.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p) => (
                <article key={p.n} className="pillar-card p-8 flex flex-col">
                  <div className="flex items-start justify-between mb-12">
                    <span className="display text-2xl text-muted-foreground">{p.n}</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground px-2.5 py-1 rounded-full border border-hairline">
                      {p.status}
                    </span>
                  </div>
                  <h3 className="display text-2xl mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.blurb}</p>
                  <a href={MAIL} className="mt-8 text-sm lowercase inline-flex items-center gap-2 text-foreground hover:gap-3 transition-all">
                    enquire <span aria-hidden>→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="border-t border-border">
          <div className="narrow-x py-24 md:py-32">
            <div className="eyebrow mb-6">Strategic direction</div>
            <h2 className="display text-[clamp(34px,5vw,60px)]">
              A diversified business model with multiple service and{" "}
              <span className="display-italic">investment streams.</span>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-3xl">
              Hexa Ventures Pty Ltd is being built deliberately — each pillar chosen to reinforce the others, each operation structured with accountability, transparency and long-term focus. From everyday property care to real estate and education, our directors are establishing the foundations of a company that will serve Australian communities for years to come.
            </p>
          </div>
        </section>

        {/* Standard */}
        <section className="border-t border-border bg-surface">
          <div className="container-x py-24 md:py-32">
            <div className="eyebrow mb-10 text-center">The standard</div>
            <div className="grid md:grid-cols-3 gap-px bg-hairline rounded-2xl overflow-hidden border border-hairline">
              {standards.map((s) => (
                <div key={s.k} className="spotlight bg-surface p-10">
                  <h3 className="display text-3xl mb-4 lowercase">{s.k}</h3>
                  <p className="text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
            <ul className="mt-16 rounded-2xl overflow-hidden border border-hairline divide-y" style={{ borderColor: "var(--hairline)" }}>
              {tracks.map((t) => (
                <li key={t.s} className="flex flex-col sm:flex-row gap-2 sm:gap-8 px-6 py-5 bg-background">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground sm:w-40 pt-1">{t.s}</span>
                  <span className="text-foreground/90">{t.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Founders */}
        <section id="founders" className="border-t border-border">
          <div className="narrow-x py-24 md:py-32">
            <div className="eyebrow mb-6">The people behind it</div>
            <h2 className="display text-[clamp(34px,5vw,60px)]">
              Built by people who know what it means to{" "}
              <span className="display-italic">start somewhere new.</span>
            </h2>
            <p className="mt-8 display text-2xl md:text-3xl font-light leading-snug max-w-3xl">
              Wherever you come from, you are welcome here. The founders of Hexa Ventures have lived that journey themselves — and they built this company to serve every community, from every background.
            </p>
            <div className="mt-8 text-lg text-muted-foreground space-y-5 max-w-2xl">
              <p>
                Between them, the founding team has made a home in many places. With roots in Kerala, in South India, and years lived and worked across Australia, the United Kingdom, Singapore and Muscat, they have learned that trust is built the same way everywhere — through honesty, fair work, and genuinely seeing the person in front of you.
              </p>
              <p>
                That history shapes how Hexa Ventures operates today. Having been newcomers themselves, the founders understand what it takes to find your feet in an unfamiliar place — and they bring that same care and respect to everyone they serve, whatever your culture, faith or origin.
              </p>
            </div>
            <div className="mt-14 grid gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {places.map((p, i) => (
                <div key={i} className="spotlight bg-background p-7">
                  <div className="eyebrow">{p.e}</div>
                  <div className="mt-2 display text-xl">{p.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.s}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border bg-surface">
          <div className="narrow-x py-24 md:py-32">
            <div className="spotlight relative rounded-3xl border border-hairline bg-background p-10 md:p-16 overflow-hidden">
              <div className="absolute inset-0 hex-pattern opacity-40 pointer-events-none" />
              <div className="relative">
                <div className="eyebrow mb-6">Get in touch</div>
                <h2 className="display text-[clamp(34px,5vw,60px)]">
                  Start the <span className="display-italic">conversation.</span>
                </h2>
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                  Whether you need a service today, want to partner, or are exploring an opportunity, our directors are happy to talk.
                </p>
                <div className="mt-12 grid sm:grid-cols-3 gap-8">
                  <div>
                    <div className="eyebrow">Email</div>
                    <a href={MAIL} className="mt-1 block text-foreground hover:text-accent transition-colors">
                      admin@hexaventures.com.au
                    </a>
                  </div>
                  <div>
                    <div className="eyebrow">Phone</div>
                    <div className="mt-1 text-foreground">Available on request</div>
                  </div>
                  <div>
                    <div className="eyebrow">Based in</div>
                    <div className="mt-1 text-foreground">Australia</div>
                  </div>
                </div>
                <div className="mt-12">
                  <a href={MAIL} className="btn-base btn-light lowercase">start a conversation →</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container-x py-10 flex flex-col gap-6 text-xs text-muted-foreground">
          <div className="flex flex-wrap gap-x-8 gap-y-3 lowercase">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">privacy policy</Link>
            <Link to="/terms-of-use" className="hover:text-foreground transition-colors">terms of use</Link>
            <Link to="/refund-policy" className="hover:text-foreground transition-colors">refund policy</Link>
            <Link to="/complaint-policy" className="hover:text-foreground transition-colors">complaint policy</Link>
            <a href={MAIL} className="hover:text-foreground transition-colors">admin@hexaventures.com.au</a>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Logo />
            <div className="flex items-center gap-5">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hexa Ventures on LinkedIn"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-hairline text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.5 0h4.37v2.05h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.63c0-1.58-.03-3.62-2.21-3.62-2.21 0-2.55 1.72-2.55 3.5V23H7.72V8z" />
                </svg>
              </a>
              <span className="lowercase">© {new Date().getFullYear()} hexa ventures pty ltd. all rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
