"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { SiteContent } from "@/lib/contentStore";

// ── TYPES & INTERFACES ───────────────────────────────────────────────────────
type PageId = "home" | "about" | "services" | "cases" | "dashboard" | "contact" | "hire" | "qna";
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
  databaseName: string;
}

// ── DEFAULT FALLBACK CONTENT ────────────────────────────────────────────────
const DEFAULT_CONTENT: SiteContent = {
  hero: {
    heroTitle: "Apoorva Kaushal",
    heroTagline: "Authentic storytelling that connects brands with audiences through relatable experiences",
    heroSignature: "Appu",
    domain: "apoorva.hmorix.in",
  },
  homepage: {
    whoAmIHeading: "WHO AM I",
    whoAmIBio1: "I'm Apoorva, a Hathras & Uttar Pradesh–based Social Media Influencer and Content Creator. I help brands grow through cohesive visual identity, creative content, and high-performing advertising campaigns.",
    whoAmIBio2: "I've elevated the online presence of brands across India, helping them take control of their digital narrative with authentic Hindi comedy, parody, informative videos, and Krishna spiritual content.",
    statBrands: "5+",
    statReach: "2M+",
    statFollowers: "5K+",
    statExp: "3YRS+",
  },
  about: {
    pageHeroTitle: "APOORVA KAUSHAL",
    pageHeroSub: "Social Media Creator & Content Creator · Hathras, Uttar Pradesh, India",
    storyHeading: "FROM HATHRAS\nTO THE DIGITAL WORLD",
    storyBio1: "I'm Apoorva Kaushal — born and raised in Hathras, Uttar Pradesh, a historic cultural hub in the Braj/Agra region. My journey into social media strategy began with a clear conviction: audiences don't just watch content; they connect with authenticity, cultural nuance, and relatable humor.",
    storyBio2: "What started as creative sketches and storytelling has evolved into a full-fledged multi-channel digital footprint reaching 2M+ all-time reach, 400k+ YouTube views, and over 5K+ combined followers across Instagram, YouTube, and Facebook.",
    storyBio3: "As a social media manager and content creator, I blend creative UGC video production with data-driven Meta ad campaigns, having collaborated with 5+ brands across fashion, beauty, lifestyle, and local retail.",
  },
  services: {
    starterPrice: "₹15,000",
    starterPeriod: "month",
    starterDesc: "Ideal for emerging brands and personal accounts starting their content journey with curated visuals and community growth.",
    growthPrice: "₹35,000",
    growthPeriod: "month",
    growthDesc: "Comprehensive social strategy with weekly UGC Reels, engaging copy, and optimized Meta ad management.",
    premiumPrice: "₹65,000",
    premiumPeriod: "month",
    premiumDesc: "Full-funnel digital branding, high-frequency UGC production, scriptwriting, dedicated Meta ad scaling, and weekly analytics.",
  },
  contact: {
    whatsappNumber: "919368153189",
    email: "apoorva@apoorvakaushal.com",
    instagramHandle: "@apoorva__kaushal",
    instagramUrl: "https://instagram.com/apoorva__kaushal",
    youtubeHandle: "@_apoorva7__",
    youtubeUrl: "https://youtube.com/@_apoorva7__",
    twitterUrl: "https://twitter.com/",
    facebookUrl: "https://facebook.com/",
    location: "Hathras, Uttar Pradesh, India",
    postalCode: "204101",
  },
  photos: {
    profile: "/photos/profile.jpg",
    whoami: "/photos/IMG-20260205-WA0035.jpg",
    qualifications: "/photos/IMG-20250107-WA0012.jpg",
    work1: "/photos/IMG-20241220-WA0002.jpg",
    work2: "/photos/IMG-20260202-WA0003.jpg",
    work3: "/photos/Screenshot_2025-11-15-14-35-32-55.jpg",
    work4: "/photos/IMG-20260106-WA0002.jpg",
    work6: "/photos/IMG-20260205-WA0036.jpg",
    insta1: "/photos/IMG-20260205-WA0035.jpg",
    insta2: "/photos/IMG-20240205-WA0003.jpg",
    insta3: "/photos/IMG-20260106-WA0010.jpg",
    insta4: "/photos/IMG-20260202-WA0003.jpg",
    insta5: "/photos/IMG-20260108-WA0003.jpg",
    insta6: "/photos/IMG_20260131_225741.jpg",
    insta7: "/photos/IMG-20260608-WA0016.jpg",
    insta8: "/photos/IMG-20260212-WA0000.jpg",
    phone1: "/photos/profile.jpg",
    phone2: "/photos/IMG-20260205-WA0035.jpg",
    phone3: "/photos/Screenshot_2026-01-16-12-45-41-89.jpg",
    add1: "/photos/IMG-20260202-WA0003.jpg",
    add2: "/photos/IMG-20260212-WA0000.jpg",
    add3: "/photos/IMG-20260106-WA0009.jpg",
    add4: "/photos/IMG-20260608-WA0016.jpg",
    storyPhoto: "/photos/IMG-20260205-WA0035.jpg",
  },
  videos: {},
};

