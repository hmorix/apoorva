"use client";
import { useState } from "react";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const reachData = [1.2, 1.8, 2.1, 1.6, 2.8, 3.4, 2.9, 3.8, 4.2, 3.6, 5.1, 4.8];
const engageData = [2.1, 2.4, 2.8, 2.2, 3.1, 3.8, 3.4, 4.1, 4.6, 4.0, 5.2, 5.0];
const maxReach = Math.max(...reachData);
const maxEngage = Math.max(...engageData);

const platforms = [
  { icon: "📸", name: "Instagram", followers: "48.2K", pct: 85, fill: "#E4405F" },
  { icon: "▶️", name: "YouTube", followers: "22.1K", pct: 55, fill: "#FF0000" },
  { icon: "𝕏", name: "X (Twitter)", followers: "8.4K", pct: 28, fill: "#1DA1F2" },
  { icon: "👥", name: "Facebook", followers: "14.6K", pct: 40, fill: "#1877F2" },
];

const campaigns = [
  { name: "Fashion Brand — Spring", platform: "Instagram", reach: "2.4M", spend: "₹18,000", roas: "3.2×", status: "complete" },
  { name: "Local Business — UP", platform: "Facebook + IG", reach: "980K", spend: "₹12,000", roas: "4.1×", status: "complete" },
  { name: "Beauty Brand UGC", platform: "Instagram", reach: "3.1M", spend: "₹0 (organic)", roas: "—", status: "complete" },
  { name: "Krishna Content Series", platform: "YouTube + IG", reach: "6.2M", spend: "₹0 (organic)", roas: "—", status: "complete" },
  { name: "Festive Season Campaign", platform: "Facebook", reach: "1.8M", spend: "₹24,000", roas: "2.8×", status: "active" },
  { name: "Spiritual Brand Collab", platform: "Instagram", reach: "—", spend: "₹8,000", roas: "—", status: "active" },
];

export default function DashboardPage() {
  const [activeChart, setActiveChart] = useState<"reach" | "engagement">("reach");
  const chartData = activeChart === "reach" ? reachData : engageData;
  const chartMax = activeChart === "reach" ? maxReach : maxEngage;

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <span className="tag">Analytics</span>
        <h1 className="page-hero-title display">ACCOUNT DASHBOARD</h1>
        <p className="page-hero-sub">
          Public performance overview — reach, views, ad campaign results and platform breakdown. Data represents historical campaign benchmarks.
        </p>
      </section>

      {/* ── KPI GRID ── */}
      <div className="dash-grid">
        {[
          { label: "Total Reach (All-time)", num: "2M+", change: "↑ 18% vs last quarter", up: true },
          { label: "Avg. Reel Views", num: "340K", change: "↑ 24% vs last month", up: true },
          { label: "Engagement Rate", num: "6.8%", change: "↑ 1.2pp vs last month", up: true },
          { label: "Brands Collaborated", num: "5+", change: "↑ 8 new this year", up: true },
          { label: "Total Subscriber", num: "550", change: "↑ 6 this quarter", up: true },
          { label: "Total Youtube Views", num: "400k+", change: "↑ 0.4× improvement", up: true },
          { label: "Followers (Combined)", num: "5K+", change: "↑ 12Khis month", up: true },
          { label: "Content Pieces Created", num: "500+", change: "↑ 40 this month", up: true },
        ].map((k) => (
          <div className="dash-kpi" key={k.label}>
            <div className="dash-kpi-label">{k.label}</div>
            <div className="dash-kpi-num display">{k.num}</div>
            <div className={`dash-kpi-change${k.up ? "" : " down"}`}>{k.change}</div>
          </div>
        ))}
      </div>

      {/* ── CHART ROW ── */}
      <div className="dash-chart-row">
        {/* Bar Chart */}
        <div className="dash-chart">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <div className="dash-chart-title">
              {activeChart === "reach" ? "Monthly Reach (millions)" : "Monthly Engagement Rate (%)"}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {(["reach", "engagement"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveChart(t)}
                  style={{
                    padding: "6px 14px", border: "1.5px solid var(--line)", borderRadius: 100,
                    fontSize: 12, fontWeight: 700, cursor: "pointer",
                    background: activeChart === t ? "var(--navy)" : "transparent",
                    color: activeChart === t ? "white" : "var(--navy)",
                    textTransform: "capitalize",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="bar-chart">
            {chartData.map((val, i) => (
              <div className="bar-col" key={months[i]}>
                <div
                  className="bar"
                  style={{ height: `${(val / chartMax) * 100}%`, background: i === 10 ? "var(--maroon)" : "var(--navy)" }}
                  title={`${months[i]}: ${val}${activeChart === "reach" ? "M" : "%"}`}
                />
                <div className="bar-label">{months[i]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Breakdown */}
        <div className="dash-platform">
          <div className="dash-chart-title">Platform Breakdown</div>
          {platforms.map((p) => (
            <div className="platform-row" key={p.name}>
              <span className="platform-icon">{p.icon}</span>
              <span className="platform-name">{p.name}</span>
              <div className="platform-bar-bg">
                <div className="platform-bar-fill" style={{ width: `${p.pct}%`, background: p.fill }} />
              </div>
              <span className="platform-val">{p.followers}</span>
            </div>
          ))}

          {/* Location breakdown */}
          <div style={{ marginTop: 28 }}>
            <div className="dash-chart-title" style={{ marginBottom: 16 }}>Top Locations</div>
            {[
              { loc: "Uttar Pradesh, India", pct: 42 },
              { loc: "Delhi NCR", pct: 18 },
              { loc: "Mumbai & Maharashtra", pct: 12 },
              { loc: "Rest of India", pct: 20 },
              { loc: "International", pct: 8 },
            ].map((l) => (
              <div key={l.loc} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 12, flex: 1.5, color: "var(--muted)" }}>{l.loc}</span>
                <div className="platform-bar-bg" style={{ flex: 2 }}>
                  <div className="platform-bar-fill" style={{ width: `${l.pct}%` }} />
                </div>
                <span className="platform-val">{l.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CAMPAIGNS TABLE ── */}
      <div style={{ padding: "36px 32px", borderTop: "1px solid var(--line)" }}>
        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Campaign Overview</div>
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
                  <td style={{ fontWeight: 600 }}>{c.name}</td>
                  <td>{c.platform}</td>
                  <td>{c.reach}</td>
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
          * Dashboard shows historical campaign benchmarks. Numbers are representative of real past results. Location: Hathras, Uttar Pradesh, India.
        </p>
      </div>
    </>
  );
}
