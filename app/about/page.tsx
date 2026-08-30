import type { Metadata } from "next";
import Link from "next/link";
import { getLocalContent } from "@/lib/contentStore";
import {
  LaughIcon,
  MaskIcon,
  BookIcon,
  SpiritualIcon,
  CheckIcon,
  MapPinIcon,
  InstagramIcon,
  YouTubeIcon,
  GlobeIcon,
  UsersIcon,
  TrendingUpIcon,
  SparkleIcon,
  WhatsAppIcon,
  ChartIcon,
  EyeIcon,
  PlayIcon,
  HeartIcon,
  BriefcaseIcon,
  LayersIcon,
  MailIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Apoorva Kaushal — Content Creator & Social Media Manager from Hathras, UP",
  description:
    "Learn about Apoorva Kaushal — social media manager and digital content creator from Hathras, Uttar Pradesh, India. 2M+ reach, 340K avg reel views, Hindi comedy, parodies & Krishna content.",
  keywords: [
    "Apoorva Kaushal biography",
    "Apoorva Kaushal life and journey",
    "who is Apoorva Kaushal",
    "Apoorva Kaushal content creator journey",
    "Apoorva Kaushal Hathras",
    "Apoorva Kaushal Uttar Pradesh creator",
    "Apoorva Kaushal social media manager",
  ],
  alternates: { canonical: "https://apoorvakaushal.vercel.app/about" },
};

const defaultQualifications = [
  { title: "Canva Masterclass Certified", org: "HMorix Media" },
  { title: "Email Marketing Certification", org: "HubSpot Academy" },
  { title: "Digital Marketing Specialization", org: "Accenture Digital" },
  { title: "Digital Ad Campaigns & Strategy", org: "Performance Marketing" },
  { title: "Meta Blueprint & Facebook Ads", org: "Meta Certified" },
  { title: "Higher Secondary & Digital Arts", org: "Hathras, Uttar Pradesh" },
];

const defaultContentPillars = [
  {
    icon: <LaughIcon size={26} className="about-pillar-icon" />,
    title: "Comedy & Sketches",
    desc: "Relatable Hindi comedy reels capturing everyday family dynamics, college moments, and desi situations.",
    stats: "340K avg. views",
  },
  {
    icon: <MaskIcon size={26} className="about-pillar-icon" />,
    title: "Character Parodies",
    desc: "Creative character roleplays and situational satire in conversational Hindi that resonate across age groups.",
    stats: "High share rate",
  },
  {
    icon: <BookIcon size={26} className="about-pillar-icon" />,
    title: "Informative Content",
    desc: "Bite-sized knowledge videos, interesting cultural facts, digital tips, and educational explainers in Hindi.",
    stats: "Top save rate",
  },
  {
    icon: <SpiritualIcon size={26} className="about-pillar-icon" />,
    title: "Krishna & Spiritual",
    desc: "Heartfelt Radha-Krishna devotional stories, Bhagavad Gita wisdom, and lyrical spiritual poetry.",
    stats: "560K+ reach",
  },
];

const defaultBrandCategories = [
  "Fashion & Apparel",
  "Beauty & Skincare",
  "Local Businesses & Retail",
  "Spiritual & Wellness",
  "Tech & Mobile Apps",
  "Food & Beverage",
  "Education & EdTech",
  "D2C E-Commerce",
];

const defaultCreatorValues = [
  {
    icon: <TrendingUpIcon size={22} />,
    title: "Organic-First Engagement",
    desc: "Focusing on strong hooks, authentic storytelling, and deep cultural connection rather than hollow trends.",
  },
  {
    icon: <UsersIcon size={22} />,
    title: "Hindi Heartland Reach",
    desc: "Deep resonance with Tier-1, Tier-2, and Tier-3 Hindi-speaking audiences across North India and Uttar Pradesh.",
  },
  {
    icon: <ChartIcon size={22} />,
    title: "Data & Retention Focus",
    desc: "Every script and campaign is tracked against watch-time, save rates, ROAS, and conversion metrics.",
  },
  {
    icon: <LayersIcon size={22} />,
    title: "Cross-Platform Synergy",
    desc: "Cohesive multi-platform distribution across Instagram Reels, YouTube Shorts, Facebook, and Meta Ads.",
  },
];

const defaultVerifiedStats = [
  {
    icon: <EyeIcon size={22} />,
    num: "2M+",
    label: "Total Organic Reach",
    sub: "All-time across channels",
  },
  {
    icon: <PlayIcon size={22} />,
    num: "340K",
    label: "Avg. Reel Views",
    sub: "Consistent organic performance",
  },
  {
    icon: <HeartIcon size={22} />,
    num: "6.8%",
    label: "Engagement Rate",
    sub: "3.2× industry average",
  },
  {
    icon: <BriefcaseIcon size={22} />,
    num: "5+",
    label: "Brands Collaborated",
    sub: "D2C, Retail & Wellness",
  },
  {
    icon: <YouTubeIcon size={22} />,
    num: "400k+",
    label: "YouTube Views",
    sub: "Shorts & Long-form videos",
  },
  {
    icon: <UsersIcon size={22} />,
    num: "5K+",
    label: "Combined Community",
    sub: "Instagram, YT & Facebook",
  },
  {
    icon: <SparkleIcon size={22} />,
    num: "500+",
    label: "Content Pieces Created",
    sub: "Scripts, Reels & Graphics",
  },
  {
    icon: <MapPinIcon size={22} />,
    num: "UP / India",
    label: "Primary Audience",
    sub: "Hindi-speaking heartland",
  },
];

