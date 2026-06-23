import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hexa Ventures — crafted with intent" },
      {
        name: "description",
        content:
          "Hexa Ventures is a diversified Australian company built on six connected pillars — honest work, clear accountability, long-term commitment.",
      },
      { property: "og:title", content: "Hexa Ventures — crafted with intent" },
      {
        property: "og:description",
        content:
          "A diversified Australian company built on honest work and long-term commitment.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const MAIL = "mailto:info@hexaventures.com.au";

type Pillar = {
  number: string;
  title: string;
  status: string;
  blurb: string;
};

const pillars: Pillar[] = [
  {
    number: "01",
    title: "NDIS & property maintenance",
    status: "active",
    blurb:
      "Practical, dependable support and property care — delivered by people who take responsibility for the work.",
  },
  {
    number: "02",
    title: "bond cleaning consultancy",
    status: "building",
    blurb:
      "The trusted bridge between residents, property managers, and the cleaners who get the job done.",
  },
  {
    number: "03",
    title: "real estate services",
    status: "in qualification",
    blurb:
      "A long-term commitment to property — being built properly, from the ground up.",
  },
  {
    number: "04",
    title: "mortgage broking",
    status: "in exploration",
    blurb:
      "A natural next step — explored with the same care as everything else we do.",
  },
  {
    number: "05",
    title: "education & training",
    status: "in development",
    blurb:
      "Practical, accessible learning — facilitated with care, designed for real outcomes.",
  },
  {
    number: "06",
    title: "diversified investment",
    status: "strategy",
    blurb: "The thinking that holds the whole company together.",
  },
];

function Logo() {
  return (
    <a href="#top" className="inline-flex items-center gap-2.5">
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none" aria-hidden>
        <path
          d="M11 1L20.5 6.5V17.5L11 23L1.5 17.5V6.5L11 1Z"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </svg>
      <span className="font-display text-base tracking-tight">hexa ventures</span>
    </a>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-10 sm:py-8">
          <Logo />
          <a
            href={MAIL}
            className="group inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-xs tracking-wide text-foreground/90 backdrop-blur transition-colors hover:bg-foreground hover:text-background"
          >
            get in touch
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        {/* ambient gradient */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, oklch(0.28 0 0) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-hairline"
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-32 text-center sm:px-10 sm:py-40">
          <div className="mx-auto mb-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/60" />
            a diversified australian company
            <span className="h-px w-8 bg-muted-foreground/60" />
          </div>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-[8rem]">
            crafted with
            <br />
            <span className="italic">intent.</span>
          </h1>
          <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            six pillars. one standard. honest work, clear accountability,
            and a long-term commitment to the communities we serve.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#pillars"
              className="group inline-flex items-center gap-3 rounded-sm bg-foreground px-6 py-3.5 text-xs tracking-wide text-background transition-transform hover:-translate-y-0.5"
            >
              explore the pillars
              <span aria-hidden className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pillars — CRED-style hover list */}
      <section id="pillars" className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="grid gap-6 py-20 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:py-28">
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-6xl">
              built on six
              <br />
              <span className="text-muted-foreground italic">connected pillars.</span>
            </h2>
            <p className="max-w-xs text-sm text-muted-foreground">
              a multi-stream business, structured so each piece strengthens the others.
            </p>
          </div>

          <ul className="border-t border-hairline">
            {pillars.map((p) => (
              <li key={p.number}>
                <a
                  href={MAIL}
                  className="group relative block border-b border-hairline py-8 transition-colors sm:py-10"
                >
                  {/* sliding background fill */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-foreground transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                  <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-6 transition-colors duration-300 group-hover:text-background sm:gap-10">
                    <span className="font-display text-sm tabular-nums text-muted-foreground transition-colors group-hover:text-background/70 sm:text-base">
                      {p.number}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl leading-tight tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-4xl md:text-5xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-2xl truncate text-xs text-muted-foreground transition-colors group-hover:text-background/70 sm:text-sm">
                        {p.blurb}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="hidden text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-background/70 sm:inline">
                        {p.status}
                      </span>
                      <span
                        aria-hidden
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-background group-hover:bg-background group-hover:text-foreground sm:h-11 sm:w-11"
                      >
                        <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-28">
          <div className="mb-12 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            the standard
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-16">
            {[
              {
                k: "honest work.",
                v: "we say what we do, do what we said, and record it properly.",
              },
              {
                k: "clear accountability.",
                v: "named teams, agreed scope, fair pricing — across every pillar.",
              },
              {
                k: "long-term commitment.",
                v: "built deliberately to serve communities steadily, not chase moments.",
              },
            ].map((item) => (
              <div key={item.k}>
                <div className="mb-5 h-px w-10 bg-foreground" />
                <h3 className="font-display text-2xl leading-tight sm:text-3xl">{item.k}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-10 sm:py-36">
          <div className="mb-8 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            get in touch
          </div>
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            start the
            <br />
            <span className="italic text-muted-foreground">conversation.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            whether you need a service today or want to understand where hexa ventures is heading,
            our directors are happy to talk.
          </p>
          <a
            href={MAIL}
            className="group mt-12 inline-flex items-center gap-3 rounded-sm bg-foreground px-7 py-4 text-xs tracking-wide text-background transition-transform hover:-translate-y-0.5"
          >
            info@hexaventures.com.au
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-10 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-10">
          <Logo />
          <span>© {new Date().getFullYear()} hexa ventures. all rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
