"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { SiteContent } from "@/lib/contentStore";

// ── TYPES ─────────────────────────────────────────────────────────────────────
type PageId = "home" | "about" | "services" | "hire" | "contact" | "cases" | "dashboard" | "qna" | "legal";
type ViewMode = "editor" | "preview" | "history";

interface Revision {
  revisionId: string;
  version: number;
  data: SiteContent;
  note?: string;
  publishedAt: string;
}
interface ServerStatus {
  mongoConnected: boolean;
  googleDriveConnected: boolean;
}

// ── DEFAULT CONTENT ────────────────────────────────────────────────────────────
const DEFAULT_CONTENT: SiteContent = {
  hero: { heroTitle: "Apoorva Kaushal", heroTagline: "Authentic storytelling that connects brands with audiences through relatable experiences", heroSignature: "Appu", domain: "apoorva.hmorix.in" },
  homepage: { whoAmIHeading: "WHO AM I", whoAmIBio1: "I'm Apoorva, a Hathras & Uttar Pradesh–based Social Media Influencer and Content Creator.", whoAmIBio2: "I've elevated the online presence of brands across India, helping them take control of their digital narrative.", statBrands: "5+", statReach: "2M+", statFollowers: "5K+", statExp: "3YRS+" },
  about: { pageHeroTitle: "APOORVA KAUSHAL", pageHeroSub: "Social Media Creator & Content Creator · Hathras, Uttar Pradesh, India", storyHeading: "FROM HATHRAS\nTO THE DIGITAL WORLD", storyBio1: "I'm Apoorva Kaushal — born and raised in Hathras, Uttar Pradesh.", storyBio2: "What started as creative sketches has evolved into a full-fledged multi-channel digital footprint reaching 2M+ all-time reach.", storyBio3: "I blend creative UGC video production with data-driven Meta ad campaigns, having collaborated with 5+ brands." },
  services: { starterPrice: "₹15,000", starterPeriod: "month", starterDesc: "Ideal for emerging brands starting their content journey.", growthPrice: "₹35,000", growthPeriod: "month", growthDesc: "Comprehensive social strategy with weekly UGC Reels and Meta ads.", premiumPrice: "₹65,000", premiumPeriod: "month", premiumDesc: "Full-funnel digital branding, high-frequency UGC production, and weekly analytics." },
  contact: { whatsappNumber: "919368153189", email: "apoorva@apoorvakaushal.com", instagramHandle: "@apoorva__kaushal", instagramUrl: "https://instagram.com/apoorva__kaushal", youtubeHandle: "@_apoorva7__", youtubeUrl: "https://youtube.com/@_apoorva7__", twitterUrl: "https://twitter.com/", facebookUrl: "https://facebook.com/", location: "Hathras, Uttar Pradesh, India", postalCode: "204101" },
  photos: { profile: "/photos/profile.jpg", whoami: "/photos/IMG-20260205-WA0035.jpg", qualifications: "/photos/IMG-20250107-WA0012.jpg", storyPhoto: "/photos/IMG-20260205-WA0035.jpg", work1: "/photos/IMG-20241220-WA0002.jpg", work2: "/photos/IMG-20260202-WA0003.jpg", work3: "/photos/Screenshot_2025-11-15-14-35-32-55.jpg", work4: "/photos/IMG-20260106-WA0002.jpg", work6: "/photos/IMG-20260205-WA0036.jpg", insta1: "/photos/IMG-20260205-WA0035.jpg", insta2: "/photos/IMG-20240205-WA0003.jpg", insta3: "/photos/IMG-20260106-WA0010.jpg", insta4: "/photos/IMG-20260202-WA0003.jpg", insta5: "/photos/IMG-20260108-WA0003.jpg", insta6: "/photos/IMG_20260131_225741.jpg", insta7: "/photos/IMG-20260608-WA0016.jpg", insta8: "/photos/IMG-20260212-WA0000.jpg", add1: "/photos/IMG-20260202-WA0003.jpg", add2: "/photos/IMG-20260212-WA0000.jpg", add3: "/photos/IMG-20260106-WA0009.jpg", add4: "/photos/IMG-20260608-WA0016.jpg", hire1: "/photos/profile.jpg", hire2: "/photos/IMG-20260205-WA0035.jpg" },
  videos: {},
};

const PAGES: { id: PageId; label: string; emoji: string; liveUrl: string }[] = [
  { id: "home", label: "Home", emoji: "🏠", liveUrl: "/" },
  { id: "about", label: "About", emoji: "👤", liveUrl: "/about" },
  { id: "services", label: "Services", emoji: "⭐", liveUrl: "/services" },
  { id: "hire", label: "Hire Me", emoji: "💼", liveUrl: "/hire" },
  { id: "contact", label: "Contact", emoji: "✉️", liveUrl: "/contact" },
  { id: "cases", label: "Case Studies", emoji: "📈", liveUrl: "/case-studies" },
  { id: "dashboard", label: "Dashboard", emoji: "📊", liveUrl: "/dashboard" },
  { id: "qna", label: "Q&A", emoji: "❓", liveUrl: "/qna" },
  { id: "legal", label: "Legal/Privacy", emoji: "📄", liveUrl: "/legal" },
];

