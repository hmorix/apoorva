import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Agreement — Apoorva Kaushal",
  description: "Legal agreement, disclaimer and engagement terms for Apoorva Kaushal's social media and content creation services.",
  alternates: { canonical: "https://apoorva.hmorix.in/legal" },
};

export default function LegalPage() {
  const updated = "17 August 2026";
  return (
    <>
      <section className="page-hero">
        <span className="tag">Legal</span>
        <h1 className="page-hero-title display">LEGAL AGREEMENT</h1>
        <p className="page-hero-sub">Last updated: {updated}</p>
      </section>
      <div className="legal-body">
        <p>This Legal Agreement ("Agreement") is entered into between <strong>Apoorva Kaushal</strong> (hereinafter "Service Provider"), based in Hathras, Uttar Pradesh, India, and the client or user ("Client") accessing or engaging services via <strong>apoorvakaushal.com</strong>.</p>

        <h2>1. Scope of Agreement</h2>
        <p>This Agreement governs the legal relationship between Apoorva Kaushal and all clients, collaborators, and users of the Website. It applies to all services including but not limited to social media management, content creation, Meta advertising, brand collaboration, SEO, and copywriting.</p>

        <h2>2. Service Engagement</h2>
        <p>All services commence only after:</p>
        <ul>
          <li>Written confirmation of scope and pricing via email or WhatsApp</li>
          <li>Receipt of agreed advance payment</li>
          <li>Acceptance of these terms by the Client</li>
        </ul>
        <p>No verbal agreements shall be binding. All modifications to agreed scope must be confirmed in writing.</p>

        <h2>3. Deliverables &amp; Timelines</h2>
        <p>Timelines are estimates based on standard workload and client responsiveness. Delays caused by late client approvals, incomplete briefs, or non-payment may extend timelines. The Service Provider will communicate any delays proactively.</p>

        <h2>4. Brand Collaboration Agreement</h2>
        <p>For brand collaborations and sponsored content:</p>
        <ul>
          <li>All sponsored content will be disclosed as per ASCI (Advertising Standards Council of India) guidelines.</li>
          <li>The Client must disclose any usage restrictions or brand safety requirements before work commences.</li>
          <li>Content must not promote illegal, harmful, or misleading products or claims.</li>
          <li>Exclusivity clauses (if applicable) must be agreed and compensated for separately.</li>
        </ul>

        <h2>5. Advertising Campaign Terms</h2>
        <p>For Meta (Facebook/Instagram) advertising services:</p>
        <ul>
          <li>Ad spend is paid directly by the Client to Meta. The Service Provider charges a management fee separately.</li>
          <li>The Service Provider is not liable for Meta account restrictions, ad rejections, or policy violations that arise from Client-provided content or product claims.</li>
          <li>Campaign results are estimated projections, not guarantees.</li>
          <li>The Client retains ownership of their ad account data.</li>
        </ul>

        <h2>6. Content Ownership &amp; Licensing</h2>
        <p>Upon full payment:</p>
        <ul>
          <li>The Client receives a non-exclusive, non-transferable licence to use the created content for the agreed platform and duration.</li>
          <li>Full buyout of all rights requires specific written agreement and additional compensation.</li>
          <li>The Service Provider retains the right to use the work for portfolio and promotional purposes unless a Non-Disclosure Agreement (NDA) is in place.</li>
        </ul>

        <h2>7. Prohibited Uses</h2>
        <p>The Client may not use our services to:</p>
        <ul>
          <li>Create content that is defamatory, obscene, or in violation of Indian law</li>
          <li>Promote products or services that are illegal in India</li>
          <li>Impersonate other individuals or brands</li>
          <li>Engage in any activity that violates Meta's, YouTube's, or any other platform's terms of service</li>
        </ul>

        <h2>8. Dispute Resolution</h2>
        <p>In the event of a dispute, both parties agree to first attempt resolution through good-faith negotiation. If unresolved within 30 days, disputes shall be referred to mediation in Hathras, Uttar Pradesh, India, before any legal proceedings.</p>
        <p>This Agreement shall be governed by the laws of India. The courts of Hathras, Uttar Pradesh shall have exclusive jurisdiction.</p>

        <h2>9. Force Majeure</h2>
        <p>Neither party shall be liable for failure to perform due to causes beyond their reasonable control, including natural disasters, government orders, platform outages, or other unforeseen events.</p>

        <h2>10. Entire Agreement</h2>
        <p>This Agreement, together with the Terms &amp; Conditions and Privacy Policy, constitutes the entire agreement between the parties. It supersedes all prior discussions, representations, and agreements.</p>

        <h2>11. Contact</h2>
        <p>Legal queries: <a href="mailto:apoorva@hmorix.in">apoorva@hmorix.in</a></p>
        <p>Apoorva Kaushal · Hathras, Uttar Pradesh, India 204101 · apoorvakaushal.com</p>
      </div>
    </>
  );
}