export default function HmorixAdminPage() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [viewMode, setViewMode] = useState<ViewMode>("editor");

  // Content state
  const [draftContent, setDraftContent] = useState<SiteContent>(DEFAULT_CONTENT);
  const [publishedContent, setPublishedContent] = useState<SiteContent>(DEFAULT_CONTENT);
  const [revisions, setRevisions] = useState<Revision[]>([]);
  const [selectedRevision, setSelectedRevision] = useState<Revision | null>(null);

  // Status & loading
  const [status, setStatus] = useState<ServerStatus>({
    mongoConnected: false,
    googleDriveConnected: false,
    databaseName: "apoorva_kaushal",
  });
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [uploadingSlot, setUploadingSlot] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" | "info" } | null>(null);
  const [showConfigModal, setShowConfigModal] = useState(false);

  // File upload input ref
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentUploadSlot = useRef<string>("profile");

  // ── LOAD INITIAL CONTENT ──────────────────────────────────────────────────
  const fetchContent = useCallback(async () => {
    try {
      const res = await fetch("/api/hmorix/content?mode=draft&history=true");
      if (res.ok) {
        const json = await res.json();
        if (json.draft) setDraftContent((prev) => ({ ...prev, ...json.draft, photos: { ...prev.photos, ...(json.draft.photos || {}) } }));
        if (json.published) setPublishedContent((prev) => ({ ...prev, ...json.published, photos: { ...prev.photos, ...(json.published.photos || {}) } }));
        if (json.revisions) setRevisions(json.revisions);
        if (json.status) setStatus(json.status);
      }
    } catch (err) {
      console.warn("Could not fetch HMoriX content:", err);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  // Keyboard shortcut: Ctrl/Cmd + S to save draft
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        handleSaveDraft();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const showNotification = (msg: string, type: "success" | "error" | "info" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  // ── UPDATE FIELD HELPER ───────────────────────────────────────────────────
  const updateField = (section: keyof SiteContent, field: string, value: any) => {
    setDraftContent((prev) => {
      const sectionObj = (prev[section] as any) || {};
      return {
        ...prev,
        [section]: {
          ...sectionObj,
          [field]: value,
        },
      };
    });
    setHasUnsavedChanges(true);
  };

  const updatePhotoUrl = (slotId: string, url: string) => {
    setDraftContent((prev) => ({
      ...prev,
      photos: {
        ...(prev.photos || {}),
        [slotId]: url,
      },
    }));
    setHasUnsavedChanges(true);
  };

  // ── SAVE DRAFT ────────────────────────────────────────────────────────────
  const handleSaveDraft = async () => {
    setIsSaving(true);
    try {
      const res = await fetch("/api/hmorix/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "save_draft", data: draftContent }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setHasUnsavedChanges(false);
        showNotification("✓ Draft saved to MongoDB Atlas successfully!");
      } else {
        throw new Error(json.message || "Save failed");
      }
    } catch (err: any) {
      showNotification(`✗ Save draft failed: ${err.message}`, "error");
    } finally {
      setIsSaving(false);
    }
  };

  // ── PUBLISH LIVE ──────────────────────────────────────────────────────────
  const handlePublish = async () => {
    if (!confirm("Are you sure you want to PUBLISH all changes to the live website? Public visitors will see this immediately.")) {
      return;
    }
    setIsPublishing(true);
    try {
      const res = await fetch("/api/hmorix/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "publish", data: draftContent }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setPublishedContent(draftContent);
        setHasUnsavedChanges(false);
        showNotification(`🎉 Version ${json.version || "Live"} Published successfully! Website is updated!`);
        fetchContent();
      } else {
        throw new Error(json.message || "Publish failed");
      }
    } catch (err: any) {
      showNotification(`✗ Publish failed: ${err.message}`, "error");
    } finally {
      setIsPublishing(false);
    }
  };

  // ── REVERT DRAFT TO PUBLISHED ─────────────────────────────────────────────
  const handleRevert = () => {
    if (confirm("Discard all unpublished draft changes and revert to current published website?")) {
      setDraftContent(publishedContent);
      setHasUnsavedChanges(false);
      showNotification("↩ Reverted to published version.");
    }
  };

  // ── RESTORE REVISION ──────────────────────────────────────────────────────
  const handleRestoreRevision = async (rev: Revision) => {
    if (confirm(`Restore Version ${rev.version} published on ${new Date(rev.publishedAt).toLocaleString()}?`)) {
      try {
        const res = await fetch("/api/hmorix/content", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "restore", revisionId: rev.revisionId }),
        });
        const json = await res.json();
        if (res.ok && json.success) {
          setDraftContent(rev.data);
          setPublishedContent(rev.data);
          setSelectedRevision(null);
          setViewMode("editor");
          showNotification(`✓ Restored Version ${rev.version} successfully!`);
          fetchContent();
        }
      } catch (err: any) {
        showNotification(`✗ Restore failed: ${err.message}`, "error");
      }
    }
  };

  // ── TRIGGER FILE UPLOAD ───────────────────────────────────────────────────
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

      const res = await fetch("/api/hmorix/upload", {
        method: "POST",
        body: form,
      });

      const json = await res.json();
      if (res.ok && json.url) {
        updatePhotoUrl(slotId, json.url);
        showNotification(`✓ Uploaded "${slotId}" via ${json.provider}!`);
      } else {
        throw new Error(json.error || "Upload failed");
      }
    } catch (err: any) {
      showNotification(`✗ Upload failed: ${err.message}`, "error");
    } finally {
      setUploadingSlot(null);
    }
  };

  // Active working content (Draft in editor, Published in preview, or Selected History version)
  const activeContent =
    viewMode === "preview"
      ? publishedContent
      : viewMode === "history" && selectedRevision
      ? selectedRevision.data
      : draftContent;

  const isEditing = viewMode === "editor";

  // ── INLINE EDITABLE TEXT WRAPPER ──────────────────────────────────────────
  const EditableText = ({
    section,
    field,
    value,
    multiline = false,
    style = {},
    className = "",
    tag = "div",
  }: {
    section: keyof SiteContent;
    field: string;
    value: string;
    multiline?: boolean;
    style?: React.CSSProperties;
    className?: string;
    tag?: string;
  }) => {
    if (!isEditing) {
      const TagName = tag as any;
      return <TagName className={className} style={style}>{value}</TagName>;
    }

    if (multiline) {
      return (
        <textarea
          value={value || ""}
          onChange={(e) => updateField(section, field, e.target.value)}
          className={`hmorix-editable-input ${className}`}
          style={{
            ...style,
            width: "100%",
            background: "rgba(255,255,255,0.85)",
            border: "1.5px dashed #3b82f6",
            borderRadius: 6,
            padding: "8px 10px",
            fontFamily: "inherit",
            resize: "vertical",
            outline: "none",
          }}
          title={`Edit ${section}.${field}`}
        />
      );
    }

    return (
      <input
        type="text"
        value={value || ""}
        onChange={(e) => updateField(section, field, e.target.value)}
        className={`hmorix-editable-input ${className}`}
        style={{
          ...style,
          background: "rgba(255,255,255,0.85)",
          border: "1.5px dashed #3b82f6",
          borderRadius: 6,
          padding: "4px 8px",
          fontFamily: "inherit",
          outline: "none",
        }}
        title={`Edit ${section}.${field}`}
      />
    );
  };

  // ── INLINE EDITABLE PHOTO WRAPPER ─────────────────────────────────────────
  const EditablePhoto = ({
    slotId,
    fallbackUrl,
    alt = "Photo",
    style = {},
    className = "",
  }: {
    slotId: string;
    fallbackUrl: string;
    alt?: string;
    style?: React.CSSProperties;
    className?: string;
  }) => {
    const src = activeContent.photos?.[slotId] || fallbackUrl;
    const isThisUploading = uploadingSlot === slotId;

    return (
      <div
        className={`hmorix-photo-container ${className}`}
        style={{
          position: "relative",
          display: "inline-block",
          overflow: "hidden",
          ...style,
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />

        {isEditing && (
          <div
            onClick={() => triggerUpload(slotId)}
            style={{
              position: "absolute",
              inset: 0,
              background: isThisUploading ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.45)",
              opacity: isThisUploading ? 1 : 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
              transition: "opacity 0.2s ease",
              gap: 6,
              padding: 10,
              textAlign: "center",
              zIndex: 10,
            }}
            className="hmorix-photo-overlay"
          >
            {isThisUploading ? (
              <>
                <div style={{ animation: "spin 1s linear infinite", width: 24, height: 24, border: "3px solid #fff", borderTopColor: "transparent", borderRadius: "50%" }} />
                <span style={{ fontSize: 11, fontWeight: 700 }}>Uploading to Cloud...</span>
              </>
            ) : (
              <>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
                <span style={{ fontSize: 12, fontWeight: 700, textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>Replace Photo</span>
                <span style={{ fontSize: 10, opacity: 0.85 }}>Google Drive / Cloud</span>
              </>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="hmorix-admin-root" style={{ minHeight: "100vh", background: "#f1f5f9", color: "#0f172a", fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Hidden file uploader input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelected}
        accept="image/*,video/*"
        style={{ display: "none" }}
      />

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 50% { opacity: 0.5; } }
        .hmorix-photo-container:hover .hmorix-photo-overlay { opacity: 1 !important; }
        .hmorix-editable-input:focus { border-color: #2563eb !important; background: #fff !important; box-shadow: 0 0 0 3px rgba(37,99,235,0.2) !important; }
        * { box-sizing: border-box; }
      `}</style>

      {/* ── TOP CONTROL BAR ────────────────────────────────────────────────── */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 9999,
        background: "#0f172a",
        color: "#fff",
        borderBottom: "1px solid #1e293b",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}>
        {/* Left: Brand & Page Switcher */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #3b82f6, #ec4899)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: 16 }}>
              H
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.5 }}>HMORIX VISUAL STUDIO</div>
              <div style={{ fontSize: 10, color: "#94a3b8" }}>Live Website In-Context CMS</div>
            </div>
          </div>

          {/* Page Tabs */}
          <div style={{ display: "flex", background: "#1e293b", borderRadius: 8, padding: 3, gap: 2 }}>
            {[
              { id: "home", label: "🏠 Home" },
              { id: "about", label: "👤 About" },
              { id: "services", label: "⭐ Services" },
              { id: "cases", label: "📈 Case Studies" },
              { id: "dashboard", label: "📊 Dashboard" },
              { id: "contact", label: "✉️ Contact" },
              { id: "hire", label: "💼 Hire Me" },
              { id: "qna", label: "❓ Q&A" },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setCurrentPage(p.id as PageId)}
                style={{
                  background: currentPage === p.id ? "#3b82f6" : "transparent",
                  color: currentPage === p.id ? "#fff" : "#94a3b8",
                  border: "none",
                  borderRadius: 6,
                  padding: "5px 10px",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Center: Mode Switcher */}
        <div style={{ display: "flex", background: "#1e293b", borderRadius: 8, padding: 3, gap: 2 }}>
          <button
            onClick={() => { setViewMode("editor"); setSelectedRevision(null); }}
            style={{
              background: viewMode === "editor" ? "#22c55e" : "transparent",
              color: viewMode === "editor" ? "#0f172a" : "#94a3b8",
              border: "none",
              borderRadius: 6,
              padding: "6px 12px",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            ✏️ Live Editor (Draft) {hasUnsavedChanges && <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#ef4444" }} />}
          </button>
          <button
            onClick={() => { setViewMode("preview"); setSelectedRevision(null); }}
            style={{
              background: viewMode === "preview" ? "#3b82f6" : "transparent",
              color: viewMode === "preview" ? "#fff" : "#94a3b8",
              border: "none",
              borderRadius: 6,
              padding: "6px 12px",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            👁️ Published Preview
          </button>
          <button
            onClick={() => setViewMode("history")}
            style={{
              background: viewMode === "history" ? "#8b5cf6" : "transparent",
              color: viewMode === "history" ? "#fff" : "#94a3b8",
              border: "none",
              borderRadius: 6,
              padding: "6px 12px",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            🕒 Version History ({revisions.length})
          </button>
        </div>

        {/* Right: Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Cloud Database Status */}
          <button
            onClick={() => setShowConfigModal(true)}
            style={{
              background: status.mongoConnected ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)",
              color: status.mongoConnected ? "#4ade80" : "#f87171",
              border: `1px solid ${status.mongoConnected ? "#22c55e" : "#ef4444"}`,
              borderRadius: 6,
              padding: "5px 10px",
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: status.mongoConnected ? "#22c55e" : "#ef4444" }} />
            {status.mongoConnected ? "Atlas Connected" : "Cloud Setup"}
          </button>

          {isEditing && (
            <>
              <button
                onClick={handleSaveDraft}
                disabled={isSaving}
                style={{
                  background: "#334155",
                  color: "#fff",
                  border: "1px solid #475569",
                  borderRadius: 6,
                  padding: "7px 14px",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: isSaving ? "not-allowed" : "pointer",
                }}
              >
                {isSaving ? "Saving..." : "💾 Save Draft"}
              </button>

              <button
                onClick={handlePublish}
                disabled={isPublishing}
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "7px 18px",
                  fontSize: 12,
                  fontWeight: 800,
                  cursor: isPublishing ? "not-allowed" : "pointer",
                  boxShadow: "0 2px 10px rgba(59,130,246,0.4)",
                }}
              >
                {isPublishing ? "Publishing..." : "🚀 Publish Live"}
              </button>

              {hasUnsavedChanges && (
                <button
                  onClick={handleRevert}
                  style={{
                    background: "transparent",
                    color: "#94a3b8",
                    border: "none",
                    fontSize: 11,
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Discard
                </button>
              )}
            </>
          )}

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#1e293b",
              color: "#94a3b8",
              border: "1px solid #334155",
              borderRadius: 6,
              padding: "7px 12px",
              fontSize: 12,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Live Site ↗
          </a>
        </div>
      </header>

      {/* ── UNPUBLISHED DRAFT BANNER ────────────────────────────────────────── */}
      {viewMode === "editor" && hasUnsavedChanges && (
        <div style={{ background: "#fef3c7", borderBottom: "1px solid #fde68a", color: "#92400e", padding: "8px 20px", fontSize: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>⚠️ <strong>Unsaved Draft Changes:</strong> You are currently working on a live draft. Click &quot;Save Draft&quot; to preserve work, or &quot;Publish Live&quot; to push updates to the live site.</span>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={handleSaveDraft} style={{ background: "#d97706", color: "#fff", border: "none", borderRadius: 4, padding: "3px 10px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Save Draft</button>
            <button onClick={handlePublish} style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 4, padding: "3px 10px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Publish Now</button>
          </div>
        </div>
      )}

      {/* ── VERSION HISTORY VIEW ───────────────────────────────────────────── */}
      {viewMode === "history" && (
        <div style={{ maxWidth: 1000, margin: "30px auto", padding: 20 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>🕒 Published Version Snapshots</h2>
          <p style={{ fontSize: 14, color: "#64748b", marginBottom: 20 }}>
            Every time you click &quot;Publish Live&quot;, an immutable backup snapshot is archived in MongoDB Atlas. Click &quot;Preview&quot; to inspect an old version or &quot;Restore&quot; to roll back the entire website.
          </p>

          {revisions.length === 0 ? (
            <div style={{ background: "#fff", borderRadius: 12, padding: 40, textAlign: "center", color: "#64748b" }}>
              No published snapshots yet. Publish your first version using the top &quot;Publish Live&quot; button!
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {revisions.map((rev) => (
                <div
                  key={rev.revisionId}
                  style={{
                    background: "#fff",
                    border: `1.5px solid ${selectedRevision?.revisionId === rev.revisionId ? "#3b82f6" : "#e2e8f0"}`,
                    borderRadius: 10,
                    padding: 16,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ background: "#3b82f6", color: "#fff", padding: "2px 8px", borderRadius: 12, fontSize: 11, fontWeight: 800 }}>v{rev.version}</span>
                      <strong style={{ fontSize: 15 }}>{rev.note || `Version ${rev.version}`}</strong>
                    </div>
                    <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
                      Published on {new Date(rev.publishedAt).toLocaleString()} ({rev.revisionId})
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      onClick={() => setSelectedRevision(rev)}
                      style={{
                        background: selectedRevision?.revisionId === rev.revisionId ? "#3b82f6" : "#f1f5f9",
                        color: selectedRevision?.revisionId === rev.revisionId ? "#fff" : "#334155",
                        border: "none",
                        borderRadius: 6,
                        padding: "6px 12px",
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      {selectedRevision?.revisionId === rev.revisionId ? "Viewing Preview" : "Preview Version"}
                    </button>
                    <button
                      onClick={() => handleRestoreRevision(rev)}
                      style={{
                        background: "#ef4444",
                        color: "#fff",
                        border: "none",
                        borderRadius: 6,
                        padding: "6px 12px",
                        fontSize: 12,
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      ↩ Restore This
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── LIVE IN-CONTEXT VISUAL PAGE PREVIEW & EDITOR ─────────────────────── */}
      <main style={{ maxWidth: 1200, margin: "24px auto", padding: "0 20px 80px" }}>
        {/* Helper bar in editor mode */}
        {isEditing && (
          <div style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)", color: "#fff", borderRadius: 10, padding: "12px 18px", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 18 }}>💡</span>
              <div style={{ fontSize: 13 }}>
                <strong>Interactive In-Context Editor:</strong> Click on any blue dashed text to edit directly. Hover over any photo to replace with Google Drive / Cloud upload.
              </div>
            </div>
            <div style={{ fontSize: 11, color: "#94a3b8" }}>
              Press <strong>Ctrl+S</strong> / <strong>Cmd+S</strong> to save
            </div>
          </div>
        )}

        {/* ── PAGE 1: HOME PAGE ──────────────────────────────────────────────── */}
        {currentPage === "home" && (
          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            {/* Hero Section */}
            <div style={{ padding: "50px 40px", background: "linear-gradient(135deg, #152049 0%, #0d1530 100%)", color: "#fff", display: "grid", gridTemplateColumns: "1fr 340px", gap: 40, alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 12, letterSpacing: 2, color: "#93c5fd", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
                  Creator &amp; Strategist
                </div>
                <EditableText
                  section="hero"
                  field="heroTitle"
                  value={activeContent.hero.heroTitle}
                  style={{ fontSize: 44, fontWeight: 900, color: "#fff", marginBottom: 14 }}
                />
                <EditableText
                  section="hero"
                  field="heroTagline"
                  value={activeContent.hero.heroTagline}
                  multiline
                  style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.6, marginBottom: 20 }}
                />
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "#94a3b8" }}>Signature:</span>
                  <EditableText
                    section="hero"
                    field="heroSignature"
                    value={activeContent.hero.heroSignature}
                    style={{ fontSize: 20, color: "#f59e0b", fontFamily: "cursive" }}
                  />
                </div>
              </div>

              {/* Hero Portrait Photo */}
              <div style={{ textAlign: "center" }}>
                <EditablePhoto
                  slotId="profile"
                  fallbackUrl="/photos/profile.jpg"
                  style={{ width: 280, height: 360, borderRadius: 140, border: "4px solid rgba(255,255,255,0.2)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                />
                <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 8 }}>Hero Oval Portrait Photo</div>
              </div>
            </div>

            {/* Who Am I Section */}
            <div style={{ padding: "40px", borderBottom: "1px solid #f1f5f9" }}>
              <EditableText
                section="homepage"
                field="whoAmIHeading"
                value={activeContent.homepage.whoAmIHeading}
                style={{ fontSize: 22, fontWeight: 800, color: "#7a1421", marginBottom: 14 }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 30, alignItems: "center" }}>
                <div>
                  <EditableText
                    section="homepage"
                    field="whoAmIBio1"
                    value={activeContent.homepage.whoAmIBio1}
                    multiline
                    style={{ fontSize: 14, color: "#334155", lineHeight: 1.7, marginBottom: 14 }}
                  />
                  <EditableText
                    section="homepage"
                    field="whoAmIBio2"
                    value={activeContent.homepage.whoAmIBio2}
                    multiline
                    style={{ fontSize: 14, color: "#334155", lineHeight: 1.7 }}
                  />
                </div>
                <div>
                  <EditablePhoto
                    slotId="whoami"
                    fallbackUrl="/photos/IMG-20260205-WA0035.jpg"
                    style={{ width: "100%", height: 260, borderRadius: 12 }}
                  />
                  <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 6, textAlign: "center" }}>Who Am I Photo</div>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div style={{ padding: "30px 40px", background: "#f8fafc", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, textAlign: "center" }}>
              {[
                { field: "statBrands", label: "Brands Collaborated" },
                { field: "statReach", label: "Organic Reach" },
                { field: "statFollowers", label: "Audience Followers" },
                { field: "statExp", label: "Content Experience" },
              ].map((s) => (
                <div key={s.field} style={{ background: "#fff", padding: 18, borderRadius: 10, border: "1px solid #e2e8f0" }}>
                  <EditableText
                    section="homepage"
                    field={s.field}
                    value={(activeContent.homepage as any)[s.field]}
                    style={{ fontSize: 28, fontWeight: 900, color: "#7a1421" }}
                  />
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 4, fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Work & Portfolio Gallery Grid */}
            <div style={{ padding: "40px" }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", marginBottom: 20 }}>📸 Portfolio Photos &amp; Work Cards</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
                {[
                  { slot: "work1", title: "UGC Video Reel" },
                  { slot: "work2", title: "Branding & Aesthetic" },
                  { slot: "work3", title: "SEO Strategy" },
                  { slot: "work4", title: "Communication" },
                  { slot: "add1", title: "Sunglasses Campaign" },
                  { slot: "add2", title: "Lifestyle UGC" },
                  { slot: "add3", title: "Festive Ethnic Look" },
                  { slot: "add4", title: "Radha Raman Series" },
                ].map((item) => (
                  <div key={item.slot} style={{ background: "#f8fafc", borderRadius: 10, padding: 10, border: "1px solid #e2e8f0" }}>
                    <EditablePhoto
                      slotId={item.slot}
                      fallbackUrl={`/photos/${item.slot}.jpg`}
                      style={{ width: "100%", height: 180, borderRadius: 8 }}
                    />
                    <div style={{ fontSize: 12, fontWeight: 700, marginTop: 8, color: "#334155" }}>{item.title}</div>
                    <div style={{ fontSize: 10, color: "#94a3b8" }}>Slot ID: {item.slot}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── PAGE 2: ABOUT PAGE ─────────────────────────────────────────────── */}
        {currentPage === "about" && (
          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 40, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <div style={{ marginBottom: 30 }}>
              <div style={{ fontSize: 12, color: "#7a1421", fontWeight: 800, letterSpacing: 1.5, marginBottom: 6 }}>ABOUT APOORVA</div>
              <EditableText
                section="about"
                field="pageHeroTitle"
                value={activeContent.about.pageHeroTitle}
                style={{ fontSize: 36, fontWeight: 900, color: "#0f172a", marginBottom: 8 }}
              />
              <EditableText
                section="about"
                field="pageHeroSub"
                value={activeContent.about.pageHeroSub}
                style={{ fontSize: 15, color: "#64748b" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 36 }}>
              <div>
                <EditableText
                  section="about"
                  field="storyHeading"
                  value={activeContent.about.storyHeading}
                  style={{ fontSize: 22, fontWeight: 800, color: "#152049", marginBottom: 14 }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <EditableText
                    section="about"
                    field="storyBio1"
                    value={activeContent.about.storyBio1}
                    multiline
                    style={{ fontSize: 14, color: "#334155", lineHeight: 1.7 }}
                  />
                  <EditableText
                    section="about"
                    field="storyBio2"
                    value={activeContent.about.storyBio2}
                    multiline
                    style={{ fontSize: 14, color: "#334155", lineHeight: 1.7 }}
                  />
                  <EditableText
                    section="about"
                    field="storyBio3"
                    value={activeContent.about.storyBio3}
                    multiline
                    style={{ fontSize: 14, color: "#334155", lineHeight: 1.7 }}
                  />
                </div>
              </div>

              <div>
                <EditablePhoto
                  slotId="storyPhoto"
                  fallbackUrl="/photos/IMG-20260205-WA0035.jpg"
                  style={{ width: "100%", height: 380, borderRadius: 12 }}
                />
                <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 6, textAlign: "center" }}>About Page Story Portrait</div>
              </div>
            </div>
          </div>
        )}

        {/* ── PAGE 3: SERVICES & PRICING ─────────────────────────────────────── */}
        {currentPage === "services" && (
          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 40, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: "#0f172a", marginBottom: 20 }}>⭐ Services &amp; Packages Pricing</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {[
                { name: "Starter Tier", priceField: "starterPrice", descField: "starterDesc" },
                { name: "Growth Tier", priceField: "growthPrice", descField: "growthDesc" },
                { name: "Premium Tier", priceField: "premiumPrice", descField: "premiumDesc" },
              ].map((tier) => (
                <div key={tier.name} style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#7a1421", textTransform: "uppercase" }}>{tier.name}</div>
                  <EditableText
                    section="services"
                    field={tier.priceField}
                    value={(activeContent.services as any)[tier.priceField]}
                    style={{ fontSize: 32, fontWeight: 900, color: "#0f172a", margin: "10px 0" }}
                  />
                  <EditableText
                    section="services"
                    field={tier.descField}
                    value={(activeContent.services as any)[tier.descField]}
                    multiline
                    style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── PAGE 4: CONTACT & DETAILS ──────────────────────────────────────── */}
        {currentPage === "contact" && (
          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 40, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: "#0f172a", marginBottom: 20 }}>✉️ Contact Channels &amp; Social Media</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                { label: "WhatsApp Number (with country code)", field: "whatsappNumber" },
                { label: "Official Email Address", field: "email" },
                { label: "Instagram Handle", field: "instagramHandle" },
                { label: "YouTube Handle", field: "youtubeHandle" },
                { label: "Location / City", field: "location" },
                { label: "Postal Code", field: "postalCode" },
              ].map((c) => (
                <div key={c.field} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: 14 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", marginBottom: 6 }}>{c.label}</div>
                  <EditableText
                    section="contact"
                    field={c.field}
                    value={(activeContent.contact as any)[c.field]}
                    style={{ fontSize: 15, fontWeight: 600, color: "#0f172a" }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── PAGE 5: CASES, DASHBOARD, HIRE, QNA ────────────────────────────── */}
        {["cases", "dashboard", "hire", "qna"].includes(currentPage) && (
          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 40, textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>✨</div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 8 }}>
              {currentPage === "cases" ? "Case Studies & Instagram Feed" : currentPage === "dashboard" ? "Dashboard Analytics & Platform Metrics" : currentPage === "hire" ? "Hire Me Page" : "Q&A / FAQ Page"}
            </h2>
            <p style={{ fontSize: 14, color: "#64748b", maxWidth: 600, margin: "0 auto 20px" }}>
              All social stats, phone mockups, contact channels, and portfolio photos are connected to your MongoDB Atlas cloud document.
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <a href={`/${currentPage === "cases" ? "case-studies" : currentPage}`} target="_blank" rel="noopener noreferrer" style={{ background: "#3b82f6", color: "#fff", textDecoration: "none", padding: "9px 18px", borderRadius: 8, fontSize: 13, fontWeight: 700 }}>
                View Live /{currentPage === "cases" ? "case-studies" : currentPage} ↗
              </a>
            </div>
          </div>
        )}
      </main>

      {/* ── TOAST NOTIFICATIONS ────────────────────────────────────────────── */}
      {toast && (
        <div style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          background: toast.type === "error" ? "#ef4444" : toast.type === "info" ? "#3b82f6" : "#0f172a",
          color: "#fff",
          padding: "14px 22px",
          borderRadius: 10,
          fontSize: 13,
          fontWeight: 700,
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          zIndex: 999999,
          maxWidth: 420,
        }}>
          {toast.msg}
        </div>
      )}

      {/* ── CLOUD STORAGE & MONGODB SETUP MODAL ────────────────────────────── */}
      {showConfigModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 99999, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          <div style={{ background: "#fff", borderRadius: 16, maxWidth: 600, width: "100%", padding: 30, maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800 }}>☁️ MongoDB Atlas &amp; Google Drive Setup</h3>
              <button onClick={() => setShowConfigModal(false)} style={{ background: "transparent", border: "none", fontSize: 20, cursor: "pointer" }}>✕</button>
            </div>

            <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 18 }}>
              Add these environment variables in your hosting dashboard (e.g. Vercel &rarr; Settings &rarr; Environment Variables) or `.env.local` for permanent cloud persistence:
            </p>

            <div style={{ background: "#0f172a", color: "#f8fafc", borderRadius: 10, padding: 16, fontFamily: "monospace", fontSize: 12, lineHeight: 1.7, marginBottom: 20, overflowX: "auto" }}>
              <div style={{ color: "#4ade80" }}># 1. MongoDB Atlas (Cloud Database)</div>
              <div>MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/</div>
              <div>MONGODB_DB_NAME=apoorva_kaushal</div>
              <br />
              <div style={{ color: "#4ade80" }}># 2. Google Drive (Cloud Media Storage)</div>
              <div>GOOGLE_SERVICE_ACCOUNT_EMAIL=xxx@project.iam.gserviceaccount.com</div>
              <div>GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=&quot;-----BEGIN PRIVATE KEY-----\n...&quot;</div>
              <div>GOOGLE_DRIVE_FOLDER_ID=your_folder_id</div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button onClick={() => setShowConfigModal(false)} style={{ background: "#3b82f6", color: "#fff", border: "none", borderRadius: 8, padding: "8px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
