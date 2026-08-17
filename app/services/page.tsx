import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Social Media Management, Content Creation & Meta Ads",
  description:
    "Apoorva Kaushal offers social media management, content creation (Reels, UGC), Meta/Instagram ads, brand collaboration, SEO & copywriting services. Based in Hathras, India.",
  keywords: [
    "social media management India", "content creation service India",
    "Meta ads India", "Instagram reels creator India",
    "brand collaboration India", "hire social media manager India",
    "Apoorva Kaushal services", "social media manager Hathras",
  ],
  alternates: { canonical: "https://apoorvakaushal.com/services" },
};

const services = [
  {
    icon: "📱",
    name: "Social Media Management",
    tagline: "Full-service account growth",
    price: "Starting ₹15,000/mo",
    desc: "End-to-end management of your Instagram, YouTube or Facebook account. Content planning, posting, engagement, analytics and growth strategy — all handled.",
    features: [
      "Monthly content calendar",
      "Daily posting & scheduling",
      "Audience engagement & DM management",
      "Monthly performance report",
      "Hashtag & SEO strategy",
      "Competitor analysis",
    ],
  },
  {
    icon: "🎬",
    name: "Content Creation & UGC",
    tagline: "Video, reels & visual content",
    price: "Starting ₹8,000/project",
    desc: "High-quality Reels, short-form videos, UGC content and Instagram feed visuals. Scripted, styled and optimised for maximum watch time and engagement.",
    features: [
      "Scripting & concept",
      "On-camera or voiceover delivery",
      "Video editing & captions",
      "Trend-aligned formats",
      "Thumbnail & cover design",
      "Platform-optimised delivery",
    ],
  },
  {
    icon: "📊",
    name: "Meta Ads Campaigns",
    tagline: "Facebook & Instagram advertising",
    price: "Starting ₹12,000/mo",
    desc: "Strategy, creative, targeting, A/B testing and daily optimisation of your Facebook and Instagram ad campaigns. Full transparency on spend and results.",
    features: [
      "Campaign strategy & setup",
      "Ad creative & copywriting",
      "Audience targeting & retargeting",
      "Daily monitoring & optimisation",
      "Weekly performance reports",
      "ROAS & conversion tracking",
    ],
  },
  {
    icon: "🤝",
    name: "Brand Collaboration",
    tagline: "Sponsored & partnership content",
    price: "Custom pricing",
    desc: "Authentic sponsored content, product integrations and brand partnerships. India-wide reach across beauty, lifestyle, fashion, tech and spiritual niches.",
    features: [
      "Dedicated reel or video",
      "Instagram story series",
      "Multi-platform posting",
      "Usage rights included",
      "Reach & engagement report",
      "Long-term partnership rates",
    ],
  },
  {
    icon: "✍️",
    name: "SEO & Copywriting",
    tagline: "Words that rank and convert",
    price: "Starting ₹5,000/project",
    desc: "Keyword research, website copy, social media captions, blog content and ad copy — all optimised to rank on Google and convert visitors into customers.",
    features: [
      "Keyword research",
      "Website page copy",
      "Social media captions",
      "Blog articles (Hindi/English)",
      "Ad copy & CTAs",
      "SEO meta descriptions",
    ],
  },
  {
    icon: "🕉️",
    name: "Krishna & Spiritual Content",
    tagline: "Devotional digital storytelling",
    price: "Starting ₹6,000/project",
    desc: "Authentic Radha-Krishna reels, Bhagavad Gita wisdom content, devotional storytelling — created with deep reverence for the tradition and designed for modern audiences.",
    features: [
      "Story-driven reels",
      "Krishna quotes & teachings",
      "Bhagavad Gita content",
      "Hindi language delivery",
      "Spiritual caption writing",
      "Festival & occasion content",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <span className="tag">Services</span>
        <h1 className="page-hero-title display">SERVICES &amp; PRICING</h1>
        <p className="page-hero-sub">
          Social media management, content creation, Meta ads and brand collaborations — tailored for brands and businesses across India.
        </p>
      </section>

      {/* ── SERVICES GRID ── */}
      <div className="services-grid" style={{ borderTop: "none" }}>
        {services.map((s) => (
          <div className="service-card" key={s.name} style={{ padding: 48 }}>
            <div className="service-icon">{s.icon}</div>
            <div className="service-name display">{s.name}</div>
            <div className="tag tag-maroon" style={{ marginBottom: 14 }}>{s.tagline}</div>
            <p className="service-desc">{s.desc}</p>
            <div className="service-price">{s.price}</div>
            <div className="service-features">
              {s.features.map((f) => (
                <div className="service-feature" key={f}>{f}</div>
              ))}
            </div>
            <Link href="/hire" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Get Started →
            </Link>
          </div>
        ))}
      </div>

      {/* ── PROCESS ── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">How It Works</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>THE PROCESS</h2>
          </div>
        </div>
        <div className="service-process-grid">
          {[
            { step: "01", title: "Discovery Call", desc: "We discuss your brand, goals, target audience and budget over WhatsApp or call." },
            { step: "02", title: "Strategy & Proposal", desc: "I prepare a customised strategy and detailed proposal within 48 hours." },
            { step: "03", title: "Content & Launch", desc: "Content is created, approved and goes live on schedule." },
            { step: "04", title: "Report & Optimise", desc: "Monthly performance reports with clear data. We optimise and scale what works." },
          ].map((p, i) => (
            <div key={p.step} style={{
              padding: "36px 24px",
              borderRight: i < 3 ? "1px solid var(--line)" : "none",
            }}>
              <div className="display" style={{ fontSize: 48, color: "var(--line)", lineHeight: 1, marginBottom: 8 }}>{p.step}</div>
              <div className="display" style={{ fontSize: 16, marginBottom: 10 }}>{p.title}</div>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "64px 48px", background: "var(--navy)", color: "var(--white)", textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: "clamp(28px,4vw,48px)", marginBottom: 16 }}>
          NOT SURE WHICH SERVICE?
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", maxWidth: 440, margin: "0 auto 32px", lineHeight: 1.6 }}>
          Send a message and I'll suggest the best fit for your brand and budget.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/919XXXXXXXXX?text=Hi%20Apoorva%2C%20I%27m%20interested%20in%20your%20services!" className="btn btn-maroon" target="_blank" rel="noopener noreferrer">
            WhatsApp Me ✦
          </a>
          <Link href="/contact" className="btn" style={{ background: "rgba(255,255,255,.1)", color: "white", border: "1px solid rgba(255,255,255,.2)" }}>
            Contact Form
          </Link>
        </div>
      </section>
    </>
  );
}
