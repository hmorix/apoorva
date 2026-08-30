import type { Metadata } from "next";
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
  SparkleIcon,
} from "@/components/Icons";

export const dynamic = "force-dynamic";

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
  name: string;
  tagline: string;
  price: string;
  desc: string;
  features: string[];
}

const serviceIcons = [
  <VideoIcon key="0" size={24} />,
  <PhoneIcon key="1" size={24} />,
  <ChartIcon key="2" size={24} />,
  <PenIcon key="3" size={24} />,
  <HandshakeIcon key="4" size={24} />,
  <SpiritualIcon key="5" size={24} />,
];

export default async function ServicesPage() {
  const content = await getContent();
  const services = content.services;

  const pageHeroTitle = services.pageHeroTitle || "SERVICES & PRICING";
  const pageHeroSub =
    services.pageHeroSub ||
    "Video creation, script writing, social media management, Meta ads, SEO, website content and brand collaborations — tailored for brands and businesses across India by Apoorva Kaushal.";

  const activeServices: ServiceItem[] =
    services.servicesList && services.servicesList.length > 0
      ? services.servicesList
      : [
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
            price: `Starting ${services.starterPrice || "₹15,000"}/${services.starterPeriod || "mo"}`,
            desc: services.starterDesc || "End-to-end management of your Instagram, YouTube or Facebook account. Content planning, scripting, posting, engagement, analytics and growth strategy.",
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
            price: `Starting ${services.growthPrice || "₹35,000"}/${services.growthPeriod || "mo"}`,
            desc: services.growthDesc || "Strategy, creative, audience targeting, A/B testing and daily optimisation of your Facebook, Instagram and Google ad campaigns. Full transparency on spend and ROAS.",
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
            price: `Starting ${services.premiumPrice || "₹65,000"}/${services.premiumPeriod || "mo"}`,
            desc: services.premiumDesc || "Authentic sponsored content, product integrations and brand partnerships reaching 2M+ audience across beauty, lifestyle, fashion, tech and spiritual niches.",
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
          <span className="tag tag-maroon">Hathras, UP</span>
        </div>
        <h1 className="page-hero-title display">{pageHeroTitle}</h1>
        <p className="page-hero-sub">{pageHeroSub}</p>
      </section>

      {/* ── SERVICES GRID ── */}
      <div className="services-grid" style={{ borderTop: "none" }}>
        {activeServices.map((s: ServiceItem, idx: number) => (
          <div className="service-card" key={s.name}>
            <div className="service-icon-box">{serviceIcons[idx % serviceIcons.length]}</div>
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
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--navy)" }}>
                {p.title}
              </div>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="section" style={{ textAlign: "center", background: "var(--navy)", color: "white" }}>
        <h2 className="display" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 12, color: "white" }}>
          NOT SURE WHICH PACKAGE FITS?
        </h2>
        <p style={{ maxWidth: 540, margin: "0 auto 28px", opacity: 0.8, fontSize: 15, lineHeight: 1.6 }}>
          Send a quick message on WhatsApp. We can discuss your goals and put together a tailored plan for your brand.
        </p>
        <Link
          href="/contact"
          className="btn"
          style={{ background: "white", color: "var(--navy)", fontWeight: 700 }}
        >
          Book a Free Consultation
        </Link>
      </section>
    </>
  );
}
