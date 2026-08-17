"use client";

import { useState } from "react";
import {
    Instagram,
    Youtube,
    Twitter,
    Facebook,
    TrendingUp,
    Eye,
    Users,
    Briefcase,
    UserPlus,
    BarChart3,
    Users2,
    FileText,
    ArrowUp,
    ArrowDown,
    Calendar,
    MapPin,
    Award,
    Target,
    Zap,
    Megaphone,
    Activity,
    Layers,
    PieChart,
    BarChart,
} from "lucide-react";

// ─── DATA ──────────────────────────────────────────────────────────────
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const reachData = [1.2, 1.8, 2.1, 1.6, 2.8, 3.4, 2.9, 3.8, 4.2, 3.6, 5.1, 4.8];
const engageData = [2.1, 2.4, 2.8, 2.2, 3.1, 3.8, 3.4, 4.1, 4.6, 4.0, 5.2, 5.0];
const maxReach = Math.max(...reachData);
const maxEngage = Math.max(...engageData);

const platforms = [
    { icon: Instagram, name: "Instagram", followers: "48.5K", pct: 85, fill: "#E4405F" },
    { icon: Youtube, name: "YouTube", followers: "22.1K", pct: 55, fill: "#FF0000" },
    { icon: Twitter, name: "X (Twitter)", followers: "8.4K", pct: 28, fill: "#1DA1F2" },
    { icon: Facebook, name: "Facebook", followers: "14.6K", pct: 40, fill: "#1877F2" },
];

const campaigns = [
    { name: "Fashion Brand — Spring", platform: "Instagram", reach: "2.4M", spend: "₹18,000", roas: "3.2×", status: "complete" },
    { name: "Local Business — UP", platform: "Facebook + IG", reach: "980K", spend: "₹12,000", roas: "4.1×", status: "complete" },
    { name: "Beauty Brand UGC", platform: "Instagram", reach: "3.1M", spend: "₹0 (organic)", roas: "—", status: "complete" },
    { name: "Krishna Content Series", platform: "YouTube + IG", reach: "6.2M", spend: "₹0 (organic)", roas: "—", status: "complete" },
    { name: "Festive Season Campaign", platform: "Facebook", reach: "1.8M", spend: "₹24,000", roas: "2.8×", status: "active" },
    { name: "Spiritual Brand Collab", platform: "Instagram", reach: "—", spend: "₹8,000", roas: "—", status: "active" },
];

const kpiData = [
    { label: "Total Reach (All-time)", num: "2M+", change: "↑ 18% vs last quarter", up: true, icon: Users2 },
    { label: "Avg. Reel Views", num: "340K", change: "↑ 24% vs last month", up: true, icon: Eye },
    { label: "Engagement Rate", num: "6.8%", change: "↑ 1.2pp vs last month", up: true, icon: TrendingUp },
    { label: "Brands Collaborated", num: "5+", change: "↑ 8 new this year", up: true, icon: Briefcase },
    { label: "Total Subscriber", num: "550", change: "↑ 6 this quarter", up: true, icon: UserPlus },
    { label: "Total Youtube Views", num: "400k+", change: "↑ 0.4× improvement", up: true, icon: BarChart3 },
    { label: "Followers (Combined)", num: "5K+", change: "↑ 12K this month", up: true, icon: Users },
    { label: "Content Pieces Created", num: "500+", change: "↑ 40 this month", up: true, icon: FileText },
];

const locations = [
    { loc: "Uttar Pradesh, India", pct: 42 },
    { loc: "Delhi NCR", pct: 18 },
    { loc: "Mumbai & Maharashtra", pct: 12 },
    { loc: "Rest of India", pct: 20 },
    { loc: "International", pct: 8 },
];