const pillarIcons = [
  <LaughIcon key="0" size={26} className="about-pillar-icon" />,
  <MaskIcon key="1" size={26} className="about-pillar-icon" />,
  <BookIcon key="2" size={26} className="about-pillar-icon" />,
  <SpiritualIcon key="3" size={26} className="about-pillar-icon" />,
];

const valueIcons = [
  <TrendingUpIcon key="0" size={22} />,
  <UsersIcon key="1" size={22} />,
  <ChartIcon key="2" size={22} />,
  <LayersIcon key="3" size={22} />,
];

export default function AboutPage() {
  const content = getLocalContent();
  const about = content.about || {};
  const photos = content.photos || {};

  const pageHeroTitle = about.pageHeroTitle || "APOORVA KAUSHAL";
  const pageHeroSub =
    about.pageHeroSub ||
    "Social Media Creator & Content Creator · Hathras, Uttar Pradesh, India";
  const storyHeading = about.storyHeading || "FROM HATHRAS TO THE DIGITAL WORLD";
  const storyBio1 =
    about.storyBio1 ||
    "I'm Apoorva Kaushal — born and raised in Hathras, Uttar Pradesh, a historic cultural hub in the Braj/Agra region. My journey into social media strategy began with a clear conviction: audiences don't just watch content; they connect with authenticity, cultural nuance, and relatable humor.";
  const storyBio2 =
    about.storyBio2 ||
    "What started as creative sketches and storytelling has evolved into a full-fledged multi-channel digital footprint reaching 2M+ all-time reach, 400k+ YouTube views, and over 5K+ combined followers across Instagram, YouTube, and Facebook.";
  const storyBio3 =
    about.storyBio3 ||
    "As a social media manager and content creator, I blend creative UGC video production with data-driven Meta ad campaigns, having collaborated with 5+ brands across fashion, beauty, lifestyle, and local retail.";

  const storyPhoto = photos.storyPhoto || photos.whoami || "/photos/IMG-20260205-WA0035.jpg";

  const qualifications = about.qualifications && about.qualifications.length > 0 ? about.qualifications : defaultQualifications;
  const brandCategories = about.brandCategories && about.brandCategories.length > 0 ? about.brandCategories : defaultBrandCategories;

  const contentPillars = (about.contentPillars && about.contentPillars.length > 0)
    ? about.contentPillars.map((p, idx) => ({
        ...p,
        icon: pillarIcons[idx % pillarIcons.length],
      }))
    : defaultContentPillars;

  const creatorValues = (about.creatorValues && about.creatorValues.length > 0)
    ? about.creatorValues.map((v, idx) => ({
        ...v,
        icon: valueIcons[idx % valueIcons.length],
      }))
    : defaultCreatorValues;

  const verifiedStats = defaultVerifiedStats;

  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
          <span className="tag">About</span>
          <span className="tag tag-maroon">Hathras, Uttar Pradesh</span>
          <span className="tag tag-maroon">Social Media Creator</span>
        </div>
        <h1 className="page-hero-title display">{pageHeroTitle}</h1>
        <p className="page-hero-sub">{pageHeroSub}</p>
      </section>

      {/* ── STORY SECTION (2-Column Grid) ── */}
      <section className="section">
        <div className="about-story-grid">
          {/* Left Column: Text */}
          <div className="about-story-text">
            <span className="tag tag-maroon" style={{ marginBottom: 14, display: "inline-block" }}>
              My Journey
            </span>
            <h2 className="display about-story-heading">{storyHeading}</h2>
            <p className="about-story-p">{storyBio1}</p>
            <p className="about-story-p">{storyBio2}</p>
            <p className="about-story-p">{storyBio3}</p>

            <div className="about-story-cta">
              <Link href="/hire" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <SparkleIcon size={14} />
                <span>Work With Apoorva</span>
              </Link>
              <Link href="/case-studies" className="btn btn-outline">
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Right Column: Photo Card & Tags */}
          <div className="about-photo-col">
            <div className="about-portrait-card">
              <div className="about-portrait-img-wrap">
                <img
                  src={storyPhoto}
                  alt="Apoorva Kaushal — Content Creator Hathras"
                  className="about-portrait-img"
                  loading="eager"
                />
                <div className="about-portrait-badge">
                  <div className="about-portrait-name">{pageHeroTitle}</div>
                  <div className="about-portrait-loc">
                    <MapPinIcon size={12} />
                    <span>Hathras, Uttar Pradesh &middot; India</span>
                  </div>
                </div>
              </div>

              {/* Verified Meta Tags */}
              <div className="about-tags-list">
                <span className="about-tag-pill">
                  <MapPinIcon size={13} />
                  <span>Hathras, UP</span>
                </span>
                <span className="about-tag-pill">
                  <InstagramIcon size={13} />
                  <span>@apoorva__kaushal</span>
                </span>
                <span className="about-tag-pill">
                  <UsersIcon size={13} />
                  <span>She / Her</span>
                </span>
                <span className="about-tag-pill">
                  <GlobeIcon size={13} />
                  <span>Hindi &amp; English</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VERIFIED STATS STRIP (8 Complete Metrics) ── */}
      <section className="about-stats-section">
        <div className="about-stats-header">
          <span className="tag tag-maroon">Verified Analytics</span>
          <h3 className="display about-stats-title">LIFETIME &amp; RECENT GROWTH</h3>
        </div>
        <div className="about-stats-grid">
          {verifiedStats.map((s) => (
            <div className="about-stat-card" key={s.label}>
              <div className="about-stat-icon-wrap">{s.icon}</div>
              <div className="about-stat-num display">{s.num}</div>
              <div className="about-stat-label">{s.label}</div>
              <div className="about-stat-sub">
                <TrendingUpIcon size={11} />
                <span>{s.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4 CONTENT PILLARS ── */}
      <section className="section">
        <div className="section-title-row">
          <div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span className="tag">Content Strategy</span>
              <span className="tag tag-maroon">4 Core Pillars</span>
            </div>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              WHAT I CREATE
            </h2>
          </div>
        </div>

        <div className="about-pillars-grid">
          {contentPillars.map((c) => (
            <div className="about-pillar-card" key={c.title}>
              <div className="about-pillar-icon-box">
                {c.icon}
              </div>
              <div className="about-pillar-title display">{c.title}</div>
              <p className="about-pillar-desc">{c.desc}</p>
              <div className="about-pillar-stat">
                <SparkleIcon size={12} />
                <span>{c.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CREATOR VALUES & PHILOSOPHY ── */}
      <section className="section" style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">Philosophy</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              HOW I DELIVER VALUE
            </h2>
          </div>
        </div>

        <div className="about-values-grid">
          {creatorValues.map((v) => (
            <div className="about-value-card" key={v.title}>
              <div className="about-value-icon">{v.icon}</div>
              <div className="about-value-title display">{v.title}</div>
              <p className="about-value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUALIFICATIONS & CERTIFICATIONS ── */}
      <section className="section">
        <div className="section-title-row">
          <div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span className="tag">Credentials</span>
              <span className="tag tag-navy">Verified</span>
            </div>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              QUALIFICATIONS &amp; CERTIFICATIONS
            </h2>
          </div>
        </div>

        <div className="about-quali-grid">
          {qualifications.map((q) => (
            <div className="about-quali-card" key={q.title}>
              <div className="about-quali-check">
                <CheckIcon size={14} />
              </div>
              <div>
                <div className="about-quali-title">{q.title}</div>
                <div className="about-quali-org">{q.org}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BRANDS & NICHES ── */}
      <section className="section" style={{ background: "var(--paper)", borderTop: "1px solid var(--line)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">Brand Collaborations</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              INDUSTRIES &amp; NICHES
            </h2>
          </div>
        </div>

        <div className="about-brands-grid">
          {brandCategories.map((b) => (
            <div className="about-brand-chip" key={b}>
              <span className="chip-dot" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="about-cta-section">
        <div className="script" style={{ fontSize: 24, marginBottom: 8, color: "#f5c6ca" }}>
          Let&apos;s build something iconic
        </div>
        <h2 className="display about-cta-heading">READY TO COLLABORATE?</h2>
        <p className="about-cta-sub">
          Whether you need complete social media account management, viral Hindi UGC reels, or high-converting Meta ad campaigns &mdash; let&apos;s create something impactful together.
        </p>
        <div className="about-cta-btns">
          <Link href="/hire" className="btn btn-maroon" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <SparkleIcon size={14} />
            <span>View Packages &amp; Pricing</span>
          </Link>
          <a
            href="https://wa.me/919368153189?text=Hi%20Apoorva%2C%20I%20saw%20your%20about%20page%20and%20would%20love%20to%20collaborate!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ background: "#25D366", color: "white", display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <WhatsAppIcon size={16} />
            <span>Chat on WhatsApp</span>
          </a>
          <Link href="/contact" className="btn" style={{ background: "rgba(255,255,255,.12)", color: "white", border: "1px solid rgba(255,255,255,.25)", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <MailIcon size={14} />
            <span>Contact Form</span>
          </Link>
        </div>
      </section>
    </>
  );
}
