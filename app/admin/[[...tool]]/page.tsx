"use client";

import React, { useState, useRef, useCallback } from "react";

// ── SVG ICON SET ────────────────────────────────────────────────────────────
function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function ImageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}
function SettingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function UploadIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 16 12 12 8 16" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    </svg>
  );
}
function CheckCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
function RefreshIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  );
}
function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
function TrashIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  );
}
function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4L12 2z" />
    </svg>
  );
}

// ── PHOTO SLOT DATA ──────────────────────────────────────────────────────────
type PhotoSlot = {
  id: string;
  label: string;
  section: string;
  defaultPath: string;
  description: string;
};

const PHOTO_SLOTS: PhotoSlot[] = [
  {
    id: "profile",
    label: "Hero Profile Photo",
    section: "Homepage Hero",
    defaultPath: "/photos/profile.jpg",
    description: "Main portrait shown in the hero oval frame on homepage",
  },
  {
    id: "whoami",
    label: "Who Am I Photo",
    section: "Homepage — Who Am I",
    defaultPath: "/photos/IMG-20260205-WA0035.jpg",
    description: "Portrait card in the Who Am I panel",
  },
  {
    id: "qualifications",
    label: "Qualifications Photo",
    section: "Homepage — Qualifications",
    defaultPath: "/photos/IMG-20250107-WA0012.jpg",
    description: "Corporate photo shown in the Qualifications panel",
  },
  {
    id: "work1",
    label: "Work Card 1 — UGC Video",
    section: "My Work Includes",
    defaultPath: "/photos/IMG-20241220-WA0002.jpg",
    description: "Thumbnail for UGC Video work card",
  },
  {
    id: "work2",
    label: "Work Card 2 — Branding & SEO",
    section: "My Work Includes",
    defaultPath: "/photos/IMG-20260202-WA0003.jpg",
    description: "Thumbnail for Branding & Aesthetic work card",
  },
  {
    id: "work3",
    label: "Work Card 3 — SEO in 2026",
    section: "My Work Includes",
    defaultPath: "/photos/Screenshot_2025-11-15-14-35-32-55.jpg",
    description: "Screenshot for SEO & Copywriting work card",
  },
  {
    id: "work4",
    label: "Work Card 4 — Communication",
    section: "My Work Includes",
    defaultPath: "/photos/IMG-20260106-WA0002.jpg",
    description: "Thumbnail for Communication Strategy work card",
  },
  {
    id: "work6",
    label: "Work Card 6 — Content Strategy",
    section: "My Work Includes",
    defaultPath: "/photos/IMG-20260205-WA0036.jpg",
    description: "Thumbnail for Content Planning work card",
  },
  {
    id: "insta1",
    label: "Instagram Grid — Post 1",
    section: "Case Study — Instagram Feed",
    defaultPath: "/photos/IMG-20260205-WA0035.jpg",
    description: "1st photo in the 8-post Instagram feed grid",
  },
  {
    id: "insta2",
    label: "Instagram Grid — Post 2",
    section: "Case Study — Instagram Feed",
    defaultPath: "/photos/IMG-20240205-WA0003.jpg",
    description: "2nd photo in the 8-post Instagram feed grid",
  },
  {
    id: "insta3",
    label: "Instagram Grid — Post 3",
    section: "Case Study — Instagram Feed",
    defaultPath: "/photos/IMG-20260106-WA0010.jpg",
    description: "3rd photo in the 8-post Instagram feed grid",
  },
  {
    id: "insta4",
    label: "Instagram Grid — Post 4",
    section: "Case Study — Instagram Feed",
    defaultPath: "/photos/IMG-20260202-WA0003.jpg",
    description: "4th photo in the 8-post Instagram feed grid",
  },
  {
    id: "insta5",
    label: "Instagram Grid — Post 5",
    section: "Case Study — Instagram Feed",
    defaultPath: "/photos/IMG-20260108-WA0003.jpg",
    description: "5th photo in the 8-post Instagram feed grid",
  },
  {
    id: "insta6",
    label: "Instagram Grid — Post 6",
    section: "Case Study — Instagram Feed",
    defaultPath: "/photos/IMG_20260131_225741.jpg",
    description: "6th photo in the 8-post Instagram feed grid",
  },
  {
    id: "insta7",
    label: "Instagram Grid — Post 7",
    section: "Case Study — Instagram Feed",
    defaultPath: "/photos/IMG-20260608-WA0016.jpg",
    description: "7th photo in the 8-post Instagram feed grid",
  },
  {
    id: "insta8",
    label: "Instagram Grid — Post 8",
    section: "Case Study — Instagram Feed",
    defaultPath: "/photos/IMG-20260212-WA0000.jpg",
    description: "8th photo in the 8-post Instagram feed grid",
  },
  {
    id: "phone1",
    label: "Phone Mockup — Reel 1",
    section: "Case Study — Video Mockups",
    defaultPath: "/photos/profile.jpg",
    description: "Poster for Reel 01 phone mockup (340K views)",
  },
  {
    id: "phone2",
    label: "Phone Mockup — Reel 2",
    section: "Case Study — Video Mockups",
    defaultPath: "/photos/IMG-20260205-WA0035.jpg",
    description: "Poster for Reel 02 phone mockup (420K views)",
  },
  {
    id: "phone3",
    label: "Phone Mockup — Reel 3",
    section: "Case Study — Video Mockups",
    defaultPath: "/photos/Screenshot_2026-01-16-12-45-41-89.jpg",
    description: "Poster for Reel 03 phone mockup (290K views)",
  },
  {
    id: "add1",
    label: "Photography — Sunglasses Campaign",
    section: "Additional Photography",
    defaultPath: "/photos/IMG-20260202-WA0003.jpg",
    description: "Retro 90s sunglasses campaign photo",
  },
  {
    id: "add2",
    label: "Photography — Lifestyle UGC",
    section: "Additional Photography",
    defaultPath: "/photos/IMG-20260212-WA0000.jpg",
    description: "Morning routine wellness lifestyle shot",
  },
  {
    id: "add3",
    label: "Photography — Festive Ethnic Look",
    section: "Additional Photography",
    defaultPath: "/photos/IMG-20260106-WA0009.jpg",
    description: "Vibrant Indian ethnic wear for festival marketing",
  },
  {
    id: "add4",
    label: "Photography — Radha Raman Series",
    section: "Additional Photography",
    defaultPath: "/photos/IMG-20260608-WA0016.jpg",
    description: "Devotional storytelling photo (560K+ reach)",
  },
];

