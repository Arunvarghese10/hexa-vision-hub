import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hexa Ventures — Six pillars, one standard" },
      {
        name: "description",
        content:
          "Hexa Ventures is a diversified Australian company built around six connected pillars: NDIS & property maintenance, bond cleaning, real estate, mortgage broking, education, and diversified investment.",
      },
      { property: "og:title", content: "Hexa Ventures — Six pillars, one standard" },
      {
        property: "og:description",
        content:
          "A diversified Australian company built on honest work, clear accountability, and long-term commitment.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

type Pillar = {
  number: string;
  title: string;
  status: "Active" | "Building" | "In qualification" | "In exploration" | "In development" | "Strategy";
  positioning: string;
  what: string;
  who: string;
  expect: string;
};

const pillars: Pillar[] = [
  {
    number: "01",
    title: "NDIS & Property Maintenance",
    status: "Active",
    positioning:
      "Practical, dependable support and property care — delivered by people who take responsibility for the work.",
    what: "We provide NDIS-related support services alongside everyday rental and residential property maintenance. On the property side, that means the reliable outdoor work that keeps a home or rental in good standing: lawn mowing, gardening, hedge and green-waste clearing, and general external upkeep. On the support side, we focus on practical assistance that helps people live more comfortably and independently in their own space. Every job is carried out by accountable teams, with work agreed in advance and recorded properly.",
    who: "NDIS participants and their families looking for dependable, respectful support; landlords and property managers who need consistent outdoor maintenance; and tenants who want a tidy, well-kept home without the hassle of arranging it themselves.",
    expect:
      "Clear scope before we start, fair and transparent pricing, and teams who turn up and do what they said they would. No surprises, no shortcuts.",
  },
  {
    number: "02",
    title: "Bond Cleaning Consultancy",
    status: "Building",
    positioning:
      "The trusted bridge between residents, property managers, and the cleaners who get the job done.",
    what: "Bond cleaning is stressful precisely when people have the least time for it — at the end of a tenancy, in the middle of a move. We coordinate that process so it doesn't fall on the resident or the property manager to chase quotes and check quality. We connect residents and property managers with trusted, vetted cleaning providers, manage the booking, and help make sure the standard meets what's needed to return a bond in full. We don't pretend the cleaning is done in-house — our value is in the coordination and the accountability.",
    who: "Tenants at the end of a lease who want their bond back without the back-and-forth; property managers handling multiple turnovers who need a reliable partner; and cleaning providers who want steady, well-organised work.",
    expect:
      "One point of contact, providers we'd trust in our own homes, and a process designed to meet the standards that matter when a bond is on the line.",
  },
  {
    number: "03",
    title: "Real Estate Services",
    status: "In qualification",
    positioning: "A long-term commitment to property — being built properly, from the ground up.",
    what: "Two of our directors are completing the qualifications required to practise in real estate in Australia. As those licences are finalised, we are preparing to bring acquisition, sales, property management, and property consulting together under one roof — so clients can deal with one team that understands the whole picture rather than a chain of disconnected agents. We're being deliberate about this. Real estate is a regulated profession for good reason, and we would rather build the foundations correctly than rush to advertise services we aren't yet licensed to provide.",
    who: "Buyers and sellers who want a team that takes a long view rather than chasing a quick commission; investors and landlords looking for property management they can rely on; and anyone who values straight advice over sales pressure.",
    expect:
      "When this pillar opens fully, you can expect properly qualified people, transparent dealings, and the same accountability that runs through every part of Hexa Ventures. Until then, we're honest about where we are: in qualification, and preparing carefully.",
  },
  {
    number: "04",
    title: "Mortgage Broking",
    status: "In exploration",
    positioning: "A natural next step — explored with the same care as everything else we do.",
    what: "We are actively evaluating the pathway to a mortgage broking licence. It's a natural complement to our planned real estate operations: the same clients who are buying or investing in property often need finance, and we'd rather guide that journey properly than hand people off. This pillar is at the exploration stage. We are not offering mortgage broking services yet, and we won't until the licensing and obligations are fully in place. We're sharing it here because we believe in being open about the direction we're heading.",
    who: "Future homebuyers and property investors who would value finance guidance from a team that already understands their property goals — and who want a broker that treats their long-term interests as the priority.",
    expect:
      "For now, transparency about the plan. When the time comes, finance guidance held to the same standard of honesty and accountability as the rest of the business.",
  },
  {
    number: "05",
    title: "Education & Training",
    status: "In development",
    positioning: "Practical, accessible learning — facilitated with care, designed for real outcomes.",
    what: "We are developing facilitated and outsourced learning programs, with a focus on nationally relevant pathways: Diploma programs, Certificate IV courses, and community-based vocational training. Initial course design is underway. The aim is learning that leads somewhere — qualifications and skills that open real doors, delivered in a way that works for people balancing study with the rest of their lives. As with our other pillars, we will partner with the right providers and facilitators rather than overstating what we deliver ourselves.",
    who: "Adult learners and career-changers looking for recognised qualifications; people seeking vocational skills that lead to employment; and community members who want accessible, well-run training close to home.",
    expect:
      "Programs designed around real outcomes, clear information about what each course leads to, and a learning experience built to be supportive rather than intimidating. Details will follow as courses are finalised.",
  },
  {
    number: "06",
    title: "Diversified Investment",
    status: "Strategy",
    positioning: "The thinking that holds the whole company together.",
    what: "Diversified Investment isn't a separate service so much as the strategy behind everything above. Hexa Ventures is built deliberately as a multi-stream business — several service and investment streams structured to reinforce one another. The logic is resilience: a company that doesn't depend on any single market or moment, and that can serve its communities steadily over the long term. Each pillar is chosen to strengthen the others. Property maintenance and bond cleaning build relationships in the same communities real estate will serve. Real estate and mortgage broking naturally connect. Education builds skills and trust across all of it.",
    who: "Partners, collaborators, and anyone considering working with Hexa Ventures who wants to understand the bigger picture — and to know the company is built on long-term thinking rather than short-term opportunism.",
    expect:
      "A business managed with accountability and a long horizon. Diversification here isn't about doing everything at once; it's about building each piece properly and connecting them with intent.",
  },
];

const statusTone: Record<Pillar["status"], string> = {
  Active: "bg-foreground text-background",
  Building: "bg-foreground/80 text-background",
  "In qualification": "bg-muted-foreground/20 text-foreground",
  "In exploration": "bg-muted-foreground/15 text-foreground",
  "In development": "bg-muted-foreground/15 text-foreground",
  Strategy: "bg-muted-foreground/15 text-foreground",
};

const MAIL = "mailto:info@hexaventures.com.au";

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none" aria-hidden>
        <path
          d="M11 1L20.5 6.5V17.5L11 23L1.5 17.5V6.5L11 1Z"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path d="M11 1V23M1.5 6.5L20.5 17.5M20.5 6.5L1.5 17.5" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      </svg>
      <span className="font-display text-lg tracking-tight">Hexa Ventures</span>
    </a>
  );
}

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-hairline bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#pillars" className="transition-colors hover:text-foreground">Pillars</a>
            <a href="#approach" className="transition-colors hover:text-foreground">Approach</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
            <a
              href={MAIL}
              className="inline-flex items-center gap-2 rounded-sm border border-foreground bg-foreground px-4 py-2 text-background transition-opacity hover:opacity-90"
            >
              Get in touch
              <span aria-hidden>→</span>
            </a>
          </nav>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-border md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
        {open && (
          <div className="border-t border-hairline md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3 text-sm">
              <a onClick={() => setOpen(false)} href="#pillars" className="py-2 text-muted-foreground">Pillars</a>
              <a onClick={() => setOpen(false)} href="#approach" className="py-2 text-muted-foreground">Approach</a>
              <a onClick={() => setOpen(false)} href="#contact" className="py-2 text-muted-foreground">Contact</a>
              <a
                href={MAIL}
                className="mt-2 inline-flex items-center justify-center rounded-sm bg-foreground px-4 py-2.5 text-background"
              >
                Get in touch
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-12 lg:gap-16 lg:py-36">
          <div className="lg:col-span-8">
            <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-muted-foreground/50" />
              A diversified Australian company
            </div>
            <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Six pillars.
              <br />
              <span className="text-muted-foreground">One standard.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Hexa Ventures is built around six connected pillars. Some are operating today, some
              are in qualification, and some are in active development. What unites them is a
              single standard: honest work, clear accountability, and a long-term commitment to
              the communities we serve.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#pillars"
                className="inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-3 text-sm text-background transition-opacity hover:opacity-90"
              >
                Explore the pillars
                <span aria-hidden>↓</span>
              </a>
              <a
                href={MAIL}
                className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm text-foreground transition-colors hover:bg-secondary"
              >
                info@hexaventures.com.au
              </a>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-hairline bg-hairline">
              {pillars.map((p) => (
                <a
                  key={p.number}
                  href={`#pillar-${p.number}`}
                  className="group flex aspect-square flex-col justify-between bg-card p-3 transition-colors hover:bg-secondary sm:p-4"
                >
                  <span className="font-display text-xl text-foreground sm:text-2xl">{p.number}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-foreground sm:text-xs">
                    {p.status}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="border-b border-hairline bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-3 md:py-24">
          {[
            { k: "Honest work", v: "We say what we do, do what we said, and record it properly." },
            { k: "Clear accountability", v: "Named teams, agreed scope, fair pricing — across every pillar." },
            { k: "Long-term commitment", v: "Built deliberately to serve communities steadily, not chase moments." },
          ].map((item) => (
            <div key={item.k}>
              <div className="mb-4 h-px w-10 bg-foreground" />
              <h3 className="font-display text-xl text-foreground">{item.k}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section id="pillars" className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 py-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:py-24">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                The Pillars
              </div>
              <h2 className="font-display text-3xl leading-tight text-foreground sm:text-5xl">
                What each pillar means in practice.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              What we do, who it's for, and what you can expect when you work with us.
            </p>
          </div>

          <div className="border-t border-hairline">
            {pillars.map((p) => (
              <article
                key={p.number}
                id={`pillar-${p.number}`}
                className="grid gap-8 border-b border-hairline py-12 md:grid-cols-12 md:gap-10 md:py-16 lg:py-20"
              >
                <div className="md:col-span-4 lg:col-span-3">
                  <div className="font-display text-5xl text-muted-foreground/60 sm:text-6xl">
                    {p.number}
                  </div>
                  <span
                    className={`mt-6 inline-flex items-center rounded-full px-3 py-1 text-[11px] uppercase tracking-wider ${statusTone[p.status]}`}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="md:col-span-8 lg:col-span-9">
                  <h3 className="font-display text-2xl leading-tight text-foreground sm:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base italic leading-relaxed text-muted-foreground">
                    {p.positioning}
                  </p>

                  <div className="mt-10 grid gap-8 border-t border-hairline pt-8 sm:grid-cols-3 sm:gap-10">
                    {[
                      { label: "What we do", body: p.what },
                      { label: "Who it's for", body: p.who },
                      { label: "What to expect", body: p.expect },
                    ].map((block) => (
                      <div key={block.label}>
                        <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-foreground">
                          {block.label}
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {block.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing / Contact */}
      <section id="contact" className="bg-foreground text-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <div className="mb-6 text-xs uppercase tracking-[0.2em] text-background/60">
              Get in touch
            </div>
            <h2 className="font-display text-3xl leading-tight sm:text-5xl">
              Six pillars, one standard.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-background/70">
              Whether you need a service today or want to understand where Hexa Ventures is
              heading, our directors are happy to start the conversation.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-4 md:col-span-5 md:items-end">
            <a
              href={MAIL}
              className="inline-flex items-center gap-3 rounded-sm bg-background px-6 py-4 text-sm text-foreground transition-opacity hover:opacity-90"
            >
              Get in touch
              <span aria-hidden>→</span>
            </a>
            <a href={MAIL} className="text-sm text-background/70 transition-colors hover:text-background">
              info@hexaventures.com.au
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-hairline bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-8 text-xs text-muted-foreground sm:px-8">
          <Logo className="text-foreground" />
          <span>© {new Date().getFullYear()} Hexa Ventures. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
