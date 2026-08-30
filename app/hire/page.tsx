import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/lib/contentStore";
import {
  HandshakeIcon,
  MicIcon,
  SpiritualIcon,
  BuildingIcon,
  WhatsAppIcon,
  MailIcon,
  InstagramIcon,
  MapPinIcon,
  StarIcon,
  CheckIcon,
  ArrowRightIcon,
  SparkleIcon,
} from "@/components/Icons";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Hire Apoorva Kaushal — Social Media Manager & Content Creator India",
  description:
    "Hire Apoorva Kaushal for social media management, content creation, Meta ads or brand collaboration. Based in Hathras, UP. Serving brands across India. Contact via form or WhatsApp.",
  keywords: [
    "hire Apoorva Kaushal",
    "hire social media manager India",
    "hire content creator India",
    "brand collaboration India",
    "hire influencer Uttar Pradesh",
    "social media manager for hire India",
  ],
  alternates: { canonical: "https://apoorvakaushal.vercel.app/hire" },
};

export default async function HirePage() {
  const content = await getContent();
  const services = content.services;
  const contact = content.contact;
  const photos = content.photos || {};

  const heroTitle = content.hire?.pageHeroTitle || "HIRE APOORVA KAUSHAL";
  const heroSub =
    content.hire?.pageHeroSub ||
    "Available for full-service social media management, creative UGC video production, sponsored brand integrations, and digital growth consulting.";

  const packages = (services.packages && services.packages.length > 0)
    ? services.packages
    : [
        {
          name: "STARTER",
          price: services.starterPrice || "₹15,000",
          period: `per ${services.starterPeriod || "month"}`,
          desc: services.starterDesc || "Perfect for local businesses and small brands starting their social media journey.",
          features: [
            "1 platform managed (Instagram or Facebook)",
            "12 curated posts per month",
            "Content calendar & hashtag strategy",
            "Audience engagement monitoring",
            "Monthly performance growth report",
          ],
          cta: "Get Started",
          featured: false,
        },
        {
          name: "GROWTH",
          price: services.growthPrice || "₹35,000",
          period: `per ${services.growthPeriod || "month"}`,
          desc: services.growthDesc || "For brands serious about scaling. Full social management, viral Reels and Meta ads included.",
          features: [
            "2 platforms managed (Instagram + Facebook)",
            "20 feed posts + 8 scripted Reels per month",
            "Meta Ads campaign management (up to ₹15K spend)",
            "Weekly analytics & conversion tracking",
            "Full content strategy & monthly planning call",
            "Trend-aligned viral audio research",
          ],
          cta: "Most Popular",
          featured: true,
        },
        {
          name: "PREMIUM",
          price: services.premiumPrice || "₹65,000",
          period: `per ${services.premiumPeriod || "month"}`,
          desc: services.premiumDesc || "Complete 360° digital presence management for established businesses and fast-growing brands.",
          features: [
            "All platforms (Instagram + YouTube + Facebook)",
            "Unlimited high-converting UGC & video reels",
            "Meta Ads management (up to ₹40K spend)",
            "SEO copywriting & blog content strategy",
            "Bi-weekly strategic growth calls",
            "Direct priority WhatsApp VIP support",
          ],
          cta: "Contact for Details",
          featured: false,
        },
      ];

  const collabTypes = [
    {
      icon: <HandshakeIcon size={24} />,
      title: "Brand Collaboration",
      desc: "Sponsored Reels, authentic product reviews, and brand integrations reaching 2M+ Hindi audience.",
    },
    {
      icon: <MicIcon size={24} />,
      title: "Speaking & Workshops",
      desc: "Digital marketing workshops, content creation masterclasses, and creator panels.",
    },
    {
      icon: <SpiritualIcon size={24} />,
      title: "Spiritual Campaigns",
      desc: "Dedicated Krishna and devotional storytelling campaigns for wellness & spiritual brands.",
    },
    {
      icon: <BuildingIcon size={24} />,
      title: "Local Business Growth",
      desc: "Targeted Meta ad funnels & local branding for businesses in Hathras, Agra, Mathura, and UP.",
    },
  ];

  const whatsappNumber = contact.whatsappNumber || "919368153189";
  const email = contact.email || "apoorva@apoorvakaushal.com";
  const location = contact.location || "Hathras, Uttar Pradesh, India";
  const postalCode = contact.postalCode || "204101";

  const hire1Img = photos.hire1 || photos.profile || "/photos/profile.jpg";
  const hire2Img = photos.hire2 || photos.whoami || "/photos/IMG-20260205-WA0035.jpg";

  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
          <span className="tag">Hire Me</span>
          <span className="tag tag-maroon">Available for Projects</span>
          <span className="tag tag-maroon">Hathras, UP</span>
        </div>
        <h1 className="page-hero-title display">{heroTitle}</h1>
        <p className="page-hero-sub">{heroSub}</p>
      </section>

      {/* ── COLLABORATION TYPES ── */}
      <section className="section">
        <div className="section-title-row">
          <div>
            <span className="tag">Ways to Work Together</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              SERVICES &amp; COLLABORATION
            </h2>
          </div>
        </div>
        <div className="hire-collab-grid">
          {collabTypes.map((c) => (
            <div className="collab-card" key={c.title}>
              <div className="collab-icon-box">{c.icon}</div>
              <div className="display collab-title">{c.title}</div>
              <p className="collab-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PACKAGES & PRICING ── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="section-title-row">
          <div>
            <span className="tag">Monthly Retainers</span>
            <h2 className="section-title display" style={{ marginTop: 12 }}>
              SOCIAL MEDIA PACKAGES
            </h2>
          </div>
        </div>
        <div className="pricing-grid">
          {packages.map((p) => (
            <div className={`pricing-card${p.featured ? " featured" : ""}`} key={p.name}>
              {p.featured && <div className="featured-badge">MOST POPULAR</div>}
              <div className="display package-name">{p.name}</div>
              <div className="price-row">
                <span className="price-amount">{p.price}</span>
                <span className="price-period">{p.period}</span>
              </div>
              <p className="package-desc">{p.desc}</p>
              <div className="package-features">
                {p.features.map((f: string) => (
                  <div className="feature-item" key={f}>
                    <CheckIcon size={14} className="feature-check" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hi Apoorva! I'm interested in the ${p.name} Package (${p.price}/${p.period}).`
                )}`}
                className={`btn ${p.featured ? "btn-primary" : "btn-outline"}`}
                style={{ width: "100%", justifyContent: "center", display: "inline-flex", alignItems: "center", gap: 8 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SparkleIcon size={13} />
                <span>{p.cta}</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── VISUAL SPOTLIGHT ── */}
      <section className="section">
        <div className="page-grid-2-equal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, alignItems: "center" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", border: "1px solid var(--line)", background: "var(--paper)" }}>
            <img src={hire1Img} alt="Apoorva Kaushal" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", border: "1px solid var(--line)", background: "var(--paper)" }}>
            <img src={hire2Img} alt="Apoorva Kaushal creator" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* ── DIRECT CONTACT OPTIONS ── */}
      <section className="section" style={{ background: "var(--navy)", color: "white" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div className="tag tag-maroon" style={{ marginBottom: 16, display: "inline-block" }}>
            Direct Channels
          </div>
          <h2 className="display" style={{ fontSize: "clamp(26px, 4vw, 40px)", marginBottom: 12, color: "white" }}>
            LET&apos;S DISCUSS YOUR BRAND
          </h2>
          <p style={{ opacity: 0.85, fontSize: 15, marginBottom: 28, lineHeight: 1.6 }}>
            Located in {location} ({postalCode}). Partnering with brands across India &amp; globally.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%20Apoorva!%20I'd%20like%20to%20hire%20you.`}
              className="btn"
              style={{ background: "#25D366", color: "white", display: "inline-flex", alignItems: "center", gap: 8 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="btn"
              style={{ background: "white", color: "var(--navy)", display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <MailIcon size={16} />
              <span>{email}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
