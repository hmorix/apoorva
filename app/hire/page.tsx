import type { Metadata } from "next";
import Link from "next/link";
import {
  HandshakeIcon,
  MicIcon,
  SpiritualIcon,
  BuildingIcon,
  WhatsAppIcon,
  MailIcon,
  InstagramIcon,
  MapPinIcon,
  StarIcon,
  CheckIcon,
  ArrowRightIcon,
  SparkleIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Hire Apoorva Kaushal — Social Media Manager & Content Creator India",
  description:
    "Hire Apoorva Kaushal for social media management, content creation, Meta ads or brand collaboration. Based in Hathras, UP. Serving brands across India. Contact via form or WhatsApp.",
  keywords: [
    "hire Apoorva Kaushal",
    "hire social media manager India",
    "hire content creator India",
    "brand collaboration India",
    "hire influencer Uttar Pradesh",
    "social media manager for hire India",
  ],
  alternates: { canonical: "https://apoorvakaushal.com/hire" },
};

const packages = [
  {
    name: "STARTER",
    price: "₹15,000",
    period: "per month",
    desc: "Perfect for local businesses and small brands starting their social media journey.",
    features: [
      "1 platform managed (Instagram or Facebook)",
      "12 curated posts per month",
      "Content calendar & hashtag strategy",
      "Audience engagement monitoring",
      "Monthly performance growth report",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "GROWTH",
    price: "₹35,000",
    period: "per month",
    desc: "For brands serious about scaling. Full social management, viral Reels and Meta ads included.",
    features: [
      "2 platforms managed (Instagram + Facebook)",
      "20 feed posts + 8 scripted Reels per month",
      "Meta Ads campaign management (up to ₹15K spend)",
      "Weekly analytics & conversion tracking",
      "Full content strategy & monthly planning call",
      "Trend-aligned viral audio research",
    ],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "PREMIUM",
    price: "₹65,000",
    period: "per month",
    desc: "Complete 360° digital presence management for established businesses and fast-growing brands.",
    features: [
      "All platforms (Instagram + YouTube + Facebook)",
      "Unlimited high-converting UGC & video reels",
      "Meta Ads management (up to ₹40K spend)",
      "SEO copywriting & blog content strategy",
      "Bi-weekly strategic growth calls",
      "Direct priority WhatsApp VIP support",
    ],
    cta: "Contact for Details",
    featured: false,
  },
];

const collabTypes = [
  {
    icon: <HandshakeIcon size={24} />,
    title: "Brand Collaboration",
    desc: "Sponsored Reels, authentic product reviews, and brand integrations reaching 2M+ Hindi audience.",
  },
  {
    icon: <MicIcon size={24} />,
    title: "Speaking & Workshops",
    desc: "Digital marketing workshops, content creation masterclasses, and creator panels.",
  },
  {
    icon: <SpiritualIcon size={24} />,
    title: "Spiritual Campaigns",
    desc: "Dedicated Krishna and devotional storytelling campaigns for wellness & spiritual brands.",
  },
  {
    icon: <BuildingIcon size={24} />,
    title: "Agency Partnerships",
    desc: "White-label UGC video production and social media strategy for digital advertising agencies.",
  },
];

const testimonials = [
  {
    quote:
      "Apoorva completely transformed our Instagram. In 3 months, we went from barely visible to having our best-performing content ever. She understands Hindi audiences like nobody else.",
    name: "Priya Sharma",
    role: "Founder, Fashion Boutique (Hathras)",
  },
  {
    quote:
      "The Meta ad campaign she ran for us was exceptional. 3.4× ROAS and a 64% drop in acquisition cost. The Hindi ad copy she wrote converted with high engagement.",
    name: "Rohit Gupta",
    role: "Owner, Local Retail Business (UP)",
  },
  {
    quote:
      "The Krishna content series she created for our spiritual page was authentic, moving and viral. Pure organic storytelling magic.",
    name: "Ananya Verma",
    role: "Admin, Spiritual Page (Mathura)",
  },
];

export default function HirePage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
          <span className="tag">Hire Me</span>
          <span className="tag tag-maroon">Direct Collaboration</span>
        </div>
        <h1 className="page-hero-title display">LET&apos;S WORK TOGETHER</h1>
        <p className="page-hero-sub">
          Choose a monthly management package or request a custom quote. Serving brands, local businesses, and creators across India and internationally.
        </p>
      </section>

      {/* ── PACKAGES ── */}
      <div className="hire-packages">
        {packages.map((p) => (
          <div className={`hire-pkg${p.featured ? " featured" : ""}`} key={p.name}>
            {p.featured && <div className="recommended-badge">Most Popular</div>}
            <span
              className="tag"
              style={
                p.featured
                  ? {
                      background: "rgba(255,255,255,.15)",
                      borderColor: "rgba(255,255,255,.25)",
                      color: "white",
                    }
                  : {}
              }
            >
              Package
            </span>
            <div className="pkg-name display" style={{ marginTop: 12 }}>
              {p.name}
            </div>
            <div className="pkg-price display">{p.price}</div>
            <div className="pkg-period muted">{p.period}</div>
            <p className="service-desc">{p.desc}</p>
            <div className="service-features" style={{ marginBottom: 28 }}>
              {p.features.map((f) => (
                <div className="service-feature" key={f}>
                  <CheckIcon size={14} className="feature-check-icon" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/919368153189?text=Hi%20Apoorva%2C%20I%27m%20interested%20in%20your%20package!"
              className="btn"
              style={
                p.featured
                  ? {
                      background: "var(--maroon)",
                      color: "white",
                      width: "100%",
                      justifyContent: "center",
                    }
                  : {
                      background: "var(--navy)",
                      color: "white",
                      width: "100%",
                      justifyContent: "center",
                    }
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{p.cta}</span>
              <ArrowRightIcon size={14} />
            </a>
          </div>
        ))}
      </div>

      {/* ── COLLABORATION TYPES ── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">Collaborations</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              ADDITIONAL SERVICES
            </h2>
          </div>
        </div>
        <div className="service-process-grid">
          {collabTypes.map((c, i) => (
            <div
              key={c.title}
              style={{
                padding: "36px 28px",
                borderRight: i < 3 ? "1px solid var(--line)" : "none",
              }}
            >
              <div style={{ marginBottom: 14, color: "var(--maroon)" }}>
                {c.icon}
              </div>
              <div className="display" style={{ fontSize: 16, marginBottom: 8, color: "var(--navy)" }}>
                {c.title}
              </div>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HIRE FORM + CONTACT ── */}
      <section className="section">
        <div className="section-title-row">
          <div>
            <span className="tag">Inquiries</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              START A PROJECT
            </h2>
          </div>
        </div>
        <div className="contact-grid">
          {/* Left: Contact info */}
          <div className="contact-info">
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 28 }}>
              The fastest way to reach me is WhatsApp. For formal proposals and inquiries, please fill out the form below or send an email.
            </p>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <WhatsAppIcon size={18} />
              </span>
              <div>
                <div className="contact-info-label">WhatsApp (Fastest)</div>
                <a
                  href="https://wa.me/919368153189?text=Hi%20Apoorva!"
                  className="contact-info-val"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  +91 9368153189
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <MailIcon size={18} />
              </span>
              <div>
                <div className="contact-info-label">Email</div>
                <a
                  href="mailto:apoorva@apoorvakaushal.com"
                  className="contact-info-val"
                  style={{ textDecoration: "underline" }}
                >
                  apoorva@apoorvakaushal.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <InstagramIcon size={18} />
              </span>
              <div>
                <div className="contact-info-label">Instagram DM</div>
                <a
                  href="https://instagram.com/apoorva__kaushal"
                  className="contact-info-val"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  @apoorva__kaushal
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <MapPinIcon size={18} />
              </span>
              <div>
                <div className="contact-info-label">Location</div>
                <div className="contact-info-val">Hathras, Uttar Pradesh, India</div>
              </div>
            </div>

            <div
              style={{
                marginTop: 28,
                padding: "20px 24px",
                background: "var(--paper)",
                borderRadius: 8,
                border: "1px solid var(--line)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                  color: "var(--navy)",
                }}
              >
                Guaranteed Response Time
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                WhatsApp: within 2 hours<br />
                Email / Form: within 24 hours
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="contact-form-wrap"
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label" htmlFor="hire-name">
                  Your Name *
                </label>
                <input
                  id="hire-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="hire-email">
                  Email *
                </label>
                <input
                  id="hire-email"
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
                <label className="form-label" htmlFor="hire-phone">
                  WhatsApp / Phone
                </label>
                <input
                  id="hire-phone"
                  name="phone"
                  type="tel"
                  className="form-input"
                  placeholder="+91 9XXXXXXXXX"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="hire-service">
                  Service Needed *
                </label>
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
              <label className="form-label" htmlFor="hire-budget">
                Monthly Budget
              </label>
              <select id="hire-budget" name="budget" className="form-select">
                <option value="">Select budget range...</option>
                <option>Under ₹15,000</option>
                <option>₹15,000 – ₹35,000</option>
                <option>₹35,000 – ₹65,000</option>
                <option>₹65,000 – ₹1,00,000</option>
                <option>₹1,00,000+</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="hire-message">
                Tell Me About Your Brand *
              </label>
              <textarea
                id="hire-message"
                name="message"
                className="form-textarea"
                placeholder="What does your business do? What are your growth goals? What's your target audience?"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ alignSelf: "flex-start", paddingLeft: 36, paddingRight: 36, display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <SparkleIcon size={14} />
              <span>Send Project Inquiry</span>
            </button>
          </form>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">Testimonials</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              WHAT BRANDS SAY
            </h2>
          </div>
        </div>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <div className="testi-card" key={t.name}>
              <div className="testi-stars-row">
                {[...Array(5)].map((_, idx) => (
                  <StarIcon key={idx} size={15} className="star-icon-filled" />
                ))}
              </div>
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