// ──────────────────────────────────────────────────────────────────────────────
// LOGIN SCREEN
// ──────────────────────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/hmorix/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });
      if (res.ok) {
        onLogin();
      } else {
        setError("Incorrect password. Try again.");
        setPw("");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#0f172a 0%,#1e293b 50%,#0f172a 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .login-card { animation: fadeIn 0.5s ease forwards; }
        .login-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 8px 20px rgba(59,130,246,0.5) !important; }
        .login-btn { transition: all 0.2s ease; }
        input:focus { outline: none; border-color: #3b82f6 !important; box-shadow: 0 0 0 3px rgba(59,130,246,0.2) !important; }
      `}</style>

      <div className="login-card" style={{ width: "100%", maxWidth: 400, background: "#1e293b", borderRadius: 20, padding: "40px 32px", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: "linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 900, color: "#fff", margin: "0 auto 16px", animation: "float 3s ease-in-out infinite" }}>
            H
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 900, color: "#f8fafc", margin: 0 }}>HMoriX Visual Studio</h1>
          <p style={{ fontSize: 13, color: "#64748b", marginTop: 6 }}>Live Website CMS &amp; Editor</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#94a3b8", marginBottom: 8, letterSpacing: 0.5, textTransform: "uppercase" }}>
            Admin Password
          </label>
          <div style={{ position: "relative", marginBottom: 16 }}>
            <input
              type={showPw ? "text" : "password"}
              value={pw}
              onChange={e => setPw(e.target.value)}
              placeholder="Enter your admin password"
              required
              style={{ width: "100%", padding: "12px 44px 12px 14px", background: "#0f172a", border: "1.5px solid #334155", borderRadius: 10, color: "#f8fafc", fontSize: 15, transition: "all 0.2s" }}
              autoFocus
            />
            <button type="button" onClick={() => setShowPw(v => !v)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#64748b", fontSize: 18, padding: 0, lineHeight: 1 }}>
              {showPw ? "🙈" : "👁️"}
            </button>
          </div>

          {error && (
            <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#f87171", marginBottom: 16 }}>
              ⚠️ {error}
            </div>
          )}

          <button type="submit" disabled={loading || !pw} className="login-btn" style={{ width: "100%", padding: "13px", background: loading ? "#334155" : "linear-gradient(135deg,#3b82f6,#8b5cf6)", color: "#fff", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 800, cursor: loading || !pw ? "not-allowed" : "pointer", opacity: !pw ? 0.6 : 1 }}>
            {loading ? "Authenticating..." : "🚀 Enter Admin Studio"}
          </button>
        </form>

        <p style={{ textAlign: "center", fontSize: 11, color: "#475569", marginTop: 20 }}>
          Set your password via <code style={{ background: "#0f172a", padding: "2px 6px", borderRadius: 4, color: "#94a3b8" }}>HMORIX_ADMIN_PASSWORD</code> env var
        </p>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// MAIN ADMIN PAGE
// ──────────────────────────────────────────────────────────────────────────────
export default function HmorixAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [viewMode, setViewMode] = useState<ViewMode>("editor");
  const [draftContent, setDraftContent] = useState<SiteContent>(DEFAULT_CONTENT);
  const [publishedContent, setPublishedContent] = useState<SiteContent>(DEFAULT_CONTENT);
  const [revisions, setRevisions] = useState<Revision[]>([]);
  const [status, setStatus] = useState<ServerStatus>({ mongoConnected: false, googleDriveConnected: false });
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [uploadingSlot, setUploadingSlot] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" | "info" } | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentUploadSlot = useRef("profile");

  // ── CHECK AUTH ON MOUNT ─────────────────────────────────────────────────────
  useEffect(() => {
    fetch("/api/hmorix/auth")
      .then(r => r.json())
      .then(j => setIsAuthenticated(j.authenticated))
      .catch(() => setIsAuthenticated(false));
  }, []);

  // ── LOAD CONTENT ────────────────────────────────────────────────────────────
  const fetchContent = useCallback(async () => {
    try {
      const res = await fetch("/api/hmorix/content?mode=draft&history=true");
      if (res.ok) {
        const j = await res.json();
        if (j.draft) setDraftContent(prev => ({ ...prev, ...j.draft, photos: { ...prev.photos, ...(j.draft.photos || {}) }, videos: { ...prev.videos, ...(j.draft.videos || {}) } }));
        if (j.published) setPublishedContent(prev => ({ ...prev, ...j.published, photos: { ...prev.photos, ...(j.published.photos || {}) } }));
        if (j.revisions) setRevisions(j.revisions);
        if (j.status) setStatus(j.status);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (isAuthenticated) fetchContent();
  }, [isAuthenticated, fetchContent]);

  // Ctrl+S shortcut
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if ((e.ctrlKey || e.metaKey) && e.key === "s") { e.preventDefault(); handleSaveDraft(); } };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  });

  const showToast = (msg: string, type: "success" | "error" | "info" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  // ── HELPERS ─────────────────────────────────────────────────────────────────
  const updateField = (section: keyof SiteContent, field: string, value: string) => {
    setDraftContent(prev => ({ ...prev, [section]: { ...(prev[section] as any), [field]: value } }));
    setHasUnsavedChanges(true);
  };

  const updatePhoto = (slotId: string, url: string) => {
    setDraftContent(prev => ({ ...prev, photos: { ...(prev.photos || {}), [slotId]: url } }));
    setHasUnsavedChanges(true);
  };

  const handleSaveDraft = async () => {
    setIsSaving(true);
    try {
      const res = await fetch("/api/hmorix/content", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "save_draft", data: draftContent }) });
      const j = await res.json();
      if (j.success) { setHasUnsavedChanges(false); showToast("✓ Draft saved to MongoDB Atlas!"); }
      else throw new Error(j.message);
    } catch (err: any) { showToast(`✗ Save failed: ${err.message}`, "error"); }
    finally { setIsSaving(false); }
  };

  const handlePublish = async () => {
    if (!confirm("Publish all changes LIVE to the website? Visitors will see this immediately.")) return;
    setIsPublishing(true);
    try {
      const res = await fetch("/api/hmorix/content", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "publish", data: draftContent }) });
      const j = await res.json();
      if (j.success) { setPublishedContent(draftContent); setHasUnsavedChanges(false); showToast(`🎉 Version ${j.version} Published!`); fetchContent(); }
      else throw new Error(j.message);
    } catch (err: any) { showToast(`✗ Publish failed: ${err.message}`, "error"); }
    finally { setIsPublishing(false); }
  };

  const handleLogout = async () => {
    await fetch("/api/hmorix/auth", { method: "DELETE" });
    setIsAuthenticated(false);
  };

  const triggerUpload = (slotId: string) => {
    currentUploadSlot.current = slotId;
    if (fileInputRef.current) { fileInputRef.current.value = ""; fileInputRef.current.click(); }
  };

  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const slotId = currentUploadSlot.current;
    setUploadingSlot(slotId);
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("slotId", slotId);
      const res = await fetch("/api/hmorix/upload", { method: "POST", body: form });
      const j = await res.json();
      if (j.url) { updatePhoto(slotId, j.url); showToast(`✓ Photo uploaded via ${j.provider}!`); }
      else throw new Error(j.error);
    } catch (err: any) { showToast(`✗ Upload failed: ${err.message}`, "error"); }
    finally { setUploadingSlot(null); }
  };

  const handleRestoreRevision = async (rev: Revision) => {
    if (!confirm(`Restore Version ${rev.version}?`)) return;
    try {
      const res = await fetch("/api/hmorix/content", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "restore", revisionId: rev.revisionId }) });
      const j = await res.json();
      if (j.success) { setDraftContent(rev.data); setPublishedContent(rev.data); setViewMode("editor"); showToast(`✓ Restored v${rev.version}!`); fetchContent(); }
    } catch {}
  };

  const activeContent = viewMode === "preview" ? publishedContent : draftContent;
  const isEditing = viewMode === "editor";

  // ── EDITABLE TEXT ───────────────────────────────────────────────────────────
  function Editable({ section, field, value, multiline = false, style = {}, className = "" }: { section: keyof SiteContent; field: string; value: string; multiline?: boolean; style?: React.CSSProperties; className?: string }) {
    if (!isEditing) return <span className={className} style={style}>{value}</span>;
    const shared: React.CSSProperties = { ...style, background: "rgba(59,130,246,0.07)", border: "1.5px dashed #3b82f6", borderRadius: 6, padding: "4px 8px", fontFamily: "inherit", outline: "none", color: "inherit", width: "100%", boxSizing: "border-box", fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit" };
    if (multiline) return <textarea value={value || ""} onChange={e => updateField(section, field, e.target.value)} style={{ ...shared, resize: "vertical", minHeight: 60 }} />;
    return <input type="text" value={value || ""} onChange={e => updateField(section, field, e.target.value)} style={shared} />;
  }

  // ── EDITABLE PHOTO ──────────────────────────────────────────────────────────
  function Photo({ slotId, fallback, style = {}, label = "" }: { slotId: string; fallback: string; style?: React.CSSProperties; label?: string }) {
    const src = activeContent.photos?.[slotId] || fallback;
    const uploading = uploadingSlot === slotId;
    return (
      <div style={{ position: "relative", ...style }}>
        <img src={src} alt={label || slotId} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "inherit" }} />
        {isEditing && (
          <div onClick={() => triggerUpload(slotId)} title="Click to replace photo" style={{ position: "absolute", inset: 0, background: uploading ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0.0)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", transition: "background 0.2s", borderRadius: "inherit", gap: 6 }} className="photo-overlay">
            {uploading ? (
              <><div className="spin" style={{ width: 26, height: 26, border: "3px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%" }} /><span style={{ fontSize: 11, fontWeight: 700 }}>Uploading...</span></>
            ) : (
              <><span style={{ fontSize: 22 }}>📷</span><span style={{ fontSize: 11, fontWeight: 700, textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>Replace</span></>
            )}
          </div>
        )}
        {label && isEditing && <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.6)", color: "#94a3b8", fontSize: 10, padding: "3px 6px", textAlign: "center" }}>{label}</div>}
      </div>
    );
  }

  // ── AUTH LOADING / LOGIN SCREENS ────────────────────────────────────────────
  if (isAuthenticated === null) {
    return (
      <div style={{ minHeight: "100vh", background: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "#94a3b8", fontSize: 16 }}>Loading HMoriX Studio...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  // ──────────────────────────────────────────────────────────────────────────
  // AUTHENTICATED ADMIN UI
  // ──────────────────────────────────────────────────────────────────────────
  const currentPageInfo = PAGES.find(p => p.id === currentPage)!;

  return (
    <div style={{ minHeight: "100vh", background: "#f1f5f9", fontFamily: "Inter,system-ui,sans-serif", color: "#0f172a" }}>
      <input type="file" ref={fileInputRef} onChange={handleFileSelected} accept="image/*,video/*" style={{ display: "none" }} />

      <style>{`
        * { box-sizing: border-box; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 0.8s linear infinite; }
        .photo-overlay:hover { background: rgba(0,0,0,0.55) !important; }
        .tab-btn:hover { background: rgba(59,130,246,0.12) !important; color: #1d4ed8 !important; }
        .action-btn:hover:not(:disabled) { filter: brightness(1.1); transform: translateY(-1px); }
        .action-btn { transition: all 0.15s ease; }
        .field-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px; }
        .field-card label { display: block; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
        textarea, input[type=text] { transition: border-color 0.2s, box-shadow 0.2s; }
        textarea:focus, input[type=text]:focus { border-color: #3b82f6 !important; box-shadow: 0 0 0 3px rgba(59,130,246,0.15) !important; }
        @media (max-width: 768px) {
          .desktop-sidebar { display: none !important; }
          .mobile-bottom-tabs { display: flex !important; }
          .admin-main { margin-bottom: 70px !important; }
          .admin-header-actions { gap: 6px !important; }
          .header-logo-text { display: none !important; }
          .page-grid-2 { grid-template-columns: 1fr !important; }
          .page-grid-3 { grid-template-columns: 1fr 1fr !important; }
          .page-grid-4 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 769px) {
          .mobile-bottom-tabs { display: none !important; }
        }
      `}</style>

      {/* ── TOP HEADER ────────────────────────────────────────────────────────── */}
      <header style={{ position: "sticky", top: 0, zIndex: 9999, background: "#0f172a", color: "#fff", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, boxShadow: "0 4px 20px rgba(0,0,0,0.35)", minHeight: 56 }}>
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 17, color: "#fff", flexShrink: 0 }}>H</div>
          <div className="header-logo-text">
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.3 }}>HMORIX STUDIO</div>
            <div style={{ fontSize: 10, color: "#64748b" }}>Live CMS Editor</div>
          </div>
        </div>

        {/* Desktop Page Tabs — hidden on mobile (uses bottom tabs instead) */}
        <div className="desktop-sidebar" style={{ display: "flex", background: "#1e293b", borderRadius: 8, padding: 3, gap: 1, overflowX: "auto", maxWidth: 600 }}>
          {PAGES.map(p => (
            <button key={p.id} onClick={() => setCurrentPage(p.id)} style={{ background: currentPage === p.id ? "#3b82f6" : "transparent", color: currentPage === p.id ? "#fff" : "#94a3b8", border: "none", borderRadius: 5, padding: "5px 10px", fontSize: 11.5, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}>
              {p.emoji} {p.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="admin-header-actions" style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          {/* DB Status dot */}
          <div title={status.mongoConnected ? "MongoDB Atlas Connected" : "MongoDB not connected"} style={{ width: 9, height: 9, borderRadius: "50%", background: status.mongoConnected ? "#22c55e" : "#f59e0b", flexShrink: 0 }} />

          {/* Mode toggle */}
          <div style={{ display: "flex", background: "#1e293b", borderRadius: 7, padding: 2, gap: 1 }}>
            {(["editor", "preview", "history"] as ViewMode[]).map(m => (
              <button key={m} onClick={() => setViewMode(m)} style={{ background: viewMode === m ? (m === "editor" ? "#22c55e" : m === "preview" ? "#3b82f6" : "#8b5cf6") : "transparent", color: viewMode === m ? (m === "editor" ? "#0f172a" : "#fff") : "#94a3b8", border: "none", borderRadius: 5, padding: "5px 9px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                {m === "editor" ? "✏️ Edit" : m === "preview" ? "👁️ Live" : `🕒 History(${revisions.length})`}
              </button>
            ))}
          </div>

          {isEditing && (
            <>
              <button onClick={handleSaveDraft} disabled={isSaving} className="action-btn" style={{ background: "#334155", color: "#fff", border: "none", borderRadius: 7, padding: "7px 12px", fontSize: 12, fontWeight: 700, cursor: isSaving ? "not-allowed" : "pointer", flexShrink: 0 }}>
                {isSaving ? "..." : "💾 Save"}
              </button>
              <button onClick={handlePublish} disabled={isPublishing} className="action-btn" style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", color: "#fff", border: "none", borderRadius: 7, padding: "7px 14px", fontSize: 12, fontWeight: 800, cursor: isPublishing ? "not-allowed" : "pointer", flexShrink: 0, boxShadow: "0 2px 8px rgba(59,130,246,0.4)" }}>
                {isPublishing ? "..." : "🚀 Publish"}
              </button>
            </>
          )}

          <button onClick={handleLogout} title="Logout" style={{ background: "transparent", border: "1px solid #334155", borderRadius: 7, padding: "6px 10px", color: "#94a3b8", fontSize: 12, cursor: "pointer" }}>⏏️</button>
        </div>
      </header>

      {/* Unsaved banner */}
      {isEditing && hasUnsavedChanges && (
        <div style={{ background: "#fef3c7", borderBottom: "1px solid #fde68a", color: "#92400e", padding: "8px 16px", fontSize: 12, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <span>⚠️ <strong>Unsaved changes</strong> — Save Draft or Publish Live</span>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={handleSaveDraft} style={{ background: "#d97706", color: "#fff", border: "none", borderRadius: 5, padding: "4px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Save Draft</button>
            <button onClick={handlePublish} style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 5, padding: "4px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Publish Now</button>
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT AREA ─────────────────────────────────────────────────── */}
      <main className="admin-main" style={{ maxWidth: 1080, margin: "0 auto", padding: "20px 16px 40px" }}>

        {/* Editing tip */}
        {isEditing && (
          <div style={{ background: "linear-gradient(135deg,#1e293b,#0f172a)", color: "#94a3b8", borderRadius: 10, padding: "10px 16px", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <span style={{ fontSize: 12 }}>💡 <strong style={{ color: "#e2e8f0" }}>Editing Mode:</strong> Click text boxes to edit · Hover photos to replace · <kbd style={{ background: "#334155", borderRadius: 4, padding: "2px 6px", fontSize: 11 }}>Ctrl+S</kbd> to save</span>
            <a href={currentPageInfo.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6", fontSize: 11, fontWeight: 700, textDecoration: "none" }}>View Live Page ↗</a>
          </div>
        )}

        {/* ── HISTORY VIEW ─────────────────────────────────────────────────────── */}
        {viewMode === "history" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>🕒 Version History</h2>
            {revisions.length === 0 ? (
              <div style={{ background: "#fff", borderRadius: 12, padding: 32, textAlign: "center", color: "#64748b", border: "1px solid #e2e8f0" }}>
                No published versions yet. Hit <strong>&quot;Publish Live&quot;</strong> to create your first snapshot!
              </div>
            ) : revisions.map(rev => (
              <div key={rev.revisionId} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, padding: 16, marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ background: "#3b82f6", color: "#fff", padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 800 }}>v{rev.version}</span>
                    <strong style={{ fontSize: 14 }}>{rev.note || `Version ${rev.version}`}</strong>
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>{new Date(rev.publishedAt).toLocaleString()}</div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => { setDraftContent(rev.data); setViewMode("editor"); showToast(`Loaded v${rev.version} into editor (not published yet)`); }} style={{ background: "#f1f5f9", color: "#334155", border: "none", borderRadius: 6, padding: "6px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>📋 Load to Editor</button>
                  <button onClick={() => handleRestoreRevision(rev)} style={{ background: "#ef4444", color: "#fff", border: "none", borderRadius: 6, padding: "6px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>↩ Restore Live</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── PAGE EDITORS ─────────────────────────────────────────────────────── */}
        {viewMode !== "history" && (
          <div>
            {/* ── HOME PAGE ──────────────────────────────────────────────────────── */}
            {currentPage === "home" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Hero Section */}
                <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", overflow: "hidden" }}>
                  <div style={{ background: "linear-gradient(135deg,#152049,#0d1530)", color: "#fff", padding: "20px 20px" }}>
                    <div style={{ fontSize: 11, color: "#93c5fd", fontWeight: 700, letterSpacing: 1.5, marginBottom: 6, textTransform: "uppercase" }}>Hero Section</div>
                    <div className="page-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 180px", gap: 20, alignItems: "center" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <div className="field-card" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                          <label style={{ color: "#93c5fd" }}>Hero Name / Title</label>
                          <Editable section="hero" field="heroTitle" value={activeContent.hero.heroTitle} style={{ fontSize: 22, fontWeight: 900, color: "#fff" }} />
                        </div>
                        <div className="field-card" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                          <label style={{ color: "#93c5fd" }}>Hero Tagline</label>
                          <Editable section="hero" field="heroTagline" value={activeContent.hero.heroTagline} multiline style={{ fontSize: 13, color: "#cbd5e1" }} />
                        </div>
                        <div className="field-card" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                          <label style={{ color: "#93c5fd" }}>Signature Text</label>
                          <Editable section="hero" field="heroSignature" value={activeContent.hero.heroSignature} style={{ fontSize: 18, color: "#f59e0b", fontFamily: "cursive" }} />
                        </div>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <Photo slotId="profile" fallback="/photos/profile.jpg" label="Hero Portrait" style={{ width: "100%", aspectRatio: "3/4", borderRadius: 100, border: "3px solid rgba(255,255,255,0.2)", overflow: "hidden" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Who Am I */}
                <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#7a1421", marginBottom: 12 }}>WHO AM I Section</div>
                  <div className="page-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 160px", gap: 16, alignItems: "start" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <div className="field-card">
                        <label>Section Heading</label>
                        <Editable section="homepage" field="whoAmIHeading" value={activeContent.homepage.whoAmIHeading} style={{ fontSize: 16, fontWeight: 800 }} />
                      </div>
                      <div className="field-card">
                        <label>Bio Paragraph 1</label>
                        <Editable section="homepage" field="whoAmIBio1" value={activeContent.homepage.whoAmIBio1} multiline style={{ fontSize: 13 }} />
                      </div>
                      <div className="field-card">
                        <label>Bio Paragraph 2</label>
                        <Editable section="homepage" field="whoAmIBio2" value={activeContent.homepage.whoAmIBio2} multiline style={{ fontSize: 13 }} />
                      </div>
                    </div>
                    <Photo slotId="whoami" fallback="/photos/IMG-20260205-WA0035.jpg" label="Who Am I Photo" style={{ width: "100%", aspectRatio: "3/4", borderRadius: 12, overflow: "hidden" }} />
                  </div>
                </div>

                {/* Stats */}
                <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#334155", marginBottom: 12 }}>Stats / Numbers</div>
                  <div className="page-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
                    {[{ field: "statBrands", label: "Brands Collaborated" }, { field: "statReach", label: "Organic Reach" }, { field: "statFollowers", label: "Followers" }, { field: "statExp", label: "Experience" }].map(s => (
                      <div key={s.field} className="field-card" style={{ textAlign: "center" }}>
                        <label>{s.label}</label>
                        <Editable section="homepage" field={s.field} value={(activeContent.homepage as any)[s.field]} style={{ fontSize: 22, fontWeight: 900, color: "#7a1421" }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Portfolio Photos */}
                <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#334155", marginBottom: 12 }}>Portfolio / Work Photos</div>
                  <div className="page-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
                    {[{ slot: "work1", label: "UGC Reel" }, { slot: "work2", label: "Branding" }, { slot: "work3", label: "Strategy" }, { slot: "work4", label: "Communication" }, { slot: "work6", label: "Lifestyle" }, { slot: "add1", label: "Sunglasses" }, { slot: "add2", label: "Lifestyle UGC" }, { slot: "add3", label: "Festive" }].map(item => (
                      <div key={item.slot}>
                        <Photo slotId={item.slot} fallback={DEFAULT_CONTENT.photos?.[item.slot] || "/photos/profile.jpg"} label={item.label} style={{ width: "100%", aspectRatio: "1/1", borderRadius: 8, overflow: "hidden", border: "1px solid #e2e8f0" }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instagram Grid Photos */}
                <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#334155", marginBottom: 12 }}>📸 Instagram Case Study Grid (8 posts)</div>
                  <div className="page-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
                    {["insta1","insta2","insta3","insta4","insta5","insta6","insta7","insta8"].map((slot, i) => (
                      <Photo key={slot} slotId={slot} fallback={DEFAULT_CONTENT.photos?.[slot] || "/photos/profile.jpg"} label={`Post ${i+1}`} style={{ width: "100%", aspectRatio: "1/1", borderRadius: 8, overflow: "hidden", border: "1px solid #e2e8f0" }} />
                    ))}
                  </div>
                </div>

                {/* Phone mockup posters */}
                <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#334155", marginBottom: 12 }}>📱 Video Mockup Poster Frames (3 phone frames)</div>
                  <div className="page-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                    {["phone1","phone2","phone3"].map((slot, i) => (
                      <Photo key={slot} slotId={slot} fallback={DEFAULT_CONTENT.photos?.[slot] || "/photos/profile.jpg"} label={`Mockup ${i+1}`} style={{ width: "100%", aspectRatio: "9/16", borderRadius: 12, overflow: "hidden", border: "1px solid #e2e8f0" }} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── ABOUT PAGE ─────────────────────────────────────────────────────── */}
            {currentPage === "about" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#334155", marginBottom: 12 }}>About Page Hero</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <div className="field-card"><label>Page Title</label><Editable section="about" field="pageHeroTitle" value={activeContent.about.pageHeroTitle} style={{ fontSize: 20, fontWeight: 900 }} /></div>
                    <div className="field-card"><label>Page Subtitle</label><Editable section="about" field="pageHeroSub" value={activeContent.about.pageHeroSub} style={{ fontSize: 14 }} /></div>
                    <div className="field-card"><label>Story Heading</label><Editable section="about" field="storyHeading" value={activeContent.about.storyHeading} multiline style={{ fontSize: 18, fontWeight: 800 }} /></div>
                  </div>
                </div>

                <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#334155", marginBottom: 12 }}>About Story Text & Photo</div>
                  <div className="page-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 180px", gap: 16 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <div className="field-card"><label>Bio Paragraph 1</label><Editable section="about" field="storyBio1" value={activeContent.about.storyBio1} multiline style={{ fontSize: 13 }} /></div>
                      <div className="field-card"><label>Bio Paragraph 2</label><Editable section="about" field="storyBio2" value={activeContent.about.storyBio2} multiline style={{ fontSize: 13 }} /></div>
                      <div className="field-card"><label>Bio Paragraph 3</label><Editable section="about" field="storyBio3" value={activeContent.about.storyBio3} multiline style={{ fontSize: 13 }} /></div>
                    </div>
                    <Photo slotId="storyPhoto" fallback="/photos/IMG-20260205-WA0035.jpg" label="About Story Photo" style={{ width: "100%", aspectRatio: "3/4", borderRadius: 12, overflow: "hidden", border: "1px solid #e2e8f0" }} />
                  </div>
                </div>

                {/* Qualifications Photo */}
                <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#334155", marginBottom: 12 }}>Qualifications / Credentials Section Photo</div>
                  <div style={{ maxWidth: 260 }}>
                    <Photo slotId="qualifications" fallback="/photos/IMG-20250107-WA0012.jpg" label="Qualifications Photo" style={{ width: "100%", aspectRatio: "4/3", borderRadius: 12, overflow: "hidden", border: "1px solid #e2e8f0" }} />
                  </div>
                </div>
              </div>
            )}

            {/* ── SERVICES PAGE ──────────────────────────────────────────────────── */}
            {currentPage === "services" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#334155", marginBottom: 14 }}>⭐ Service Packages & Pricing</div>
                  <div className="page-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
                    {[
                      { name: "Starter", priceField: "starterPrice", descField: "starterDesc" },
                      { name: "Growth", priceField: "growthPrice", descField: "growthDesc" },
                      { name: "Premium", priceField: "premiumPrice", descField: "premiumDesc" },
                    ].map(tier => (
                      <div key={tier.name} style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: 10, padding: 14 }}>
                        <div style={{ fontSize: 12, fontWeight: 800, color: "#7a1421", marginBottom: 10, textTransform: "uppercase" }}>{tier.name} Tier</div>
                        <div className="field-card" style={{ marginBottom: 10 }}>
                          <label>Price</label>
                          <Editable section="services" field={tier.priceField} value={(activeContent.services as any)[tier.priceField]} style={{ fontSize: 24, fontWeight: 900 }} />
                        </div>
                        <div className="field-card">
                          <label>Description</label>
                          <Editable section="services" field={tier.descField} value={(activeContent.services as any)[tier.descField]} multiline style={{ fontSize: 13 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── HIRE PAGE ──────────────────────────────────────────────────────── */}
            {currentPage === "hire" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#334155", marginBottom: 12 }}>💼 Hire Me Page — Packages (shares data with Services)</div>
                  <div className="page-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
                    {[
                      { name: "Starter", priceField: "starterPrice", descField: "starterDesc" },
                      { name: "Growth", priceField: "growthPrice", descField: "growthDesc" },
                      { name: "Premium", priceField: "premiumPrice", descField: "premiumDesc" },
                    ].map(tier => (
                      <div key={tier.name} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: 14 }}>
                        <div style={{ fontSize: 11, fontWeight: 800, color: "#7a1421", marginBottom: 8, textTransform: "uppercase" }}>{tier.name}</div>
                        <div className="field-card" style={{ marginBottom: 8 }}>
                          <label>Price</label>
                          <Editable section="services" field={tier.priceField} value={(activeContent.services as any)[tier.priceField]} style={{ fontSize: 22, fontWeight: 900 }} />
                        </div>
                        <div className="field-card">
                          <label>Description</label>
                          <Editable section="services" field={tier.descField} value={(activeContent.services as any)[tier.descField]} multiline style={{ fontSize: 12 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#334155", marginBottom: 12 }}>Hire Page Photos</div>
                  <div className="page-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
                    {["hire1","hire2","add3","add4"].map((slot, i) => (
                      <Photo key={slot} slotId={slot} fallback={DEFAULT_CONTENT.photos?.[slot] || "/photos/profile.jpg"} label={`Hire Photo ${i+1}`} style={{ width: "100%", aspectRatio: "3/4", borderRadius: 10, overflow: "hidden", border: "1px solid #e2e8f0" }} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── CONTACT PAGE ───────────────────────────────────────────────────── */}
            {currentPage === "contact" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#334155", marginBottom: 14 }}>✉️ Contact & Social Media Details</div>
                  <div className="page-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {[
                      { field: "whatsappNumber", label: "WhatsApp Number (with country code, no +)", placeholder: "919368153189" },
                      { field: "email", label: "Email Address" },
                      { field: "instagramHandle", label: "Instagram Handle (@...)" },
                      { field: "instagramUrl", label: "Instagram Profile URL" },
                      { field: "youtubeHandle", label: "YouTube Handle" },
                      { field: "youtubeUrl", label: "YouTube Channel URL" },
                      { field: "twitterUrl", label: "Twitter / X Profile URL" },
                      { field: "facebookUrl", label: "Facebook Profile URL" },
                      { field: "location", label: "City / Location" },
                      { field: "postalCode", label: "Postal Code" },
                    ].map(c => (
                      <div key={c.field} className="field-card">
                        <label>{c.label}</label>
                        <Editable section="contact" field={c.field} value={(activeContent.contact as any)[c.field]} style={{ fontSize: 14, fontWeight: 600 }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── CASE STUDIES PAGE ──────────────────────────────────────────────── */}
            {currentPage === "cases" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#334155", marginBottom: 12 }}>📈 Instagram Feed / Case Studies Grid Photos</div>
                  <div className="page-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
                    {["insta1","insta2","insta3","insta4","insta5","insta6","insta7","insta8"].map((slot, i) => (
                      <Photo key={slot} slotId={slot} fallback={DEFAULT_CONTENT.photos?.[slot] || "/photos/profile.jpg"} label={`Grid Post ${i+1}`} style={{ width: "100%", aspectRatio: "1/1", borderRadius: 8, overflow: "hidden", border: "1px solid #e2e8f0" }} />
                    ))}
                  </div>
                </div>
                <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#334155", marginBottom: 12 }}>📱 Phone Video Mockup Frames</div>
                  <div className="page-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                    {["phone1","phone2","phone3"].map((slot, i) => (
                      <Photo key={slot} slotId={slot} fallback={DEFAULT_CONTENT.photos?.[slot] || "/photos/profile.jpg"} label={`Mockup ${i+1}`} style={{ width: "100%", aspectRatio: "9/16", borderRadius: 12, overflow: "hidden", border: "1px solid #e2e8f0" }} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── DASHBOARD PAGE ─────────────────────────────────────────────────── */}
            {currentPage === "dashboard" && (
              <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#334155", marginBottom: 10 }}>📊 Dashboard — Platform Stats</div>
                <p style={{ fontSize: 13, color: "#64748b", marginBottom: 16, lineHeight: 1.6 }}>
                  The Dashboard page shows live analytics from Instagram, YouTube, and Facebook. Update the stats numbers through the <strong>Home page → Stats section</strong> (statBrands, statReach, statFollowers, statExp).
                </p>
                <div className="page-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { field: "statBrands", label: "Brands Collaborated" },
                    { field: "statReach", label: "All-Time Organic Reach" },
                    { field: "statFollowers", label: "Total Followers" },
                    { field: "statExp", label: "Years of Experience" },
                  ].map(s => (
                    <div key={s.field} className="field-card">
                      <label>{s.label}</label>
                      <Editable section="homepage" field={s.field} value={(activeContent.homepage as any)[s.field]} style={{ fontSize: 26, fontWeight: 900, color: "#7a1421" }} />
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 14, padding: 14, background: "#f8fafc", borderRadius: 8, border: "1px solid #e2e8f0" }}>
                  <div style={{ fontSize: 12, color: "#64748b" }}>📌 <strong>Tip:</strong> The reach chart and platform breakdown on the live dashboard uses these numbers combined with the static chart data. For live API integration with Instagram/YouTube, connect the respective business APIs.</div>
                </div>
              </div>
            )}

            {/* ── Q&A PAGE ───────────────────────────────────────────────────────── */}
            {currentPage === "qna" && (
              <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#334155", marginBottom: 10 }}>❓ Q&A / FAQ Page</div>
                <p style={{ fontSize: 13, color: "#64748b", marginBottom: 16, lineHeight: 1.6 }}>
                  The Q&A page contains structured FAQ content for SEO (JSON-LD schema). To update Q&A content, edit the source file directly or use the sync system. The questions and answers are hardcoded for SEO schema markup.
                </p>
                <a href="/qna" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#3b82f6", color: "#fff", textDecoration: "none", padding: "9px 18px", borderRadius: 8, fontSize: 13, fontWeight: 700 }}>View Live Q&A Page ↗</a>
                <div style={{ marginTop: 14, padding: 14, background: "#fffbeb", borderRadius: 8, border: "1px solid #fde68a" }}>
                  <div style={{ fontSize: 12, color: "#92400e" }}>⚠️ Q&A content updates require a code change in <code>/app/qna/page.tsx</code>. This is intentional as it's used for structured SEO data.</div>
                </div>
              </div>
            )}

            {/* ── LEGAL / PRIVACY / TERMS ────────────────────────────────────────── */}
            {currentPage === "legal" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Legal Page", url: "/legal" },
                  { label: "Privacy Policy", url: "/privacy" },
                  { label: "Terms of Service", url: "/terms" },
                ].map(pg => (
                  <div key={pg.url} style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>{pg.label}</div>
                      <div style={{ fontSize: 12, color: "#64748b" }}>Static legal page — update in source file <code>{pg.url}/page.tsx</code></div>
                    </div>
                    <a href={pg.url} target="_blank" rel="noopener noreferrer" style={{ background: "#f1f5f9", color: "#334155", textDecoration: "none", padding: "7px 14px", borderRadius: 7, fontSize: 12, fontWeight: 700, border: "1px solid #e2e8f0" }}>View Live ↗</a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* ── MOBILE BOTTOM NAV TABS ──────────────────────────────────────────────── */}
      <nav className="mobile-bottom-tabs" style={{ display: "none", position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9998, background: "#0f172a", borderTop: "1px solid #1e293b", overflowX: "auto", padding: "6px 8px", gap: 2 }}>
        {PAGES.map(p => (
          <button key={p.id} onClick={() => setCurrentPage(p.id)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: currentPage === p.id ? "#1e40af" : "transparent", color: currentPage === p.id ? "#fff" : "#64748b", border: "none", borderRadius: 8, padding: "6px 10px", fontSize: 10, fontWeight: 700, cursor: "pointer", flexShrink: 0, minWidth: 56 }}>
            <span style={{ fontSize: 18 }}>{p.emoji}</span>
            <span style={{ whiteSpace: "nowrap" }}>{p.label}</span>
          </button>
        ))}
      </nav>

      {/* ── TOAST ──────────────────────────────────────────────────────────────── */}
      {toast && (
        <div style={{ position: "fixed", bottom: 80, right: 16, background: toast.type === "error" ? "#ef4444" : "#0f172a", color: "#fff", padding: "12px 18px", borderRadius: 10, fontSize: 13, fontWeight: 700, boxShadow: "0 8px 24px rgba(0,0,0,0.3)", zIndex: 999999, maxWidth: 340 }}>
          {toast.msg}
        </div>
      )}
    </div>
  );
}
