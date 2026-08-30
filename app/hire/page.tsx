import type { Metadata } from "next";
import Link from "next/link";
import { getLocalContent } from "@/lib/contentStore";
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
  alternates: { canonical: "https://apoorvakaushal.vercel.app/hire" },
};

const defaultPackages = [
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
    title: "Local Business Growth",
    desc: "Targeted Meta ad funnels & local branding for businesses in Hathras, Agra, Mathura, and UP.",
  },
];

const testimonials = [
  {
    quote:
      "Apoorva transformed our social presence in just 2 months. Her understanding of Hindi audience psychology and local cultural nuances is unmatched. Our reel views went 5×.",
    name: "Fashion Boutique Owner",
    role: "Hathras, Uttar Pradesh",
  },
  {
    quote:
      "Her Krishna content series gave our spiritual brand the credibility and reach we couldn't get from paid ads. Authentic, creative, and extremely professional.",
    name: "Brand Director",
    role: "Wellness & Lifestyle Brand",
  },
  {
    quote:
      "From script to final edit, Apoorva delivers high-performing UGC videos with minimal revisions needed. She's our go-to creator for North India campaigns.",
    name: "Marketing Lead",
    role: "D2C Skincare Brand, Delhi NCR",
  },
];

export default function HirePage() {
  const content = getLocalContent();
  const contact = content.contact || {};
  const services = content.services || {};
  const hire = content.hire || {};

  const heroTitle = hire.pageHeroTitle || "HIRE APOORVA KAUSHAL";
  const heroSub =
    hire.pageHeroSub ||
    "Available for full-service social media management, creative UGC video production, sponsored brand integrations, and digital growth consulting.";

  const whatsappNumber = contact.whatsappNumber || "919368153189";
  const email = contact.email || "apoorva@apoorvakaushal.com";
  const instagramHandle = contact.instagramHandle || "@apoorva__kaushal";
  const location = contact.location || "Hathras, Uttar Pradesh, India";

  const packages = services.packages && services.packages.length > 0 ? services.packages : defaultPackages;

  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
          <span className="tag">Hire Me</span>
          <span className="tag tag-maroon">Available for Projects</span>
          <span className="tag tag-maroon">Hathras, UP</span>
        </div>
        <h1 className="page-hero-title display">{heroTitle}</h1>
        <p className="page-hero-sub">{heroSub}</p>
      </section>

      {/* ── COLLABORATION TYPES ── */}
      <section className="section">
        <div className="section-title-row">
          <div>
            <span className="tag">Ways to Work Together</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              SERVICES &amp; COLLABORATION
            </h2>
          </div>
        </div>
        <div className="hire-collab-grid">
          {collabTypes.map((c) => (
            <div className="collab-card" key={c.title}>
              <div className="collab-icon-box">{c.icon}</div>
              <div className="display collab-title">{c.title}</div>
              <p className="collab-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PACKAGES & PRICING ── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">Monthly Retainers</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              SOCIAL MEDIA PACKAGES
            </h2>
          </div>
        </div>
        <div className="pricing-grid">
          {packages.map((p) => (
            <div className={`pricing-card${p.featured ? " featured" : ""}`} key={p.name}>
              {p.featured && <div className="featured-badge">MOST POPULAR</div>}
              <div className="display package-name">{p.name}</div>
              <div className="price-row">
                <span className="price-amount">{p.price}</span>
                <span className="price-period">{p.period}</span>
              </div>
              <p className="package-desc">{p.desc}</p>
              <div className="package-features">
                {p.features.map((f: string) => (
                  <div className="feature-item" key={f}>
                    <CheckIcon size={14} className="feature-check" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hi Apoorva! I'm interested in the ${p.name} Package (${p.price}/${p.period}).`
                )}`}
                className={`btn ${p.featured ? "btn-primary" : "btn-outline"}`}
                style={{ width: "100%", justifyContent: "center", display: "inline-flex", alignItems: "center", gap: 8 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SparkleIcon size={13} />
                <span>{p.cta}</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIRECT CONTACT OPTIONS ── */}
      <section className="section">
        <div className="section-title-row">
          <div>
            <span className="tag">Get In Touch</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              DIRECT CONTACT
            </h2>
          </div>
        </div>

        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info">
            <div className="contact-info-item">
              <span className="contact-info-icon">
                <WhatsAppIcon size={18} />
              </span>
              <div>
                <div className="contact-info-label">WhatsApp (Fastest)</div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20Apoorva!`}
                  className="contact-info-val"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  +{whatsappNumber}
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
                  href={`mailto:${email}`}
                  className="contact-info-val"
                  style={{ textDecoration: "underline" }}
                >
                  {email}
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
                  href={`https://instagram.com/${instagramHandle.replace("@", "")}`}
                  className="contact-info-val"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  {instagramHandle}
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <MapPinIcon size={18} />
              </span>
              <div>
                <div className="contact-info-label">Location</div>
                <div className="contact-info-val">{location}</div>
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
