import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section, MAIL } from "@/components/LegalPage";

export const Route = createFileRoute("/complaint-policy")({
  head: () => ({
    meta: [
      { title: "Complaint Policy — Hexa Ventures" },
      { name: "description", content: "How to raise a complaint with Hexa Ventures and our complaint-handling commitments." },
      { property: "og:title", content: "Complaint Policy — Hexa Ventures" },
      { property: "og:description", content: "Our complaint-handling process, aligned with NDIS Practice Standards and Australian Consumer Law." },
    ],
  }),
  component: ComplaintPolicy,
});

function ComplaintPolicy() {
  return (
    <LegalPage title="Complaint Policy" updated="30 June 2026">
      <p>
        Hexa Ventures Pty Ltd welcomes feedback and complaints. We treat every complaint as an opportunity to improve our services. Our complaint-handling approach reflects the principles of AS/NZS 10002:2014 (Guidelines for complaint management in organisations) and, where applicable, the NDIS Complaint Management and Resolution Rules 2018.
        </p>

      <Section heading="1. Our commitment">
        <p>We are committed to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>handling complaints fairly, confidentially and without fear of retribution;</li>
          <li>making it easy to raise a concern;</li>
          <li>acknowledging complaints promptly and responding within reasonable timeframes;</li>
          <li>using complaints to improve our services.</li>
        </ul>
      </Section>

      <Section heading="2. How to make a complaint">
        <p>You can lodge a complaint by:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>email to <a className="underline underline-offset-4" href={MAIL}>admin@hexaventures.com.au</a>;</li>
          <li>writing to our registered business address (available on request);</li>
          <li>asking a family member, advocate or other representative to contact us on your behalf.</li>
        </ul>
        <p>Where possible, please include your name and contact details, a description of the issue, the date and location it occurred, and your preferred outcome.</p>
      </Section>

      <Section heading="3. Our process">
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Acknowledge</strong> — we will acknowledge your complaint within 3 business days.</li>
          <li><strong>Assess</strong> — we will review the complaint, request any further information needed, and assign it to an appropriate staff member.</li>
          <li><strong>Investigate</strong> — we will investigate the matter fairly and impartially.</li>
          <li><strong>Respond</strong> — we will provide a written response and outcome within 21 business days. If more time is needed, we will keep you informed.</li>
          <li><strong>Improve</strong> — we will record the complaint and any actions taken to prevent recurrence.</li>
        </ol>
      </Section>

      <Section heading="4. Confidentiality">
        <p>We handle complaints confidentially. Information is shared only with people who need to know in order to investigate and resolve the matter, or where disclosure is required by law.</p>
      </Section>

      <Section heading="5. If you are not satisfied">
        <p>If you are not satisfied with the outcome of your complaint, you may escalate the matter externally, including to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>the <strong>NDIS Quality and Safeguards Commission</strong> on 1800 035 544 or via <a className="underline underline-offset-4" href="https://www.ndiscommission.gov.au" target="_blank" rel="noreferrer">ndiscommission.gov.au</a> for NDIS-related concerns;</li>
          <li>your <strong>state or territory consumer affairs / fair trading</strong> body for consumer matters;</li>
          <li>the <strong>Office of the Australian Information Commissioner</strong> for privacy-related concerns.</li>
        </ul>
      </Section>

      <Section heading="6. Support">
        <p>You are welcome to have an advocate, support person, family member or interpreter assist you throughout the complaint process at no cost to us.</p>
      </Section>
    </LegalPage>
  );
}