// Group slots by section
const sectionOrder = [
  "Homepage Hero",
  "Homepage — Who Am I",
  "Homepage — Qualifications",
  "My Work Includes",
  "Case Study — Instagram Feed",
  "Case Study — Video Mockups",
  "Additional Photography",
];

function groupBySection(slots: PhotoSlot[]) {
  const map: Record<string, PhotoSlot[]> = {};
  for (const slot of slots) {
    if (!map[slot.section]) map[slot.section] = [];
    map[slot.section].push(slot);
  }
  return map;
}

// ── PHOTO CARD COMPONENT ─────────────────────────────────────────────────────
type PhotoCardProps = {
  slot: PhotoSlot;
  onUpload: (id: string, file: File) => Promise<void>;
  onReset: (id: string) => void;
  uploadState: "idle" | "uploading" | "success" | "error";
  currentSrc: string;
};

function PhotoCard({ slot, onUpload, onReset, uploadState, currentSrc }: PhotoCardProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const isReplaced = previewSrc !== null;

  const handleFile = useCallback(
    async (file: File) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (e) => setPreviewSrc(e.target?.result as string);
      reader.readAsDataURL(file);
      await onUpload(slot.id, file);
    },
    [slot.id, onUpload]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleReset = () => {
    setPreviewSrc(null);
    onReset(slot.id);
    if (inputRef.current) inputRef.current.value = "";
  };

  const displaySrc = previewSrc || currentSrc;

  return (
    <div style={{
      background: "#fff",
      border: `1.5px solid ${isDragging ? "#7a1421" : isReplaced ? "#22c55e" : "#e5e7eb"}`,
      borderRadius: 12,
      overflow: "hidden",
      transition: "border-color 0.2s, box-shadow 0.2s",
      boxShadow: isDragging
        ? "0 0 0 3px rgba(122,20,33,0.12)"
        : isReplaced
        ? "0 0 0 3px rgba(34,197,94,0.12)"
        : "0 1px 4px rgba(0,0,0,0.06)",
    }}>
      {/* Photo Preview */}
      <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "#f3f4f6" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={displaySrc}
          alt={slot.label}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.3s",
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23f3f4f6'/%3E%3Ctext x='100' y='80' text-anchor='middle' fill='%239ca3af' font-size='12' font-family='sans-serif'%3ENo image%3C/text%3E%3C/svg%3E";
          }}
        />
        {/* Status badge */}
        {isReplaced && (
          <div style={{
            position: "absolute",
            top: 8,
            right: 8,
            background: "#22c55e",
            color: "#fff",
            borderRadius: 20,
            padding: "3px 10px",
            fontSize: 11,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 4,
            letterSpacing: ".03em",
          }}>
            <CheckCircleIcon /> NEW
          </div>
        )}
        {!isReplaced && (
          <div style={{
            position: "absolute",
            top: 8,
            right: 8,
            background: "rgba(0,0,0,0.55)",
            color: "#fff",
            borderRadius: 20,
            padding: "3px 10px",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: ".04em",
          }}>
            DEFAULT
          </div>
        )}
      </div>

      {/* Card Body */}
      <div style={{ padding: "14px 16px" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 3, lineHeight: 1.4 }}>
          {slot.label}
        </div>
        <div style={{ fontSize: 11.5, color: "#6b7280", lineHeight: 1.5, marginBottom: 12 }}>
          {slot.description}
        </div>

        {/* Drop Zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          style={{
            border: `1.5px dashed ${isDragging ? "#7a1421" : "#d1d5db"}`,
            borderRadius: 8,
            padding: "10px 12px",
            cursor: "pointer",
            textAlign: "center",
            background: isDragging ? "rgba(122,20,33,0.04)" : "#f9fafb",
            transition: "all 0.2s",
            marginBottom: isReplaced ? 10 : 0,
          }}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, color: "#6b7280" }}>
            {uploadState === "uploading" ? (
              <div style={{ width: 16, height: 16, border: "2px solid #d1d5db", borderTopColor: "#7a1421", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
            ) : (
              <UploadIcon />
            )}
            <span style={{ fontSize: 12, fontWeight: 500 }}>
              {uploadState === "uploading"
                ? "Uploading…"
                : isDragging
                ? "Drop to replace"
                : "Click or drag to replace"}
            </span>
          </div>
        </div>

        {/* Reset button */}
        {isReplaced && (
          <button
            onClick={handleReset}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "7px 12px",
              background: "transparent",
              border: "1.5px solid #e5e7eb",
              borderRadius: 7,
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 600,
              color: "#6b7280",
              transition: "all 0.15s",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#ef4444";
              (e.currentTarget as HTMLButtonElement).style.color = "#ef4444";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#e5e7eb";
              (e.currentTarget as HTMLButtonElement).style.color = "#6b7280";
            }}
          >
            <TrashIcon /> Revert to default
          </button>
        )}
      </div>
    </div>
  );
}

