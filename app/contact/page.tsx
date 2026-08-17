import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Apoorva Kaushal — Hathras, Uttar Pradesh, India",
  description:
    "Contact Apoorva Kaushal for social media management, content creation, brand collaboration or any inquiry. Located in Hathras, Uttar Pradesh, India. WhatsApp, email and contact form available.",
  keywords: [
    "contact Apoorva Kaushal", "Apoorva Kaushal contact",
    "social media manager contact India", "content creator contact Hathras",
    "Apoorva Kaushal WhatsApp", "apoorva@apoorvakaushal.com",
  ],
  alternates: { canonical: "https://apoorvakaushal.com/contact" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Apoorva Kaushal — Social Media Management",
  description: "Social media management, content creation and digital marketing services.",
  url: "https://apoorvakaushal.com",
  telephone: "+91-9XXXXXXXXX",
  email: "apoorva@apoorvakaushal.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hathras",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
    postalCode: "204101",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "27.5954",
    longitude: "78.0524",
  },
  areaServed: [
    { "@type": "State", name: "Uttar Pradesh" },
    { "@type": "Country", name: "India" },
  ],
  sameAs: [
    "https://instagram.com/apoorva_kaushal",
    "https://youtube.com/@apoorva_kaushal",
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <span className="tag">Contact</span>
        <h1 className="page-hero-title display">GET IN TOUCH</h1>
        <p className="page-hero-sub">
          Based in Hathras, Uttar Pradesh, India 🇮🇳 — serving brands across India and internationally. Reach out via WhatsApp, email, or this form.
        </p>
      </section>

      {/* ── MAIN CONTACT GRID ── */}
      <div className="contact-grid">
        {/* Left: Info */}
        <div className="contact-info">
          <div style={{ marginBottom: 32 }}>
            <div className="display" style={{ fontSize: 22, marginBottom: 6 }}>CONTACT INFORMATION</div>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
              I work with brands across all of India. The fastest response is always WhatsApp.
            </p>
          </div>

          {[
            { icon: "💬", label: "WhatsApp", val: "+91 9XXXXXXXXX", href: "https://wa.me/919XXXXXXXXX?text=Hi%20Apoorva!", sub: "Fastest response — within 2 hours" },
            { icon: "📧", label: "Email", val: "apoorva@apoorvakaushal.com", href: "mailto:apoorva@apoorvakaushal.com", sub: "Response within 24 hours" },
            { icon: "📸", label: "Instagram", val: "@apoorva_kaushal", href: "https://instagram.com/apoorva_kaushal", sub: "DM for quick questions" },
            { icon: "▶️", label: "YouTube", val: "@apoorva_kaushal", href: "https://youtube.com/@apoorva_kaushal", sub: "Subscribe for content updates" },
            { icon: "📍", label: "Location", val: "Hathras, Uttar Pradesh, India", href: null, sub: "Serving clients across India & globally" },
          ].map((c) => (
            <div className="contact-info-item" key={c.label}>
              <span className="contact-info-icon">{c.icon}</span>
              <div>
                <div className="contact-info-label">{c.label}</div>
                {c.href
                  ? <a href={c.href} className="contact-info-val" style={{ textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">{c.val}</a>
                  : <div className="contact-info-val">{c.val}</div>
                }
                {c.sub && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{c.sub}</div>}
              </div>
            </div>
          ))}

          {/* India Map Placeholder */}
          <div style={{
            marginTop: 28, borderRadius: 8, overflow: "hidden",
            border: "1px solid var(--line)", background: "var(--paper)",
            padding: "32px 24px", textAlign: "center",
          }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🗺️</div>
            <div className="display" style={{ fontSize: 16, marginBottom: 4 }}>HATHRAS, UP</div>
            <p style={{ fontSize: 13, color: "var(--muted)" }}>Uttar Pradesh · India · 204101</p>
            <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 8 }}>
              Agra Division · 50 km from Mathura · 85 km from Agra
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form-wrap">
          <div className="display" style={{ fontSize: 22, marginBottom: 6 }}>SEND A MESSAGE</div>
          <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 28, lineHeight: 1.6 }}>
            Whether you want to hire me, collaborate, ask a question or just say hello — fill in the form and I'll get back to you.
          </p>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Name *</label>
                <input id="contact-name" name="name" type="text" className="form-input" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email *</label>
                <input id="contact-email" name="email" type="email" className="form-input" placeholder="your@email.com" required />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-phone">WhatsApp / Phone</label>
                <input id="contact-phone" name="phone" type="tel" className="form-input" placeholder="+91 XXXXXXXXXX" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-city">City / State</label>
                <input id="contact-city" name="city" type="text" className="form-input" placeholder="e.g. Hathras, UP" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-subject">Subject *</label>
              <select id="contact-subject" name="subject" className="form-select" required>
                <option value="">What is this about?</option>
                <option>Hire for Social Media Management</option>
                <option>Hire for Content Creation</option>
                <option>Brand Collaboration</option>
                <option>Meta Ads Campaign</option>
                <option>General Inquiry</option>
                <option>Media / Press</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Message *</label>
              <textarea id="contact-message" name="message" className="form-textarea" placeholder="Tell me about your project, brand or question..." required />
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button type="submit" className="btn btn-primary">Send Message ✦</button>
              <a
                href="https://wa.me/919XXXXXXXXX?text=Hi%20Apoorva%2C%20I%27d%20like%20to%20connect!"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp Instead
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* ── SERVICE AREAS ── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">Coverage</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>WHERE I WORK</h2>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {[
            "Hathras", "Agra", "Mathura", "Aligarh", "Uttar Pradesh",
            "Delhi NCR", "Mumbai", "Bengaluru", "Pan India", "International",
          ].map((loc) => (
            <span key={loc} style={{
              padding: "10px 20px", border: "1.5px solid var(--navy)",
              borderRadius: 24, fontSize: 13, fontWeight: 700,
              fontFamily: "Anton, sans-serif", letterSpacing: ".03em",
            }}>
              📍 {loc}
            </span>
          ))}
        </div>
        <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 24, lineHeight: 1.7 }}>
          I am based in <strong style={{ color: "var(--navy)" }}>Hathras, Uttar Pradesh</strong> and work with clients across all of India — from Tier-1 metros to Tier-2 and Tier-3 cities. I understand the Hindi-speaking market deeply and can create content that resonates with audiences from UP, Delhi, MP, Rajasthan and beyond.
        </p>
      </section>
    </>
  );
}
