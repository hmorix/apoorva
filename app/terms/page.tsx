import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Apoorva Kaushal",
  description: "Terms and conditions for using apoorvakaushal.com and engaging Apoorva Kaushal's services.",
  alternates: { canonical: "https://apoorvakaushal.vercel.app/terms" },
};

export default function TermsPage() {
  const updated = "17 August 2026";
  return (
    <>
      <section className="page-hero">
        <span className="tag">Legal</span>
        <h1 className="page-hero-title display">TERMS &amp; CONDITIONS</h1>
        <p className="page-hero-sub">Last updated: {updated}</p>
      </section>
      <div className="legal-body">
        <p>Welcome to <strong>apoorvakaushal.com</strong> ("the Website"), operated by <strong>Apoorva Kaushal</strong>, a social media manager and content creator based in Hathras, Uttar Pradesh, India. By accessing or using this Website or engaging any services, you agree to these Terms &amp; Conditions.</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By using this Website, hiring services, or entering into a collaboration agreement with Apoorva Kaushal, you accept these Terms in full. If you disagree with any part, you must not use this Website or engage any services.</p>

        <h2>2. Services</h2>
        <p>Apoorva Kaushal provides social media management, content creation, Meta/Instagram advertising campaign management, brand collaboration, SEO and copywriting services. All services are subject to availability and mutual agreement.</p>
        <h3>2.1 Service Agreements</h3>
        <p>All service engagements require a written agreement (email or WhatsApp confirmation) outlining scope, timeline, and payment terms before work commences.</p>
        <h3>2.2 Revisions</h3>
        <p>Standard service packages include up to 2 rounds of revisions. Additional revisions will be billed at an agreed hourly rate.</p>

        <h2>3. Payment Terms</h2>
        <p>All prices are quoted in Indian Rupees (INR) unless otherwise stated. Payment terms:</p>
        <ul>
          <li>Monthly retainer services: 50% advance, 50% on delivery or by the 1st of each month.</li>
          <li>Project-based work: 100% advance for projects under ₹10,000; 50% advance for larger projects.</li>
          <li>Brand collaborations: Payment terms as agreed in individual contracts.</li>
        </ul>
        <p>Late payments may result in suspension of services. All payments are non-refundable once work has commenced, unless otherwise agreed in writing.</p>

        <h2>4. Intellectual Property</h2>
        <p>All content created by Apoorva Kaushal (including videos, graphics, copy, and strategies) remains the intellectual property of Apoorva Kaushal until full payment is received. Upon full payment, usage rights transfer to the client as specified in the service agreement.</p>
        <h3>4.1 Portfolio Rights</h3>
        <p>Apoorva Kaushal retains the right to display completed work in her portfolio, website, and social media unless the client requests confidentiality in writing.</p>

        <h2>5. Client Responsibilities</h2>
        <p>Clients are responsible for:</p>
        <ul>
          <li>Providing accurate brand information, assets and approvals in a timely manner.</li>
          <li>Ensuring all provided content complies with applicable laws and does not infringe third-party rights.</li>
          <li>Providing social media access credentials required for account management services.</li>
          <li>Reviewing and approving content within 48 hours of submission (delay may affect delivery timelines).</li>
        </ul>

        <h2>6. Limitation of Liability</h2>
        <p>Apoorva Kaushal makes no guarantees regarding specific results from social media management or advertising campaigns, as results depend on platform algorithms, market conditions, and other factors outside our control. We are not liable for:</p>
        <ul>
          <li>Loss of followers, reach, or engagement due to platform algorithm changes.</li>
          <li>Ad account restrictions or bans imposed by Meta or other platforms.</li>
          <li>Indirect, consequential, or incidental damages arising from use of our services.</li>
        </ul>

        <h2>7. Confidentiality</h2>
        <p>Both parties agree to keep confidential all non-public information shared during the engagement. This obligation survives termination of the service agreement.</p>

        <h2>8. Termination</h2>
        <p>Either party may terminate a service agreement with 30 days written notice. Upon termination, the client is responsible for payment of all work completed up to the termination date.</p>

        <h2>9. Governing Law</h2>
        <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hathras, Uttar Pradesh, India.</p>

        <h2>10. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of the updated Terms.</p>

        <h2>11. Contact</h2>
        <p>For questions about these Terms, contact us at: <a href="mailto:apoorva@hmorix.in">apoorva@hmorix.in</a></p>
        <p>Apoorva Kaushal · Hathras, Uttar Pradesh, India · apoorvakaushal.com</p>
      </div>
    </>
  );
}