// ─── COMPONENT ────────────────────────────────────────────────────────
export default function DashboardPage() {
    const [activeChart, setActiveChart] = useState<"reach" | "engagement">("reach");
    const chartData = activeChart === "reach" ? reachData : engageData;
    const chartMax = activeChart === "reach" ? maxReach : maxEngage;

    return (
        <div className="dash-wrapper">

            {/* ─── PAGE HERO ─── */}
            <section className="page-hero">
                <div className="hero-badge">
                    <Activity size={14} strokeWidth={2.5} />
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
                                    <Icon size={18} strokeWidth={2} />
                                </div>
                            </div>
                            <div className="dash-kpi-num display">{k.num}</div>
                            <div className={`dash-kpi-change ${k.up ? "" : "down"}`}>
                                {k.up ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                                {k.change.replace(/[↑↓]\s*/, "")}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ─── CHART ROW ─── */}
            <div className="dash-chart-row">

                {/* Bar Chart */}
                <div className="dash-chart">
                    <div className="chart-header">
                        <div className="dash-chart-title">
                            {activeChart === "reach" ? "Monthly Reach (millions)" : "Monthly Engagement Rate (%)"}
                        </div>
                        <div className="chart-toggle">
                            {(["reach", "engagement"] as const).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setActiveChart(t)}
                                    className={`chart-toggle-btn ${activeChart === t ? "active" : ""}`}
                                >
                                    {t === "reach" ? <BarChart size={14} /> : <PieChart size={14} />}
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="bar-chart">
                        {chartData.map((val, i) => {
                            const isHighlight = i === 10; // November peak
                            return (
                                <div className="bar-col" key={months[i]}>
                                    <div
                                        className={`bar ${isHighlight ? "highlight" : ""}`}
                                        style={{ height: `${(val / chartMax) * 100}%` }}
                                        title={`${months[i]}: ${val}${activeChart === "reach" ? "M" : "%"}`}
                                    />
                                    <div className="bar-label">{months[i]}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Platform + Location Breakdown */}
                <div className="dash-sidebar">

                    {/* Platform Breakdown */}
                    <div className="dash-platform">
                        <div className="dash-chart-title" style={{ marginBottom: 16 }}>
                            <Layers size={16} strokeWidth={2} />
                            Platform Breakdown
                        </div>
                        {platforms.map((p) => {
                            const Icon = p.icon;
                            return (
                                <div className="platform-row" key={p.name}>
                                    <span className="platform-icon">
                                        <Icon size={18} strokeWidth={2} />
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
                            <MapPin size={16} strokeWidth={2} />
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
                        <Megaphone size={18} strokeWidth={2} />
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
                                            {c.status === "active" && <Zap size={12} strokeWidth={2.5} />}
                                            {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="table-footer-note">
                    <Calendar size={12} strokeWidth={2} />
                    Dashboard shows historical campaign benchmarks. Numbers are representative of real past results.
                    Location: Hathras, Uttar Pradesh, India.
                </p>
            </div>

            {/* ─── GLOBAL STYLES ─── */}
            <style jsx>{`
                /* ── Reset / Base ── */
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

                /* ── Hero ── */
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

                /* ── KPI Grid ── */
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

                /* ── Chart Row ── */
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

                /* ── Bar Chart ── */
                .bar-chart {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    height: 160px;
                    padding-top: 8px;
                    gap: 2px;
                }
                .bar-col {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex: 1;
                    height: 100%;
                }
                .bar {
                    width: 100%;
                    max-width: 28px;
                    min-height: 4px;
                    border-radius: 4px 4px 0 0;
                    background: var(--navy);
                    transition: height 0.3s ease, background 0.2s ease;
                }
                .bar.highlight {
                    background: var(--maroon);
                }
                .bar-label {
                    font-size: 10px;
                    font-weight: 600;
                    color: var(--muted);
                    margin-top: 6px;
                    letter-spacing: 0.02em;
                }

                /* ── Platform Rows ── */
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

                /* ── Location Rows ── */
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

                /* ── Table Section ── */
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

                /* ── Responsive ── */
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
