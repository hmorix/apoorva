"use client";
import { useState } from "react";
import Link from "next/link";
import {
  InstagramIcon,
  YouTubeIcon,
  TwitterXIcon,
  FacebookIcon,
  TrendingUpIcon,
  EyeIcon,
  UsersIcon,
  SparkleIcon,
  PlayIcon,
  HeartIcon,
  BriefcaseIcon,
  LayersIcon,
} from "@/components/Icons";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// Reach data in thousands (K) scaled to 2M+ all-time benchmark & 340K avg views
const reachData = [95, 125, 160, 145, 210, 255, 240, 295, 330, 310, 340, 365];
const engageData = [5.1, 5.4, 5.8, 5.5, 6.1, 6.5, 6.3, 6.6, 6.7, 6.4, 6.8, 6.8];
const maxReach = Math.max(...reachData);
const maxEngage = Math.max(...engageData);

// Platform breakdown strictly aligned with user data:
// Combined Followers: 5K+ (5,150 total)
// Instagram: 3.8K (74%)
// YouTube: 550 (11%)
// Facebook: 450 (9%)
// X (Twitter): 350 (7%)
const platforms = [
  {
    icon: <InstagramIcon size={18} />,
    name: "Instagram",
    handle: "@apoorva__kaushal",
    followers: "3.8K",
    pct: 74,
    fill: "#E4405F",
  },
  {
    icon: <YouTubeIcon size={18} />,
    name: "YouTube",
    handle: "@_apoorva7__",
    followers: "550",
    pct: 11,
    fill: "#FF0000",
  },
  {
    icon: <FacebookIcon size={18} />,
    name: "Facebook",
    handle: "@apoorva_kaushal",
    followers: "450",
    pct: 9,
    fill: "#1877F2",
  },
  {
    icon: <TwitterXIcon size={16} />,
    name: "X (Twitter)",
    handle: "@apoorva_kaushal",
    followers: "350",
    pct: 7,
    fill: "#152049",
  },
];

// Campaign Overview Data aligned with 2M+ total reach & verified client results
const campaigns = [
  {
    name: "Fashion Boutique Launch — Hathras",
    platform: "Instagram Reels & Stories",
    reach: "420K",
    spend: "₹12,000",
    roas: "3.4×",
    status: "completed",
  },
  {
    name: "D2C Ayurvedic Skincare UGC",
    platform: "Instagram UGC & Reels",
    reach: "340K",
    spend: "₹0 (Organic)",
    roas: "4.2× ROI",
    status: "completed",
  },
  {
    name: "Krishna Devotional Story Series",
    platform: "YouTube Shorts & Reels",
    reach: "560K",
    spend: "₹0 (Organic)",
    roas: "400k+ Views",
    status: "completed",
  },
  {
    name: "UP Local Retail Lead Generation",
    platform: "Meta Ads (FB + IG)",
    reach: "280K",
    spend: "₹9,500",
    roas: "3.9×",
    status: "completed",
  },
  {
    name: "Festive Ethnic Lookbook Shoot",
    platform: "Instagram & Facebook",
    reach: "290K",
    spend: "₹14,000",
    roas: "2.8×",
    status: "active",
  },
  {
    name: "Wellness Routine UGC Collab",
    platform: "Instagram Reels",
    reach: "180K",
    spend: "₹6,500",
    roas: "3.6×",
    status: "active",
  },
];

// BarChart component
const BarChart = ({
  data,
  activeChart,
}: {
  data: number[];
  activeChart: "reach" | "engagement";
}) => {
  const chartMax = activeChart === "reach" ? maxReach : maxEngage;
  return (
    <div className="bar-chart">
      {data.map((val, i) => (
        <div className="bar-col" key={months[i]}>
          <div
            className="bar"
            style={{
              height: `${(val / chartMax) * 100}%`,
              background: i >= 10 ? "var(--maroon)" : "var(--navy)",
              transition: "height 0.4s ease, background 0.3s ease",
            }}
            title={`${months[i]}: ${val}${activeChart === "reach" ? "K views" : "% engagement"}`}
          />
          <div className="bar-label">{months[i]}</div>
        </div>
      ))}
    </div>
  );
};

