"use client";

import { useState } from "react";

// ─── ICONS (inline SVG, no external deps) ────────────────────────────
const Icons = {
  Instagram: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Youtube: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768" />
      <path d="M19 4l-6.768 6.768" />
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  TrendingUp: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Eye: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Briefcase: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  UserPlus: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="20" y1="8" x2="20" y2="14" />
      <line x1="23" y1="11" x2="17" y2="11" />
    </svg>
  ),
  BarChart3: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  Users2: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  FileText: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  ArrowUp: () => (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  ),
  ArrowDown: () => (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  ),
  Calendar: () => (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  MapPin: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Zap: () => (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Megaphone: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l18-5v12l-18-5z" />
      <path d="M5 12v4a2 2 0 0 0 2 2h2" />
    </svg>
  ),
  Activity: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  Layers: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  PieChart: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  ),
  LineChart: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 18 9 12 14 16 21 7" />
    </svg>
  ),
};

// ─── DATA (changed to new sample values) ─────────────────────────────
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const reachData = [2.4, 3.1, 2.8, 4.2, 5.0, 4.5, 5.8, 6.3, 5.9, 7.2, 8.1, 7.6]; // new data
const engageData = [3.5, 4.0, 3.8, 5.2, 6.1, 5.7, 6.8, 7.5, 7.0, 8.2, 9.1, 8.6]; // new data
const maxReach = Math.max(...reachData);
const maxEngage = Math.max(...engageData);

// Platform data unchanged but can be changed
const platforms = [
    { icon: Icons.Instagram, name: "Instagram", followers: "48.5K", pct: 85, fill: "#E4405F" },
    { icon: Icons.Youtube, name: "YouTube", followers: "22.1K", pct: 55, fill: "#FF0000" },
    { icon: Icons.Twitter, name: "X (Twitter)", followers: "8.4K", pct: 28, fill: "#1DA1F2" },
    { icon: Icons.Facebook, name: "Facebook", followers: "14.6K", pct: 40, fill: "#1877F2" },
];

// Campaigns unchanged
const campaigns = [
    { name: "Fashion Brand — Spring", platform: "Instagram", reach: "2.4M", spend: "₹18,000", roas: "3.2×", status: "complete" },
    { name: "Local Business — UP", platform: "Facebook + IG", reach: "980K", spend: "₹12,000", roas: "4.1×", status: "complete" },
    { name: "Beauty Brand UGC", platform: "Instagram", reach: "3.1M", spend: "₹0 (organic)", roas: "—", status: "complete" },
    { name: "Krishna Content Series", platform: "YouTube + IG", reach: "6.2M", spend: "₹0 (organic)", roas: "—", status: "complete" },
    { name: "Festive Season Campaign", platform: "Facebook", reach: "1.8M", spend: "₹24,000", roas: "2.8×", status: "active" },
    { name: "Spiritual Brand Collab", platform: "Instagram", reach: "—", spend: "₹8,000", roas: "—", status: "active" },
];

const kpiData = [
    { label: "Total Reach (All-time)", num: "2.8M+", change: "↑ 22% vs last quarter", up: true, icon: Icons.Users2 },
    { label: "Avg. Reel Views", num: "420K", change: "↑ 18% vs last month", up: true, icon: Icons.Eye },
    { label: "Engagement Rate", num: "7.2%", change: "↑ 1.4pp vs last month", up: true, icon: Icons.TrendingUp },
    { label: "Brands Collaborated", num: "6+", change: "↑ 9 new this year", up: true, icon: Icons.Briefcase },
    { label: "Total Subscriber", num: "620", change: "↑ 8 this quarter", up: true, icon: Icons.UserPlus },
    { label: "Total Youtube Views", num: "450k+", change: "↑ 0.5× improvement", up: true, icon: Icons.BarChart3 },
    { label: "Followers (Combined)", num: "5.8K+", change: "↑ 14K this month", up: true, icon: Icons.Users },
    { label: "Content Pieces Created", num: "550+", change: "↑ 45 this month", up: true, icon: Icons.FileText },
];

