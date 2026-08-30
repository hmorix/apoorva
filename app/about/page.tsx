import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/lib/contentStore";
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

export const dynamic = "force-dynamic";

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

const pillarIcons = [
  <LaughIcon key="0" size={26} className="about-pillar-icon" />,
  <MaskIcon key="1" size={26} className="about-pillar-icon" />,
  <BookIcon key="2" size={26} className="about-pillar-icon" />,
  <SpiritualIcon key="3" size={26} className="about-pillar-icon" />,
];

export default async function AboutPage() {
  const content = await getContent();
  const about = content.about;
  const homepage = content.homepage;
  const contact = content.contact;
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

  const storyImg = photos.storyPhoto || photos.whoami || "/photos/IMG-20260205-WA0035.jpg";
  const qualImg = photos.qualifications || "/photos/IMG-20250107-WA0012.jpg";

  const qualifications = about.qualifications || [
    { title: "Canva Masterclass Certified", org: "HMorix Media" },
    { title: "Email Marketing Certification", org: "HubSpot Academy" },
    { title: "Digital Marketing Specialization", org: "Accenture Digital" },
    { title: "Digital Ad Campaigns & Strategy", org: "Performance Marketing" },
    { title: "Meta Blueprint & Facebook Ads", org: "Meta Certified" },
    { title: "Higher Secondary & Digital Arts", org: "Hathras, Uttar Pradesh" },
  ];

  const contentPillars = about.contentPillars || [
    {
      title: "Comedy & Sketches",
      desc: "Relatable Hindi comedy reels capturing everyday family dynamics, college moments, and desi situations.",
      stats: "340K avg. views",
    },
    {
      title: "Character Parodies",
      desc: "Creative character roleplays and situational satire in conversational Hindi that resonate across age groups.",
      stats: "High share rate",
    },
    {
      title: "Informative Content",
      desc: "Bite-sized knowledge videos, interesting cultural facts, digital tips, and educational explainers in Hindi.",
      stats: "Top save rate",
    },
    {
      title: "Krishna & Spiritual",
      desc: "Heartfelt Radha-Krishna devotional stories, Bhagavad Gita wisdom, and lyrical spiritual poetry.",
      stats: "560K+ reach",
    },
  ];

  const brandCategories = about.brandCategories || [
    "Fashion & Apparel",
    "Beauty & Skincare",
    "Local Businesses & Retail",
    "Spiritual & Wellness",
    "Tech & Mobile Apps",
    "Food & Beverage",
    "Education & EdTech",
    "D2C E-Commerce",
  ];

  const creatorValues = about.creatorValues || [
    {
      title: "Organic-First Engagement",
      desc: "Focusing on strong hooks, authentic storytelling, and deep cultural connection rather than hollow trends.",
    },
    {
      title: "Hindi Heartland Reach",
      desc: "Deep resonance with Tier-1, Tier-2, and Tier-3 Hindi-speaking audiences across North India and Uttar Pradesh.",
    },
    {
      title: "Data & Retention Focus",
      desc: "Every script and campaign is tracked against watch-time, save rates, ROAS, and conversion metrics.",
    },
    {
      title: "Cross-Platform Synergy",
      desc: "Cohesive multi-platform distribution across Instagram Reels, YouTube Shorts, Facebook, and Meta Ads.",
    },
  ];

  const stats = [
    { num: homepage.statReach || "2M+", label: "All-Time Organic Reach", icon: <EyeIcon size={20} /> },
    { num: "340K", label: "Avg. Reel Views", icon: <PlayIcon size={20} /> },
    { num: homepage.statFollowers || "5K+", label: "Combined Followers", icon: <UsersIcon size={20} /> },
    { num: homepage.statBrands || "5+", label: "Brand Collaborations", icon: <BriefcaseIcon size={20} /> },
  ];

  const whatsappNumber = contact.whatsappNumber || "919368153189";
  const email = contact.email || "apoorva@apoorvakaushal.com";
  const location = contact.location || "Hathras, Uttar Pradesh, India";

  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
          <span className="tag">About</span>
          <span className="tag tag-maroon">Hathras, Uttar Pradesh</span>
        </div>
        <h1 className="page-hero-title display">{pageHeroTitle}</h1>
        <p className="page-hero-sub">{pageHeroSub}</p>
      </section>

      {/* ── STATS BAR ── */}
      <div className="about-stats-bar">
        {stats.map((s) => (
          <div className="about-stat-item" key={s.label}>
            <div className="about-stat-icon-wrap">{s.icon}</div>
            <div>
              <div className="display about-stat-num">{s.num}</div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── STORY SECTION ── */}
      <section className="section">
        <div className="about-story-grid">
          <div className="about-story-text">
            <div className="tag tag-maroon" style={{ marginBottom: 14 }}>
              My Journey
            </div>
            <h2 className="display about-story-heading">{storyHeading}</h2>
            <p className="about-story-p">{storyBio1}</p>
            <p className="about-story-p">{storyBio2}</p>
            <p className="about-story-p">{storyBio3}</p>
            <div className="about-story-cta">
              <Link
                href="/hire"
                className="btn btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                <SparkleIcon size={14} />
                <span>Work With Apoorva</span>
              </Link>
              <Link href="/case-studies" className="btn btn-outline">
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Portrait frame */}
          <div className="about-story-photo-wrap">
            <div className="about-story-photo-inner">
              <img
                src={storyImg}
                alt="Apoorva Kaushal in Hathras"
                className="about-story-img"
              />
            </div>
            <div className="about-story-photo-badge">
              <MapPinIcon size={14} />
              <span>Hathras, UP · India</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT PILLARS ── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">Creative Niches</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              CONTENT PILLARS
            </h2>
          </div>
        </div>
        <div className="about-pillars-grid">
          {contentPillars.map((p, idx) => (
            <div className="about-pillar-card" key={p.title}>
              <div className="about-pillar-icon-box">{pillarIcons[idx % pillarIcons.length]}</div>
              <div className="display about-pillar-title">{p.title}</div>
              <p className="about-pillar-desc">{p.desc}</p>
              <div className="tag tag-maroon" style={{ alignSelf: "flex-start", marginTop: "auto" }}>
                {p.stats}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CREATOR VALUES ── */}
      <section className="section">
        <div className="section-title-row">
          <div>
            <span className="tag">Approach &amp; Philosophy</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              WHAT SETS ME APART
            </h2>
          </div>
        </div>
        <div className="about-values-grid">
          {creatorValues.map((v) => (
            <div className="about-value-card" key={v.title}>
              <div className="about-value-dot" />
              <div>
                <div className="about-value-title">{v.title}</div>
                <p className="about-value-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUALIFICATIONS & CREDENTIALS ── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">Credentials</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              QUALIFICATIONS &amp; EXPERTISE
            </h2>
          </div>
        </div>
        <div className="about-qual-grid">
          <div className="about-qual-list">
            {qualifications.map((q) => (
              <div className="about-qual-item" key={q.title}>
                <div className="about-qual-check">
                  <CheckIcon size={14} />
                </div>
                <div>
                  <div className="about-qual-title">{q.title}</div>
                  <div className="about-qual-org">{q.org}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="about-qual-img-wrap">
            <img
              src={qualImg}
              alt="Apoorva Kaushal Credentials"
              className="about-qual-img"
            />
          </div>
        </div>
      </section>

      {/* ── BRAND CATEGORIES ── */}
      <section className="section">
        <div className="section-title-row">
          <div>
            <span className="tag">Industries Served</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              CATEGORIES I COLLABORATE WITH
            </h2>
          </div>
        </div>
        <div className="about-cats-grid">
          {brandCategories.map((c) => (
            <div className="about-cat-pill" key={c}>
              <span>{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="section" style={{ background: "var(--navy)", color: "white", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 className="display" style={{ fontSize: "clamp(26px, 4vw, 42px)", marginBottom: 14, color: "white" }}>
            LET&apos;S CREATE SOMETHING REMARKABLE
          </h2>
          <p style={{ opacity: 0.85, fontSize: 15, lineHeight: 1.6, marginBottom: 28 }}>
            Based in {location}. Open for brand collaborations, social media management, and video campaigns across India.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%20Apoorva!%20I'd%20love%20to%20connect.`}
              className="btn"
              style={{ background: "#25D366", color: "white", display: "inline-flex", alignItems: "center", gap: 8 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={16} />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="btn"
              style={{ background: "white", color: "var(--navy)" }}
            >
              Send an Email
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
