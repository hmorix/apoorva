import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apoorva Kaushal — Social Media Manager & Content Creator | Hathras, India",
  description:
    "Apoorva Kaushal is a social media manager and content creator from Hathras, Uttar Pradesh. Comedy, parody, informative and Krishna content. 20M+ reach, 50+ brands served.",
  keywords: [
    "Apoorva Kaushal", "Apoova", "Apoorva Kuashal Hathras",
    "Apoorva Kaushal best match Harsh Sharma", "Apoorva kaushal HMorix",
    "social media manager India", "content creator Hathras",
    "Hindi comedy creator", "Indian digital creator",
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
        text: "Apoorva Kaushal is a social media manager and content creator from Hathras, Uttar Pradesh, India. She creates comedy, parody, informative, and Krishna/spiritual content in Hindi.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Apoorva Kaushal from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apoorva Kaushal is from Hathras, Uttar Pradesh, India.",
      },
    },
    {
      "@type": "Question",
      name: "What does Apoorva Kaushal do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apoorva Kaushal manages social media accounts, creates content (Reels, UGC videos), runs Meta/Instagram ad campaigns, and offers brand collaboration services.",
      },
    },
    {
      "@type": "Question",
      name: "Is Apoorva Kaushal from Hathras?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Apoorva Kaushal is from Hathras, Uttar Pradesh, India.",
      },
    },
  ],
};

const services = [
  { icon: "📱", title: "Social Media Management", desc: "Full account management across Instagram, YouTube & Facebook. Content calendar, posting schedule, audience engagement and growth strategy.", link: "/services" },
  { icon: "🎬", title: "Content Creation & UGC", desc: "Reels, TikToks, short-form video, UGC content, Instagram feed design. Scripted, styled and optimised for maximum engagement.", link: "/services" },
  { icon: "📊", title: "Meta Ads Campaigns", desc: "Facebook & Instagram ad strategy, creative, targeting and optimisation. Transparent reporting on ROAS, reach and conversions.", link: "/services" },
  { icon: "🤝", title: "Brand Collaboration", desc: "Sponsored content, product reviews, brand integration. India-wide collaborations across beauty, lifestyle, fashion and tech.", link: "/services" },
  { icon: "✍️", title: "SEO & Copywriting", desc: "Keyword research, website copy, caption writing and blog content optimised to rank and convert.", link: "/services" },
  { icon: "🕉️", title: "Krishna & Spiritual Content", desc: "Devotional reels, Radha-Krishna storytelling, Bhagavad Gita wisdom content. Authentic, respectful and deeply engaging.", link: "/services" },
];

const stats = [
  { num: "20M+", label: "Total Reach" },
  { num: "50+", label: "Brands Served" },
  { num: "3+", label: "Years Experience" },
  { num: "120%", label: "Avg. Engagement Growth" },
];

