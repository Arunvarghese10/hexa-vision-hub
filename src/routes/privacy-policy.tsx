import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section, MAIL } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Hexa Ventures" },
      { name: "description", content: "How Hexa Ventures Pty Ltd collects, uses, stores and protects your personal information in accordance with the Australian Privacy Principles." },
      { property: "og:title", content: "Privacy Policy — Hexa Ventures" },
      { property: "og:description", content: "Our commitments under the Privacy Act 1988 (Cth) and the Australian Privacy Principles." },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="30 June 2026">
      <p>
        Hexa Ventures Pty Ltd (ABN to be issued) ("Hexa Ventures", "we", "us", "our") respects your privacy and is committed to protecting your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs). This Privacy Policy explains how we collect, hold, use and disclose personal information when you interact with our website, services or team.
      </p>

      <Section heading="1. What information we collect">
        <p>We may collect the following categories of personal information:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>identity and contact details (name, email address, telephone number, residential or service address);</li>
          <li>information required to deliver NDIS-related supports, property maintenance or bond cleaning services;</li>
          <li>correspondence and records of enquiries you submit to us;</li>
          <li>technical information automatically collected when you visit our website (IP address, browser type, pages viewed).</li>
        </ul>
      </Section>

      <Section heading="2. How we collect your information">
        <p>We collect information directly from you when you email, telephone or otherwise engage with us, when you request a quote or service, and through our website. Where lawful and practical, we will collect information only from you.</p>
      </Section>

      <Section heading="3. Why we collect, hold and use your information">
        <p>We use personal information to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>respond to enquiries and provide quotes;</li>
          <li>deliver, manage and improve our services;</li>
          <li>comply with our legal, regulatory and contractual obligations, including obligations under the <em>NDIS Act 2013</em> and applicable state tenancy laws;</li>
          <li>maintain accurate records of work performed.</li>
        </ul>
      </Section>

      <Section heading="4. Disclosure of personal information">
        <p>We do not sell personal information. We may disclose information to trusted service providers, contractors, insurers, regulators, and government bodies where required or permitted by law. We do not disclose personal information overseas unless you have consented or disclosure is required by law.</p>
      </Section>

      <Section heading="5. Storage and security">
        <p>We take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification or disclosure, including secure storage, restricted access and password protection.</p>
      </Section>

      <Section heading="6. Accessing and correcting your information">
        <p>You may request access to, or correction of, the personal information we hold about you at any time by contacting us. We will respond within a reasonable period and in accordance with the APPs.</p>
      </Section>

      <Section heading="7. Complaints">
        <p>If you believe we have breached the Australian Privacy Principles, you may lodge a complaint with us using the contact details below. If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at <a className="underline underline-offset-4" href="https://www.oaic.gov.au" target="_blank" rel="noreferrer">oaic.gov.au</a>.</p>
      </Section>

      <Section heading="8. Changes to this policy">
        <p>We may update this Privacy Policy from time to time. The current version will always be published on this page with the date of last update.</p>
      </Section>

      <Section heading="9. Contact us">
        <p>For any privacy matter, contact our Privacy Officer at <a className="underline underline-offset-4" href={MAIL}>admin@hexaventures.com.au</a>.</p>
      </Section>
    </LegalPage>
  );
}
