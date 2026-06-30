import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section, MAIL } from "@/components/LegalPage";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Hexa Ventures" },
      { name: "description", content: "The terms governing your use of the Hexa Ventures website and services, under Australian law." },
      { property: "og:title", content: "Terms of Use — Hexa Ventures" },
      { property: "og:description", content: "Terms of use for the Hexa Ventures Pty Ltd website and services." },
    ],
  }),
  component: TermsOfUse,
});

function TermsOfUse() {
  return (
    <LegalPage title="Terms of Use" updated="30 June 2026">
      <p>
        These Terms of Use ("Terms") govern your access to and use of the website, content and services made available by Hexa Ventures Pty Ltd ("Hexa Ventures", "we", "us", "our"). By accessing or using this website you agree to be bound by these Terms.
      </p>

      <Section heading="1. Acceptance">
        <p>If you do not agree with these Terms, you must not use this website. We may amend these Terms at any time by publishing the revised version on this page.</p>
      </Section>

      <Section heading="2. Use of the website">
        <p>You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this website by any third party.</p>
      </Section>

      <Section heading="3. Information and content">
        <p>The content of this website is for general information only. While we take care to ensure information is accurate at the time of publication, we make no representation or warranty (express or implied) regarding its accuracy, completeness or suitability for any particular purpose.</p>
      </Section>

      <Section heading="4. Intellectual property">
        <p>All trademarks, logos, copy, designs and other material on this website are owned by or licensed to Hexa Ventures Pty Ltd. You must not reproduce, modify or distribute any content without our prior written consent, except for personal, non-commercial use.</p>
      </Section>

      <Section heading="5. Services and quotations">
        <p>Any quotation provided by us is an invitation to treat and not a binding offer. A binding contract is formed only when we issue a written acceptance or commence the service. Specific service terms may apply and will be provided separately.</p>
      </Section>

      <Section heading="6. Australian Consumer Law">
        <p>Nothing in these Terms excludes, restricts or modifies any consumer guarantee, right or remedy conferred by the <em>Competition and Consumer Act 2010</em> (Cth) (including the Australian Consumer Law) or any other applicable law that cannot be lawfully excluded.</p>
      </Section>

      <Section heading="7. Limitation of liability">
        <p>To the maximum extent permitted by law, Hexa Ventures excludes all liability for any indirect, incidental, special or consequential loss arising out of or in connection with your use of this website. Where liability cannot lawfully be excluded, our liability is limited to re-supplying the services or paying the cost of having them re-supplied.</p>
      </Section>

      <Section heading="8. Third-party links">
        <p>This website may contain links to third-party sites. We do not endorse and are not responsible for the content, products or practices of those third parties.</p>
      </Section>

      <Section heading="9. Governing law">
        <p>These Terms are governed by the laws in force in Australia. You submit to the non-exclusive jurisdiction of the courts of the State in which Hexa Ventures is registered.</p>
      </Section>

      <Section heading="10. Contact">
        <p>Questions regarding these Terms should be directed to <a className="underline underline-offset-4" href={MAIL}>admin@hexaventures.com.au</a>.</p>
      </Section>
    </LegalPage>
  );
}
