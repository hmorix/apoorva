import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Apoorva Kaushal — Social Media Manager & Content Creator | Hathras, India",
  description:
    "Apoorva Kaushal is an Indian social media manager and content creator based in Hathras, Uttar Pradesh. Specialising in Hindi comedy, parody, informative & Krishna content. 20M+ organic reach, 50+ brands served.",
  keywords: [
    "Apoorva Kaushal", "Apoova", "Apoorva Kuashal Hathras",
    "Apoorva Kaushal best match Harsh Sharma", "Apoorva kaushal HMorix",
    "Apoorva Kaushal influencer", "Apoorva Kaushal content creator",
    "Apoorva Kaushal social media manager", "Apoorva Kaushal digital creator",
    "Apoorva Kaushal comedian", "Apoorva Kaushal Hathras", "Apoorva Kaushal Uttar Pradesh",
    "Hindi comedy creator", "Indian content creator", "Krishna content creator India",
  ],
  alternates: { canonical: "https://apoorvakaushal.com" },
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
        text: "Apoorva Kaushal is a social media manager, content creator, and digital strategist based in Hathras, Uttar Pradesh, India. She is known for creating viral Hindi comedy, parody, educational facts, and devotional Krishna content with over 20M+ total reach.",
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
        text: "Apoorva Kaushal's official ID across Instagram, YouTube, X (Twitter), and Facebook is @apoorva_kaushal.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO SECTION (Home.jpg Exact Match) ── */}
      <section className="hero">
        {/* Left Column */}
        <div className="hero-left-bottom">
          <p className="hero-tagline">
            Authentic storytelling that connects brands with audiences through relatable experiences
          </p>
          <div className="hero-domain-left">APOORVAKAUSHAL.COM</div>
        </div>

        {/* Center Column */}
        <div className="hero-center">
          <h1 className="hero-title display">
            SOCIAL MEDIA<span className="spark">✳</span>
          </h1>
          <div className="hero-photo-wrap">
            <div className="hero-photo">
              <img
                src="/photos/profile.jpg"
                alt="Apoorva Kaushal — Social Media Manager"
                width={240}
                height={300}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
          <div className="hero-signature">Manager</div>
        </div>

        {/* Right Column */}
        <div className="hero-right">
          <div className="hero-domain">APOORVAKAUSHAL.COM</div>
          <div className="socials">
            <a
              href="https://youtube.com/@apoorva_kaushal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12Z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/apoorva_kaushal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .25 2.5.42.6.24 1 .53 1.5 1s.76.9 1 1.5c.17.5.36 1.3.42 2.5.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9a7.6 7.6 0 0 1-.42 2.5c-.24.6-.53 1-1 1.5s-.9.76-1.5 1c-.5.17-1.3.36-2.5.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07a7.6 7.6 0 0 1-2.5-.42c-.6-.24-1-.53-1.5-1s-.76-.9-1-1.5a7.6 7.6 0 0 1-.42-2.5C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-2 .42-2.5.24-.6.53-1 1-1.5s.9-.76 1.5-1c.5-.17 1.3-.36 2.5-.42C8.4 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.52 0-4.76.07-1 .05-1.53.21-1.9.35-.47.18-.8.4-1.16.75-.35.36-.57.7-.75 1.16-.14.36-.3.9-.35 1.9C3.01 8.48 3 8.86 3 12s0 3.52.08 4.76c.04 1 .2 1.53.34 1.9.18.47.4.8.75 1.16.36.35.7.57 1.16.75.36.14.9.3 1.9.35 1.24.06 1.62.08 4.76.08s3.52-.02 4.76-.08c1-.04 1.53-.21 1.9-.35.47-.18.8-.4 1.16-.75.35-.36.57-.7.75-1.16.14-.36.3-.9.35-1.9.06-1.24.08-1.62.08-4.76s-.02-3.52-.08-4.76c-.04-1-.21-1.53-.35-1.9-.18-.47-.4-.8-.75-1.16a3.1 3.1 0 0 0-1.16-.75c-.36-.14-.9-.3-1.9-.35C15.52 4.01 15.14 4 12 4Zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm4.8-2a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16Z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/apoorva_kaushal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <svg viewBox="0 0 24 24">
                <path d="M13.9 10.6 21.6 2h-2l-6.6 7.5L7.6 2H1l8.1 11.4L1 22h2l7-8 5.6 8H22Zm-2.5 2.9-.8-1.1L3.6 3.5h2.9l5.2 7.3.8 1.1 6.8 9.6h-2.9Z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/apoorva_kaushal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
              </svg>
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
            <span className="spark-icon">✳</span>
            <h2 className="display">WHO AM I</h2>
          </div>
          <div className="whoami-body">
            <div className="whoami-text">
              <p>
                I'm Apoorva, a Hathras &amp; Uttar Pradesh–based Social Media Manager and Content Creator. I help brands grow through cohesive visual identity, creative content, and high-performing advertising campaigns.
              </p>
              <p>
                I've elevated the online presence of hundreds of brands across India, helping them take control of their digital narrative with authentic Hindi comedy, parody, informative videos, and Krishna prem content.
              </p>
              <div className="stats">
                <div className="stat">
                  <b>50+</b>
                  <span>BRANDS</span>
                </div>
                <div className="stat">
                  <b>20M+</b>
                  <span>REACH</span>
                </div>
                <div className="stat">
                  <b>3YRS+</b>
                  <span>EXPERIENCE</span>
                </div>
              </div>
              <div className="brand-row">
                <span>the Ordinary.</span>
                <span>F3</span>
                <span>amazon</span>
                <span>ⓡ</span>
                <span>alo</span>
              </div>
            </div>
            <div className="whoami-photo-wrap">
              <img
                src="/photos/IMG-20260205-WA0035.jpg"
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
              <div>Canva Masterclass Certificate</div>
              <div>Email Marketing Hubspot</div>
              <div>Accenture Digital Marketing</div>
              <div>Ad Week Digital Marketing</div>

              <div className="quali-degree-card">
                <div className="quali-degree-title">Certification &amp; Study</div>
                <div className="quali-degree-name">Bachelor of Digital Strategy &amp; Media</div>
              </div>

              <div className="quali-badges">
                <span className="badge-pill">🎨 Canva</span>
                <span className="badge-pill">✂️ CapCut</span>
                <span className="badge-pill">📸 Meta</span>
                <span className="badge-pill">📊 Analytics</span>
                <span className="badge-pill">🎯 Ads</span>
              </div>
            </div>
            <div className="quali-photo-wrap">
              <img
                src="/photos/IMG-20250107-WA0012.jpg"
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
            <span className="spark-icon">✳</span>
            <h2 className="display">MY WORK INCLUDES</h2>
          </div>
          <div className="work-grid">
            {/* 1. UGC Video */}
            <div className="work-item">
              <div className="work-thumb">
                <img
                  src="/photos/IMG-20241220-WA0002.jpg"
                  alt="UGC Video Creation"
                  loading="lazy"
                  decoding="async"
                />
                <div className="work-thumb-overlay">UGC VIDEO</div>
              </div>
              <h4>UGC Video</h4>
              <p className="work-desc">
                I create engaging short and long form video content and visuals that align with a brand's identity and marketing goals.
              </p>
            </div>

            {/* 2. Branding & Aesthetic */}
            <div className="work-item">
              <div className="work-thumb">
                <img
                  src="/photos/IMG-20260202-WA0003.jpg"
                  alt="Branding and Aesthetic"
                  loading="lazy"
                  decoding="async"
                />
                <div className="work-thumb-overlay" style={{ background: "rgba(122,20,33,0.7)" }}>BRANDING &amp; SEO</div>
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
                  src="/photos/Screenshot_2025-11-15-14-35-32-55.jpg"
                  alt="SEO in 2026"
                  loading="lazy"
                  decoding="async"
                />
                <div className="work-thumb-overlay" style={{ background: "rgba(28,43,92,0.8)" }}>SEO IN 2026</div>
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
                  src="/photos/IMG-20260106-WA0002.jpg"
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
              <div className="work-thumb" style={{ background: "linear-gradient(135deg,#152049,#7a1421)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "#fff", padding: 10, textAlign: "center" }}>
                <div style={{ fontFamily: "Anton, sans-serif", fontSize: 15 }}>176,128 · 492,560</div>
                <div style={{ fontSize: 8.5, opacity: 0.8, letterSpacing: "0.08em" }}>REACH · IMPRESSIONS</div>
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
                  src="/photos/IMG-20260205-WA0036.jpg"
                  alt="Content Strategy"
                  loading="lazy"
                  decoding="async"
                />
                <div className="work-thumb-overlay" style={{ background: "rgba(21,32,73,0.85)" }}>CONTENT STRATEGY</div>
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
              I crafted a 30 day social media strategy covering content development, Reels planning, and campaign execution. In 3 months, engagement grew by 120%.
            </p>
            <div className="dots">⋯</div>
          </div>

          {/* 01 Website */}
          <div className="case-block">
            <div className="label">WEBSITE <span>01</span></div>
            <p>A strong brand doesn't just look good, it speaks clearly.</p>
            <p>I audited the existing web presence, identified gaps in messaging and visual consistency, and rebuilt the content strategy from the ground up.</p>
            <p>Every page was crafted to convert browsers into buyers and reflect the brand's true identity.</p>
            <div className="case-visual-banner">your <span>voice</span></div>
          </div>

          {/* 02 Instagram Feed Grid */}
          <div className="case-block">
            <div className="label">INSTAGRAM FEED <span>02</span></div>
            <p>I developed a 30-day content calendar built around lifestyle, and user-facing storytelling, with a cohesive visual identity.</p>
            <p>Resulting in a feed that feels curated, not chaotic.</p>
            <div className="case-insta-grid">
              <div className="case-insta-item"><img src="/photos/IMG-20260205-WA0035.jpg" alt="Instagram Post 1" loading="lazy" decoding="async" /></div>
              <div className="case-insta-item"><img src="/photos/IMG-20240205-WA0003.jpg" alt="Instagram Post 2" loading="lazy" decoding="async" /></div>
              <div className="case-insta-item"><img src="/photos/IMG-20260106-WA0010.jpg" alt="Instagram Post 3" loading="lazy" decoding="async" /></div>
              <div className="case-insta-item"><img src="/photos/IMG-20260202-WA0003.jpg" alt="Instagram Post 4" loading="lazy" decoding="async" /></div>
              <div className="case-insta-item"><img src="/photos/IMG-20260108-WA0003.jpg" alt="Instagram Post 5" loading="lazy" decoding="async" /></div>
              <div className="case-insta-item"><img src="/photos/IMG_20260131_225741.jpg" alt="Instagram Post 6" loading="lazy" decoding="async" /></div>
              <div className="case-insta-item"><img src="/photos/IMG-20260608-WA0016.jpg" alt="Instagram Post 7" loading="lazy" decoding="async" /></div>
              <div className="case-insta-item"><img src="/photos/IMG-20260212-WA0000.jpg" alt="Instagram Post 8" loading="lazy" decoding="async" /></div>
            </div>
          </div>

          {/* 03 Video Content (3 Phone Mockups) */}
          <div className="case-block">
            <div className="label">VIDEO CONTENT <span>03</span></div>
            <p>Short form video is the engine of organic growth.</p>
            <p>I scripted, directed, and delivered a series of Reels and TikToks.</p>
            <p>I styled them around the brand aesthetic and designed them for discoverability.</p>
            <div className="phone-row">
              <div className="phone-mockup">
                <img src="/photos/profile.jpg" alt="Reel 1 Poster" loading="lazy" decoding="async" />
                <div className="phone-mockup-badge">Reels 01 · 540K</div>
              </div>
              <div className="phone-mockup">
                <img src="/photos/IMG-20260205-WA0035.jpg" alt="Reel 2 Poster" loading="lazy" decoding="async" />
                <div className="phone-mockup-badge">Reels 02 · 1.2M</div>
              </div>
              <div className="phone-mockup">
                <img src="/photos/Screenshot_2026-01-16-12-45-41-89.jpg" alt="Reel 3 Poster" loading="lazy" decoding="async" />
                <div className="phone-mockup-badge">Reels 03 · 890K</div>
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
                <img src="/photos/IMG-20260202-WA0003.jpg" alt="Sunglasses & Retro Lifestyle" loading="lazy" decoding="async" />
              </div>
              <h5>SUNGLASSES CAMPAIGN</h5>
              <p>Retro 90s aesthetic styling for youth apparel and accessories.</p>
            </div>
            <div className="photo-item">
              <div className="photo-item-thumb">
                <img src="/photos/IMG-20260212-WA0000.jpg" alt="Morning Beverage UGC" loading="lazy" decoding="async" />
              </div>
              <h5>LIFESTYLE UGC</h5>
              <p>Morning routine and wellness product placement concept.</p>
            </div>
            <div className="photo-item">
              <div className="photo-item-thumb">
                <img src="/photos/IMG-20260106-WA0009.jpg" alt="Ethnic Lookbook Shoot" loading="lazy" decoding="async" />
              </div>
              <h5>FESTIVE ETHNIC LOOK</h5>
              <p>Vibrant Indian ethnic wear for festival marketing campaigns.</p>
            </div>
            <div className="photo-item">
              <div className="photo-item-thumb">
                <img src="/photos/IMG-20260608-WA0016.jpg" alt="Radha Raman Devotional" loading="lazy" decoding="async" />
              </div>
              <h5>RADHA RAMAN SERIES</h5>
              <p>Devotional storytelling post reaching 600K+ spiritual audience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. INTERACTIVE PHOTOS & VIDEOS GALLERY ── */}
      <Gallery />

      {/* ── 5. STATS STRIP ── */}
      <div className="stats-strip">
        {[
          { num: "20M+", label: "Total Reach" },
          { num: "50+", label: "Brands Served" },
          { num: "3+", label: "Years Experience" },
          { num: "120%", label: "Avg. Engagement Growth" },
        ].map((s) => (
          <div className="stat-item" key={s.label}>
            <div className="stat-num display">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── 6. CTA / COLLABORATION BAR ── */}
      <section style={{ padding: "56px 32px", background: "var(--navy)", color: "var(--white)", textAlign: "center" }}>
        <div className="script" style={{ fontSize: 24, marginBottom: 6, color: "#f5c6ca" }}>Ready to create something iconic?</div>
        <h2 className="display" style={{ fontSize: "clamp(28px, 4vw, 50px)", marginBottom: 14 }}>
          LET'S ELEVATE YOUR BRAND
        </h2>
        <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.7)", maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.6 }}>
          Social media strategy, viral Reels, Meta ads, or authentic brand collaborations in Hathras, Uttar Pradesh, and across India.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/hire" className="btn btn-maroon" style={{ fontSize: 12.5, padding: "12px 28px" }}>
            Hire Apoorva ✦
          </Link>
          <a
            href="https://wa.me/919XXXXXXXXX?text=Hi%20Apoorva%2C%20I%20saw%20your%20website%20and%20would%20love%20to%20collaborate!"
            className="btn"
            style={{ background: "#25D366", color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp Me
          </a>
          <Link href="/contact" className="btn" style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
            Contact Page
          </Link>
        </div>
      </section>
    </>
  );
}
