import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section, MAIL } from "@/components/LegalPage";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Hexa Ventures" },
      { name: "description", content: "Hexa Ventures' refund policy, aligned with the Australian Consumer Law (ACL)." },
      { property: "og:title", content: "Refund Policy — Hexa Ventures" },
      { property: "og:description", content: "Our refund and remedy commitments under the Australian Consumer Law." },
    ],
  }),
  component: RefundPolicy,
});

function RefundPolicy() {
  return (
    <LegalPage title="Refund Policy" updated="30 June 2026">
      <p>
        At Hexa Ventures Pty Ltd we are committed to delivering services that meet the consumer guarantees set out in the Australian Consumer Law (ACL), Schedule 2 of the <em>Competition and Consumer Act 2010</em> (Cth).
      </p>

      <Section heading="1. Your rights under the Australian Consumer Law">
        <p>Our services come with guarantees that cannot be excluded under the ACL. These include guarantees that services will be:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>provided with due care and skill;</li>
          <li>fit for the purpose you made known to us; and</li>
          <li>delivered within a reasonable time (where no time is fixed).</li>
        </ul>
        <p>If a service fails to meet a consumer guarantee, you are entitled to a remedy — which may include having the service performed again or, in the case of a major failure, a refund.</p>
      </Section>

      <Section heading="2. When refunds are offered">
        <p>We will provide a refund, full or partial, where:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>we have failed to deliver a service that was agreed and paid for;</li>
          <li>the service has a major failure that cannot be remedied within a reasonable time;</li>
          <li>a deposit was paid for work that has been cancelled by us before any work commenced.</li>
        </ul>
      </Section>

      <Section heading="3. When refunds may not be available">
        <p>We are not required to provide a refund where:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>you have changed your mind after the service has been performed in accordance with the agreed scope;</li>
          <li>the issue arises from circumstances outside our reasonable control;</li>
          <li>the service has been altered, damaged or affected after delivery by a third party.</li>
        </ul>
      </Section>

      <Section heading="4. How to request a refund">
        <p>To request a refund or raise a service concern, contact us within 14 days of the service being performed. Please include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>your name and contact details;</li>
          <li>the date and address of the service;</li>
          <li>a description of the issue and any supporting photos or documents;</li>
          <li>your preferred remedy.</li>
        </ul>
        <p>Send your request to <a className="underline underline-offset-4" href={MAIL}>admin@hexaventures.com.au</a>. We will acknowledge your request within 3 business days and aim to resolve it within 14 business days.</p>
      </Section>

      <Section heading="5. How refunds are processed">
        <p>Approved refunds are returned to the original payment method within 10 business days of approval.</p>
      </Section>

      <Section heading="6. Further information">
        <p>For more information about your rights, visit the Australian Competition and Consumer Commission (ACCC) at <a className="underline underline-offset-4" href="https://www.accc.gov.au" target="_blank" rel="noreferrer">accc.gov.au</a>.</p>
      </Section>
    </LegalPage>
  );
}
