import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hire Apoorva Kaushal — Social Media Manager & Content Creator India",
  description:
    "Hire Apoorva Kaushal for social media management, content creation, Meta ads or brand collaboration. Based in Hathras, UP. Serving brands across India. Contact via form or WhatsApp.",
  keywords: [
    "hire Apoorva Kaushal", "hire social media manager India",
    "hire content creator India", "brand collaboration India",
    "hire influencer Uttar Pradesh", "social media manager for hire India",
  ],
  alternates: { canonical: "https://apoorvakaushal.com/hire" },
};

const packages = [
  {
    name: "STARTER",
    price: "₹15,000",
    period: "per month",
    desc: "Perfect for small businesses and local brands starting their social media journey.",
    features: [
      "1 platform managed (Instagram or Facebook)",
      "12 posts per month",
      "Basic content calendar",
      "Monthly performance report",
      "Hashtag strategy",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "GROWTH",
    price: "₹35,000",
    period: "per month",
    desc: "For brands serious about growth. Full management, content creation and ads included.",
    features: [
      "2 platforms managed (Instagram + Facebook)",
      "24 posts + 8 Reels per month",
      "Meta Ads (up to ₹15K spend)",
      "Weekly performance reports",
      "Content strategy & calendar",
      "Monthly strategy call",
    ],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "PREMIUM",
    price: "₹65,000",
    period: "per month",
    desc: "Complete digital presence management for established brands and businesses.",
    features: [
      "All platforms (IG + FB + YouTube)",
      "Unlimited content creation",
      "Meta Ads (up to ₹40K spend)",
      "SEO & blog content",
      "Weekly strategy calls",
      "Priority WhatsApp support",
    ],
    cta: "Contact for Details",
    featured: false,
  },
];

export default function HirePage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <span className="tag">Hire Me</span>
        <h1 className="page-hero-title display">LET'S WORK TOGETHER</h1>
        <p className="page-hero-sub">
          Choose a package or reach out directly. I work with brands, businesses and creators across India and internationally.
        </p>
      </section>

      {/* ── PACKAGES ── */}
      <div className="hire-packages">
        {packages.map((p) => (
          <div className={`hire-pkg${p.featured ? " featured" : ""}`} key={p.name}>
            {p.featured && <div className="recommended-badge">Most Popular</div>}
            <span className="tag" style={p.featured ? { background: "rgba(255,255,255,.15)", borderColor: "rgba(255,255,255,.25)", color: "white" } : {}}>Package</span>
            <div className="pkg-name display" style={{ marginTop: 12 }}>{p.name}</div>
            <div className="pkg-price display">{p.price}</div>
            <div className="pkg-period muted">{p.period}</div>
            <p className="service-desc">{p.desc}</p>
            <div className="service-features" style={{ marginBottom: 28 }}>
              {p.features.map((f) => (
                <div className="service-feature" key={f}>{f}</div>
              ))}
            </div>
            <a
              href="https://wa.me/919XXXXXXXXX?text=Hi%20Apoorva%2C%20I%27m%20interested%20in%20your%20services!"
              className="btn"
              style={p.featured
                ? { background: "var(--maroon)", color: "white", width: "100%", justifyContent: "center" }
                : { background: "var(--navy)", color: "white", width: "100%", justifyContent: "center" }
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.cta} →
            </a>
          </div>
        ))}
      </div>

      {/* ── COLLABORATION TYPES ── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">Collaborations</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>I ALSO OFFER</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, border: "1px solid var(--line)", borderRadius: 8, overflow: "hidden" }}>
          {[
            { icon: "🤝", title: "Brand Collaboration", desc: "Sponsored Reels, product reviews, brand integrations across India." },
            { icon: "🎤", title: "Speaking & Events", desc: "Digital marketing workshops, brand strategy sessions, creator panels." },
            { icon: "🕉️", title: "Spiritual Campaigns", desc: "Krishna/devotional content for spiritual brands and pages." },
            { icon: "🏢", title: "Agency Partnerships", desc: "White-label content creation and strategy for digital agencies." },
          ].map((c, i) => (
            <div key={c.title} style={{ padding: "36px 28px", borderRight: i < 3 ? "1px solid var(--line)" : "none" }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
              <div className="display" style={{ fontSize: 15, marginBottom: 8 }}>{c.title}</div>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HIRE FORM + CONTACT ── */}
      <section className="section">
        <div className="section-title-row">
          <div>
            <span className="tag">Get in Touch</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>START A CONVERSATION</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 48 }}>
          {/* Left: Contact info */}
          <div>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 28 }}>
              The fastest way to reach me is WhatsApp. For formal inquiries, use the contact form or email. I respond to all messages within 24 hours.
            </p>
            {[
              { icon: "💬", label: "WhatsApp (Fastest)", val: "+91 9XXXXXXXXX", href: "https://wa.me/919XXXXXXXXX" },
              { icon: "📧", label: "Email", val: "apoorva@apoorvakaushal.com", href: "mailto:apoorva@apoorvakaushal.com" },
              { icon: "📸", label: "Instagram DM", val: "@apoorva_kaushal", href: "https://instagram.com/apoorva_kaushal" },
              { icon: "📍", label: "Location", val: "Hathras, Uttar Pradesh, India", href: null },
            ].map((c) => (
              <div className="contact-info-item" key={c.label}>
                <span className="contact-info-icon">{c.icon}</span>
                <div>
                  <div className="contact-info-label">{c.label}</div>
                  {c.href
                    ? <a href={c.href} className="contact-info-val" style={{ textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">{c.val}</a>
                    : <div className="contact-info-val">{c.val}</div>
                  }
                </div>
              </div>
            ))}
            <div style={{ marginTop: 28, padding: "20px 24px", background: "var(--paper)", borderRadius: 8, border: "1px solid var(--line)" }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 8 }}>Response Time</div>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>WhatsApp: within 2 hours<br />Email: within 24 hours</div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <div className="form-group">
                <label className="form-label" htmlFor="hire-name">Your Name *</label>
                <input id="hire-name" name="name" type="text" className="form-input" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="hire-email">Email *</label>
                <input id="hire-email" name="email" type="email" className="form-input" placeholder="your@email.com" required />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <div className="form-group">
                <label className="form-label" htmlFor="hire-phone">WhatsApp / Phone</label>
                <input id="hire-phone" name="phone" type="tel" className="form-input" placeholder="+91 XXXXXXXXXX" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="hire-service">Service Needed *</label>
                <select id="hire-service" name="service" className="form-select" required>
                  <option value="">Select a service...</option>
                  <option>Social Media Management</option>
                  <option>Content Creation &amp; UGC</option>
                  <option>Meta Ads Campaign</option>
                  <option>Brand Collaboration</option>
                  <option>SEO &amp; Copywriting</option>
                  <option>Krishna &amp; Spiritual Content</option>
                  <option>Multiple / Package</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="hire-budget">Monthly Budget</label>
              <select id="hire-budget" name="budget" className="form-select">
                <option value="">Select budget range...</option>
                <option>Under ₹10,000</option>
                <option>₹10,000 – ₹25,000</option>
                <option>₹25,000 – ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000+</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="hire-message">Tell Me About Your Brand *</label>
              <textarea id="hire-message" name="message" className="form-textarea" placeholder="What does your brand do? What are your goals? What's your target audience?" required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start", paddingLeft: 36, paddingRight: 36 }}>
              Send Enquiry ✦
            </button>
          </form>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">Testimonials</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>WHAT BRANDS SAY</h2>
          </div>
        </div>
        <div className="testi-grid">
          {[
            { quote: "Apoorva completely transformed our Instagram. In 3 months, we went from barely visible to having our best-performing content ever. She understands Hindi audiences like nobody else.", name: "Priya Sharma", role: "Founder, Fashion Boutique, Hathras" },
            { quote: "The Meta ad campaign she ran for us was exceptional. 3.2× ROAS and a 64% drop in acquisition cost. The Hindi ad copy she wrote converted incredibly well.", name: "Rohit Gupta", role: "Owner, Local Business, UP" },
            { quote: "The Krishna content series she created for our spiritual page was beautiful, authentic and viral. We went from 0 to 500K followers organically. Pure magic.", name: "Ananya Verma", role: "Admin, Spiritual Content Page" },
          ].map((t) => (
            <div className="testi-card" key={t.name}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">&quot;{t.quote}&quot;</p>
              <div className="testi-author">
                <div className="testi-avatar" />
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