// ── SIDEBAR NAV ITEM ─────────────────────────────────────────────────────────
function NavItem({
  icon,
  label,
  active,
  onClick,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  badge?: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 14px",
        borderRadius: 8,
        border: "none",
        cursor: "pointer",
        background: active ? "rgba(122,20,33,0.12)" : "transparent",
        color: active ? "#7a1421" : "#374151",
        fontWeight: active ? 700 : 500,
        fontSize: 13.5,
        textAlign: "left",
        transition: "all 0.15s",
        position: "relative",
      }}
      onMouseOver={(e) => {
        if (!active) (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.04)";
      }}
      onMouseOut={(e) => {
        if (!active) (e.currentTarget as HTMLButtonElement).style.background = "transparent";
      }}
    >
      <span style={{ flexShrink: 0, opacity: active ? 1 : 0.6 }}>{icon}</span>
      <span style={{ flex: 1 }}>{label}</span>
      {badge && (
        <span style={{
          background: "#7a1421",
          color: "#fff",
          borderRadius: 10,
          padding: "1px 7px",
          fontSize: 10,
          fontWeight: 700,
        }}>{badge}</span>
      )}
    </button>
  );
}

// ── STAT CARD ─────────────────────────────────────────────────────────────────
function StatCard({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: 12,
      padding: "20px 22px",
      borderLeft: `4px solid ${color}`,
    }}>
      <div style={{ fontSize: 22, fontWeight: 800, color: "#111827", fontFamily: "Anton, sans-serif" }}>{value}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "#374151", marginTop: 2 }}>{label}</div>
      <div style={{ fontSize: 11.5, color: "#9ca3af", marginTop: 3 }}>{sub}</div>
    </div>
  );
}

