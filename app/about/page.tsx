import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Apoorva Kaushal — Content Creator from Hathras, Uttar Pradesh",
  description:
    "Learn about Apoorva Kaushal — social media manager and content creator from Hathras, UP. Her journey, qualifications, content style and why brands choose her.",
  keywords: [
    "Apoorva Kaushal biography", "Apoorva Kaushal life and journey",
    "who is Apoorva Kaushal", "Apoorva Kaushal content creator journey",
    "Apoorva Kaushal Hathras", "Apoorva Kaushal Uttar Pradesh creator",
  ],
  alternates: { canonical: "https://apoorvakaushal.com/about" },
};

const qualifications = [
  "Canva Masterclass Certificate",
  "Email Marketing — HubSpot",
  "Accenture Digital Marketing",
  "Ad Week Digital Marketing",
  "Meta Blueprint — Facebook Ads",
  "Google Digital Garage — Fundamentals",
];

const contentTypes = [
  { icon: "😂", title: "Comedy", desc: "Relatable Hindi comedy reels. Everyday life, family dynamics, desi situations." },
  { icon: "🎭", title: "Parody", desc: "Creative character parodies and situational satire in Hindi." },
  { icon: "📚", title: "Informative", desc: "Knowledge videos, interesting facts and educational content in Hindi." },
  { icon: "🕉️", title: "Krishna & Spiritual", desc: "Radha-Krishna stories, Bhagavad Gita wisdom, devotional content." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <span className="tag">About</span>
        <h1 className="page-hero-title display">APOORVA KAUSHAL</h1>
        <p className="page-hero-sub">
          Social Media Manager &amp; Content Creator · Hathras, Uttar Pradesh, India
        </p>
      </section>

      {/* ── BIO ── */}
      <section className="section">
        <div className="grid-2">
          <div className="panel" style={{ border: "none", padding: 0, paddingRight: 40 }}>
            <span className="script" style={{ fontSize: 20 }}>My Story</span>
            <h2 className="display" style={{ fontSize: "clamp(28px,3.5vw,42px)", margin: "8px 0 24px" }}>
              FROM HATHRAS<br />TO THE DIGITAL WORLD
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)", marginBottom: 16 }}>
              I'm <strong style={{ color: "var(--navy)" }}>Apoorva Kaushal</strong> — born and raised in <strong style={{ color: "var(--navy)" }}>Hathras, Uttar Pradesh</strong>, a city known for its culture and heritage. My journey into content creation began with a simple idea: create something that feels real, relatable and rooted in Indian values.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)", marginBottom: 16 }}>
              What started as comedy reels for friends quickly grew into a multi-platform digital presence reaching <strong style={{ color: "var(--navy)" }}>20 million+ people</strong>. Today I work with brands across India, helping them connect authentically with Hindi-speaking audiences.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)", marginBottom: 28 }}>
              My content spans four pillars: <strong style={{ color: "var(--navy)" }}>comedy</strong>, <strong style={{ color: "var(--navy)" }}>parody</strong>, <strong style={{ color: "var(--navy)" }}>informative</strong> and <strong style={{ color: "var(--navy)" }}>Krishna/spiritual</strong> content — all deeply rooted in the culture of Uttar Pradesh and delivered in authentic Hindi.
            </p>
            <Link href="/hire" className="btn btn-primary">Work With Me ✦</Link>
          </div>

          <div className="panel" style={{ border: "none", borderLeft: "1px solid var(--line)", padding: "0 0 0 40px" }}>
            {/* Real Portrait Photo */}
            <div style={{
              width: "100%", aspectRatio: "4/5", borderRadius: 8, marginBottom: 24,
              overflow: "hidden", border: "1px solid var(--line)",
              position: "relative", boxShadow: "0 8px 24px rgba(21,32,73,0.1)",
            }}>
              <img
                src="/photos/IMG-20260205-WA0035.jpg"
                alt="Apoorva Kaushal — Hathras, UP"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(to top, rgba(21,32,73,0.85), transparent)",
                padding: "20px 20px 14px", color: "white"
              }}>
                <div style={{ fontFamily: "Caveat, cursive", fontSize: 30, fontWeight: 700, color: "#f5c6ca" }}>Apoorva Kaushal</div>
                <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.9 }}>Hathras, Uttar Pradesh · India</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["Hathras, UP 🇮🇳", "@apoorva_kaushal", "She/Her", "Hindi · English"].map((b) => (
                <span className="tag" key={b}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-strip">
        {[
          { num: "20M+", label: "Total Reach" },
          { num: "50+", label: "Brands Served" },
          { num: "3+", label: "Years Active" },
          { num: "4", label: "Content Pillars" },
        ].map((s) => (
          <div className="stat-item" key={s.label}>
            <div className="stat-num display">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── CONTENT TYPES ── */}
      <section className="section">
        <div className="section-title-row">
          <div>
            <span className="tag">Content</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>WHAT I CREATE</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, border: "1px solid var(--line)", borderRadius: 8, overflow: "hidden" }}>
          {contentTypes.map((c, i) => (
            <div key={c.title} style={{
              padding: "40px 28px",
              borderRight: i < 3 ? "1px solid var(--line)" : "none",
            }}>
              <div style={{ fontSize: 36, marginBottom: 14 }}>{c.icon}</div>
              <div className="display" style={{ fontSize: 18, marginBottom: 10 }}>{c.title}</div>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUALIFICATIONS ── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">Credentials</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>QUALIFICATIONS</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
          {qualifications.map((q) => (
            <div key={q} style={{
              border: "1.5px solid var(--navy)",
              borderRadius: 24,
              padding: "16px 24px",
              fontSize: 14,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}>
              <span style={{ color: "var(--maroon)" }}>✓</span> {q}
            </div>
          ))}
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="section">
        <div className="section-title-row">
          <div>
            <span className="tag">Collaborations</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>BRANDS I'VE WORKED WITH</h2>
          </div>
        </div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
          {["Fashion Brands", "Beauty & Skincare", "Local Businesses", "Spiritual & Wellness", "Tech Startups", "Food & Lifestyle", "Education Brands", "E-Commerce"].map((b) => (
            <span key={b} style={{
              padding: "10px 22px",
              border: "1px solid var(--line)",
              borderRadius: 24,
              fontSize: 13,
              fontWeight: 700,
              color: "var(--muted)",
              fontFamily: "Anton, sans-serif",
              letterSpacing: ".03em",
            }}>{b}</span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "64px 48px", background: "var(--navy)", color: "var(--white)", textAlign: "center" }}>
        <div className="script" style={{ fontSize: 22, marginBottom: 8, color: "rgba(255,255,255,.7)" }}>Let's connect</div>
        <h2 className="display" style={{ fontSize: "clamp(28px,4vw,48px)", marginBottom: 16 }}>READY TO COLLABORATE?</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", maxWidth: 440, margin: "0 auto 32px", lineHeight: 1.6 }}>
          Brands, businesses and creators across India — let's build content that connects.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/hire" className="btn btn-maroon">Hire Me ✦</Link>
          <Link href="/contact" className="btn" style={{ background: "rgba(255,255,255,.1)", color: "white", border: "1px solid rgba(255,255,255,.2)" }}>Contact Me</Link>
        </div>
      </section>
    </>
  );
}
