import type { Metadata } from "next";
import Link from "next/link";
import {
  PhoneIcon,
  VideoIcon,
  ChartIcon,
  HandshakeIcon,
  PenIcon,
  SpiritualIcon,
  CheckIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  SparkleIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services & Pricing — Social Media Management, Content Creation & Meta Ads",
  description:
    "Apoorva Kaushal offers social media management, content creation (Reels, UGC), Meta/Instagram ads, brand collaboration, SEO & copywriting services. Based in Hathras, India.",
  keywords: [
    "social media management India",
    "content creation service India",
    "Meta ads India",
    "Instagram reels creator India",
    "brand collaboration India",
    "hire social media manager India",
    "Apoorva Kaushal services",
    "social media manager Hathras",
  ],
  alternates: { canonical: "https://apoorvakaushal.vercel.app/services" },
};

const services = [
  {
    icon: <PhoneIcon size={24} />,
    name: "Social Media Management",
    tagline: "Full-service account growth",
    price: "Starting ₹15,000/mo",
    desc: "End-to-end management of your Instagram, YouTube or Facebook account. Content planning, posting, engagement, analytics and growth strategy — all handled.",
    features: [
      "Monthly content calendar & strategy",
      "Regular scheduled posting",
      "Audience engagement & DM monitoring",
      "Monthly performance & growth report",
      "Hashtag & SEO keyword strategy",
      "Competitor and trend analysis",
    ],
  },
  {
    icon: <VideoIcon size={24} />,
    name: "Content Creation & UGC",
    tagline: "Video, reels & visual content",
    price: "Starting ₹8,000/project",
    desc: "High-quality Reels, short-form videos, UGC content and Instagram feed visuals. Scripted, styled and optimised for maximum watch time and organic engagement.",
    features: [
      "Scripting & storytelling concepts",
      "On-camera Hindi & English delivery",
      "Full video editing with animated captions",
      "Trend-aligned viral audio integration",
      "Custom thumbnail & cover design",
      "Platform-optimised 9:16 export",
    ],
  },
  {
    icon: <ChartIcon size={24} />,
    name: "Meta Ads Campaigns",
    tagline: "Facebook & Instagram advertising",
    price: "Starting ₹12,000/mo",
    desc: "Strategy, creative, audience targeting, A/B testing and daily optimisation of your Facebook and Instagram ad campaigns. Full transparency on spend and ROAS.",
    features: [
      "Targeted campaign structure setup",
      "High-converting ad copy & visuals",
      "Audience segmentation & retargeting",
      "Daily budget & ROAS optimisation",
      "Clear weekly performance dashboards",
      "Conversion tracking & pixel setup",
    ],
  },
  {
    icon: <HandshakeIcon size={24} />,
    name: "Brand Collaboration",
    tagline: "Sponsored & partnership content",
    price: "Custom quote",
    desc: "Authentic sponsored content, product integrations and brand partnerships. Reaching 2M+ audience across beauty, lifestyle, fashion, tech and spiritual niches.",
    features: [
      "Dedicated Reel or YouTube video",
      "Multi-story Instagram campaign",
      "Cross-platform distribution",
      "Commercial usage rights included",
      "Detailed post-campaign reach analytics",
      "Long-term ambassador packages",
    ],
  },
  {
    icon: <PenIcon size={24} />,
    name: "SEO & Copywriting",
    tagline: "Words that rank and convert",
    price: "Starting ₹5,000/project",
    desc: "Keyword research, website copy, social media captions, blog content and ad copy — all crafted to rank organically on Google and turn viewers into buyers.",
    features: [
      "Targeted keyword & entity research",
      "Conversion-focused landing page copy",
      "Engaging social media captions",
      "Articles & blog posts (Hindi & English)",
      "High-converting ad headlines & CTAs",
      "Search-optimized meta descriptions",
    ],
  },
  {
    icon: <SpiritualIcon size={24} />,
    name: "Krishna & Spiritual Content",
    tagline: "Devotional digital storytelling",
    price: "Starting ₹6,000/project",
    desc: "Authentic Radha-Krishna reels, Bhagavad Gita wisdom content, and devotional storytelling created with deep cultural reverence for modern audiences.",
    features: [
      "Story-driven lyrical reels",
      "Krishna quotes & philosophical teachings",
      "Bhagavad Gita daily wisdom content",
      "Authentic Hindi voiceover & delivery",
      "Spiritual & festive caption writing",
      "High organic saves and shares",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
          <span className="tag">Services</span>
          <span className="tag tag-maroon">Clear Pricing</span>
        </div>
        <h1 className="page-hero-title display">SERVICES &amp; PRICING</h1>
        <p className="page-hero-sub">
          Social media management, content creation, Meta ads and brand collaborations — tailored for brands and businesses across India.
        </p>
      </section>

      {/* ── SERVICES GRID ── */}
      <div className="services-grid" style={{ borderTop: "none" }}>
        {services.map((s) => (
          <div className="service-card" key={s.name}>
            <div className="service-icon-box">{s.icon}</div>
            <div className="service-name display">{s.name}</div>
            <div className="tag tag-maroon" style={{ marginBottom: 14 }}>
              {s.tagline}
            </div>
            <p className="service-desc">{s.desc}</p>
            <div className="service-price">{s.price}</div>
            <div className="service-features">
              {s.features.map((f) => (
                <div className="service-feature" key={f}>
                  <CheckIcon size={14} className="feature-check-icon" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <Link
              href="/hire"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center", display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <SparkleIcon size={13} />
              <span>Get Started</span>
            </Link>
          </div>
        ))}
      </div>

      {/* ── PROCESS ── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">How It Works</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              THE PROCESS
            </h2>
          </div>
        </div>
        <div className="service-process-grid">
          {[
            {
              step: "01",
              title: "Discovery Call",
              desc: "We discuss your brand, target audience, business objectives, and budget via WhatsApp or call.",
            },
            {
              step: "02",
              title: "Strategy & Proposal",
              desc: "I craft a customized content calendar and transparent execution plan within 48 hours.",
            },
            {
              step: "03",
              title: "Content & Launch",
              desc: "Content is written, produced, polished, and scheduled with your approval.",
            },
            {
              step: "04",
              title: "Report & Scale",
              desc: "Monthly performance reports with actionable data to optimize and compound your reach.",
            },
          ].map((p, i) => (
            <div
              key={p.step}
              style={{
                padding: "36px 24px",
                borderRight: i < 3 ? "1px solid var(--line)" : "none",
              }}
            >
              <div
                className="display"
                style={{
                  fontSize: 48,
                  color: "var(--line)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {p.step}
              </div>
              <div
                className="display"
                style={{ fontSize: 16, marginBottom: 10, color: "var(--navy)" }}
              >
                {p.title}
              </div>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "64px 48px",
          background: "var(--navy)",
          color: "var(--white)",
          textAlign: "center",
        }}
      >
        <h2
          className="display"
          style={{ fontSize: "clamp(28px,4vw,48px)", marginBottom: 16 }}
        >
          NOT SURE WHICH SERVICE YOU NEED?
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,.7)",
            maxWidth: 460,
            margin: "0 auto 32px",
            lineHeight: 1.6,
          }}
        >
          Send a quick message and I&apos;ll recommend the best strategy tailored to your budget and growth goals.
        </p>
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://wa.me/919368153189?text=Hi%20Apoorva%2C%20I%27m%20interested%20in%20your%20services!"
            className="btn"
            style={{ background: "#25D366", color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp Me</span>
          </a>
          <Link
            href="/contact"
            className="btn"
            style={{
              background: "rgba(255,255,255,.12)",
              color: "white",
              border: "1px solid rgba(255,255,255,.25)",
            }}
          >
            Contact Form
          </Link>
        </div>
      </section>
    </>
  );
}
