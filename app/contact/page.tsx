export const revalidate = 60;
import type { Metadata } from "next";
import { getContent } from "@/lib/contentStore";
import {
  WhatsAppIcon,
  MailIcon,
  InstagramIcon,
  YouTubeIcon,
  MapPinIcon,
  CompassIcon,
  SparkleIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Apoorva Kaushal — Hathras, Uttar Pradesh, India",
  description:
    "Contact Apoorva Kaushal for social media management, content creation, brand collaboration or any inquiry. Located in Hathras, Uttar Pradesh, India. WhatsApp, email and contact form available.",
  keywords: [
    "contact Apoorva Kaushal",
    "Apoorva Kaushal contact",
    "social media manager contact India",
    "content creator contact Hathras",
    "Apoorva Kaushal WhatsApp",
    "apoorva@hmorix.in",
  ],
  alternates: { canonical: "https://apoorvakaushal.vercel.app/contact" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Apoorva Kaushal — Social Media Management",
  description: "Social media management, content creation and digital marketing services.",
  url: "https://apoorvakaushal.vercel.app",
  telephone: "+91-9368153189",
  email: "apoorva@hmorix.in",
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
    "https://instagram.com/apoorva__kaushal",
    "https://youtube.com/@_apoorva7__",
  ],
};

const coverageAreas = [
  "Hathras",
  "Agra",
  "Mathura",
  "Aligarh",
  "Uttar Pradesh",
  "Delhi NCR",
  "Mumbai",
  "Bengaluru",
  "Pan India",
  "International",
];