const faqs = [
  { q: "Who is Apoorva Kaushal?", a: "Apoorva Kaushal (also known as Apoova, Apoorva Kuashal, or Apoorva Kaushal HMorix) is a social media manager and content creator from Hathras, Uttar Pradesh, India. She is known for Hindi comedy, parody, informative, and Krishna/spiritual content." },
  { q: "Where is Apoorva Kaushal from?", a: "Apoorva is from Hathras, Uttar Pradesh, India — a city in the Agra division known for its culture and heritage." },
  { q: "What type of content does Apoorva Kaushal create?", a: "Apoorva creates comedy reels, parody videos, informative/knowledge content, and devotional Krishna/Radha-Krishna content — all primarily in Hindi." },
  { q: "What services does Apoorva Kaushal offer?", a: "She offers social media management, content creation (Reels, UGC), Meta/Instagram ads, brand collaborations, SEO & copywriting, and spiritual content services." },
  { q: "How can I hire Apoorva Kaushal?", a: "You can hire Apoorva via the Hire page, contact form, or directly on WhatsApp. She works with brands across India and internationally." },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-left-bottom">
          <p className="hero-tagline">
            Authentic storytelling that connects brands with audiences through relatable Hindi content — comedy, parody &amp; Krishna prem.
          </p>
          <div className="hero-domain-left">APOORVAKAUSHAL.COM</div>
        </div>

        <div className="hero-center">
          <div className="hero-title display">
            SOCIAL MEDIA<span className="spark">✳</span>
          </div>
          <div className="hero-photo" aria-label="Apoorva Kaushal" />
          <div className="hero-signature">Manager</div>
          <div className="hero-badges" style={{ justifyContent: "center", marginTop: 20 }}>
            <span className="hero-badge">Hathras, UP 🇮🇳</span>
            <span className="hero-badge">@apoorva_kaushal</span>
            <span className="hero-badge">20M+ Reach</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-domain">APOORVAKAUSHAL.COM</div>
          <div className="socials">
            <a href="https://instagram.com/apoorva_kaushal" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .25 2.5.42.6.24 1 .53 1.5 1s.76.9 1 1.5c.17.5.36 1.3.42 2.5.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9a7.6 7.6 0 0 1-.42 2.5c-.24.6-.53 1-1 1.5s-.9.76-1.5 1c-.5.17-1.3.36-2.5.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07a7.6 7.6 0 0 1-2.5-.42c-.6-.24-1-.53-1.5-1s-.76-.9-1-1.5a7.6 7.6 0 0 1-.42-2.5C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-2 .42-2.5.24-.6.53-1 1-1.5s.9-.76 1.5-1c.5-.17 1.3-.36 2.5-.42C8.4 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.52 0-4.76.07-1 .05-1.53.21-1.9.35-.47.18-.8.4-1.16.75-.35.36-.57.7-.75 1.16-.14.36-.3.9-.35 1.9C3.01 8.48 3 8.86 3 12s0 3.52.08 4.76c.04 1 .2 1.53.34 1.9.18.47.4.8.75 1.16.36.35.7.57 1.16.75.36.14.9.3 1.9.35 1.24.06 1.62.08 4.76.08s3.52-.02 4.76-.08c1-.04 1.53-.21 1.9-.35.47-.18.8-.4 1.16-.75.35-.36.57-.7.75-1.16.14-.36.3-.9.35-1.9.06-1.24.08-1.62.08-4.76s-.02-3.52-.08-4.76c-.04-1-.21-1.53-.35-1.9-.18-.47-.4-.8-.75-1.16a3.1 3.1 0 0 0-1.16-.75c-.36-.14-.9-.3-1.9-.35C15.52 4.01 15.14 4 12 4Zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm4.8-2a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16Z"/></svg>
            </a>
            <a href="https://youtube.com/@apoorva_kaushal" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12Z"/></svg>
            </a>
            <a href="https://twitter.com/apoorva_kaushal" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24"><path d="M13.9 10.6 21.6 2h-2l-6.6 7.5L7.6 2H1l8.1 11.4L1 22h2l7-8 5.6 8H22Zm-2.5 2.9-.8-1.1L3.6 3.5h2.9l5.2 7.3.8 1.1 6.8 9.6h-2.9Z"/></svg>
            </a>
            <a href="https://facebook.com/apoorva_kaushal" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="stats-strip">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <div className="stat-num display">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── ABOUT SNIPPET ── */}
      <section className="section">
        <div className="section-title-row">
          <div>
            <span className="script" style={{ fontSize: 22 }}>Who am I?</span>
            <h2 className="section-title display">APOORVA KAUSHAL</h2>
          </div>
          <Link href="/about" className="btn btn-outline">Full Story →</Link>
        </div>
        <div className="grid-2">
          <div className="panel" style={{ border: "none", padding: 0, paddingRight: 40 }}>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--muted)", marginBottom: 20 }}>
              I'm <strong style={{ color: "var(--navy)" }}>Apoorva Kaushal</strong> — a social media manager and content creator based in <strong style={{ color: "var(--navy)" }}>Hathras, Uttar Pradesh, India</strong>. I help brands grow through cohesive visual identity, creative content strategy, and high-performing advertising campaigns.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--muted)", marginBottom: 28 }}>
              From comedy reels to Krishna prem content, from parody videos to Meta ad campaigns — I bring authenticity, strategy and creativity to every collaboration.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/hire" className="btn btn-primary">Hire Me ✦</Link>
              <Link href="/case-studies" className="btn btn-outline">View Case Studies</Link>
            </div>
          </div>
          <div className="panel" style={{ border: "none", borderLeft: "1px solid var(--line)", padding: "0 0 0 40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Content Creator", val: "Comedy · Parody · Informative · Krishna" },
                { label: "Location", val: "Hathras, Uttar Pradesh, India 🇮🇳" },
                { label: "Social Handle", val: "@apoorva_kaushal" },
                { label: "Also known as", val: "Apoova · Apoorva Kaushal HMorix · Apoorva Kuashal" },
                { label: "Brands Served", val: "50+ across India & globally" },
                { label: "Languages", val: "Hindi · English" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: 16, alignItems: "flex-start", paddingBottom: 14, borderBottom: "1px solid var(--line)" }}>
                  <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)", minWidth: 110, paddingTop: 2 }}>{item.label}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)" }}>{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div style={{ padding: "56px 48px 0" }}>
          <div className="section-title-row" style={{ marginBottom: 0, paddingBottom: 32, borderBottom: "1px solid var(--line)" }}>
            <div>
              <span className="tag">Services</span>
              <h2 className="section-title display" style={{ marginTop: 12 }}>WHAT I OFFER</h2>
            </div>
            <Link href="/services" className="btn btn-outline">All Services →</Link>
          </div>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-name display">{s.title}</div>
              <p className="service-desc">{s.desc}</p>
              <Link href={s.link} className="btn btn-outline" style={{ fontSize: 12, padding: "10px 20px" }}>Learn More →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── CASE STUDY TEASER ── */}
      <section className="section" style={{ background: "var(--navy)", color: "var(--white)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag" style={{ background: "rgba(255,255,255,.1)", borderColor: "rgba(255,255,255,.2)", color: "white" }}>Results</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>CASE STUDIES</h2>
          </div>
          <Link href="/case-studies" className="btn" style={{ background: "var(--maroon)", color: "white" }}>View All →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, border: "1px solid rgba(255,255,255,.15)", borderRadius: 8, overflow: "hidden" }}>
          {[
            { brand: "Fashion Brand", result: "120%", label: "Engagement Growth", desc: "30-day social strategy, Reels planning and campaign execution." },
            { brand: "Local Business", result: "3.2×", label: "Return on Ad Spend", desc: "Meta ad campaign with precision targeting across UP & Delhi." },
            { brand: "Spiritual Page", result: "500K+", label: "New Followers", desc: "Krishna content series that went viral across India." },
          ].map((c, i) => (
            <div key={c.brand} style={{ padding: "40px 32px", borderRight: i < 2 ? "1px solid rgba(255,255,255,.15)" : "none" }}>
              <div style={{ fontSize: 48, fontFamily: "Anton, sans-serif", color: "rgba(255,255,255,.15)", lineHeight: 1, marginBottom: -10 }}>0{i + 1}</div>
              <div style={{ fontSize: 18, fontFamily: "Anton, sans-serif", letterSpacing: ".02em", marginBottom: 8 }}>{c.brand}</div>
              <div style={{ fontSize: 40, fontFamily: "Anton, sans-serif", color: "var(--maroon)", lineHeight: 1, marginBottom: 4 }}>{c.result}</div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 14 }}>{c.label}</div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.6)", lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section">
        <div className="section-title-row">
          <div>
            <span className="tag">FAQ</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>FREQUENTLY ASKED</h2>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary className="faq-q">{f.q}<span className="faq-q-icon">+</span></summary>
              <p className="faq-a">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{ padding: "64px 48px", background: "var(--paper)", borderTop: "1px solid var(--line)", textAlign: "center" }}>
        <div className="script" style={{ fontSize: 22, marginBottom: 8 }}>Ready to grow?</div>
        <h2 className="display" style={{ fontSize: "clamp(32px,4vw,52px)", marginBottom: 16 }}>LET'S WORK TOGETHER</h2>
        <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.6 }}>
          Whether you're a brand, business or creator — let's build something that actually works.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/hire" className="btn btn-primary" style={{ fontSize: 14 }}>Hire Me ✦</Link>
          <Link href="/contact" className="btn btn-outline" style={{ fontSize: 14 }}>Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
