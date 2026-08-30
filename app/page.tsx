import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import { getContent } from "@/lib/contentStore";
import {
  YouTubeIcon,
  InstagramIcon,
  TwitterXIcon,
  FacebookIcon,
  PaletteIcon,
  ScissorsIcon,
  CameraIcon,
  ChartIcon,
  TargetIcon,
  WhatsAppIcon,
  SparkleIcon,
} from "@/components/Icons";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Apoorva Kaushal — Social Media Manager & Content Creator | Hathras, India",
  description:
    "Apoorva Kaushal is an Indian social media manager and content creator based in Hathras, Uttar Pradesh. Specialising in Hindi comedy, parody, informative & Krishna content. 2M+ organic reach, 5+ brands served.",
  keywords: [
    "Apoorva Kaushal",
    "Apoova",
    "Apoorva Kuashal Hathras",
    "Apoorva Kaushal best match Harsh Sharma",
    "Apoorva kaushal HMorix",
    "Apoorva Kaushal influencer",
    "Apoorva Kaushal content creator",
    "Apoorva Kaushal social media manager",
    "Apoorva Kaushal digital creator",
    "Apoorva Kaushal comedian",
    "Apoorva Kaushal Hathras",
    "Apoorva Kaushal Uttar Pradesh",
    "Hindi comedy creator",
    "Indian content creator",
    "Krishna content creator India",
  ],
  alternates: { canonical: "https://apoorvakaushal.vercel.app" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Apoorva Kaushal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apoorva Kaushal is a social media manager, content creator, and digital strategist based in Hathras, Uttar Pradesh, India. She is known for creating viral Hindi comedy, parody, educational facts, and devotional Krishna content with over 2M+ total reach.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Apoorva Kaushal from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apoorva Kaushal is from Hathras, Uttar Pradesh, India (located in the Agra division near Mathura and Aligarh).",
      },
    },
    {
      "@type": "Question",
      name: "What services does Apoorva Kaushal provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apoorva Kaushal offers full social media account management, Instagram Reels & UGC video creation, Meta (Facebook & Instagram) ads campaigns, brand sponsorships, and SEO copywriting.",
      },
    },
    {
      "@type": "Question",
      name: "What is Apoorva Kaushal's official social media handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apoorva Kaushal's official ID across Instagram (@apoorva__kaushal), YouTube (@_apoorva7__), X (Twitter), and Facebook is @apoorva_kaushal.",
      },
    },
  ],
};