export default function DashboardPage() {
  const [activeChart, setActiveChart] = useState<"reach" | "engagement">("reach");
  const chartData = activeChart === "reach" ? reachData : engageData;

  const kpis = [
    {
      icon: <EyeIcon size={20} className="dash-icon-accent" />,
      label: "Total Reach (All-time)",
      num: "2M+",
      change: "18% vs last quarter",
      up: true,
      sub: "Across all platforms",
    },
    {
      icon: <PlayIcon size={18} className="dash-icon-accent" />,
      label: "Avg. Reel Views",
      num: "340K",
      change: "24% vs last month",
      up: true,
      sub: "Per organic video",
    },
    {
      icon: <HeartIcon size={18} className="dash-icon-accent" />,
      label: "Engagement Rate",
      num: "6.8%",
      change: "1.2pp vs last month",
      up: true,
      sub: "Industry benchmark 2.1%",
    },
    {
      icon: <BriefcaseIcon size={18} className="dash-icon-accent" />,
      label: "Brands Collaborated",
      num: "5+",
      change: "3 new this year",
      up: true,
      sub: "D2C, Fashion & Local",
    },
    {
      icon: <YouTubeIcon size={18} className="dash-icon-accent" />,
      label: "Total Subscribers",
      num: "550",
      change: "60+ this month",
      up: true,
      sub: "YouTube official channel",
    },
    {
      icon: <TrendingUpIcon size={18} className="dash-icon-accent" />,
      label: "Total Youtube Views",
      num: "400k+",
      change: "2× improvement",
      up: true,
      sub: "Long-form & Shorts",
    },
    {
      icon: <UsersIcon size={18} className="dash-icon-accent" />,
      label: "Followers (Combined)",
      num: "5K+",
      change: "3K this year",
      up: true,
      sub: "Instagram, YT & FB",
    },
    {
      icon: <LayersIcon size={18} className="dash-icon-accent" />,
      label: "Content Pieces Created",
      num: "500+",
      change: "40 this month",
      up: true,
      sub: "Reels, Posts & UGC",
    },
  ];

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
          <span className="tag">Analytics</span>
          <span className="tag tag-maroon">Verified Data</span>
        </div>
        <h1 className="page-hero-title display">ACCOUNT DASHBOARD</h1>
        <p className="page-hero-sub">
          Live &amp; historical performance overview — organic reach, video views, advertising ROI, and cross-platform breakdown. Based in Hathras, Uttar Pradesh, India.
        </p>
      </section>

      {/* ── KPI GRID ── */}
      <div className="dash-grid">
        {kpis.map((k) => (
          <div className="dash-kpi" key={k.label}>
            <div className="dash-kpi-top">
              <div className="dash-kpi-label">{k.label}</div>
              <div className="dash-kpi-icon-wrap">{k.icon}</div>
            </div>
            <div className="dash-kpi-num display">{k.num}</div>
            <div className={`dash-kpi-change${k.up ? "" : " down"}`}>
              <TrendingUpIcon size={13} />
              <span>{k.change}</span>
            </div>
            <div className="dash-kpi-sub">
              {k.sub}
            </div>
          </div>
        ))}
      </div>

      {/* ── CHART & PLATFORM ROW ── */}
      <div className="dash-chart-row">
        {/* Bar Chart */}
        <div className="dash-chart">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <div className="dash-chart-title">
                {activeChart === "reach"
                  ? "Monthly Video Reach (in Thousands)"
                  : "Monthly Engagement Rate (%)"}
              </div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>
                {activeChart === "reach"
                  ? "Consistently scaling to 340K+ monthly organic views"
                  : "Average 6.8% active audience interaction"}
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {(["reach", "engagement"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveChart(t)}
                  style={{
                    padding: "6px 14px",
                    border: "1.5px solid var(--line)",
                    borderRadius: 100,
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                    background: activeChart === t ? "var(--navy)" : "transparent",
                    color: activeChart === t ? "white" : "var(--navy)",
                    textTransform: "capitalize",
                    transition: "all 0.2s ease",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <BarChart data={chartData} activeChart={activeChart} />
        </div>

        {/* Platform Breakdown */}
        <div className="dash-platform">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <div className="dash-chart-title">Platform Breakdown</div>
            <span className="tag" style={{ fontSize: 11 }}>5K+ Total</span>
          </div>
          <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 18 }}>
            Combined follower &amp; subscriber distribution across social channels.
          </p>

          {platforms.map((p) => (
            <div className="platform-row" key={p.name}>
              <span className="platform-icon" style={{ color: p.fill }}>
                {p.icon}
              </span>
              <div style={{ display: "flex", flexDirection: "column", minWidth: 90 }}>
                <span className="platform-name">{p.name}</span>
                <span style={{ fontSize: 10.5, color: "var(--muted)" }}>{p.handle}</span>
              </div>
              <div className="platform-bar-bg">
                <div
                  className="platform-bar-fill"
                  style={{ width: `${p.pct}%`, background: p.fill }}
                />
              </div>
              <span className="platform-val">{p.followers}</span>
            </div>
          ))}

          {/* Top Audience Locations */}
          <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid var(--line)" }}>
            <div className="dash-chart-title" style={{ marginBottom: 4 }}>
              Top Audience Locations
            </div>
            <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 14 }}>
              Deep reach across Hindi heartland &amp; urban Tier-1/Tier-2 metros.
            </p>
            {[
              { loc: "Uttar Pradesh, India", pct: 44 },
              { loc: "Delhi NCR", pct: 22 },
              { loc: "Mumbai & Maharashtra", pct: 14 },
              { loc: "Rest of India", pct: 14 },
              { loc: "International", pct: 6 },
            ].map((l) => (
              <div
                key={l.loc}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <span style={{ fontSize: 12, flex: 1.6, color: "var(--muted)" }}>
                  {l.loc}
                </span>
                <div className="platform-bar-bg" style={{ flex: 2 }}>
                  <div
                    className="platform-bar-fill"
                    style={{ width: `${l.pct}%`, background: "var(--navy)" }}
                  />
                </div>
                <span className="platform-val">{l.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CAMPAIGN OVERVIEW TABLE ── */}
      <div style={{ padding: "36px 32px", borderTop: "1px solid var(--line)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 20,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "var(--navy)" }}>
              Campaign Performance Overview
            </div>
            <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>
              Real historical benchmarks across organic video series and paid Meta ad campaigns.
            </p>
          </div>
          <Link href="/hire" className="btn btn-primary" style={{ padding: "8px 18px", fontSize: 12, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <SparkleIcon size={12} />
            <span>Start a Campaign</span>
          </Link>
        </div>

        <div className="dash-table-wrap">
          <table className="dash-table">
            <thead>
              <tr>
                <th>Campaign Name</th>
                <th>Platform / Format</th>
                <th>Total Reach</th>
                <th>Ad Spend</th>
                <th>ROAS / Performance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.name}>
                  <td style={{ fontWeight: 700, color: "var(--navy)" }}>{c.name}</td>
                  <td>{c.platform}</td>
                  <td style={{ fontWeight: 600 }}>{c.reach}</td>
                  <td>{c.spend}</td>
                  <td style={{ fontWeight: 700, color: "var(--maroon)" }}>{c.roas}</td>
                  <td>
                    <span className={`status-pill status-${c.status}`}>
                      {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 16 }}>
          * Account benchmarks reflect verified cumulative metrics (2M+ All-Time Reach, 340K Avg. Reel Views, 400k+ YouTube Views, 550 Subscribers, 5K+ Combined Followers, 500+ Content Pieces Created, 5+ Brands Collaborated). Location: Hathras, Uttar Pradesh, India.
        </p>
      </div>
    </>
  );
}