export default async function ContactPage() {
  const content = await getContent();
  const contact = content.contact || {};

  const email = contact.email || "apoorva@hmorix.in";
  const whatsappNumber = contact.whatsappNumber || "919368153189";
  const instagramHandle = contact.instagramHandle || "@apoorva__kaushal";
  const instagramUrl = contact.instagramUrl || `https://instagram.com/${instagramHandle.replace("@", "")}`;
  const youtubeHandle = contact.youtubeHandle || "@_apoorva7__";
  const youtubeUrl = contact.youtubeUrl || `https://youtube.com/${youtubeHandle}`;
  const location = contact.location || "Hathras, Uttar Pradesh, India";
  const postalCode = contact.postalCode || "204101";

  const channels = [
    {
      icon: <WhatsAppIcon size={20} />,
      label: "WhatsApp",
      val: `+${whatsappNumber}`,
      href: `https://wa.me/${whatsappNumber}?text=Hi%20Apoorva!`,
      sub: "Fastest response — typically within 2 hours",
    },
    {
      icon: <MailIcon size={20} />,
      label: "Email",
      val: email,
      href: `mailto:${email}`,
      sub: "Detailed inquiries — response within 24 hours",
    },
    {
      icon: <InstagramIcon size={20} />,
      label: "Instagram DM",
      val: instagramHandle,
      href: instagramUrl,
      sub: "Direct message for quick collaboration inquiries",
    },
    {
      icon: <YouTubeIcon size={20} />,
      label: "YouTube",
      val: youtubeHandle,
      href: youtubeUrl,
      sub: "Official video channel & community updates",
    },
    {
      icon: <MapPinIcon size={20} />,
      label: "Location",
      val: `${location} (${postalCode})`,
      href: null,
      sub: "Serving clients across India & internationally",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
          <span className="tag">Contact</span>
          <span className="tag tag-maroon">Hathras, UP</span>
        </div>
        <h1 className="page-hero-title display">GET IN TOUCH</h1>
        <p className="page-hero-sub">
          Based in Hathras, Uttar Pradesh, India — serving brands and creators across India and internationally. Reach out via WhatsApp, email, or this form.
        </p>
      </section>

      {/* ── MAIN CONTACT GRID ── */}
      <div className="contact-grid">
        {/* Left: Info */}
        <div className="contact-info">
          <div style={{ marginBottom: 32 }}>
            <div className="display" style={{ fontSize: 22, marginBottom: 6, color: "var(--navy)" }}>
              DIRECT CHANNELS
            </div>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
              Whether you need end-to-end social media management or a sponsored UGC campaign, let&apos;s talk.
            </p>
          </div>

          {channels.map((c) => (
            <div className="contact-info-item" key={c.label}>
              <span className="contact-info-icon">{c.icon}</span>
              <div>
                <div className="contact-info-label">{c.label}</div>
                {c.href ? (
                  <a
                    href={c.href}
                    className="contact-info-val"
                    style={{ textDecoration: "underline" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.val}
                  </a>
                ) : (
                  <div className="contact-info-val">{c.val}</div>
                )}
                {c.sub && (
                  <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>
                    {c.sub}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Location Details Card */}
          <div
            style={{
              marginTop: 28,
              borderRadius: 8,
              overflow: "hidden",
              border: "1px solid var(--line)",
              background: "var(--paper)",
              padding: "28px 24px",
              textAlign: "center",
            }}
          >
            <div style={{ color: "var(--navy)", marginBottom: 10, display: "flex", justifyContent: "center" }}>
              <CompassIcon size={36} />
            </div>
            <div className="display" style={{ fontSize: 18, marginBottom: 4, color: "var(--navy)" }}>
              HATHRAS, UTTAR PRADESH
            </div>
            <p style={{ fontSize: 13, color: "var(--muted)" }}>
              Postal Code: {postalCode} · Agra Division · India
            </p>
            <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 8 }}>
              50 km from Mathura · 85 km from Agra · 170 km from Delhi NCR
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form-wrap">
          <div className="display" style={{ fontSize: 22, marginBottom: 6, color: "var(--navy)" }}>
            SEND A MESSAGE
          </div>
          <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 28, lineHeight: 1.6 }}>
            Fill out this quick form with your project details and I&apos;ll get back to you with ideas and next steps.
          </p>

          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  Email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-phone">
                  WhatsApp / Phone
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  className="form-input"
                  placeholder="+91 9XXXXXXXXX"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-city">
                  City / State
                </label>
                <input
                  id="contact-city"
                  name="city"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Hathras, UP / Delhi"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-subject">
                Subject *
              </label>
              <select id="contact-subject" name="subject" className="form-select" required>
                <option value="">What is this regarding?</option>
                <option>Social Media Management Inquiry</option>
                <option>Content Creation &amp; UGC Video</option>
                <option>Brand Collaboration / Sponsorship</option>
                <option>Meta Ads Campaign Strategy</option>
                <option>General Question</option>
                <option>Media &amp; Press</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project, brand goals, or specific question..."
                required
              />
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <button type="submit" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <SparkleIcon size={14} />
                <span>Send Message</span>
              </button>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi%20Apoorva%2C%20I%27d%20like%20to%20connect!`}
                className="btn"
                style={{ background: "#25D366", color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={16} />
                <span>Chat on WhatsApp</span>
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
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              SERVICE LOCATIONS &amp; REACH
            </h2>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {coverageAreas.map((loc) => (
            <span
              key={loc}
              style={{
                padding: "8px 18px",
                border: "1.5px solid var(--navy)",
                borderRadius: 24,
                fontSize: 13,
                fontWeight: 700,
                fontFamily: "Anton, sans-serif",
                letterSpacing: ".03em",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "var(--white)",
              }}
            >
              <MapPinIcon size={14} />
              <span>{loc}</span>
            </span>
          ))}
        </div>
        <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 24, lineHeight: 1.7 }}>
          I am based in <strong style={{ color: "var(--navy)" }}>Hathras, Uttar Pradesh</strong> and partner with clients across India — from major metros (Delhi NCR, Mumbai, Bengaluru) to vibrant Tier-2 and Tier-3 cities. With deep cultural understanding of Hindi-speaking audiences, my campaigns deliver high engagement across UP, MP, Rajasthan, Haryana, and beyond.
        </p>
      </section>
    </>
  );
}
