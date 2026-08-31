export const revalidate = 60;
import type { Metadata } from "next";
import type React from "react";
import Link from "next/link";
import { getContent } from "@/lib/contentStore";
import {
  VideoIcon,
  PhoneIcon,
  ChartIcon,
  HandshakeIcon,
  PenIcon,
  SpiritualIcon,
  CheckIcon,
  WhatsAppIcon,
  SparkleIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services & Pricing — Video Creation, Script Writing, Meta Ads, SEO & More",
  description:
    "Apoorva Kaushal offers video creation, script writing, social media management, Meta/Instagram ads, SEO, website content, brand collaboration & spiritual content. Based in Hathras, India.",
  keywords: [
    "video creation service India",
    "script writing for social media India",
    "social media creator India",
    "content creation service India",
    "Meta ads India",
    "Instagram reels creator India",
    "SEO service India",
    "website content India",
    "brand collaboration India",
    "hire social media creator India",
    "Apoorva Kaushal services",
    "HMorix services",
    "social media creator Hathras",
  ],
  alternates: { canonical: "https://apoorvakaushal.vercel.app/services" },
};

export interface ServiceItem {
  icon: React.ReactNode;
  name: string;
  tagline: string;
  price: string;
  desc: string;
  features: string[];
}

const defaultServiceIcons: React.ReactNode[] = [
  <VideoIcon key="0" size={24} />,
  <PhoneIcon key="1" size={24} />,
  <ChartIcon key="2" size={24} />,
  <PenIcon key="3" size={24} />,
  <HandshakeIcon key="4" size={24} />,
  <SpiritualIcon key="5" size={24} />,
];

export default async function ServicesPage() {
  const content = await getContent();
  const services = content.services || {};
  const contact = content.contact || {};
  const whatsappNum = contact.whatsappNumber || "919368153189";

  const pageHeroTitle = services.pageHeroTitle || "SERVICES & PRICING";
  const pageHeroSub =
    services.pageHeroSub ||
    "Video creation, script writing, social media management, Meta ads, SEO, website content and brand collaborations — tailored for brands and businesses across India by Apoorva Kaushal & HMorix.";

  const rawList = services.servicesList && services.servicesList.length > 0 ? services.servicesList : [
    {
      name: "Video Creation & Script Writing",
      tagline: "Engaging videos from concept to final cut",
      price: "Starting ₹6,000/video",
      desc: "End-to-end video production — script writing, filming direction, editing, captions and platform optimisation. Every video is scripted for maximum engagement, retention and shares.",
      features: [
        "Custom script writing for Reels & YouTube Shorts",
        "Hook-driven storytelling for maximum retention",
        "Full video editing with animated captions",
        "Trend-aligned viral audio & music integration",
        "Platform-optimised 9:16 & 16:9 export",
        "Thumbnail & cover design included",
      ],
    },
    {
      name: "Social Media Management",
      tagline: "Full-service account growth",
      price: "Starting ₹15,000/mo",
      desc: "End-to-end management of your Instagram, YouTube or Facebook account. Content planning, scripting, posting, engagement, analytics and growth strategy — all handled by Apoorva.",
      features: [
        "Monthly content calendar & strategy",
        "Regular scheduled posting across platforms",
        "Audience engagement & DM monitoring",
        "Monthly performance & growth report",
        "Hashtag & SEO keyword strategy",
        "Competitor and trend analysis",
      ],
    },
    {
      name: "Meta Ads & Campaigns",
      tagline: "Facebook, Instagram & Google advertising",
      price: "Starting ₹12,000/mo",
      desc: "Strategy, creative, audience targeting, A/B testing and daily optimisation of your Facebook, Instagram and Google ad campaigns. Full transparency on spend and ROAS.",
      features: [
        "Targeted Facebook & Instagram campaign setup",
        "High-converting ad copy & visuals",
        "Google Ads & Meta Adsense management",
        "Audience segmentation & retargeting",
        "Daily budget & ROAS optimisation",
        "Conversion tracking & pixel setup",
      ],
    },
    {
      name: "SEO & Website Content",
      tagline: "Words that rank and convert",
      price: "Starting ₹5,000/project",
      desc: "Keyword research, website copy, landing pages, social media captions, blog content and ad copy — all crafted to rank organically on Google and turn visitors into buyers.",
      features: [
        "Targeted keyword & entity research",
        "Conversion-focused landing page copy",
        "Website content writing (Hindi & English)",
        "Engaging social media captions",
        "Articles & blog posts",
        "Search-optimized meta descriptions",
      ],
    },
    {
      name: "Brand Collaboration",
      tagline: "Sponsored & partnership content",
      price: "Custom quote",
      desc: "Authentic sponsored content, product integrations and brand partnerships reaching 2M+ audience across beauty, lifestyle, fashion, tech and spiritual niches.",
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

  const activeServices: ServiceItem[] = rawList.map((s, idx) => ({
    ...s,
    icon: defaultServiceIcons[idx % defaultServiceIcons.length],
  }));

  const processSteps = services.processSteps || [
    {
      step: "01",
      title: "Discovery Call",
      desc: "We discuss your brand, target audience, business objectives, and budget via WhatsApp or call.",
    },
    {
      step: "02",
      title: "Strategy & Script",
      desc: "I craft a customized content strategy, video scripts and transparent execution plan within 48 hours.",
    },
    {
      step: "03",
      title: "Create & Launch",
      desc: "Videos are scripted, produced, edited, polished and scheduled with your approval before going live.",
    },
    {
      step: "04",
      title: "Report & Scale",
      desc: "Monthly performance reports with actionable data to optimize and compound your reach.",
    },
  ];

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
          <span className="tag">Services</span>
          <span className="tag tag-maroon">Clear Pricing</span>
          <span className="tag tag-maroon">HMorix</span>
        </div>
        <h1 className="page-hero-title display">{pageHeroTitle}</h1>
        <p className="page-hero-sub">{pageHeroSub}</p>
      </section>

      {/* ── SERVICES GRID ── */}
      <div className="services-grid" style={{ borderTop: "none" }}>
        {activeServices.map((s: ServiceItem) => (
          <div className="service-card" key={s.name}>
            <div className="service-icon-box">{s.icon}</div>
            <div className="service-name display">{s.name}</div>
            <div className="tag tag-maroon" style={{ marginBottom: 14 }}>
              {s.tagline}
            </div>
            <p className="service-desc">{s.desc}</p>
            <div className="service-price">{s.price}</div>
            <div className="service-features">
              {s.features.map((f: string) => (
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
          {processSteps.map((p, i) => (
            <div
              key={p.step}
              style={{
                padding: "36px 24px",
                borderRight: i < processSteps.length - 1 ? "1px solid var(--line)" : "none",
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
            href={`https://wa.me/${whatsappNum}?text=Hi%20Apoorva%2C%20I%27m%20interested%20in%20your%20services!`}
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
