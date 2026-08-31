export const revalidate = 60;
import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/lib/contentStore";
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
  SparkleIcon,
  TrendingUpIcon,
  CameraIcon,
  ChartIcon,
  CheckCircleIcon,
  UserIcon,
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
    "apoorva@hmorix.in",
  ],
  alternates: { canonical: "https://apoorva.hmorix.in/hire" },
};

const defaultPackages = [
  {
    name: "STARTER",
    price: "₹15,000",
    period: "per month",
    desc: "Perfect for local businesses and small brands starting their social media growth journey.",
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
    desc: "For brands serious about scaling fast. Full social management, viral Reels, and Meta ads included.",
    features: [
      "2 platforms managed (Instagram + Facebook)",
      "20 feed posts + 8 scripted viral Reels",
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
    title: "Brand Collaborations",
    desc: "Sponsored Reels, authentic product reviews, and brand integrations reaching 2M+ organic Hindi audience.",
  },
  {
    icon: <CameraIcon size={24} />,
    title: "UGC Video Creation",
    desc: "Hook-driven, high-converting UGC video ads for D2C brands, skincare, fashion, and lifestyle products.",
  },
  {
    icon: <ChartIcon size={24} />,
    title: "Full Account Management",
    desc: "End-to-end management of your Instagram, YouTube, or Facebook channels with consistent posting and strategy.",
  },
  {
    icon: <SpiritualIcon size={24} />,
    title: "Spiritual & Cultural Campaigns",
    desc: "Dedicated Krishna and devotional storytelling campaigns with deep cultural reverence for wellness & heritage brands.",
  },
  {
    icon: <BuildingIcon size={24} />,
    title: "Local Business Growth",
    desc: "Targeted Meta ad funnels & local branding for businesses in Hathras, Agra, Mathura, and across North India.",
  },
  {
    icon: <MicIcon size={24} />,
    title: "Speaking & Workshops",
    desc: "Digital marketing workshops, content creation masterclasses, and creator panels for educational institutions.",
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

export default async function HirePage() {
  const content = await getContent();
  const contact = content.contact || {};
  const services = content.services || {};
  const hire = content.hire || {};
  const photos = content.photos || {};

  const heroTitle = hire.pageHeroTitle || "HIRE APOORVA KAUSHAL";
  const heroSub =
    hire.pageHeroSub ||
    "Available for full-service social media management, creative UGC video production, sponsored brand integrations, and digital growth consulting.";

  const whatsappNumber = contact.whatsappNumber || "919368153189";
  const email = contact.email || "apoorva@hmorix.in";
  const instagramHandle = contact.instagramHandle || "@apoorva__kaushal";
  const location = contact.location || "Hathras, Uttar Pradesh, India";

  const hirePhoto1 = photos.hire1 || photos.work1 || "/photos/IMG-20260205-WA0035.jpg";
  const hirePhoto2 = photos.hire2 || photos.profile || "/photos/IMG-20250107-WA0012.jpg";

  const packages = services.packages && services.packages.length > 0 ? services.packages : defaultPackages;

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="page-hero">
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
          <span className="tag">Hire Me</span>
          <span className="tag tag-maroon">Available for Projects</span>
          <span className="tag tag-maroon">Hathras, UP · Pan India</span>
        </div>
        <h1 className="page-hero-title display">{heroTitle}</h1>
        <p className="page-hero-sub">{heroSub}</p>

        {/* Quick CTA row */}
        <div style={{ display: "flex", gap: 14, marginTop: 24, flexWrap: "wrap" }}>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%20Apoorva%2C%20I%20visited%20your%20website%20and%20want%20to%20hire%20you!`}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px" }}
          >
            <WhatsAppIcon size={16} />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href={`mailto:${email}?subject=Project%20Inquiry%20via%20Website`}
            className="btn btn-outline"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px" }}
          >
            <MailIcon size={16} />
            <span>Email Inquiry</span>
          </a>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="stats-strip">
        <div className="stat-card">
          <div className="stat-num display">2M+</div>
          <div className="stat-label">Total Digital Reach</div>
          <div className="stat-sub">Across Instagram &amp; YouTube</div>
        </div>
        <div className="stat-card">
          <div className="stat-num display">340K</div>
          <div className="stat-label">Avg Reel Views</div>
          <div className="stat-sub">Top video: 420K views</div>
        </div>
        <div className="stat-card">
          <div className="stat-num display">5+</div>
          <div className="stat-label">Brand Campaigns</div>
          <div className="stat-sub">D2C, Fashion &amp; Spiritual</div>
        </div>
        <div className="stat-card">
          <div className="stat-num display">100%</div>
          <div className="stat-label">On-Time Delivery</div>
          <div className="stat-sub">Guaranteed SLA Turnaround</div>
        </div>
      </div>

      {/* ── VISUAL SHOWCASE STRIP ── */}
      <section className="section" style={{ background: "var(--paper)", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "center" }}>
          {/* Card 1 */}
          <div style={{ background: "var(--white)", borderRadius: 12, border: "1px solid var(--line)", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
            <div style={{ height: 220, position: "relative", overflow: "hidden", background: "#e2e8f0" }}>
              <img
                src={hirePhoto1}
                alt="Creative Content Production"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <span className="tag tag-maroon" style={{ position: "absolute", bottom: 12, left: 12 }}>
                Creative Direction
              </span>
            </div>
            <div style={{ padding: "20px 24px" }}>
              <h3 className="display" style={{ fontSize: 18, color: "var(--navy)", marginBottom: 6 }}>
                Content Creation &amp; UGC
              </h3>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                Captivating video reels, authentic creator endorsements, and high-retention storytelling designed to stop the scroll.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div style={{ background: "var(--white)", borderRadius: 12, border: "1px solid var(--line)", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
            <div style={{ height: 220, position: "relative", overflow: "hidden", background: "#e2e8f0" }}>
              <img
                src={hirePhoto2}
                alt="Strategic Social Management"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <span className="tag tag-maroon" style={{ position: "absolute", bottom: 12, left: 12 }}>
                Full Management
              </span>
            </div>
            <div style={{ padding: "20px 24px" }}>
              <h3 className="display" style={{ fontSize: 18, color: "var(--navy)", marginBottom: 6 }}>
                Strategic Growth &amp; Ads
              </h3>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                Complete social media management, daily audience engagement, Meta ad funnels, and data-driven monthly reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLABORATION & SERVICES GRID ── */}
      <section className="section">
        <div className="section-title-row">
          <div>
            <span className="tag">Ways to Work Together</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              SERVICES &amp; COLLABORATION
            </h2>
          </div>
        </div>
        <div className="services-grid" style={{ borderTop: "none" }}>
          {collabTypes.map((c) => (
            <div className="service-card" key={c.title}>
              <div className="service-icon-box">{c.icon}</div>
              <div className="service-name display">{c.title}</div>
              <p className="service-desc" style={{ marginTop: 8 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MONTHLY PACKAGES & PRICING ── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">Monthly Retainers</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              SOCIAL MEDIA PACKAGES
            </h2>
          </div>
        </div>
        <div className="hire-packages">
          {packages.map((p) => (
            <div className={`hire-pkg${p.featured ? " featured" : ""}`} key={p.name}>
              {p.featured && <div className="recommended-badge">MOST POPULAR</div>}
              <div className="pkg-name display">{p.name}</div>
              <div className="pkg-price display">{p.price}</div>
              <div className="pkg-period">{p.period}</div>
              <p className="service-desc" style={{ marginBottom: 20 }}>{p.desc}</p>
              <div className="service-features" style={{ flexGrow: 1, marginBottom: 24 }}>
                {p.features.map((f: string) => (
                  <div className="service-feature" key={f}>
                    <CheckIcon size={14} className="feature-check-icon" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hi Apoorva! I'm interested in booking the ${p.name} Package (${p.price}/${p.period}).`
                )}`}
                className={`btn ${p.featured ? "btn-primary" : "btn-outline"}`}
                style={{ width: "100%", justifyContent: "center", display: "inline-flex", alignItems: "center", gap: 8 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SparkleIcon size={13} />
                <span>{p.cta || "Select Package"}</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIRECT CONTACT & INQUIRY FORM ── */}
      <section className="section">
        <div className="section-title-row">
          <div>
            <span className="tag">Get In Touch</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              START A PROJECT
            </h2>
          </div>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info">
            <div className="contact-info-item">
              <span className="contact-info-icon">
                <WhatsAppIcon size={18} />
              </span>
              <div>
                <div className="contact-info-label">WhatsApp (Fastest Response)</div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20Apoorva!%20I'd%20like%20to%20discuss%20a%20project.`}
                  className="contact-info-val"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline", color: "var(--navy)" }}
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
                <div className="contact-info-label">Email Address</div>
                <a
                  href={`mailto:${email}?subject=Project%20Inquiry%20via%20Website`}
                  className="contact-info-val"
                  style={{ textDecoration: "underline", color: "var(--navy)" }}
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
                  style={{ textDecoration: "underline", color: "var(--navy)" }}
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
                <div className="contact-info-label">Base Location</div>
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
                  marginBottom: 6,
                  color: "var(--navy)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <CheckCircleIcon size={14} className="feature-check-icon" />
                Guaranteed Response Time
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                • WhatsApp: <strong>Within 2 hours</strong><br />
                • Email: <strong>Within 24 hours</strong>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="contact-form-wrap">
            <div className="display" style={{ fontSize: 22, marginBottom: 6, color: "var(--navy)" }}>
              PROJECT INQUIRY FORM
            </div>
            <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 24, lineHeight: 1.6 }}>
              Share your project requirements, target goals, or questions below. I will get back to you with custom strategy and pricing.
            </p>

            <form
              action={`mailto:${email}`}
              method="GET"
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
                    <option>Content Creation &amp; UGC Video</option>
                    <option>Meta Ads Campaign Strategy</option>
                    <option>Brand Collaboration / Sponsorship</option>
                    <option>SEO &amp; Copywriting</option>
                    <option>Krishna &amp; Spiritual Content</option>
                    <option>Multiple Services / Package</option>
                    <option>Other Inquiry</option>
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
                  Tell Me About Your Brand &amp; Goals *
                </label>
                <textarea
                  id="hire-message"
                  name="body"
                  className="form-textarea"
                  placeholder="What does your business do? What are your growth goals? Who is your target audience?"
                  required
                />
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, paddingLeft: 28, paddingRight: 28 }}
                >
                  <SparkleIcon size={14} />
                  <span>Send Project Inquiry</span>
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20Apoorva%2C%20I'm%20interested%20in%20hiring%20your%20services!`}
                  className="btn"
                  style={{ background: "#25D366", color: "white", display: "inline-flex", alignItems: "center", gap: 8 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={16} />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">Client Reviews</span>
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
