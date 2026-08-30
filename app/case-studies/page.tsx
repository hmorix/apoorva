import type { Metadata } from "next";
import Link from "next/link";
import { getContent, CaseStudyItem } from "@/lib/contentStore";
import { SparkleIcon } from "@/components/Icons";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Case Studies — Real Results by Apoorva Kaushal",
  description:
    "See real case studies from Apoorva Kaushal: 120% engagement growth, 3.2× ROAS, 500K+ new followers. Social media campaigns that actually work.",
  keywords: [
    "Apoorva Kaushal case study",
    "social media case study India",
    "Instagram growth case study",
    "Meta ads case study India",
    "content creator results India",
    "Hindi creator campaign results",
  ],
  alternates: { canonical: "https://apoorvakaushal.vercel.app/case-studies" },
};

const visualGradients = [
  "linear-gradient(135deg,#b98a9c,#7a4f5e)",
  "linear-gradient(135deg,#e3c9b8,#a97c5c)",
  "linear-gradient(135deg,#d8c4c8,#9c7078)",
  "linear-gradient(135deg,#c9a7ae,#8a5a63)",
];

export default async function CaseStudiesPage() {
  const content = await getContent();
  const casesData = content.cases;

  const pageHeroTitle = casesData?.pageHeroTitle || "CASE STUDIES";
  const pageHeroSub =
    casesData?.pageHeroSub ||
    "Real, verifiable results achieved for brands across India. Organic growth, engagement breakthroughs, and high-ROAS advertising campaigns.";

  const activeCases: CaseStudyItem[] =
    casesData?.caseStudiesList && casesData.caseStudiesList.length > 0
      ? casesData.caseStudiesList
      : [
          {
            num: "01",
            brand: "Fashion Brand — Hathras",
            category: "Social Media Management",
            tagline: "From invisible to viral in 90 days",
            challenge:
              "A Hathras-based fashion boutique had no social presence and zero engagement. Their content was inconsistent, had no visual identity, and the owner was posting randomly without a strategy.",
            solution:
              "I audited the brand, built a 30-day content calendar, redesigned the feed aesthetic with a cohesive navy-and-gold palette, scripted 8 Reels, and set up a Meta ad campaign targeting women aged 18–35 in UP.",
            result:
              "In 3 months, Instagram followers grew from 240 to 18,400. Engagement rate went from 0.8% to 7.2%. Two posts went viral, each exceeding 500K views organically.",
            metrics: [
              { num: "120%", label: "Engagement Growth" },
              { num: "18.4K", label: "New Followers" },
              { num: "500K+", label: "Organic Views" },
            ],
            tags: ["Social Media", "Content Creation", "Reels", "Meta Ads"],
          },
          {
            num: "02",
            brand: "Local Business — Uttar Pradesh",
            category: "Meta Ads Campaign",
            tagline: "3.2× return on every rupee spent",
            challenge:
              "A local service business in UP was spending money on Facebook ads with no ROI. Campaigns were running without proper targeting, and ad creative was stock-photo generic with no local relevance.",
            solution:
              "I rebuilt the entire campaign from scratch — new audience targeting segmented by city (Hathras, Agra, Mathura), new Hindi ad copy, UGC-style video creative, retargeting funnel, and daily budget optimisation.",
            result:
              "Within 60 days, cost per acquisition dropped by 64%. The campaign achieved 3.2× ROAS. Monthly revenue from digital increased from ₹40,000 to ₹1.28L.",
            metrics: [
              { num: "3.2×", label: "Return on Ad Spend" },
              { num: "64%", label: "Lower Acquisition Cost" },
              { num: "₹1.28L", label: "Monthly Digital Revenue" },
            ],
            tags: ["Meta Ads", "Facebook", "Instagram Ads", "ROAS"],
          },
          {
            num: "03",
            brand: "Spiritual Page — Krishna Content",
            category: "Content Creation & Growth",
            tagline: "500K followers through devotion and strategy",
            challenge:
              "A new devotional page focused on Krishna/Radha-Krishna content had 0 followers and needed to build an authentic following without paid ads. The niche is spiritual, so content needed deep cultural sensitivity.",
            solution:
              "I developed a content series blending storytelling, Bhagavad Gita verses, Krishna life lessons and relatable devotional poetry — all in authentic Hindi. Posting schedule was 2× daily, timed for morning and evening puja time.",
            result:
              "The page gained 500,000 organic followers in 6 months. 12 posts exceeded 1M views each. The page became a go-to for Hindi Krishna content across India.",
            metrics: [
              { num: "500K+", label: "New Followers" },
              { num: "12", label: "Posts 1M+ Views" },
              { num: "6M+", label: "Monthly Reach" },
            ],
            tags: ["Krishna Content", "Spiritual", "Hindi", "Organic Growth"],
          },
          {
            num: "04",
            brand: "Beauty Brand — India-wide",
            category: "Brand Collaboration",
            tagline: "Authentic UGC that actually converts",
            challenge:
              "A D2C beauty brand wanted authentic UGC content for their Instagram targeting Tier-2 India audiences. Previous influencer content felt scripted and had low saves/shares.",
            solution:
              "I created a 5-video UGC series — honest product reviews, tutorial content and 'before/after' Reels in Hindi. Content was filmed in a natural, relatable style with local context that resonated with the target audience.",
            result:
              "Average save rate was 8.4% (industry average: 2%). The brand's Instagram conversion rate increased 42%. One reel reached 2.3M views organically.",
            metrics: [
              { num: "8.4%", label: "Save Rate" },
              { num: "42%", label: "Conversion Rate Increase" },
              { num: "2.3M", label: "Organic Reel Views" },
            ],
            tags: ["UGC", "Brand Collab", "Beauty", "Hindi Content"],
          },
        ];

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
          <span className="tag">Proven Results</span>
          <span className="tag tag-maroon">Verified Case Studies</span>
        </div>
        <h1 className="page-hero-title display">{pageHeroTitle}</h1>
        <p className="page-hero-sub">{pageHeroSub}</p>
      </section>

      {/* ── CASE STUDIES LIST ── */}
      <div className="case-studies-wrap">
        {activeCases.map((cs, idx) => (
          <article className="case-study-card" key={cs.brand}>
            <div className="case-study-visual" style={{ background: cs.visual || visualGradients[idx % visualGradients.length] }}>
              <div className="case-study-visual-num display">{cs.num}</div>
              <div className="case-study-visual-brand display">{cs.brand}</div>
            </div>

            <div className="case-study-body">
              <div className="case-study-meta">
                <span className="tag">{cs.category}</span>
                <div className="tag tag-maroon" style={{ marginLeft: 8 }}>
                  {cs.tagline}
                </div>
              </div>

              <div className="case-study-section">
                <div className="case-study-sec-title">The Challenge</div>
                <p className="case-study-sec-text">{cs.challenge}</p>
              </div>

              <div className="case-study-section">
                <div className="case-study-sec-title">The Solution</div>
                <p className="case-study-sec-text">{cs.solution}</p>
              </div>

              <div className="case-study-section">
                <div className="case-study-sec-title">The Results</div>
                <p className="case-study-sec-text">{cs.result}</p>
              </div>

              {/* Metrics row */}
              <div className="case-study-metrics">
                {cs.metrics.map((m) => (
                  <div className="case-metric-item" key={m.label}>
                    <div className="case-metric-num display">{m.num}</div>
                    <div className="case-metric-label">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="case-study-tags">
                {cs.tags.map((t) => (
                  <span className="case-tag" key={t}>
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ── CTA ── */}
      <section className="section" style={{ textAlign: "center", background: "var(--navy)", color: "white" }}>
        <h2 className="display" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 12, color: "white" }}>
          WANT SIMILAR RESULTS FOR YOUR BRAND?
        </h2>
        <p style={{ maxWidth: 540, margin: "0 auto 28px", opacity: 0.8, fontSize: 15, lineHeight: 1.6 }}>
          Every campaign begins with understanding your unique audience. Let&apos;s talk about what we can achieve together.
        </p>
        <Link
          href="/hire"
          className="btn btn-primary"
          style={{ background: "white", color: "var(--navy)", display: "inline-flex", alignItems: "center", gap: 8 }}
        >
          <SparkleIcon size={14} />
          <span>Work With Apoorva</span>
        </Link>
      </section>
    </>
  );
}
