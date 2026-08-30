"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  SiteContent,
  GalleryItem,
  ServiceItem,
  PricingPackage,
  CaseStudyItem,
  KpiItem,
  CampaignItem,
  FaqItem,
} from "@/lib/contentStore";

// ── SVG ICONS ─────────────────────────────────────────────────────────────────
function HomeIcon({ size = 15 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
}
function UserIcon({ size = 15 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
}
function StarIcon({ size = 15 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
}
function BriefcaseIcon({ size = 15 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
}
function MailIcon({ size = 15 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
}
function TrendingUpIcon({ size = 15 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
}
function BarChartIcon({ size = 15 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;
}
function HelpCircleIcon({ size = 15 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
}
function ImageIcon({ size = 15 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>;
}
function GridIcon({ size = 15 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
}
function PencilIcon({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
}
function EyeIcon({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
}
function EyeOffIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>;
}
function ClockIcon({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}
function SaveIcon({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>;
}
function SendIcon({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
}
function LogOutIcon({ size = 15 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
}
function AlertTriangleIcon({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
}
function LightbulbIcon({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>;
}
function CameraIcon({ size = 18 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>;
}
function CheckCircleIcon({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
}
function ClipboardIcon({ size = 13 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>;
}
function RotateCCWIcon({ size = 13 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.9"/></svg>;
}
function ExternalLinkIcon({ size = 12 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;
}
function LockIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
}
function PlusIcon({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
}
function TrashIcon({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>;
}
function SparkleIcon({ size = 15 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4L12 2z"/></svg>;
}
function RefreshIcon({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>;
}

// ── TYPES ─────────────────────────────────────────────────────────────────────
type PageId = "home" | "about" | "services" | "hire" | "contact" | "cases" | "dashboard" | "gallery" | "photos" | "qna" | "legal";
type ViewMode = "editor" | "preview" | "history";

interface Revision {
  revisionId: string;
  version: number;
  data: SiteContent;
  note?: string;
  changes?: string[];
  publishedAt: string;
  active?: boolean;
}
interface ServerStatus {
  mongoConnected: boolean;
  googleDriveConnected: boolean;
}

const PAGES: { id: PageId; label: string; icon: React.ReactNode; liveUrl: string }[] = [
  { id: "home",      label: "Home",         icon: <HomeIcon size={15} />,       liveUrl: "/" },
  { id: "about",     label: "About",        icon: <UserIcon size={15} />,       liveUrl: "/about" },
  { id: "services",  label: "Services",     icon: <StarIcon size={15} />,       liveUrl: "/services" },
  { id: "hire",      label: "Hire Me",      icon: <BriefcaseIcon size={15} />,  liveUrl: "/hire" },
  { id: "contact",   label: "Contact",      icon: <MailIcon size={15} />,       liveUrl: "/contact" },
  { id: "cases",     label: "Case Studies", icon: <TrendingUpIcon size={15} />, liveUrl: "/case-studies" },
  { id: "dashboard", label: "Dashboard",    icon: <BarChartIcon size={15} />,   liveUrl: "/dashboard" },
  { id: "gallery",   label: "Gallery",      icon: <GridIcon size={15} />,       liveUrl: "/#gallery" },
  { id: "photos",    label: "All Media",    icon: <ImageIcon size={15} />,      liveUrl: "/" },
  { id: "qna",       label: "Q&A",          icon: <HelpCircleIcon size={15} />, liveUrl: "/qna" },
];

const PHOTO_SLOT_DESCRIPTIONS: Record<string, { label: string; location: string; shape: string }> = {
  profile: { label: "Hero Oval Portrait", location: "Homepage Hero Section & Brand Header", shape: "3:4 Vertical" },
  whoami: { label: "Who Am I Portrait", location: "Homepage Who Am I card & About Page", shape: "3:4 Vertical" },
  qualifications: { label: "Qualifications Blazer Photo", location: "Homepage Qualifications card & About Page", shape: "4:3 Landscape" },
  storyPhoto: { label: "About Story Frame", location: "About Page 'My Journey' Story section", shape: "3:4 Vertical" },
  work1: { label: "Work Card 1 (UGC Video)", location: "Homepage 'My Work Includes' Grid #1", shape: "1:1 Square" },
  work2: { label: "Work Card 2 (Branding)", location: "Homepage 'My Work Includes' Grid #2", shape: "1:1 Square" },
  work3: { label: "Work Card 3 (SEO & Copy)", location: "Homepage 'My Work Includes' Grid #3", shape: "1:1 Square" },
  work4: { label: "Work Card 4 (Communication)", location: "Homepage 'My Work Includes' Grid #4", shape: "1:1 Square" },
  work6: { label: "Work Card 5 (Content Strategy)", location: "Homepage 'My Work Includes' Grid #6", shape: "1:1 Square" },
  add1: { label: "Photography 1 (Sunglasses)", location: "Homepage Additional Photography Grid", shape: "4:3 Landscape" },
  add2: { label: "Photography 2 (Lifestyle UGC)", location: "Homepage Additional Photography Grid", shape: "4:3 Landscape" },
  add3: { label: "Photography 3 (Festive Ethnic)", location: "Homepage Additional Photography Grid", shape: "4:3 Landscape" },
  add4: { label: "Photography 4 (Radha Raman)", location: "Homepage Additional Photography Grid", shape: "4:3 Landscape" },
  hire1: { label: "Hire Me Card 1", location: "Hire Me Page Feature Showcase #1", shape: "4:3 Landscape" },
  hire2: { label: "Hire Me Card 2", location: "Hire Me Page Feature Showcase #2", shape: "4:3 Landscape" },
  insta1: { label: "Instagram Feed Post 1", location: "Case Studies & Homepage Feed Grid (1/8)", shape: "1:1 Square" },
  insta2: { label: "Instagram Feed Post 2", location: "Case Studies & Homepage Feed Grid (2/8)", shape: "1:1 Square" },
  insta3: { label: "Instagram Feed Post 3", location: "Case Studies & Homepage Feed Grid (3/8)", shape: "1:1 Square" },
  insta4: { label: "Instagram Feed Post 4", location: "Case Studies & Homepage Feed Grid (4/8)", shape: "1:1 Square" },
  insta5: { label: "Instagram Feed Post 5", location: "Case Studies & Homepage Feed Grid (5/8)", shape: "1:1 Square" },
  insta6: { label: "Instagram Feed Post 6", location: "Case Studies & Homepage Feed Grid (6/8)", shape: "1:1 Square" },
  insta7: { label: "Instagram Feed Post 7", location: "Case Studies & Homepage Feed Grid (7/8)", shape: "1:1 Square" },
  insta8: { label: "Instagram Feed Post 8", location: "Case Studies & Homepage Feed Grid (8/8)", shape: "1:1 Square" },
  phone1: { label: "Phone Reel Frame 1", location: "Video Content Mockup (340K views)", shape: "9:16 Vertical" },
  phone2: { label: "Phone Reel Frame 2", location: "Video Content Mockup (420K views)", shape: "9:16 Vertical" },
  phone3: { label: "Phone Reel Frame 3", location: "Video Content Mockup (290K views)", shape: "9:16 Vertical" },
};

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
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#0f172a 0%,#1e293b 50%,#0f172a 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
      <div style={{ width: "100%", maxWidth: 400, background: "#1e293b", borderRadius: 20, padding: "36px 28px", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ width: 60, height: 60, borderRadius: 16, background: "linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 900, color: "#fff", margin: "0 auto 14px" }}>
            H
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 900, color: "#f8fafc", margin: 0 }}>HMoriX Visual Studio</h1>
          <p style={{ fontSize: 13, color: "#64748b", marginTop: 6 }}>Live Website Content &amp; Media CMS</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#94a3b8", marginBottom: 8, letterSpacing: 0.5, textTransform: "uppercase" }}>
            Admin Password
          </label>
          <div style={{ position: "relative", marginBottom: 14 }}>
            <div style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#64748b", pointerEvents: "none" }}>
              <LockIcon size={16} />
            </div>
            <input
              type={showPw ? "text" : "password"}
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="Enter admin password"
              required
              style={{ width: "100%", padding: "12px 44px 12px 38px", background: "#0f172a", border: "1.5px solid #334155", borderRadius: 10, color: "#f8fafc", fontSize: 15, boxSizing: "border-box" }}
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPw((v) => !v)}
              style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#64748b", padding: 0 }}
            >
              {showPw ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>
          </div>

          {error && (
            <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#f87171", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <AlertTriangleIcon size={14} /> {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !pw}
            style={{ width: "100%", padding: "13px", background: loading ? "#334155" : "linear-gradient(135deg,#3b82f6,#8b5cf6)", color: "#fff", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 800, cursor: loading || !pw ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
          >
            {loading ? "Authenticating..." : <><SendIcon size={15} /> Enter Admin Studio</>}
          </button>
        </form>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// MAIN ADMIN DASHBOARD
// ──────────────────────────────────────────────────────────────────────────────
export default function HmorixAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [viewMode, setViewMode] = useState<ViewMode>("editor");
  const [content, setContent] = useState<SiteContent | null>(null);
  const [revisions, setRevisions] = useState<Revision[]>([]);
  const [status, setStatus] = useState<ServerStatus>({ mongoConnected: false, googleDriveConnected: false });
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [uploadingSlot, setUploadingSlot] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" | "info" } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentUploadSlot = useRef<string>("profile");

  // Check Auth
  useEffect(() => {
    fetch("/api/hmorix/auth")
      .then((r) => r.json())
      .then((j) => setIsAuthenticated(j.authenticated))
      .catch(() => setIsAuthenticated(false));
  }, []);

  // Fetch Content
  const fetchContent = useCallback(async () => {
    try {
      const res = await fetch("/api/hmorix/content?mode=draft&history=true");
      if (res.ok) {
        const j = await res.json();
        if (j.draft || j.content) {
          setContent(j.draft || j.content);
        }
        if (j.revisions) setRevisions(j.revisions);
        if (j.status) setStatus(j.status);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (isAuthenticated) fetchContent();
  }, [isAuthenticated, fetchContent]);

  // Ctrl+S
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        handleSaveDraft();
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  });

  const showToast = (msg: string, type: "success" | "error" | "info" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  // State Updaters
  const updateSectionField = (section: keyof SiteContent, field: string, value: any) => {
    setContent((prev: any) => {
      if (!prev) return prev;
      return {
        ...prev,
        [section]: {
          ...(prev[section] || {}),
          [field]: value,
        },
      };
    });
    setHasUnsavedChanges(true);
  };

  const updatePhoto = (slotId: string, url: string) => {
    setContent((prev: any) => {
      if (!prev) return prev;
      return {
        ...prev,
        photos: {
          ...(prev.photos || {}),
          [slotId]: url,
        },
      };
    });
    setHasUnsavedChanges(true);
  };

  const handleSaveDraft = async () => {
    if (!content) return;
    setIsSaving(true);
    try {
      const res = await fetch("/api/hmorix/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "save_draft", data: content }),
      });
      const j = await res.json();
      if (j.success) {
        setHasUnsavedChanges(false);
        showToast("Draft saved to MongoDB Atlas!");
      } else {
        throw new Error(j.message || j.error);
      }
    } catch (err: any) {
      showToast(`Save failed: ${err.message}`, "error");
    } finally {
      setIsSaving(false);
    }
  };

  const handlePublish = async () => {
    if (!content) return;
    if (!confirm("Publish all changes LIVE to the website? Changes will be immediately visible to all visitors.")) return;
    setIsPublishing(true);
    try {
      const res = await fetch("/api/hmorix/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "publish", data: content }),
      });
      const j = await res.json();
      if (j.success) {
        setHasUnsavedChanges(false);
        showToast(`Version ${j.version || "Live"} Published!`);
        fetchContent();
      } else {
        throw new Error(j.message || j.error);
      }
    } catch (err: any) {
      showToast(`Publish failed: ${err.message}`, "error");
    } finally {
      setIsPublishing(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/hmorix/auth", { method: "DELETE" });
    setIsAuthenticated(false);
  };

  const triggerUpload = (slotId: string) => {
    currentUploadSlot.current = slotId;
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      fileInputRef.current.click();
    }
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
      if (j.url) {
        updatePhoto(slotId, j.url);
        showToast(`Photo uploaded (${j.provider})`);
      } else {
        throw new Error(j.error || "Upload failed");
      }
    } catch (err: any) {
      showToast(`Upload failed: ${err.message}`, "error");
    } finally {
      setUploadingSlot(null);
    }
  };

  const handleRestoreRevision = async (rev: Revision) => {
    if (!confirm(`Switch live website to Version ${rev.version} (${rev.note || ""})?`)) return;
    try {
      const res = await fetch("/api/hmorix/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "restore", revisionId: rev.revisionId, versionNum: rev.version }),
      });
      const j = await res.json();
      if (j.success) {
        if (rev.data) setContent(rev.data);
        showToast(`Switched active website to Version v${rev.version}!`);
        fetchContent();
      } else {
        showToast(`Failed: ${j.error || j.message}`, "error");
      }
    } catch (err: any) {
      showToast(`Error: ${err.message}`, "error");
    }
  };

  const handleRevertToOriginalBase = async () => {
    if (!confirm("Are you sure you want to revert all live content back to the Original Version (v1)?")) return;
    try {
      const res = await fetch("/api/hmorix/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset_to_default" }),
      });
      const j = await res.json();
      if (j.success) {
        showToast("Reverted to Original Version (v1) successfully!");
        fetchContent();
      } else {
        showToast(`Failed: ${j.error || j.message}`, "error");
      }
    } catch (err: any) {
      showToast(`Error: ${err.message}`, "error");
    }
  };

  if (isAuthenticated === null || !content) {
    return (
      <div style={{ minHeight: "100vh", background: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 40, height: 40, border: "3px solid #334155", borderTopColor: "#3b82f6", borderRadius: "50%", margin: "0 auto 16px", animation: "spin 0.8s linear infinite" }} />
          Loading HMoriX Visual Studio...
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  const isEditing = viewMode === "editor";
  const currentPageInfo = PAGES.find((p) => p.id === currentPage) || PAGES[0];

  // Helper Field Components
  function TextField({ label, value, onChange, placeholder = "", multiline = false, helper = "" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; multiline?: boolean; helper?: string }) {
    return (
      <div className="adm-field">
        <label className="adm-label">{label}</label>
        {multiline ? (
          <textarea
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="adm-input adm-textarea"
            rows={3}
          />
        ) : (
          <input
            type="text"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="adm-input"
          />
        )}
        {helper && <div className="adm-helper">{helper}</div>}
      </div>
    );
  }

  function PhotoSlotCard({ slotId, customLabel }: { slotId: string; customLabel?: string }) {
    const meta = PHOTO_SLOT_DESCRIPTIONS[slotId] || { label: slotId, location: "Website page", shape: "Standard" };
    const src = content?.photos?.[slotId] || `/photos/${slotId}.jpg`;
    const isUploading = uploadingSlot === slotId;

    return (
      <div className="adm-photo-card">
        <div className="adm-photo-preview">
          <img
            src={src}
            alt={meta.label}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/photos/profile.jpg";
            }}
          />
          <div
            onClick={() => triggerUpload(slotId)}
            className="adm-photo-overlay"
            title="Click or tap to upload replacement photo"
          >
            {isUploading ? (
              <div style={{ width: 22, height: 22, border: "2px solid #fff", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
            ) : (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <CameraIcon size={20} />
                <span style={{ fontSize: 11, fontWeight: 700 }}>Replace</span>
              </div>
            )}
          </div>
          <span className="adm-photo-badge">{meta.shape}</span>
        </div>
        <div className="adm-photo-info">
          <div className="adm-photo-title">{customLabel || meta.label}</div>
          <div className="adm-photo-loc">{meta.location}</div>
          <button
            type="button"
            onClick={() => triggerUpload(slotId)}
            className="adm-photo-btn"
          >
            <CameraIcon size={13} /> Replace Photo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="adm-root">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelected}
        accept="image/*,video/*"
        style={{ display: "none" }}
      />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .adm-root { min-height: 100vh; background: #f8fafc; font-family: Inter, system-ui, -apple-system, sans-serif; color: #0f172a; padding-bottom: 74px; }
        
        /* Top Navigation Header */
        .adm-header { position: sticky; top: 0; z-index: 999; background: #0f172a; color: #fff; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.3); min-height: 52px; }
        .adm-brand { display: flex; alignItems: center; gap: 8px; flex-shrink: 0; }
        .adm-logo { width: 30px; height: 30px; border-radius: 8px; background: linear-gradient(135deg,#3b82f6,#8b5cf6); display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 15px; color: #fff; }
        
        /* Desktop tab bar */
        .adm-desktop-tabs { display: flex; background: #1e293b; border-radius: 8px; padding: 3px; gap: 2px; overflow-x: auto; flex: 1; max-width: 720px; margin: 0 8px; }
        .adm-tab-btn { background: transparent; color: #94a3b8; border: none; border-radius: 6px; padding: 6px 10px; font-size: 11.5px; font-weight: 600; cursor: pointer; white-space: nowrap; display: flex; align-items: center; gap: 5px; transition: all 0.15s; }
        .adm-tab-btn.active { background: #3b82f6; color: #fff; }
        
        /* Actions */
        .adm-actions { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
        .adm-mode-btn { background: transparent; border: none; border-radius: 5px; padding: 5px 8px; font-size: 11px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 4px; color: #94a3b8; }
        .adm-btn-save { background: #334155; color: #fff; border: none; border-radius: 6px; padding: 6px 12px; font-size: 12px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 5px; }
        .adm-btn-pub { background: linear-gradient(135deg,#22c55e,#16a34a); color: #fff; border: none; border-radius: 6px; padding: 6px 14px; font-size: 12px; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 5px; box-shadow: 0 2px 8px rgba(34,197,94,0.35); }

        /* Container & Cards */
        .adm-container { max-width: 1040px; margin: 0 auto; padding: 16px 14px; }
        .adm-section-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 16px; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.03); }
        .adm-section-title { font-size: 14px; font-weight: 800; color: #1e293b; margin-bottom: 14px; display: flex; align-items: center; gap: 6px; text-transform: uppercase; letter-spacing: 0.4px; }
        .adm-section-title.maroon { color: #7a1421; }

        /* Fields */
        .adm-field { margin-bottom: 12px; }
        .adm-label { display: block; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
        .adm-input { width: 100%; padding: 9px 12px; border: 1.5px solid #cbd5e1; border-radius: 8px; font-size: 14px; font-family: inherit; color: #0f172a; background: #fff; transition: border-color 0.2s, box-shadow 0.2s; }
        .adm-input:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }
        .adm-textarea { resize: vertical; min-height: 70px; line-height: 1.5; }
        .adm-helper { font-size: 11px; color: #94a3b8; margin-top: 4px; }

        /* Grid Layouts */
        .adm-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .adm-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .adm-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .adm-grid-photos { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; }

        /* Photo Card */
        .adm-photo-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; display: flex; flex-direction: column; }
        .adm-photo-preview { position: relative; aspect-ratio: 4/3; background: #f1f5f9; overflow: hidden; }
        .adm-photo-preview img { width: 100%; height: 100%; object-fit: cover; }
        .adm-photo-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.0); display: flex; align-items: center; justify-content: center; cursor: pointer; color: #fff; transition: background 0.2s; }
        .adm-photo-overlay:hover { background: rgba(0,0,0,0.6); }
        .adm-photo-badge { position: absolute; top: 6px; right: 6px; background: rgba(0,0,0,0.65); color: #fff; font-size: 9.5px; font-weight: 700; padding: 2px 6px; border-radius: 4px; }
        .adm-photo-info { padding: 10px 12px; flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
        .adm-photo-title { font-size: 12px; font-weight: 700; color: #0f172a; margin-bottom: 2px; }
        .adm-photo-loc { font-size: 10.5px; color: #64748b; margin-bottom: 8px; line-height: 1.3; }
        .adm-photo-btn { width: 100%; padding: 6px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 11px; font-weight: 600; color: #334155; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 5px; }
        .adm-photo-btn:hover { background: #f1f5f9; }

        /* Mobile bottom nav */
        .adm-mobile-nav { display: none; position: fixed; bottom: 0; left: 0; right: 0; z-index: 9998; background: #0f172a; border-top: 1px solid #1e293b; overflow-x: auto; padding: 4px 6px; -webkit-overflow-scrolling: touch; }
        .adm-mobile-tab-btn { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; background: transparent; color: #94a3b8; border: none; border-radius: 6px; padding: 5px 8px; font-size: 9px; font-weight: 700; cursor: pointer; flex-shrink: 0; min-width: 50px; }
        .adm-mobile-tab-btn.active { background: #1e40af; color: #fff; }

        /* Item Row Card (for lists) */
        .adm-item-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin-bottom: 10px; position: relative; }
        .adm-item-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }

        /* Mobile Adaptations */
        @media (max-width: 768px) {
          .adm-desktop-tabs { display: none !important; }
          .adm-mobile-nav { display: flex !important; }
          .adm-grid-2 { grid-template-columns: 1fr !important; }
          .adm-grid-3 { grid-template-columns: 1fr !important; }
          .adm-grid-4 { grid-template-columns: 1fr 1fr !important; }
          .adm-grid-photos { grid-template-columns: 1fr 1fr !important; }
          .adm-header-title { display: none !important; }
          .adm-container { padding: 10px 10px !important; }
          .adm-section-card { padding: 14px 12px !important; }
        }
      `}</style>

      {/* ── STICKY TOP HEADER ── */}
      <header className="adm-header">
        <div className="adm-brand">
          <div className="adm-logo">H</div>
          <div className="adm-header-title">
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 0.3 }}>HMORIX STUDIO</div>
            <div style={{ fontSize: 10, color: "#64748b" }}>Apoorva Kaushal CMS</div>
          </div>
        </div>

        {/* Desktop Tabs */}
        <nav className="adm-desktop-tabs">
          {PAGES.map((p) => (
            <button
              key={p.id}
              onClick={() => setCurrentPage(p.id)}
              className={`adm-tab-btn${currentPage === p.id ? " active" : ""}`}
            >
              {p.icon}
              <span>{p.label}</span>
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="adm-actions">
          {/* Status Dot */}
          <div
            title={status.mongoConnected ? "MongoDB Atlas Connected" : "Local Storage Mode"}
            style={{ width: 8, height: 8, borderRadius: "50%", background: status.mongoConnected ? "#22c55e" : "#f59e0b", flexShrink: 0 }}
          />

          {/* Mode Switcher */}
          <div style={{ display: "flex", background: "#1e293b", borderRadius: 6, padding: 2 }}>
            <button
              onClick={() => setViewMode("editor")}
              className="adm-mode-btn"
              style={{ background: viewMode === "editor" ? "#3b82f6" : "transparent", color: viewMode === "editor" ? "#fff" : "#94a3b8" }}
            >
              <PencilIcon size={12} /> <span style={{ display: "none" }}>Edit</span>
            </button>
            <button
              onClick={() => setViewMode("history")}
              className="adm-mode-btn"
              style={{ background: viewMode === "history" ? "#8b5cf6" : "transparent", color: viewMode === "history" ? "#fff" : "#94a3b8" }}
            >
              <ClockIcon size={12} />
            </button>
          </div>

          {/* Save / Publish */}
          <button
            onClick={handleSaveDraft}
            disabled={isSaving}
            className="adm-btn-save"
            title="Save Draft (Ctrl+S)"
          >
            <SaveIcon size={13} />
            <span>{isSaving ? "..." : "Save"}</span>
          </button>
          <button
            onClick={handlePublish}
            disabled={isPublishing}
            className="adm-btn-pub"
            title="Publish Live to Website"
          >
            <SendIcon size={13} />
            <span>{isPublishing ? "..." : "Publish"}</span>
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            title="Logout"
            style={{ background: "transparent", border: "1px solid #334155", borderRadius: 6, padding: "6px", color: "#94a3b8", cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <LogOutIcon size={14} />
          </button>
        </div>
      </header>

      {/* ── UNSAVED BANNER ── */}
      {hasUnsavedChanges && (
        <div style={{ background: "#fef3c7", borderBottom: "1px solid #fde68a", color: "#92400e", padding: "8px 14px", fontSize: 12, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <AlertTriangleIcon size={14} /> <strong>Unsaved edits in memory</strong> — click Save Draft or Publish Live to persist.
          </span>
          <div style={{ display: "flex", gap: 6 }}>
            <button onClick={handleSaveDraft} style={{ background: "#d97706", color: "#fff", border: "none", borderRadius: 5, padding: "4px 10px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Save Draft</button>
            <button onClick={handlePublish} style={{ background: "#16a34a", color: "#fff", border: "none", borderRadius: 5, padding: "4px 10px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Publish Live</button>
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT CONTAINER ── */}
      <main className="adm-container">
        {/* Helper bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", display: "flex", alignItems: "center", gap: 6 }}>
            {currentPageInfo.icon}
            <span>{currentPageInfo.label} Editor</span>
          </div>
          <a
            href={currentPageInfo.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 12, fontWeight: 700, color: "#3b82f6", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}
          >
            Open Live Page <ExternalLinkIcon size={12} />
          </a>
        </div>

        {/* ── HISTORY MODE ── */}
        {viewMode === "history" && (
          <div className="adm-section-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10, marginBottom: 16 }}>
              <div>
                <div className="adm-section-title" style={{ marginBottom: 4 }}>
                  <ClockIcon size={16} /> Content Version History &amp; Snapshots
                </div>
                <div style={{ fontSize: 12, color: "#64748b" }}>
                  Every publish and <code>npm run sync-live</code> creates a permanent snapshot. Switch to any older or latest version instantly.
                </div>
              </div>
              <button
                onClick={handleRevertToOriginalBase}
                style={{
                  background: "#fef2f2",
                  border: "1.5px solid #fecaca",
                  color: "#dc2626",
                  borderRadius: 8,
                  padding: "7px 13px",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <RotateCCWIcon size={13} /> Revert to Original (v1 Base)
              </button>
            </div>

            {revisions.length === 0 ? (
              <div style={{ textAlign: "center", padding: 32, color: "#64748b", fontSize: 13, background: "#f8fafc", borderRadius: 8, border: "1px dashed #cbd5e1" }}>
                No published versions recorded yet. Click &quot;Publish&quot; or run <code>npm run sync-live</code> to create a version snapshot.
              </div>
            ) : (
              revisions.map((rev) => (
                <div
                  key={rev.revisionId}
                  style={{
                    background: rev.active ? "#f0fdf4" : "#ffffff",
                    border: `1.5px solid ${rev.active ? "#86efac" : "#e2e8f0"}`,
                    borderRadius: 10,
                    padding: "14px 16px",
                    marginBottom: 12,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 8 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                        <span style={{ background: rev.active ? "#16a34a" : "#3b82f6", color: "#fff", padding: "2px 8px", borderRadius: 6, fontSize: 11, fontWeight: 800 }}>
                          v{rev.version}
                        </span>
                        {rev.active && (
                          <span style={{ background: "#dcfce7", color: "#15803d", border: "1px solid #86efac", padding: "2px 8px", borderRadius: 6, fontSize: 10.5, fontWeight: 800 }}>
                            ★ CURRENT ACTIVE
                          </span>
                        )}
                        <strong style={{ fontSize: 13.5, color: "#0f172a" }}>{rev.note || `Version ${rev.version}`}</strong>
                      </div>
                      <div style={{ fontSize: 11.5, color: "#64748b" }}>
                        {new Date(rev.publishedAt).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <button
                        onClick={() => {
                          if (rev.data) setContent(rev.data);
                          setViewMode("editor");
                          showToast(`Loaded Version v${rev.version} into editor!`);
                        }}
                        style={{
                          background: "#f1f5f9",
                          border: "1px solid #cbd5e1",
                          color: "#334155",
                          borderRadius: 7,
                          padding: "6px 12px",
                          fontSize: 11.5,
                          fontWeight: 600,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <ClipboardIcon size={12} /> Load to Editor
                      </button>
                      <button
                        onClick={() => handleRestoreRevision(rev)}
                        disabled={rev.active}
                        style={{
                          background: rev.active ? "#e2e8f0" : "linear-gradient(135deg,#0284c7,#0369a1)",
                          color: rev.active ? "#94a3b8" : "#fff",
                          border: "none",
                          borderRadius: 7,
                          padding: "6px 14px",
                          fontSize: 11.5,
                          fontWeight: 700,
                          cursor: rev.active ? "default" : "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <RotateCCWIcon size={12} /> {rev.active ? "Active" : `Switch Live to v${rev.version}`}
                      </button>
                    </div>
                  </div>

                  {rev.changes && rev.changes.length > 0 && (
                    <div style={{ background: rev.active ? "#dcfce740" : "#f8fafc", padding: "8px 12px", borderRadius: 6, border: "1px solid #e2e8f0", marginTop: 8 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                        Changes Recorded:
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {rev.changes.map((ch, ci) => (
                          <span
                            key={ci}
                            style={{
                              background: "#fff",
                              border: "1px solid #cbd5e1",
                              borderRadius: 4,
                              padding: "2px 7px",
                              fontSize: 11,
                              color: "#334155",
                            }}
                          >
                            • {ch}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* ── EDITOR MODE ── */}
        {viewMode !== "history" && (
          <>
            {/* ═══════════════════ 1. HOME PAGE ═══════════════════ */}
            {currentPage === "home" && (
              <>
                {/* Hero Section */}
                <div className="adm-section-card">
                  <div className="adm-section-title"><SparkleIcon size={15} /> 1. Homepage Hero Section</div>
                  <div className="adm-grid-2">
                    <div>
                      <TextField
                        label="Hero Creator Name"
                        value={content.hero.heroTitle}
                        onChange={(v) => updateSectionField("hero", "heroTitle", v)}
                        placeholder="Apoorva Kaushal"
                      />
                      <TextField
                        label="Hero Tagline"
                        value={content.hero.heroTagline}
                        onChange={(v) => updateSectionField("hero", "heroTagline", v)}
                        multiline
                        placeholder="Authentic storytelling that connects brands with audiences..."
                      />
                      <div className="adm-grid-2">
                        <TextField
                          label="Hero Signature"
                          value={content.hero.heroSignature}
                          onChange={(v) => updateSectionField("hero", "heroSignature", v)}
                          placeholder="Appu"
                        />
                        <TextField
                          label="Domain Tag"
                          value={content.hero.domain}
                          onChange={(v) => updateSectionField("hero", "domain", v)}
                          placeholder="apoorva.hmorix.in"
                        />
                      </div>
                    </div>
                    <div>
                      <PhotoSlotCard slotId="profile" customLabel="Hero Oval Frame Photo" />
                    </div>
                  </div>
                </div>

                {/* Who Am I */}
                <div className="adm-section-card">
                  <div className="adm-section-title maroon"><UserIcon size={15} /> 2. &quot;Who Am I&quot; Bio Section</div>
                  <div className="adm-grid-2">
                    <div>
                      <TextField
                        label="Section Heading"
                        value={content.homepage.whoAmIHeading}
                        onChange={(v) => updateSectionField("homepage", "whoAmIHeading", v)}
                        placeholder="WHO AM I"
                      />
                      <TextField
                        label="Bio Paragraph 1"
                        value={content.homepage.whoAmIBio1}
                        onChange={(v) => updateSectionField("homepage", "whoAmIBio1", v)}
                        multiline
                      />
                      <TextField
                        label="Bio Paragraph 2"
                        value={content.homepage.whoAmIBio2}
                        onChange={(v) => updateSectionField("homepage", "whoAmIBio2", v)}
                        multiline
                      />
                    </div>
                    <div>
                      <PhotoSlotCard slotId="whoami" customLabel="Who Am I Card Portrait" />
                    </div>
                  </div>
                </div>

                {/* Homepage Numbers / Stats */}
                <div className="adm-section-card">
                  <div className="adm-section-title"><TrendingUpIcon size={15} /> 3. Homepage Key Numbers</div>
                  <div className="adm-grid-4">
                    <TextField
                      label="Brands Served"
                      value={content.homepage.statBrands}
                      onChange={(v) => updateSectionField("homepage", "statBrands", v)}
                      placeholder="5+"
                    />
                    <TextField
                      label="Total Organic Reach"
                      value={content.homepage.statReach}
                      onChange={(v) => updateSectionField("homepage", "statReach", v)}
                      placeholder="2M+"
                    />
                    <TextField
                      label="Combined Followers"
                      value={content.homepage.statFollowers}
                      onChange={(v) => updateSectionField("homepage", "statFollowers", v)}
                      placeholder="5K+"
                    />
                    <TextField
                      label="Experience"
                      value={content.homepage.statExp}
                      onChange={(v) => updateSectionField("homepage", "statExp", v)}
                      placeholder="3YRS+"
                    />
                  </div>
                </div>

                {/* Qualifications Photo & Work Section */}
                <div className="adm-section-card">
                  <div className="adm-section-title"><BriefcaseIcon size={15} /> 4. Portfolio &amp; Work Cards (Homepage)</div>
                  <div className="adm-grid-photos">
                    <PhotoSlotCard slotId="qualifications" customLabel="Qualifications Card Photo" />
                    <PhotoSlotCard slotId="work1" customLabel="Work Card 1 (UGC Video)" />
                    <PhotoSlotCard slotId="work2" customLabel="Work Card 2 (Branding & Aesthetic)" />
                    <PhotoSlotCard slotId="work3" customLabel="Work Card 3 (SEO & Copywriting)" />
                    <PhotoSlotCard slotId="work4" customLabel="Work Card 4 (Communication)" />
                    <PhotoSlotCard slotId="work6" customLabel="Work Card 5 (Content Strategy)" />
                  </div>
                </div>

                {/* Instagram 8-Post Feed Grid */}
                <div className="adm-section-card">
                  <div className="adm-section-title"><GridIcon size={15} /> 5. Instagram Feed Grid (8 Posts)</div>
                  <div className="adm-grid-photos">
                    {["insta1", "insta2", "insta3", "insta4", "insta5", "insta6", "insta7", "insta8"].map((slot, i) => (
                      <PhotoSlotCard key={slot} slotId={slot} customLabel={`Instagram Post #${i + 1}`} />
                    ))}
                  </div>
                </div>

                {/* Phone Video Mockup Frames */}
                <div className="adm-section-card">
                  <div className="adm-section-title"><ImageIcon size={15} /> 6. Phone Video Mockup Frames (3 Posters)</div>
                  <div className="adm-grid-3">
                    <PhotoSlotCard slotId="phone1" customLabel="Reel 01 Poster (340K views)" />
                    <PhotoSlotCard slotId="phone2" customLabel="Reel 02 Poster (420K views)" />
                    <PhotoSlotCard slotId="phone3" customLabel="Reel 03 Poster (290K views)" />
                  </div>
                </div>

                {/* Additional Photography */}
                <div className="adm-section-card">
                  <div className="adm-section-title"><CameraIcon size={15} /> 7. Additional Photography (4 Cards)</div>
                  <div className="adm-grid-photos">
                    <PhotoSlotCard slotId="add1" customLabel="Photography 1 (Sunglasses)" />
                    <PhotoSlotCard slotId="add2" customLabel="Photography 2 (Lifestyle UGC)" />
                    <PhotoSlotCard slotId="add3" customLabel="Photography 3 (Festive Look)" />
                    <PhotoSlotCard slotId="add4" customLabel="Photography 4 (Radha Raman)" />
                  </div>
                </div>
              </>
            )}

            {/* ═══════════════════ 2. ABOUT PAGE ═══════════════════ */}
            {currentPage === "about" && (
              <>
                <div className="adm-section-card">
                  <div className="adm-section-title"><UserIcon size={15} /> About Page Hero &amp; Story</div>
                  <div className="adm-grid-2">
                    <div>
                      <TextField
                        label="Hero Title"
                        value={content.about.pageHeroTitle}
                        onChange={(v) => updateSectionField("about", "pageHeroTitle", v)}
                        placeholder="APOORVA KAUSHAL"
                      />
                      <TextField
                        label="Hero Subtitle"
                        value={content.about.pageHeroSub}
                        onChange={(v) => updateSectionField("about", "pageHeroSub", v)}
                        multiline
                      />
                      <TextField
                        label="Story Heading"
                        value={content.about.storyHeading}
                        onChange={(v) => updateSectionField("about", "storyHeading", v)}
                      />
                      <TextField
                        label="Story Bio 1"
                        value={content.about.storyBio1}
                        onChange={(v) => updateSectionField("about", "storyBio1", v)}
                        multiline
                      />
                      <TextField
                        label="Story Bio 2"
                        value={content.about.storyBio2}
                        onChange={(v) => updateSectionField("about", "storyBio2", v)}
                        multiline
                      />
                      <TextField
                        label="Story Bio 3"
                        value={content.about.storyBio3}
                        onChange={(v) => updateSectionField("about", "storyBio3", v)}
                        multiline
                      />
                    </div>
                    <div>
                      <PhotoSlotCard slotId="storyPhoto" customLabel="Story Portrait Photo" />
                      <div style={{ marginTop: 14 }}>
                        <PhotoSlotCard slotId="qualifications" customLabel="Qualifications Photo" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Pillars */}
                <div className="adm-section-card">
                  <div className="adm-section-title"><StarIcon size={15} /> Content Pillars (4 Niches)</div>
                  <div className="adm-grid-2">
                    {(content.about.contentPillars || []).map((pillar, idx) => (
                      <div key={idx} className="adm-item-card">
                        <TextField
                          label={`Pillar #${idx + 1} Title`}
                          value={pillar.title}
                          onChange={(v) => {
                            const arr = [...(content.about.contentPillars || [])];
                            arr[idx] = { ...arr[idx], title: v };
                            updateSectionField("about", "contentPillars", arr);
                          }}
                        />
                        <TextField
                          label="Description"
                          value={pillar.desc}
                          onChange={(v) => {
                            const arr = [...(content.about.contentPillars || [])];
                            arr[idx] = { ...arr[idx], desc: v };
                            updateSectionField("about", "contentPillars", arr);
                          }}
                          multiline
                        />
                        <TextField
                          label="Stats Badge"
                          value={pillar.stats}
                          onChange={(v) => {
                            const arr = [...(content.about.contentPillars || [])];
                            arr[idx] = { ...arr[idx], stats: v };
                            updateSectionField("about", "contentPillars", arr);
                          }}
                          placeholder="340K avg. views"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* ═══════════════════ 3. SERVICES & PRICING ═══════════════════ */}
            {currentPage === "services" && (
              <>
                <div className="adm-section-card">
                  <div className="adm-section-title"><StarIcon size={15} /> Services Page Hero Header</div>
                  <TextField
                    label="Page Hero Title"
                    value={content.services.pageHeroTitle || "SERVICES & PRICING"}
                    onChange={(v) => updateSectionField("services", "pageHeroTitle", v)}
                  />
                  <TextField
                    label="Page Hero Subtitle"
                    value={content.services.pageHeroSub || ""}
                    onChange={(v) => updateSectionField("services", "pageHeroSub", v)}
                    multiline
                  />
                </div>

                {/* 6 Full Service Cards */}
                <div className="adm-section-card">
                  <div className="adm-section-title"><BriefcaseIcon size={15} /> All 6 Detailed Services</div>
                  <div className="adm-grid-2">
                    {(content.services.servicesList || []).map((srv, idx) => (
                      <div key={idx} className="adm-item-card">
                        <div style={{ fontWeight: 800, fontSize: 13, color: "#7a1421", marginBottom: 8 }}>Service #{idx + 1}</div>
                        <TextField
                          label="Service Title"
                          value={srv.name}
                          onChange={(v) => {
                            const arr = [...(content.services.servicesList || [])];
                            arr[idx] = { ...arr[idx], name: v };
                            updateSectionField("services", "servicesList", arr);
                          }}
                        />
                        <TextField
                          label="Tagline / Badge"
                          value={srv.tagline}
                          onChange={(v) => {
                            const arr = [...(content.services.servicesList || [])];
                            arr[idx] = { ...arr[idx], tagline: v };
                            updateSectionField("services", "servicesList", arr);
                          }}
                        />
                        <TextField
                          label="Pricing (Text)"
                          value={srv.price}
                          onChange={(v) => {
                            const arr = [...(content.services.servicesList || [])];
                            arr[idx] = { ...arr[idx], price: v };
                            updateSectionField("services", "servicesList", arr);
                          }}
                          placeholder="Starting ₹6,000/video"
                        />
                        <TextField
                          label="Full Description"
                          value={srv.desc}
                          onChange={(v) => {
                            const arr = [...(content.services.servicesList || [])];
                            arr[idx] = { ...arr[idx], desc: v };
                            updateSectionField("services", "servicesList", arr);
                          }}
                          multiline
                        />
                        <TextField
                          label="Features (1 per line)"
                          value={(srv.features || []).join("\n")}
                          onChange={(v) => {
                            const arr = [...(content.services.servicesList || [])];
                            arr[idx] = { ...arr[idx], features: v.split("\n").filter((x) => x.trim()) };
                            updateSectionField("services", "servicesList", arr);
                          }}
                          multiline
                          helper="Enter each feature deliverable on a new line"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3 Main Monthly Retainer Packages */}
                <div className="adm-section-card">
                  <div className="adm-section-title maroon"><SparkleIcon size={15} /> 3 Monthly Retainer Packages (Starter / Growth / Premium)</div>
                  <div className="adm-grid-3">
                    {(content.services.packages || []).map((pkg, idx) => (
                      <div key={idx} className="adm-item-card">
                        <div style={{ fontWeight: 800, fontSize: 13, color: "#1e293b", marginBottom: 8 }}>Tier #{idx + 1} ({pkg.name})</div>
                        <TextField
                          label="Package Name"
                          value={pkg.name}
                          onChange={(v) => {
                            const arr = [...(content.services.packages || [])];
                            arr[idx] = { ...arr[idx], name: v };
                            updateSectionField("services", "packages", arr);
                          }}
                        />
                        <TextField
                          label="Price"
                          value={pkg.price}
                          onChange={(v) => {
                            const arr = [...(content.services.packages || [])];
                            arr[idx] = { ...arr[idx], price: v };
                            updateSectionField("services", "packages", arr);
                          }}
                          placeholder="₹15,000"
                        />
                        <TextField
                          label="Period"
                          value={pkg.period}
                          onChange={(v) => {
                            const arr = [...(content.services.packages || [])];
                            arr[idx] = { ...arr[idx], period: v };
                            updateSectionField("services", "packages", arr);
                          }}
                          placeholder="per month"
                        />
                        <TextField
                          label="Description"
                          value={pkg.desc}
                          onChange={(v) => {
                            const arr = [...(content.services.packages || [])];
                            arr[idx] = { ...arr[idx], desc: v };
                            updateSectionField("services", "packages", arr);
                          }}
                          multiline
                        />
                        <TextField
                          label="Features (1 per line)"
                          value={(pkg.features || []).join("\n")}
                          onChange={(v) => {
                            const arr = [...(content.services.packages || [])];
                            arr[idx] = { ...arr[idx], features: v.split("\n").filter((x) => x.trim()) };
                            updateSectionField("services", "packages", arr);
                          }}
                          multiline
                        />
                        <TextField
                          label="Button CTA Text"
                          value={pkg.cta}
                          onChange={(v) => {
                            const arr = [...(content.services.packages || [])];
                            arr[idx] = { ...arr[idx], cta: v };
                            updateSectionField("services", "packages", arr);
                          }}
                          placeholder="Get Started"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* ═══════════════════ 4. HIRE ME PAGE ═══════════════════ */}
            {currentPage === "hire" && (
              <>
                <div className="adm-section-card">
                  <div className="adm-section-title"><BriefcaseIcon size={15} /> Hire Me Page Header &amp; Showcase</div>
                  <TextField
                    label="Page Hero Title"
                    value={content.hire?.pageHeroTitle || "HIRE APOORVA KAUSHAL"}
                    onChange={(v) => updateSectionField("hire", "pageHeroTitle", v)}
                  />
                  <TextField
                    label="Page Hero Subtitle"
                    value={content.hire?.pageHeroSub || ""}
                    onChange={(v) => updateSectionField("hire", "pageHeroSub", v)}
                    multiline
                  />
                  <div className="adm-grid-2" style={{ marginTop: 14 }}>
                    <PhotoSlotCard slotId="hire1" customLabel="Hire Page Feature Photo 1" />
                    <PhotoSlotCard slotId="hire2" customLabel="Hire Page Feature Photo 2" />
                  </div>
                </div>
              </>
            )}

            {/* ═══════════════════ 5. CONTACT & SOCIAL ═══════════════════ */}
            {currentPage === "contact" && (
              <>
                <div className="adm-section-card">
                  <div className="adm-section-title"><MailIcon size={15} /> Direct Contact Channels &amp; Location</div>
                  <div className="adm-grid-2">
                    <TextField
                      label="Email Address"
                      value={content.contact.email}
                      onChange={(v) => updateSectionField("contact", "email", v)}
                      placeholder="apoorva@apoorvakaushal.com"
                    />
                    <TextField
                      label="WhatsApp Number (Country code, no +)"
                      value={content.contact.whatsappNumber}
                      onChange={(v) => updateSectionField("contact", "whatsappNumber", v)}
                      placeholder="919368153189"
                    />
                    <TextField
                      label="City / Location"
                      value={content.contact.location}
                      onChange={(v) => updateSectionField("contact", "location", v)}
                      placeholder="Hathras, Uttar Pradesh, India"
                    />
                    <TextField
                      label="Postal Code"
                      value={content.contact.postalCode}
                      onChange={(v) => updateSectionField("contact", "postalCode", v)}
                      placeholder="204101"
                    />
                  </div>
                </div>

                <div className="adm-section-card">
                  <div className="adm-section-title"><TrendingUpIcon size={15} /> Social Media Handles &amp; Links</div>
                  <div className="adm-grid-2">
                    <TextField
                      label="Instagram Handle"
                      value={content.contact.instagramHandle}
                      onChange={(v) => updateSectionField("contact", "instagramHandle", v)}
                      placeholder="@apoorva__kaushal"
                    />
                    <TextField
                      label="Instagram Profile URL"
                      value={content.contact.instagramUrl}
                      onChange={(v) => updateSectionField("contact", "instagramUrl", v)}
                      placeholder="https://instagram.com/apoorva__kaushal"
                    />
                    <TextField
                      label="YouTube Handle"
                      value={content.contact.youtubeHandle}
                      onChange={(v) => updateSectionField("contact", "youtubeHandle", v)}
                      placeholder="@_apoorva7__"
                    />
                    <TextField
                      label="YouTube Channel URL"
                      value={content.contact.youtubeUrl}
                      onChange={(v) => updateSectionField("contact", "youtubeUrl", v)}
                      placeholder="https://youtube.com/@_apoorva7__"
                    />
                    <TextField
                      label="Twitter / X Profile URL"
                      value={content.contact.twitterUrl}
                      onChange={(v) => updateSectionField("contact", "twitterUrl", v)}
                    />
                    <TextField
                      label="Facebook Profile URL"
                      value={content.contact.facebookUrl}
                      onChange={(v) => updateSectionField("contact", "facebookUrl", v)}
                    />
                  </div>
                </div>
              </>
            )}

            {/* ═══════════════════ 6. CASE STUDIES ═══════════════════ */}
            {currentPage === "cases" && (
              <>
                <div className="adm-section-card">
                  <div className="adm-section-title"><TrendingUpIcon size={15} /> Case Studies Page Header</div>
                  <TextField
                    label="Page Hero Title"
                    value={content.cases?.pageHeroTitle || "CASE STUDIES & CAMPAIGN RESULTS"}
                    onChange={(v) => updateSectionField("cases", "pageHeroTitle", v)}
                  />
                  <TextField
                    label="Page Hero Subtitle"
                    value={content.cases?.pageHeroSub || ""}
                    onChange={(v) => updateSectionField("cases", "pageHeroSub", v)}
                    multiline
                  />
                </div>

                <div className="adm-section-card">
                  <div className="adm-section-title"><CheckCircleIcon size={15} /> Case Studies List</div>
                  {(content.cases?.caseStudiesList || []).map((cs, idx) => (
                    <div key={idx} className="adm-item-card">
                      <div style={{ fontWeight: 800, fontSize: 13, color: "#1e293b", marginBottom: 8 }}>Case #{cs.num} — {cs.brand}</div>
                      <div className="adm-grid-2">
                        <TextField
                          label="Brand / Client Name"
                          value={cs.brand}
                          onChange={(v) => {
                            const arr = [...(content.cases?.caseStudiesList || [])];
                            arr[idx] = { ...arr[idx], brand: v };
                            updateSectionField("cases", "caseStudiesList", arr);
                          }}
                        />
                        <TextField
                          label="Category"
                          value={cs.category}
                          onChange={(v) => {
                            const arr = [...(content.cases?.caseStudiesList || [])];
                            arr[idx] = { ...arr[idx], category: v };
                            updateSectionField("cases", "caseStudiesList", arr);
                          }}
                        />
                      </div>
                      <TextField
                        label="Tagline"
                        value={cs.tagline}
                        onChange={(v) => {
                          const arr = [...(content.cases?.caseStudiesList || [])];
                          arr[idx] = { ...arr[idx], tagline: v };
                          updateSectionField("cases", "caseStudiesList", arr);
                        }}
                      />
                      <TextField
                        label="Challenge"
                        value={cs.challenge}
                        onChange={(v) => {
                          const arr = [...(content.cases?.caseStudiesList || [])];
                          arr[idx] = { ...arr[idx], challenge: v };
                          updateSectionField("cases", "caseStudiesList", arr);
                        }}
                        multiline
                      />
                      <TextField
                        label="Solution"
                        value={cs.solution}
                        onChange={(v) => {
                          const arr = [...(content.cases?.caseStudiesList || [])];
                          arr[idx] = { ...arr[idx], solution: v };
                          updateSectionField("cases", "caseStudiesList", arr);
                        }}
                        multiline
                      />
                      <TextField
                        label="Results"
                        value={cs.result}
                        onChange={(v) => {
                          const arr = [...(content.cases?.caseStudiesList || [])];
                          arr[idx] = { ...arr[idx], result: v };
                          updateSectionField("cases", "caseStudiesList", arr);
                        }}
                        multiline
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ═══════════════════ 7. DASHBOARD & ANALYTICS ═══════════════════ */}
            {currentPage === "dashboard" && (
              <>
                <div className="adm-section-card">
                  <div className="adm-section-title"><BarChartIcon size={15} /> Account Dashboard KPIs (All 8 Cards)</div>
                  <div className="adm-grid-4">
                    {(content.dashboard?.kpis || []).map((kpi, idx) => (
                      <div key={idx} className="adm-item-card">
                        <TextField
                          label={kpi.label}
                          value={kpi.num}
                          onChange={(v) => {
                            const arr = [...(content.dashboard?.kpis || [])];
                            arr[idx] = { ...arr[idx], num: v };
                            updateSectionField("dashboard", "kpis", arr);
                          }}
                          placeholder="2M+"
                        />
                        <TextField
                          label="Change Text"
                          value={kpi.change}
                          onChange={(v) => {
                            const arr = [...(content.dashboard?.kpis || [])];
                            arr[idx] = { ...arr[idx], change: v };
                            updateSectionField("dashboard", "kpis", arr);
                          }}
                          placeholder="18% vs last quarter"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Campaign Table Overview */}
                <div className="adm-section-card">
                  <div className="adm-section-title"><BriefcaseIcon size={15} /> Campaign Overview Table Rows</div>
                  {(content.dashboard?.campaigns || []).map((camp, idx) => (
                    <div key={idx} className="adm-item-card">
                      <div className="adm-grid-3">
                        <TextField
                          label="Campaign Name"
                          value={camp.name}
                          onChange={(v) => {
                            const arr = [...(content.dashboard?.campaigns || [])];
                            arr[idx] = { ...arr[idx], name: v };
                            updateSectionField("dashboard", "campaigns", arr);
                          }}
                        />
                        <TextField
                          label="Platform / Format"
                          value={camp.platform}
                          onChange={(v) => {
                            const arr = [...(content.dashboard?.campaigns || [])];
                            arr[idx] = { ...arr[idx], platform: v };
                            updateSectionField("dashboard", "campaigns", arr);
                          }}
                        />
                        <TextField
                          label="Reach"
                          value={camp.reach}
                          onChange={(v) => {
                            const arr = [...(content.dashboard?.campaigns || [])];
                            arr[idx] = { ...arr[idx], reach: v };
                            updateSectionField("dashboard", "campaigns", arr);
                          }}
                        />
                      </div>
                      <div className="adm-grid-3">
                        <TextField
                          label="Ad Spend"
                          value={camp.spend}
                          onChange={(v) => {
                            const arr = [...(content.dashboard?.campaigns || [])];
                            arr[idx] = { ...arr[idx], spend: v };
                            updateSectionField("dashboard", "campaigns", arr);
                          }}
                        />
                        <TextField
                          label="ROAS / Performance"
                          value={camp.roas}
                          onChange={(v) => {
                            const arr = [...(content.dashboard?.campaigns || [])];
                            arr[idx] = { ...arr[idx], roas: v };
                            updateSectionField("dashboard", "campaigns", arr);
                          }}
                        />
                        <TextField
                          label="Status (completed / active)"
                          value={camp.status}
                          onChange={(v) => {
                            const arr = [...(content.dashboard?.campaigns || [])];
                            arr[idx] = { ...arr[idx], status: v };
                            updateSectionField("dashboard", "campaigns", arr);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ═══════════════════ 8. GALLERY MANAGER ═══════════════════ */}
            {currentPage === "gallery" && (
              <div className="adm-section-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <div className="adm-section-title" style={{ margin: 0 }}><GridIcon size={15} /> Interactive Gallery Manager</div>
                  <button
                    type="button"
                    onClick={() => {
                      const newId = `item_${Date.now()}`;
                      const newItem: GalleryItem = {
                        id: newId,
                        type: "photo",
                        src: "/photos/profile.jpg",
                        poster: "/photos/profile.jpg",
                        title: "New Gallery Item",
                        category: "portrait",
                        caption: "Caption description for this photo or video.",
                        tag: "Featured",
                      };
                      updateSectionField("gallery" as any, "", [...(content.gallery || []), newItem]);
                    }}
                    style={{ background: "#3b82f6", color: "#fff", border: "none", borderRadius: 6, padding: "6px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}
                  >
                    <PlusIcon size={14} /> Add Gallery Item
                  </button>
                </div>

                <div className="adm-grid-2">
                  {(content.gallery || []).map((item, idx) => (
                    <div key={item.id || idx} className="adm-item-card">
                      <div className="adm-item-header">
                        <span style={{ fontWeight: 700, fontSize: 12, color: "#3b82f6" }}>#{idx + 1} — {item.type.toUpperCase()}</span>
                        <button
                          type="button"
                          onClick={() => {
                            const arr = (content.gallery || []).filter((_, i) => i !== idx);
                            updateSectionField("gallery" as any, "", arr);
                          }}
                          style={{ background: "transparent", border: "none", color: "#ef4444", cursor: "pointer" }}
                        >
                          <TrashIcon size={14} />
                        </button>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 10, marginBottom: 10 }}>
                        <div style={{ width: 80, height: 80, borderRadius: 6, overflow: "hidden", background: "#e2e8f0" }}>
                          <img src={item.poster || item.src} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <div>
                          <TextField
                            label="Title"
                            value={item.title}
                            onChange={(v) => {
                              const arr = [...(content.gallery || [])];
                              arr[idx] = { ...arr[idx], title: v };
                              updateSectionField("gallery" as any, "", arr);
                            }}
                          />
                        </div>
                      </div>

                      <div className="adm-grid-2">
                        <TextField
                          label="Media URL / Path"
                          value={item.src}
                          onChange={(v) => {
                            const arr = [...(content.gallery || [])];
                            arr[idx] = { ...arr[idx], src: v };
                            updateSectionField("gallery" as any, "", arr);
                          }}
                          placeholder="/photos/filename.jpg"
                        />
                        <TextField
                          label="Category (portrait/video/ugc/lifestyle/devotional)"
                          value={item.category}
                          onChange={(v) => {
                            const arr = [...(content.gallery || [])];
                            arr[idx] = { ...arr[idx], category: v as any };
                            updateSectionField("gallery" as any, "", arr);
                          }}
                        />
                      </div>

                      <TextField
                        label="Caption"
                        value={item.caption}
                        onChange={(v) => {
                          const arr = [...(content.gallery || [])];
                          arr[idx] = { ...arr[idx], caption: v };
                          updateSectionField("gallery" as any, "", arr);
                        }}
                        multiline
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ═══════════════════ 9. ALL MEDIA SLOTS ═══════════════════ */}
            {currentPage === "photos" && (
              <div className="adm-section-card">
                <div className="adm-section-title"><ImageIcon size={15} /> All 24 Media &amp; Photo Slots</div>
                <p style={{ fontSize: 12, color: "#64748b", marginBottom: 16 }}>
                  Every slot corresponds to a specific frame on the live site. Click or tap &quot;Replace Photo&quot; on any card to upload a new image directly to Google Drive / MongoDB.
                </p>
                <div className="adm-grid-photos">
                  {Object.keys(PHOTO_SLOT_DESCRIPTIONS).map((slotId) => (
                    <PhotoSlotCard key={slotId} slotId={slotId} />
                  ))}
                </div>
              </div>
            )}

            {/* ═══════════════════ 10. Q&A / FAQs ═══════════════════ */}
            {currentPage === "qna" && (
              <div className="adm-section-card">
                <div className="adm-section-title"><HelpCircleIcon size={15} /> Q&amp;A / Structured SEO FAQs</div>
                {(content.faqs || []).map((faq, idx) => (
                  <div key={idx} className="adm-item-card">
                    <TextField
                      label={`Question #${idx + 1}`}
                      value={faq.question}
                      onChange={(v) => {
                        const arr = [...(content.faqs || [])];
                        arr[idx] = { ...arr[idx], question: v };
                        updateSectionField("faqs" as any, "", arr);
                      }}
                    />
                    <TextField
                      label="Answer"
                      value={faq.answer}
                      onChange={(v) => {
                        const arr = [...(content.faqs || [])];
                        arr[idx] = { ...arr[idx], answer: v };
                        updateSectionField("faqs" as any, "", arr);
                      }}
                      multiline
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {/* ── MOBILE BOTTOM NAVIGATION ── */}
      <nav className="adm-mobile-nav">
        {PAGES.map((p) => (
          <button
            key={p.id}
            onClick={() => setCurrentPage(p.id)}
            className={`adm-mobile-tab-btn${currentPage === p.id ? " active" : ""}`}
          >
            <span>{p.icon}</span>
            <span>{p.label}</span>
          </button>
        ))}
      </nav>

      {/* ── FLOATING TOAST NOTIFICATION ── */}
      {toast && (
        <div style={{ position: "fixed", bottom: 76, right: 16, background: toast.type === "error" ? "#ef4444" : "#0f172a", color: "#fff", padding: "10px 16px", borderRadius: 8, fontSize: 12.5, fontWeight: 700, boxShadow: "0 8px 24px rgba(0,0,0,0.3)", zIndex: 999999, display: "flex", alignItems: "center", gap: 8 }}>
          {toast.type === "error" ? <AlertTriangleIcon size={14} /> : <CheckCircleIcon size={14} />}
          {toast.msg}
        </div>
      )}
    </div>
  );
}