export default async function HomePage() {
  const content = await getContent();

  const hero = content.hero || {};
  const homepage = content.homepage || {};
  const contact = content.contact || {};
  const photos = content.photos || {};

  const heroTitle = hero.heroTitle || "Apoorva Kaushal";
  const heroTagline =
    hero.heroTagline ||
    "Authentic storytelling that connects brands with audiences through relatable experiences";
  const heroSignature = hero.heroSignature || "Appu";
  const domain = hero.domain || "apoorva.hmorix.in";

  const profilePhoto = photos.profile || "/photos/profile.jpg";
  const whoAmIPhoto = photos.whoami || "/photos/IMG-20260205-WA0035.jpg";
  const qualificationsPhoto = photos.qualifications || "/photos/IMG-20250107-WA0012.jpg";

  const whoAmIHeading = homepage.whoAmIHeading || "WHO AM I";
  const whoAmIBio1 =
    homepage.whoAmIBio1 ||
    "I'm Apoorva, a Hathras & Uttar Pradesh–based Social Media Influencer and Content Creator. I help brands grow through cohesive visual identity, creative content, and high-performing advertising campaigns.";
  const whoAmIBio2 =
    homepage.whoAmIBio2 ||
    "I've elevated the online presence of brands across India, helping them take control of their digital narrative with authentic Hindi comedy, parody, informative videos, and Krishna spiritual content.";

  const statBrands = homepage.statBrands || "5+";
  const statReach = homepage.statReach || "2M+";
  const statFollowers = homepage.statFollowers || "5K+" ;
  const statExp = homepage.statExp || "3YRS+";

  const whatsappNum = contact.whatsappNumber || "919368153189";
  const youtubeUrl = contact.youtubeUrl || "https://youtube.com/@_apoorva7__";
  const instagramUrl = contact.instagramUrl || "https://instagram.com/apoorva__kaushal";
  const twitterUrl = contact.twitterUrl || "https://twitter.com/apoorva_kaushal";
  const facebookUrl = contact.facebookUrl || "https://facebook.com/apoorva_kaushal";

  // Work Photos
  const workPhoto1 = photos.work1 || "/photos/IMG-20241220-WA0002.jpg";
  const workPhoto2 = photos.work2 || "/photos/IMG-20260202-WA0003.jpg";
  const workPhoto3 = photos.work3 || "/photos/Screenshot_2025-11-15-14-35-32-55.jpg";
  const workPhoto4 = photos.work4 || "/photos/IMG-20260106-WA0002.jpg";
  const workPhoto6 = photos.work6 || "/photos/IMG-20260205-WA0036.jpg";

  // Case Study Instagram Grid
  const caseInsta1 = photos.insta1 || "/photos/IMG-20260205-WA0035.jpg";
  const caseInsta2 = photos.insta2 || "/photos/IMG-20240205-WA0003.jpg";
  const caseInsta3 = photos.insta3 || "/photos/IMG-20260106-WA0010.jpg";
  const caseInsta4 = photos.insta4 || "/photos/IMG-20260202-WA0003.jpg";
  const caseInsta5 = photos.insta5 || "/photos/IMG-20260108-WA0003.jpg";
  const caseInsta6 = photos.insta6 || "/photos/IMG_20260131_225741.jpg";
  const caseInsta7 = photos.insta7 || "/photos/IMG-20260608-WA0016.jpg";
  const caseInsta8 = photos.insta8 || "/photos/IMG-20260212-WA0000.jpg";

  // Phone Mockups
  const phoneMockup1 = photos.phone1 || "/photos/profile.jpg";
  const phoneMockup2 = photos.phone2 || "/photos/IMG-20260205-WA0035.jpg";
  const phoneMockup3 = photos.phone3 || "/photos/Screenshot_2026-01-16-12-45-41-89.jpg";

  // Additional Photography
  const addPhoto1 = photos.add1 || "/photos/IMG-20260202-WA0003.jpg";
  const addPhoto2 = photos.add2 || "/photos/IMG-20260212-WA0000.jpg";
  const addPhoto3 = photos.add3 || "/photos/IMG-20260106-WA0009.jpg";
  const addPhoto4 = photos.add4 || "/photos/IMG-20260608-WA0016.jpg";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO SECTION ── */}
      <section className="hero">
        {/* Left Column */}
        <div className="hero-left-bottom">
          <p className="hero-tagline">{heroTagline}</p>
          <div className="hero-domain-left">{domain}</div>
        </div>

        {/* Center Column */}
        <div className="hero-center">
          <h1 className="hero-title display">
            {heroTitle}<span className="spark"><SparkleIcon size={22} /></span>
          </h1>
          <div className="hero-photo-wrap">
            <div className="hero-photo">
              <img
                src={profilePhoto}
                alt={`${heroTitle} — Social Media Manager`}
                width={240}
                height={300}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
          <div className="hero-signature">{heroSignature}</div>
        </div>

        {/* Right Column */}
        <div className="hero-right">
          <div className="hero-domain">{domain}</div>
          <div className="socials">
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <YouTubeIcon size={16} />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <TwitterXIcon size={15} />
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. GRID 2: WHO AM I | QUALIFICATIONS ── */}
      <div className="grid-2">
        {/* Panel 1: Who Am I */}
        <div className="panel" id="about-panel">
          <div className="dots">⋯</div>
          <div className="panel-head">
            <span className="spark-icon"><SparkleIcon size={16} /></span>
            <h2 className="display">{whoAmIHeading}</h2>
          </div>
          <div className="whoami-body">
            <div className="whoami-text">
              <p>{whoAmIBio1}</p>
              <p>{whoAmIBio2}</p>
              <div className="stats">
                <div className="stat">
                  <b>{statBrands}</b>
                  <span>BRANDS</span>
                </div>
                <div className="stat">
                  <b>{statReach}</b>
                  <span>REACH</span>
                </div>
                <div className="stat">
                  <b>{statFollowers}</b>
                  <span>FOLLOWERS</span>
                </div>
                <div className="stat">
                  <b>{statExp}</b>
                  <span>EXPERIENCE</span>
                </div>
              </div>
              <div className="brand-row">
                <span>the Ordinary.</span>
                <span>F3</span>
                <span>amazon</span>
                <span>HMorix</span>
                <span>alo</span>
              </div>
            </div>
            <div className="whoami-photo-wrap">
              <img
                src={whoAmIPhoto}
                alt="Apoorva Kaushal — Digital Creator"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Panel 2: Qualifications */}
        <div className="panel" id="qualifications">
          <div className="dots">⋯</div>
          <div className="panel-head">
            <h2 className="display">QUALIFICATIONS</h2>
          </div>
          <div className="quali-body">
            <div className="quali-list">
              <div>Class 12 Graduate — </div>
              <div>Email Marketing Certificate — HMorix </div>
              <div>Digital Marketing Certificate — HMorix </div>
              <div>Creative Script Writing &amp; Video Production</div>

              <div className="quali-degree-card">
                <div className="quali-degree-title">Certification &amp; Study</div>
                <div className="quali-degree-name">Graduation &amp; Performance Marketing</div>
              </div>

              <div className="quali-badges">
                <span className="badge-pill">
                  <PaletteIcon size={13} /> Canva
                </span>
                <span className="badge-pill">
                  <ScissorsIcon size={13} /> CapCut
                </span>
                <span className="badge-pill">
                  <CameraIcon size={13} /> Meta
                </span>
                <span className="badge-pill">
                  <ChartIcon size={13} /> Analytics
                </span>
                <span className="badge-pill">
                  <TargetIcon size={13} /> Ads
                </span>
              </div>
            </div>
            <div className="quali-photo-wrap">
              <img
                src={qualificationsPhoto}
                alt="Apoorva Kaushal — Professional Credentials"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. BOTTOM GRID: WORK / CASE STUDY / PHOTOGRAPHY ── */}
      <div className="bottom-grid">
        {/* Left Section 1: My Work Includes */}
        <div className="panel" id="work">
          <div className="dots">⋯</div>
          <div className="panel-head">
            <span className="spark-icon"><SparkleIcon size={16} /></span>
            <h2 className="display">{homepage.workSectionTitle || "MY WORK INCLUDES"}</h2>
          </div>
          <div className="work-grid">
            {/* 1. UGC Video */}
            <div className="work-item">
              <div className="work-thumb">
                <img
                  src={workPhoto1}
                  alt="UGC Video Creation"
                  loading="lazy"
                  decoding="async"
                />
                <div className="work-thumb-overlay">UGC VIDEO</div>
              </div>
              <h4>UGC Video</h4>
              <p className="work-desc">
                I create engaging short and long form video content and visuals that align with a brand&apos;s identity and marketing goals.
              </p>
            </div>

            {/* 2. Branding & Aesthetic */}
            <div className="work-item">
              <div className="work-thumb">
                <img
                  src={workPhoto2}
                  alt="Branding and Aesthetic"
                  loading="lazy"
                  decoding="async"
                />
                <div className="work-thumb-overlay" style={{ background: "rgba(122,20,33,0.7)" }}>
                  BRANDING &amp; SEO
                </div>
              </div>
              <h4>Branding &amp; Aesthetic</h4>
              <p className="work-desc">
                I create cohesive visual branding through curated graphics, content styling, and a consistent online narrative.
              </p>
            </div>

            {/* 3. SEO & Copywriting */}
            <div className="work-item">
              <div className="work-thumb">
                <img
                  src={workPhoto3}
                  alt="SEO in 2026"
                  loading="lazy"
                  decoding="async"
                />
                <div className="work-thumb-overlay" style={{ background: "rgba(28,43,92,0.8)" }}>
                  SEO IN 2026
                </div>
              </div>
              <h4>SEO &amp; Copywriting</h4>
              <p className="work-desc">
                I research effective keywords and write compelling copy designed to improve visibility, engagement, and online performance.
              </p>
            </div>

            {/* 4. Communication Strategy */}
            <div className="work-item">
              <div className="work-thumb">
                <img
                  src={workPhoto4}
                  alt="Social Media Marketing"
                  loading="lazy"
                  decoding="async"
                />
                <div className="work-thumb-overlay">COMMUNICATION</div>
              </div>
              <h4>Communication Strategy</h4>
              <p className="work-desc">
                I develop tailored communication strategies that help brands connect clearly and effectively with their audience.
              </p>
            </div>

            {/* 5. Meta Ads */}
            <div className="work-item">
              <div
                className="work-thumb"
                style={{
                  background: "linear-gradient(135deg,#152049,#7a1421)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  padding: 10,
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "Anton, sans-serif", fontSize: 15 }}>176,128 · 492,560</div>
                <div style={{ fontSize: 8.5, opacity: 0.8, letterSpacing: "0.08em" }}>
                  REACH · IMPRESSIONS
                </div>
              </div>
              <h4>Meta Ads Campaigns</h4>
              <p className="work-desc">
                I plan, manage, and optimise Facebook and Instagram ad campaigns to boost reach, engagement, and conversions.
              </p>
            </div>

            {/* 6. Creating & Planning Content */}
            <div className="work-item">
              <div className="work-thumb">
                <img
                  src={workPhoto6}
                  alt="Content Strategy"
                  loading="lazy"
                  decoding="async"
                />
                <div className="work-thumb-overlay" style={{ background: "rgba(21,32,73,0.85)" }}>
                  CONTENT STRATEGY
                </div>
              </div>
              <h4>Creating &amp; Planning Content</h4>
              <p className="work-desc">
                I produce and organise strategic content that keeps audiences engaged while supporting brand growth.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Case Study Panel */}
        <div className="case-panel" id="case">
          <div className="case-head">
            <h2 className="display">CASE STUDY</h2>
            <p className="case-intro">
              I crafted a 30-day social media strategy covering content development, Reels planning, and campaign execution. In 3 months, engagement grew by 120%.
            </p>
            <div className="dots">⋯</div>
          </div>

          {/* 01 Website */}
          <div className="case-block">
            <div className="label">WEBSITE <span>01</span></div>
            <p>A strong brand doesn&apos;t just look good, it speaks clearly.</p>
            <p>I audited the existing web presence, identified gaps in messaging and visual consistency, and rebuilt the content strategy from the ground up.</p>
            <p>Every page was crafted to convert browsers into buyers and reflect the brand&apos;s true identity.</p>
            <div className="case-visual-banner">your <span>voice</span></div>
          </div>

          {/* 02 Instagram Feed Grid */}
          <div className="case-block">
            <div className="label">INSTAGRAM FEED <span>02</span></div>
            <p>I developed a 30-day content calendar built around lifestyle and user-facing storytelling, with a cohesive visual identity.</p>
            <p>Resulting in a feed that feels curated, not chaotic.</p>
            <div className="case-insta-grid">
              <div className="case-insta-item"><img src={caseInsta1} alt="Instagram Post 1" loading="lazy" decoding="async" /></div>
              <div className="case-insta-item"><img src={caseInsta2} alt="Instagram Post 2" loading="lazy" decoding="async" /></div>
              <div className="case-insta-item"><img src={caseInsta3} alt="Instagram Post 3" loading="lazy" decoding="async" /></div>
              <div className="case-insta-item"><img src={caseInsta4} alt="Instagram Post 4" loading="lazy" decoding="async" /></div>
              <div className="case-insta-item"><img src={caseInsta5} alt="Instagram Post 5" loading="lazy" decoding="async" /></div>
              <div className="case-insta-item"><img src={caseInsta6} alt="Instagram Post 6" loading="lazy" decoding="async" /></div>
              <div className="case-insta-item"><img src={caseInsta7} alt="Instagram Post 7" loading="lazy" decoding="async" /></div>
              <div className="case-insta-item"><img src={caseInsta8} alt="Instagram Post 8" loading="lazy" decoding="async" /></div>
            </div>
          </div>

          {/* 03 Video Content (3 Phone Mockups) */}
          <div className="case-block">
            <div className="label">VIDEO CONTENT <span>03</span></div>
            <p>Short form video is the engine of organic growth.</p>
            <p>I scripted, directed, and delivered a series of high-performing Reels.</p>
            <p>I styled them around the brand aesthetic and designed them for discoverability.</p>
            <div className="phone-row">
              <div className="phone-mockup">
                <img src={phoneMockup1} alt="Reel 1 Poster" loading="lazy" decoding="async" />
                <div className="phone-mockup-badge">Reels 01 · 340K</div>
              </div>
              <div className="phone-mockup">
                <img src={phoneMockup2} alt="Reel 2 Poster" loading="lazy" decoding="async" />
                <div className="phone-mockup-badge">Reels 02 · 420K</div>
              </div>
              <div className="phone-mockup">
                <img src={phoneMockup3} alt="Reel 3 Poster" loading="lazy" decoding="async" />
                <div className="phone-mockup-badge">Reels 03 · 290K</div>
              </div>
            </div>
          </div>

          {/* 04 Analytics Link */}
          <Link href="/dashboard" className="analytics-tab" id="testimonials">
            ANALYTICS &amp; RESULTS <span>04 →</span>
          </Link>
        </div>

        {/* Left Section 2: Additional Photography */}
        <div className="panel" id="photography">
          <div className="dots">⋯</div>
          <div className="panel-head">
            <span className="script" style={{ fontSize: 20 }}>Additional</span>
            <h2 className="display">PHOTOGRAPHY</h2>
          </div>
          <div className="photo-grid-4">
            <div className="photo-item">
              <div className="photo-item-thumb">
                <img src={addPhoto1} alt="Sunglasses & Retro Lifestyle" loading="lazy" decoding="async" />
              </div>
              <h5>SUNGLASSES CAMPAIGN</h5>
              <p>Retro 90s aesthetic styling for youth apparel and accessories.</p>
            </div>
            <div className="photo-item">
              <div className="photo-item-thumb">
                <img src={addPhoto2} alt="Morning Beverage UGC" loading="lazy" decoding="async" />
              </div>
              <h5>LIFESTYLE UGC</h5>
              <p>Morning routine and wellness product placement concept.</p>
            </div>
            <div className="photo-item">
              <div className="photo-item-thumb">
                <img src={addPhoto3} alt="Ethnic Lookbook Shoot" loading="lazy" decoding="async" />
              </div>
              <h5>FESTIVE ETHNIC LOOK</h5>
              <p>Vibrant Indian ethnic wear for festival marketing campaigns.</p>
            </div>
            <div className="photo-item">
              <div className="photo-item-thumb">
                <img src={addPhoto4} alt="Radha Raman Devotional" loading="lazy" decoding="async" />
              </div>
              <h5>RADHA RAMAN SERIES</h5>
              <p>Devotional storytelling post reaching 560K+ spiritual audience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. INTERACTIVE PHOTOS & VIDEOS GALLERY ── */}
      <Gallery initialItems={content.gallery || undefined} />

      {/* ── 5. STATS STRIP ── */}
      <div className="stats-strip">
        {[
          { num: statReach, label: "Total Reach (All-time)" },
          { num: "340K", label: "Avg. Reel Views" },
          { num: "6.8%", label: "Engagement Rate" },
          { num: statFollowers, label: "Combined Followers" },
        ].map((s) => (
          <div className="stat-item" key={s.label}>
            <div className="stat-num display">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── 6. CTA / COLLABORATION BAR ── */}
      <section style={{ padding: "56px 32px", background: "var(--navy)", color: "var(--white)", textAlign: "center" }}>
        <div className="script" style={{ fontSize: 24, marginBottom: 6, color: "#f5c6ca" }}>
          Ready to create something iconic?
        </div>
        <h2 className="display" style={{ fontSize: "clamp(28px, 4vw, 50px)", marginBottom: 14 }}>
          {homepage.ctaTitle || "LET'S ELEVATE YOUR BRAND"}
        </h2>
        <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.7)", maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.6 }}>
          {homepage.ctaSub || "Social media strategy, viral Reels, Meta ads, or authentic brand collaborations in Hathras, Uttar Pradesh, and across India."}
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
          <Link href="/hire" className="btn btn-maroon" style={{ fontSize: 12.5, padding: "12px 28px", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <SparkleIcon size={14} />
            <span>Check Pricing</span>
          </Link>
          <a
            href={`https://wa.me/${whatsappNum}?text=Hi%20Apoorva%2C%20I%20saw%20your%20website%20and%20would%20love%20to%20collaborate!`}
            className="btn"
            style={{ background: "#25D366", color: "white", display: "inline-flex", alignItems: "center", gap: 8 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp Me</span>
          </a>
          <Link href="/contact" className="btn" style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}