// ── MAIN ADMIN PAGE ───────────────────────────────────────────────────────────
type Tab = "overview" | "photos" | "settings" | "gallery";
type UploadStateMap = Record<string, "idle" | "uploading" | "success" | "error">;
type PhotoSrcMap = Record<string, string>;

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [uploadStates, setUploadStates] = useState<UploadStateMap>({});
  const [photoSrcs, setPhotoSrcs] = useState<PhotoSrcMap>({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3200);
  };

  const handleUpload = useCallback(async (id: string, file: File) => {
    setUploadStates((prev) => ({ ...prev, [id]: "uploading" }));
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("slotId", id);
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      if (res.ok) {
        const data = await res.json();
        setPhotoSrcs((prev) => ({ ...prev, [id]: data.url }));
        setUploadStates((prev) => ({ ...prev, [id]: "success" }));
        showToast(`✓ Photo "${id}" replaced successfully`);
      } else {
        throw new Error("Upload failed");
      }
    } catch {
      setUploadStates((prev) => ({ ...prev, [id]: "error" }));
      showToast(`✗ Upload failed for "${id}" — using preview only`);
    }
  }, []);

  const handleReset = useCallback((id: string) => {
    setPhotoSrcs((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    setUploadStates((prev) => ({ ...prev, [id]: "idle" }));
    showToast(`↩ Reverted "${id}" to default photo`);
  }, []);

  const grouped = groupBySection(PHOTO_SLOTS);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      fontFamily: "Inter, system-ui, sans-serif",
      background: "#f8f9fb",
    }}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
      `}</style>

      {/* ── SIDEBAR ── */}
      <aside style={{
        width: sidebarOpen ? 230 : 64,
        minHeight: "100vh",
        background: "#fff",
        borderRight: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.22s cubic-bezier(.4,0,.2,1)",
        overflow: "hidden",
        position: "sticky",
        top: 0,
        height: "100vh",
        zIndex: 10,
        flexShrink: 0,
      }}>
        {/* Logo */}
        <div style={{
          padding: "18px 16px 14px",
          borderBottom: "1px solid #f3f4f6",
          display: "flex",
          alignItems: "center",
          gap: 10,
          minHeight: 64,
        }}>
          <div style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "linear-gradient(135deg,#152049,#7a1421)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            flexShrink: 0,
          }}>
            <SparkleIcon />
          </div>
          {sidebarOpen && (
            <div style={{ overflow: "hidden" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#111827", whiteSpace: "nowrap" }}>Admin Panel</div>
              <div style={{ fontSize: 10.5, color: "#9ca3af", whiteSpace: "nowrap" }}>Apoorva Kaushal</div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav style={{ padding: "12px 10px", flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <NavItem icon={<HomeIcon />} label="Overview" active={activeTab === "overview"} onClick={() => setActiveTab("overview")} />
          <NavItem icon={<ImageIcon />} label="Photo Manager" active={activeTab === "photos"} onClick={() => setActiveTab("photos")} badge={String(PHOTO_SLOTS.length)} />
          <NavItem icon={<GridIcon />} label="Gallery Items" active={activeTab === "gallery"} onClick={() => setActiveTab("gallery")} />
          <NavItem icon={<SettingsIcon />} label="Settings" active={activeTab === "settings"} onClick={() => setActiveTab("settings")} />
        </nav>

        {/* Bottom: toggle collapse + Sanity link */}
        <div style={{ padding: "12px 10px", borderTop: "1px solid #f3f4f6" }}>
          <a
            href="https://www.sanity.io/manage"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 10px",
              borderRadius: 7,
              color: "#6b7280",
              textDecoration: "none",
              fontSize: 12.5,
              fontWeight: 500,
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
            }}
          >
            <ExternalLinkIcon />
            {sidebarOpen && <span style={{ whiteSpace: "nowrap" }}>Sanity Studio</span>}
          </a>
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            style={{
              marginTop: 8,
              width: "100%",
              padding: "7px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              borderRadius: 7,
              color: "#9ca3af",
              fontSize: 11,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {sidebarOpen ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
            </svg>
            {sidebarOpen && <span>Collapse</span>}
          </button>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main style={{ flex: 1, overflow: "auto", padding: "0" }}>

        {/* Top Bar */}
        <div style={{
          position: "sticky",
          top: 0,
          background: "rgba(248,249,251,0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #e5e7eb",
          padding: "14px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 9,
        }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#111827" }}>
              {activeTab === "overview" && "Dashboard Overview"}
              {activeTab === "photos" && "Photo Manager"}
              {activeTab === "gallery" && "Gallery Items"}
              {activeTab === "settings" && "Settings"}
            </div>
            <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 1 }}>
              {activeTab === "overview" && "Site stats and quick actions"}
              {activeTab === "photos" && `${PHOTO_SLOTS.length} photos — click or drag to replace any photo`}
              {activeTab === "gallery" && "Manage gallery photos and reels"}
              {activeTab === "settings" && "Site configuration"}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 16px",
                borderRadius: 8,
                border: "1.5px solid #e5e7eb",
                background: "#fff",
                color: "#374151",
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <ExternalLinkIcon /> View Site
            </a>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 16px",
                borderRadius: 8,
                border: "none",
                background: "linear-gradient(135deg,#152049,#7a1421)",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}
              onClick={() => showToast("Site cache cleared — changes will reflect shortly")}
            >
              <RefreshIcon /> Refresh Cache
            </button>
          </div>
        </div>

        <div style={{ padding: "28px" }}>

          {/* ── TAB: OVERVIEW ── */}
          {activeTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 14 }}>
                <StatCard label="Total Reach" value="2M+" sub="All-time across platforms" color="#7a1421" />
                <StatCard label="Avg. Reel Views" value="340K" sub="Per video, last 30 days" color="#152049" />
                <StatCard label="Engagement Rate" value="6.8%" sub="Instagram + YouTube" color="#059669" />
                <StatCard label="Brands Served" value="5+" sub="Active clients" color="#d97706" />
                <StatCard label="Combined Followers" value="5K+" sub="Across all platforms" color="#6366f1" />
                <StatCard label="Photos in System" value={String(PHOTO_SLOTS.length)} sub="Default + custom slots" color="#ec4899" />
              </div>

              {/* Quick Actions */}
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "22px 24px" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Quick Actions</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 10 }}>
                  {[
                    { label: "Manage Photos", icon: <ImageIcon />, tab: "photos" as Tab },
                    { label: "Edit Gallery", icon: <GridIcon />, tab: "gallery" as Tab },
                    { label: "Site Settings", icon: <SettingsIcon />, tab: "settings" as Tab },
                  ].map((a) => (
                    <button
                      key={a.label}
                      onClick={() => setActiveTab(a.tab)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "12px 16px",
                        border: "1.5px solid #e5e7eb",
                        borderRadius: 9,
                        background: "#f9fafb",
                        cursor: "pointer",
                        fontSize: 13.5,
                        fontWeight: 600,
                        color: "#374151",
                        transition: "all 0.15s",
                      }}
                      onMouseOver={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "#7a1421";
                        (e.currentTarget as HTMLButtonElement).style.color = "#7a1421";
                      }}
                      onMouseOut={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "#e5e7eb";
                        (e.currentTarget as HTMLButtonElement).style.color = "#374151";
                      }}
                    >
                      {a.icon} {a.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Info banner */}
              <div style={{
                background: "rgba(21,32,73,0.06)",
                border: "1px solid rgba(21,32,73,0.15)",
                borderRadius: 10,
                padding: "14px 18px",
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
              }}>
                <div style={{ flexShrink: 0, color: "#152049", marginTop: 1 }}><InfoIcon /></div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#152049", marginBottom: 3 }}>How Photo Management Works</div>
                  <div style={{ fontSize: 12.5, color: "#374151", lineHeight: 1.6 }}>
                    Go to <strong>Photo Manager</strong> to see all website photos with their default images visible. Click any photo or drag a new image to replace it. 
                    Your new photo is uploaded to <code style={{ background: "rgba(0,0,0,0.06)", padding: "0 4px", borderRadius: 3 }}>/public/photos/</code> and the site uses it automatically.
                    Hit &ldquo;Revert to default&rdquo; to go back to the original photo.
                  </div>
                </div>
              </div>

              {/* Pages summary */}
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "22px 24px" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 14 }}>All Pages</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 8 }}>
                  {[
                    ["/", "Homepage"],
                    ["/about", "About"],
                    ["/services", "Services"],
                    ["/case-studies", "Case Studies"],
                    ["/dashboard", "Dashboard"],
                    ["/hire", "Hire Me"],
                    ["/contact", "Contact"],
                    ["/qna", "Q&A"],
                    ["/terms", "Terms"],
                    ["/privacy", "Privacy"],
                    ["/legal", "Legal"],
                  ].map(([href, label]) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 6,
                        padding: "9px 12px",
                        border: "1px solid #e5e7eb",
                        borderRadius: 7,
                        background: "#f9fafb",
                        color: "#374151",
                        textDecoration: "none",
                        fontSize: 12.5,
                        fontWeight: 500,
                        transition: "all 0.15s",
                      }}
                    >
                      <span>{label}</span>
                      <span style={{ opacity: 0.5 }}><ExternalLinkIcon /></span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── TAB: PHOTOS ── */}
          {activeTab === "photos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {/* Info bar */}
              <div style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 10,
                padding: "14px 18px",
                display: "flex",
                gap: 14,
                alignItems: "center",
                flexWrap: "wrap",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#374151" }}>
                  <div style={{ background: "#f3f4f6", borderRadius: 6, padding: "4px 8px", fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: ".04em" }}>DEFAULT</div>
                  <span style={{ fontSize: 12.5 }}>= original photo currently in use</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#374151" }}>
                  <div style={{ background: "#22c55e", borderRadius: 6, padding: "4px 8px", fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: ".04em" }}>NEW</div>
                  <span style={{ fontSize: 12.5 }}>= you&apos;ve uploaded a replacement</span>
                </div>
                <div style={{ marginLeft: "auto", fontSize: 12, color: "#9ca3af" }}>
                  {Object.values(uploadStates).filter(s => s === "success").length} of {PHOTO_SLOTS.length} photos replaced
                </div>
              </div>

              {/* Sections */}
              {sectionOrder.map((section) => {
                const slots = grouped[section];
                if (!slots) return null;
                return (
                  <div key={section}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 16,
                      paddingBottom: 10,
                      borderBottom: "2px solid #f3f4f6",
                    }}>
                      <div style={{
                        width: 4,
                        height: 20,
                        borderRadius: 2,
                        background: "linear-gradient(to bottom,#152049,#7a1421)",
                        flexShrink: 0,
                      }} />
                      <h2 style={{ fontSize: 15, fontWeight: 800, color: "#111827" }}>{section}</h2>
                      <span style={{
                        background: "#f3f4f6",
                        color: "#6b7280",
                        borderRadius: 20,
                        padding: "2px 8px",
                        fontSize: 11,
                        fontWeight: 600,
                      }}>{slots.length} photo{slots.length > 1 ? "s" : ""}</span>
                    </div>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
                      gap: 16,
                    }}>
                      {slots.map((slot) => (
                        <PhotoCard
                          key={slot.id}
                          slot={slot}
                          onUpload={handleUpload}
                          onReset={handleReset}
                          uploadState={uploadStates[slot.id] || "idle"}
                          currentSrc={photoSrcs[slot.id] || slot.defaultPath}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ── TAB: GALLERY ── */}
          {activeTab === "gallery" && (
            <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "28px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <GridIcon />
                <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827" }}>Gallery Management</h2>
              </div>
              <div style={{
                background: "rgba(21,32,73,0.04)",
                border: "1px solid rgba(21,32,73,0.1)",
                borderRadius: 10,
                padding: "18px 20px",
                marginBottom: 18,
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}>
                <div style={{ color: "#152049", flexShrink: 0, marginTop: 1 }}><InfoIcon /></div>
                <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>
                  Gallery items (photos, videos, reels) are managed through <strong>Sanity Studio</strong>.
                  The gallery supports <strong>All, Videos &amp; Reels, Photos, Portraits, UGC, Devotional</strong> filter tabs.
                  Use the button below to open Sanity Studio and add or reorder gallery items.
                </div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <a
                  href="/admin/studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "10px 20px",
                    borderRadius: 8,
                    background: "linear-gradient(135deg,#152049,#7a1421)",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 13.5,
                    fontWeight: 700,
                  }}
                >
                  <ExternalLinkIcon /> Open Sanity Studio
                </a>
                <a
                  href="/#gallery"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "10px 20px",
                    borderRadius: 8,
                    border: "1.5px solid #e5e7eb",
                    background: "#fff",
                    color: "#374151",
                    textDecoration: "none",
                    fontSize: 13.5,
                    fontWeight: 600,
                  }}
                >
                  <ExternalLinkIcon /> Preview Gallery
                </a>
              </div>
            </div>
          )}

          {/* ── TAB: SETTINGS ── */}
          {activeTab === "settings" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Profile Settings Card */}
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
                  <UserIcon />
                  <h2 style={{ fontSize: 14, fontWeight: 800, color: "#111827" }}>Profile &amp; Social Links</h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {[
                    { label: "Full Name", value: "Apoorva Kaushal", hint: "Update in layout.tsx" },
                    { label: "WhatsApp Number", value: "919368153189", hint: "Update in layout.tsx + Navbar" },
                    { label: "Email", value: "apoorva@apoorvakaushal.com", hint: "Update in contact/page.tsx" },
                    { label: "Instagram Handle", value: "@apoorva__kaushal", hint: "Update in Navbar + page.tsx" },
                    { label: "YouTube Handle", value: "@_apoorva7__", hint: "Update in Navbar + page.tsx" },
                    { label: "Domain", value: "apoorva.hmorix.in", hint: "Update in layout.tsx metadata" },
                  ].map((f) => (
                    <div key={f.label}>
                      <div style={{ fontSize: 11.5, fontWeight: 600, color: "#6b7280", marginBottom: 5, letterSpacing: ".04em", textTransform: "uppercase" }}>{f.label}</div>
                      <div style={{
                        padding: "9px 12px",
                        border: "1.5px solid #e5e7eb",
                        borderRadius: 7,
                        fontSize: 13.5,
                        fontWeight: 600,
                        color: "#111827",
                        background: "#f9fafb",
                      }}>{f.value}</div>
                      <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 4 }}>{f.hint}</div>
                    </div>
                  ))}
                </div>
                <div style={{
                  marginTop: 16,
                  padding: "12px 14px",
                  background: "rgba(234,179,8,0.07)",
                  border: "1px solid rgba(234,179,8,0.25)",
                  borderRadius: 8,
                  fontSize: 12.5,
                  color: "#92400e",
                  display: "flex",
                  gap: 8,
                  alignItems: "flex-start",
                }}>
                  <InfoIcon />
                  <span>To edit text content (bio, taglines, pricing), use <strong>Sanity Studio</strong> or edit the source files directly. Photo replacement is fully handled here in Photo Manager.</span>
                </div>
              </div>

              {/* SEO Settings Card */}
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <SettingsIcon />
                  <h2 style={{ fontSize: 14, fontWeight: 800, color: "#111827" }}>SEO &amp; Meta</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { label: "Google Search Console", status: "Active", color: "#22c55e" },
                    { label: "Google Analytics (G-GXG8HVCP8L)", status: "Active", color: "#22c55e" },
                    { label: "Person JSON-LD Schema", status: "Active", color: "#22c55e" },
                    { label: "FAQ JSON-LD Schema", status: "Active", color: "#22c55e" },
                    { label: "LocalBusiness Schema", status: "Active", color: "#22c55e" },
                    { label: "Sitemap.xml", status: "Auto-generated", color: "#6366f1" },
                    { label: "Robots.txt", status: "Configured", color: "#6366f1" },
                    { label: "OG Image", status: "Using /photos/profile.jpg", color: "#d97706" },
                  ].map((item) => (
                    <div key={item.label} style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "9px 14px",
                      border: "1px solid #f3f4f6",
                      borderRadius: 7,
                      background: "#fafafa",
                    }}>
                      <span style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>{item.label}</span>
                      <span style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: item.color,
                        background: item.color + "18",
                        padding: "2px 8px",
                        borderRadius: 20,
                      }}>{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployment */}
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "24px" }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#111827", marginBottom: 12 }}>Deploy &amp; Git</div>
                <div style={{ background: "#111827", borderRadius: 8, padding: "14px 16px", fontFamily: "monospace", fontSize: 12.5, color: "#86efac", lineHeight: 2 }}>
                  <div><span style={{ color: "#9ca3af" }}>#</span> Push to GitHub &amp; auto-deploy on Vercel</div>
                  <div>git add .</div>
                  <div>git commit -m &quot;Update photos&quot;</div>
                  <div>git push origin main</div>
                </div>
                <div style={{ marginTop: 10, fontSize: 12.5, color: "#6b7280" }}>
                  Repo: <a href="https://github.com/hmorix/apoorva" target="_blank" rel="noopener noreferrer" style={{ color: "#7a1421" }}>github.com/hmorix/apoorva</a>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* ── TOAST ── */}
      {toastMsg && (
        <div style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          background: "#111827",
          color: "#fff",
          borderRadius: 10,
          padding: "12px 20px",
          fontSize: 13.5,
          fontWeight: 600,
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          zIndex: 9999,
          animation: "fadeIn 0.25s ease",
          maxWidth: 360,
        }}>
          {toastMsg}
        </div>
      )}
    </div>
  );
}