const locations = [
    { loc: "Uttar Pradesh, India", pct: 42 },
    { loc: "Delhi NCR", pct: 18 },
    { loc: "Mumbai & Maharashtra", pct: 12 },
    { loc: "Rest of India", pct: 20 },
    { loc: "International", pct: 8 },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────────
export default function DashboardPage() {
    const [activeChart, setActiveChart] = useState<"reach" | "engagement">("reach");
    const chartData = activeChart === "reach" ? reachData : engageData;
    const chartMax = activeChart === "reach" ? maxReach : maxEngage;

    // Build SVG line chart points
    const padding = { top: 8, bottom: 20, left: 6, right: 6 };
    const width = 100; // percentage of container
    const height = 140; // fixed px
    const points = chartData.map((val, i) => {
        const x = (i / (chartData.length - 1)) * 100; // percentage
        const y = 100 - (val / chartMax) * 90; // percentage (leave 10% top margin)
        return `${x},${y}`;
    }).join(" ");

    return (
        <div className="dash-wrapper">

            {/* ─── PAGE HERO ─── */}
            <section className="page-hero">
                <div className="hero-badge">
                    <Icons.Activity />
                    <span>Analytics</span>
                </div>
                <h1 className="page-hero-title display">ACCOUNT DASHBOARD</h1>
                <p className="page-hero-sub">
                    Public performance overview — reach, views, ad campaign results and platform breakdown.
                    Data represents historical campaign benchmarks.
                </p>
            </section>

            {/* ─── KPI GRID ─── */}
            <div className="dash-grid">
                {kpiData.map((k) => {
                    const Icon = k.icon;
                    return (
                        <div className="dash-kpi" key={k.label}>
                            <div className="dash-kpi-header">
                                <div className="dash-kpi-label">{k.label}</div>
                                <div className="dash-kpi-icon">
                                    <Icon />
                                </div>
                            </div>
                            <div className="dash-kpi-num display">{k.num}</div>
                            <div className={`dash-kpi-change ${k.up ? "" : "down"}`}>
                                {k.up ? <Icons.ArrowUp /> : <Icons.ArrowDown />}
                                {k.change.replace(/[↑↓]\s*/, "")}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ─── CHART ROW ─── */}
            <div className="dash-chart-row">

                {/* Line Chart */}
                <div className="dash-chart">
                    <div className="chart-header">
                        <div className="dash-chart-title">
                            {activeChart === "reach" ? "Monthly Reach (millions)" : "Monthly Engagement Rate (%)"}
                            <Icons.LineChart />
                        </div>
                        <div className="chart-toggle">
                            {(["reach", "engagement"] as const).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setActiveChart(t)}
                                    className={`chart-toggle-btn ${activeChart === t ? "active" : ""}`}
                                >
                                    {t === "reach" ? <Icons.BarChart3 /> : <Icons.PieChart />}
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="line-chart-container">
                        <svg viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" className="line-chart-svg">
                            {/* Grid lines (optional) */}
                            {[0, 25, 50, 75, 100].map((y) => (
                                <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#e6edf4" strokeWidth="0.5" strokeDasharray="2,2" />
                            ))}
                            {/* Line */}
                            <polyline
                                points={points}
                                fill="none"
                                stroke="var(--maroon)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            {/* Dots */}
                            {chartData.map((val, i) => {
                                const x = (i / (chartData.length - 1)) * 100;
                                const y = 100 - (val / chartMax) * 90;
                                return (
                                    <circle key={i} cx={x} cy={y} r="1.5" fill="var(--maroon)" stroke="white" strokeWidth="0.8" />
                                );
                            })}
                        </svg>
                        <div className="line-labels">
                            {months.map((m) => (
                                <span key={m} className="line-label">{m}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Platform + Location Breakdown */}
                <div className="dash-sidebar">

                    {/* Platform Breakdown */}
                    <div className="dash-platform">
                        <div className="dash-chart-title" style={{ marginBottom: 16 }}>
                            <Icons.Layers />
                            Platform Breakdown
                        </div>
                        {platforms.map((p) => {
                            const Icon = p.icon;
                            return (
                                <div className="platform-row" key={p.name}>
                                    <span className="platform-icon">
                                        <Icon />
                                    </span>
                                    <span className="platform-name">{p.name}</span>
                                    <div className="platform-bar-bg">
                                        <div className="platform-bar-fill" style={{ width: `${p.pct}%`, background: p.fill }} />
                                    </div>
                                    <span className="platform-val">{p.followers}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Location breakdown */}
                    <div className="dash-location">
                        <div className="dash-chart-title" style={{ marginBottom: 16 }}>
                            <Icons.MapPin />
                            Top Locations
                        </div>
                        {locations.map((l) => (
                            <div className="location-row" key={l.loc}>
                                <span className="location-name">{l.loc}</span>
                                <div className="platform-bar-bg">
                                    <div className="platform-bar-fill" style={{ width: `${l.pct}%` }} />
                                </div>
                                <span className="location-pct">{l.pct}%</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* ─── CAMPAIGN PERFORMANCE TABLE ─── */}
            <div className="dash-table-section">
                <div className="table-header">
                    <div className="table-title">
                        <Icons.Megaphone />
                        Campaign Performance
                    </div>
                    <span className="table-badge">6 campaigns</span>
                </div>

                <div className="dash-table-wrap">
                    <table className="dash-table">
                        <thead>
                            <tr>
                                <th>Campaign</th>
                                <th>Platform</th>
                                <th>Reach</th>
                                <th>Ad Spend</th>
                                <th>ROAS</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map((c) => (
                                <tr key={c.name}>
                                    <td className="campaign-name">{c.name}</td>
                                    <td>{c.platform}</td>
                                    <td>{c.reach}</td>
                                    <td>{c.spend}</td>
                                    <td className="roas-value">{c.roas}</td>
                                    <td>
                                        <span className={`status-pill status-${c.status}`}>
                                            {c.status === "active" && <Icons.Zap />}
                                            {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="table-footer-note">
                    <Icons.Calendar />
                    Dashboard shows historical campaign benchmarks. Numbers are representative of real past results.
                    Location: Hathras, Uttar Pradesh, India.
                </p>
            </div>

            {/* ─── STYLES ─── */}
            <style jsx>{`
                .dash-wrapper {
                    --navy: #0b1a33;
                    --maroon: #b22234;
                    --maroon-light: #d44547;
                    --line: #e6edf4;
                    --muted: #6b7a8f;
                    --bg: #f8fafc;
                    --card: #ffffff;
                    --shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.04);
                    --radius: 16px;
                    --radius-sm: 10px;
                    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                    color: var(--navy);
                    background: var(--bg);
                    padding: 32px 40px;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .display {
                    font-weight: 700;
                    letter-spacing: -0.02em;
                }
                .page-hero {
                    margin-bottom: 32px;
                    padding-bottom: 24px;
                    border-bottom: 1px solid var(--line);
                }
                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: var(--navy);
                    color: #fff;
                    font-size: 11px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    padding: 4px 14px 4px 12px;
                    border-radius: 100px;
                    margin-bottom: 14px;
                }
                .page-hero-title {
                    font-size: 32px;
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    margin: 0 0 6px 0;
                    color: var(--navy);
                }
                .page-hero-sub {
                    font-size: 15px;
                    color: var(--muted);
                    max-width: 680px;
                    margin: 0;
                    line-height: 1.5;
                }
                .dash-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                    margin-bottom: 32px;
                }
                .dash-kpi {
                    background: var(--card);
                    padding: 18px 20px 16px;
                    border-radius: var(--radius-sm);
                    box-shadow: var(--shadow);
                    border: 1px solid var(--line);
                    transition: transform 0.15s ease, box-shadow 0.15s ease;
                }
                .dash-kpi:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
                }
                .dash-kpi-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 4px;
                }
                .dash-kpi-label {
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    color: var(--muted);
                }
                .dash-kpi-icon {
                    color: var(--muted);
                    opacity: 0.6;
                }
                .dash-kpi-num {
                    font-size: 28px;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    color: var(--navy);
                    line-height: 1.2;
                }
                .dash-kpi-change {
                    font-size: 12px;
                    font-weight: 500;
                    color: #2b7e4b;
                    display: flex;
                    align-items: center;
                    gap: 3px;
                    margin-top: 2px;
                }
                .dash-kpi-change.down {
                    color: #c0392b;
                }
                .dash-kpi-change svg {
                    flex-shrink: 0;
                }
                .dash-chart-row {
                    display: grid;
                    grid-template-columns: 1.6fr 1fr;
                    gap: 20px;
                    margin-bottom: 32px;
                }
                .dash-chart {
                    background: var(--card);
                    padding: 24px 24px 20px;
                    border-radius: var(--radius);
                    box-shadow: var(--shadow);
                    border: 1px solid var(--line);
                }
                .dash-sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .dash-platform {
                    background: var(--card);
                    padding: 24px 24px 20px;
                    border-radius: var(--radius);
                    box-shadow: var(--shadow);
                    border: 1px solid var(--line);
                }
                .dash-location {
                    background: var(--card);
                    padding: 24px 24px 20px;
                    border-radius: var(--radius);
                    box-shadow: var(--shadow);
                    border: 1px solid var(--line);
                }
                .chart-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }
                .dash-chart-title {
                    font-size: 14px;
                    font-weight: 700;
                    color: var(--navy);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .chart-toggle {
                    display: flex;
                    gap: 6px;
                }
                .chart-toggle-btn {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    padding: 5px 14px;
                    border: 1.5px solid var(--line);
                    border-radius: 100px;
                    font-size: 11px;
                    font-weight: 700;
                    cursor: pointer;
                    background: transparent;
                    color: var(--muted);
                    text-transform: capitalize;
                    transition: all 0.15s ease;
                }
                .chart-toggle-btn.active {
                    background: var(--navy);
                    color: #fff;
                    border-color: var(--navy);
                }
                .chart-toggle-btn:not(.active):hover {
                    background: #f0f4f9;
                }
                .line-chart-container {
                    width: 100%;
                    height: 140px;
                    display: flex;
                    flex-direction: column;
                }
                .line-chart-svg {
                    width: 100%;
                    height: 120px;
                    display: block;
                }
                .line-labels {
                    display: flex;
                    justify-content: space-between;
                    padding: 4px 2px 0;
                    font-size: 10px;
                    font-weight: 600;
                    color: var(--muted);
                }
                .line-label {
                    text-align: center;
                    flex: 1;
                }
                .platform-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 12px;
                }
                .platform-row:last-child {
                    margin-bottom: 0;
                }
                .platform-icon {
                    width: 28px;
                    height: 28px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 6px;
                    background: #f0f4f9;
                    color: var(--navy);
                    flex-shrink: 0;
                }
                .platform-name {
                    font-size: 13px;
                    font-weight: 500;
                    flex: 1.2;
                    color: var(--navy);
                }
                .platform-bar-bg {
                    flex: 2.5;
                    height: 6px;
                    background: #eef2f6;
                    border-radius: 100px;
                    overflow: hidden;
                }
                .platform-bar-fill {
                    height: 100%;
                    border-radius: 100px;
                    transition: width 0.4s ease;
                }
                .platform-val {
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--navy);
                    text-align: right;
                    min-width: 44px;
                }
                .location-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 10px;
                }
                .location-row:last-child {
                    margin-bottom: 0;
                }
                .location-name {
                    font-size: 12px;
                    color: var(--muted);
                    flex: 1.6;
                }
                .location-pct {
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--navy);
                    min-width: 36px;
                    text-align: right;
                }
                .dash-table-section {
                    background: var(--card);
                    border-radius: var(--radius);
                    box-shadow: var(--shadow);
                    border: 1px solid var(--line);
                    padding: 24px 28px 18px;
                }
                .table-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 18px;
                }
                .table-title {
                    font-size: 15px;
                    font-weight: 700;
                    color: var(--navy);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .table-badge {
                    font-size: 11px;
                    font-weight: 600;
                    color: var(--muted);
                    background: var(--bg);
                    padding: 2px 12px;
                    border-radius: 100px;
                }
                .dash-table-wrap {
                    overflow-x: auto;
                }
                .dash-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 13px;
                }
                .dash-table thead th {
                    text-align: left;
                    font-weight: 600;
                    color: var(--muted);
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    padding: 8px 10px 10px 10px;
                    border-bottom: 1.5px solid var(--line);
                }
                .dash-table tbody td {
                    padding: 12px 10px;
                    border-bottom: 1px solid var(--line);
                    color: var(--navy);
                }
                .dash-table tbody tr:last-child td {
                    border-bottom: none;
                }
                .dash-table tbody tr:hover {
                    background: #fafcfe;
                }
                .campaign-name {
                    font-weight: 600;
                }
                .roas-value {
                    font-weight: 700;
                    color: var(--maroon);
                }
                .status-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 11px;
                    font-weight: 600;
                    padding: 3px 12px 3px 10px;
                    border-radius: 100px;
                    text-transform: capitalize;
                }
                .status-complete {
                    background: #e8f5e9;
                    color: #2e7d32;
                }
                .status-active {
                    background: #fff3e0;
                    color: #e65100;
                }
                .table-footer-note {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 12px;
                    color: var(--muted);
                    margin: 16px 0 0 0;
                    padding-top: 14px;
                    border-top: 1px solid var(--line);
                }

                @media (max-width: 1100px) {
                    .dash-chart-row {
                        grid-template-columns: 1fr;
                    }
                    .dash-sidebar {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 20px;
                    }
                }
                @media (max-width: 900px) {
                    .dash-wrapper {
                        padding: 20px;
                    }
                    .dash-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .dash-sidebar {
                        grid-template-columns: 1fr;
                    }
                    .page-hero-title {
                        font-size: 26px;
                    }
                }
                @media (max-width: 550px) {
                    .dash-grid {
                        grid-template-columns: 1fr;
                    }
                    .dash-kpi-num {
                        font-size: 22px;
                    }
                    .chart-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 10px;
                    }
                    .dash-table-section {
                        padding: 16px;
                    }
                    .dash-wrapper {
                        padding: 12px;
                    }
                    .table-header {
                        flex-wrap: wrap;
                        gap: 8px;
                    }
                }
            `}</style>
        </div>
    );
}
