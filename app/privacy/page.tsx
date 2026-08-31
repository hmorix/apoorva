import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Apoorva Kaushal",
  description: "Privacy policy for apoorvakaushal.com. Learn how Apoorva Kaushal collects, uses and protects your personal data.",
  alternates: { canonical: "https://apoorva.hmorix.in/privacy" },
};

export default function PrivacyPage() {
  const updated = "17 August 2026";
  return (
    <>
      <section className="page-hero">
        <span className="tag">Legal</span>
        <h1 className="page-hero-title display">PRIVACY POLICY</h1>
        <p className="page-hero-sub">Last updated: {updated}</p>
      </section>
      <div className="legal-body">
        <p>This Privacy Policy describes how <strong>Apoorva Kaushal</strong> ("we", "our", or "us") collects, uses, and protects information about you when you visit <strong>apoorvakaushal.com</strong> or engage our services. We are committed to protecting your privacy in accordance with applicable Indian data protection laws.</p>

        <h2>1. Information We Collect</h2>
        <h3>1.1 Information You Provide</h3>
        <p>When you use our contact form, hire form, or contact us directly, we may collect:</p>
        <ul>
          <li>Name and contact details (email, phone/WhatsApp number)</li>
          <li>Business or brand information</li>
          <li>City and state (for service area planning)</li>
          <li>Project or inquiry details</li>
        </ul>
        <h3>1.2 Information Collected Automatically</h3>
        <p>When you visit our Website, we may automatically collect:</p>
        <ul>
          <li>IP address and browser type</li>
          <li>Pages visited and time spent on pages</li>
          <li>Referral source (how you found us)</li>
          <li>Device type and operating system</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to inquiries and provide requested services</li>
          <li>Send service proposals, invoices and project updates</li>
          <li>Improve the Website and our services</li>
          <li>Send relevant communications (only where you have opted in)</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. Data Sharing</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
        <ul>
          <li><strong>Service providers</strong> (e.g., Formspree for form submissions, hosting providers) who assist us in operating the Website and delivering services — bound by confidentiality agreements.</li>
          <li><strong>Legal authorities</strong> where required by law or court order.</li>
        </ul>

        <h2>4. Cookies</h2>
        <p>Our Website may use cookies to improve your browsing experience. Cookies are small files stored on your device. You can disable cookies through your browser settings, though this may affect Website functionality.</p>

        <h2>5. Social Media Platforms</h2>
        <p>Our Website links to social media profiles (Instagram, YouTube, Facebook, X/Twitter). These platforms have their own privacy policies and we are not responsible for how they collect or use your data.</p>

        <h2>6. Data Security</h2>
        <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of internet transmission is 100% secure.</p>

        <h2>7. Data Retention</h2>
        <p>We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Client project data is retained for 3 years after project completion.</p>

        <h2>8. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data (where legally permissible)</li>
          <li>Opt out of marketing communications at any time</li>
        </ul>
        <p>To exercise these rights, contact us at <a href="mailto:apoorva@hmorix.in">apoorva@hmorix.in</a>.</p>

        <h2>9. Children's Privacy</h2>
        <p>Our Website and services are not directed to children under 13. We do not knowingly collect personal data from children.</p>

        <h2>10. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. The updated date will be reflected at the top of this page. We encourage you to review this page periodically.</p>

        <h2>11. Contact</h2>
        <p>For privacy-related questions or requests: <a href="mailto:apoorva@hmorix.in">apoorva@hmorix.in</a></p>
        <p>Apoorva Kaushal · Hathras, Uttar Pradesh, India · apoorvakaushal.com</p>
      </div>
    </>
  );
}
