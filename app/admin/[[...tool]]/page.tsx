"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";

// ── SVG ICONS ───────────────────────────────────────────────────────────────
function HomeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
function EditIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}
function UserIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function ImageIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}
function SettingsIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function UploadIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 16 12 12 8 16" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    </svg>
  );
}
function CheckCircleIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
function SaveIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  );
}
function RefreshIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  );
}
function ExternalLinkIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
function TrashIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  );
}
function GridIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}
function InfoIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
function SparkleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4L12 2z" />
    </svg>
  );
}
function MenuIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function CloseIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ── PHOTO SLOTS ──────────────────────────────────────────────────────────────
type PhotoSlot = {
  id: string;
  label: string;
  section: string;
  defaultPath: string;
  description: string;
};

const PHOTO_SLOTS: PhotoSlot[] = [
  { id: "profile", label: "Hero Profile Photo", section: "Homepage Hero", defaultPath: "/photos/profile.jpg", description: "Main portrait in the hero oval frame on homepage" },
  { id: "whoami", label: "Who Am I Photo", section: "Homepage — Who Am I", defaultPath: "/photos/IMG-20260205-WA0035.jpg", description: "Portrait card in the Who Am I panel" },
  { id: "qualifications", label: "Qualifications Photo", section: "Homepage — Qualifications", defaultPath: "/photos/IMG-20250107-WA0012.jpg", description: "Corporate blazer photo in Qualifications panel" },
  { id: "work1", label: "Work Card 1 — UGC Video", section: "My Work Includes", defaultPath: "/photos/IMG-20241220-WA0002.jpg", description: "Thumbnail for UGC Video work card" },
  { id: "work2", label: "Work Card 2 — Branding & SEO", section: "My Work Includes", defaultPath: "/photos/IMG-20260202-WA0003.jpg", description: "Thumbnail for Branding & Aesthetic work card" },
  { id: "work3", label: "Work Card 3 — SEO in 2026", section: "My Work Includes", defaultPath: "/photos/Screenshot_2025-11-15-14-35-32-55.jpg", description: "Screenshot for SEO & Copywriting work card" },
  { id: "work4", label: "Work Card 4 — Communication", section: "My Work Includes", defaultPath: "/photos/IMG-20260106-WA0002.jpg", description: "Thumbnail for Communication Strategy work card" },
  { id: "work6", label: "Work Card 6 — Content Strategy", section: "My Work Includes", defaultPath: "/photos/IMG-20260205-WA0036.jpg", description: "Thumbnail for Content Planning work card" },
  { id: "insta1", label: "Instagram Grid — Post 1", section: "Case Study — Instagram Feed", defaultPath: "/photos/IMG-20260205-WA0035.jpg", description: "1st photo in the 8-post Instagram feed grid" },
  { id: "insta2", label: "Instagram Grid — Post 2", section: "Case Study — Instagram Feed", defaultPath: "/photos/IMG-20240205-WA0003.jpg", description: "2nd photo in the 8-post Instagram feed grid" },
  { id: "insta3", label: "Instagram Grid — Post 3", section: "Case Study — Instagram Feed", defaultPath: "/photos/IMG-20260106-WA0010.jpg", description: "3rd photo in the 8-post Instagram feed grid" },
  { id: "insta4", label: "Instagram Grid — Post 4", section: "Case Study — Instagram Feed", defaultPath: "/photos/IMG-20260202-WA0003.jpg", description: "4th photo in the 8-post Instagram feed grid" },
  { id: "insta5", label: "Instagram Grid — Post 5", section: "Case Study — Instagram Feed", defaultPath: "/photos/IMG-20260108-WA0003.jpg", description: "5th photo in the 8-post Instagram feed grid" },
  { id: "insta6", label: "Instagram Grid — Post 6", section: "Case Study — Instagram Feed", defaultPath: "/photos/IMG_20260131_225741.jpg", description: "6th photo in the 8-post Instagram feed grid" },
  { id: "insta7", label: "Instagram Grid — Post 7", section: "Case Study — Instagram Feed", defaultPath: "/photos/IMG-20260608-WA0016.jpg", description: "7th photo in the 8-post Instagram feed grid" },
  { id: "insta8", label: "Instagram Grid — Post 8", section: "Case Study — Instagram Feed", defaultPath: "/photos/IMG-20260212-WA0000.jpg", description: "8th photo in the 8-post Instagram feed grid" },
  { id: "phone1", label: "Phone Mockup — Reel 1", section: "Case Study — Video Mockups", defaultPath: "/photos/profile.jpg", description: "Poster for Reel 01 phone mockup (340K views)" },
  { id: "phone2", label: "Phone Mockup — Reel 2", section: "Case Study — Video Mockups", defaultPath: "/photos/IMG-20260205-WA0035.jpg", description: "Poster for Reel 02 phone mockup (420K views)" },
  { id: "phone3", label: "Phone Mockup — Reel 3", section: "Case Study — Video Mockups", defaultPath: "/photos/Screenshot_2026-01-16-12-45-41-89.jpg", description: "Poster for Reel 03 phone mockup (290K views)" },
  { id: "add1", label: "Photography — Sunglasses Campaign", section: "Additional Photography", defaultPath: "/photos/IMG-20260202-WA0003.jpg", description: "Retro 90s sunglasses campaign photo" },
  { id: "add2", label: "Photography — Lifestyle UGC", section: "Additional Photography", defaultPath: "/photos/IMG-20260212-WA0000.jpg", description: "Morning routine wellness lifestyle shot" },
  { id: "add3", label: "Photography — Festive Ethnic Look", section: "Additional Photography", defaultPath: "/photos/IMG-20260106-WA0009.jpg", description: "Vibrant Indian ethnic wear for festival marketing" },
  { id: "add4", label: "Photography — Radha Raman Series", section: "Additional Photography", defaultPath: "/photos/IMG-20260608-WA0016.jpg", description: "Devotional storytelling photo (560K+ reach)" },
];

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
    <div className="admin-photo-card" style={{
      background: "#fff",
      border: `1.5px solid ${isDragging ? "#7a1421" : isReplaced ? "#22c55e" : "#e5e7eb"}`,
      borderRadius: 12,
      overflow: "hidden",
      transition: "all 0.2s",
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
        {isReplaced ? (
          <div style={{
            position: "absolute",
            top: 8,
            right: 8,
            background: "#22c55e",
            color: "#fff",
            borderRadius: 20,
            padding: "3px 9px",
            fontSize: 10.5,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}>
            <CheckCircleIcon size={12} /> NEW
          </div>
        ) : (
          <div style={{
            position: "absolute",
            top: 8,
            right: 8,
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            borderRadius: 20,
            padding: "3px 9px",
            fontSize: 10,
            fontWeight: 600,
          }}>
            DEFAULT
          </div>
        )}
      </div>

      {/* Card Body */}
      <div style={{ padding: "12px 14px" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 3, lineHeight: 1.3 }}>
          {slot.label}
        </div>
        <div style={{ fontSize: 11.5, color: "#6b7280", lineHeight: 1.4, marginBottom: 10 }}>
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
            padding: "10px",
            cursor: "pointer",
            textAlign: "center",
            background: isDragging ? "rgba(122,20,33,0.04)" : "#f9fafb",
            transition: "all 0.2s",
            marginBottom: isReplaced ? 8 : 0,
            minHeight: 42,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "#4b5563" }}>
            {uploadState === "uploading" ? (
              <div style={{ width: 15, height: 15, border: "2px solid #d1d5db", borderTopColor: "#7a1421", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
            ) : (
              <UploadIcon size={16} />
            )}
            <span style={{ fontSize: 11.5, fontWeight: 600 }}>
              {uploadState === "uploading"
                ? "Uploading…"
                : isDragging
                ? "Drop to replace"
                : "Tap or drag photo"}
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
              gap: 5,
              padding: "7px 10px",
              background: "transparent",
              border: "1.5px solid #e5e7eb",
              borderRadius: 7,
              cursor: "pointer",
              fontSize: 11.5,
              fontWeight: 600,
              color: "#6b7280",
              minHeight: 34,
            }}
          >
            <TrashIcon size={13} /> Revert to default
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
        padding: "11px 14px",
        borderRadius: 8,
        border: "none",
        cursor: "pointer",
        background: active ? "rgba(122,20,33,0.12)" : "transparent",
        color: active ? "#7a1421" : "#374151",
        fontWeight: active ? 700 : 500,
        fontSize: 13.5,
        textAlign: "left",
        transition: "all 0.15s",
        minHeight: 44,
      }}
    >
      <span style={{ flexShrink: 0, opacity: active ? 1 : 0.7 }}>{icon}</span>
      <span style={{ flex: 1, whiteSpace: "nowrap" }}>{label}</span>
      {badge && (
        <span style={{
          background: active ? "#7a1421" : "#e5e7eb",
          color: active ? "#fff" : "#374151",
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
      padding: "16px 18px",
      borderLeft: `4px solid ${color}`,
    }}>
      <div style={{ fontSize: 20, fontWeight: 800, color: "#111827", fontFamily: "Anton, sans-serif" }}>{value}</div>
      <div style={{ fontSize: 12.5, fontWeight: 600, color: "#374151", marginTop: 2 }}>{label}</div>
      <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>{sub}</div>
    </div>
  );
}

// ── MAIN ADMIN COMPONENT ─────────────────────────────────────────────────────
type Tab = "overview" | "content" | "photos" | "gallery" | "settings";
type UploadStateMap = Record<string, "idle" | "uploading" | "success" | "error">;
type PhotoSrcMap = Record<string, string>;

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [contentSection, setContentSection] = useState<"hero" | "homepage" | "about" | "services" | "contact">("hero");
  const [uploadStates, setUploadStates] = useState<UploadStateMap>({});
  const [photoSrcs, setPhotoSrcs] = useState<PhotoSrcMap>({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [savingContent, setSavingContent] = useState(false);

  // Content form state
  const [formData, setFormData] = useState({
    heroTitle: "Apoorva Kaushal",
    heroTagline: "Authentic storytelling that connects brands with audiences through relatable experiences",
    heroSignature: "Appu",
    domain: "apoorva.hmorix.in",
    whoAmIHeading: "WHO AM I",
    whoAmIBio1: "I'm Apoorva, a Hathras & Uttar Pradesh–based Social Media Influencer and Content Creator. I help brands grow through cohesive visual identity, creative content, and high-performing advertising campaigns.",
    whoAmIBio2: "I've elevated the online presence of brands across India, helping them take control of their digital narrative with authentic Hindi comedy, parody, informative videos, and Krishna spiritual content.",
    statBrands: "5+",
    statReach: "2M+",
    statFollowers: "5K+",
    statExp: "3YRS+",
    aboutHeroTitle: "APOORVA KAUSHAL",
    aboutHeroSub: "Social Media Creator & Content Creator · Hathras, Uttar Pradesh, India",
    storyHeading: "FROM HATHRAS\nTO THE DIGITAL WORLD",
    storyBio1: "I'm Apoorva Kaushal — born and raised in Hathras, Uttar Pradesh, a historic cultural hub in the Braj/Agra region. My journey into social media strategy began with a clear conviction: audiences don't just watch content; they connect with authenticity, cultural nuance, and relatable humor.",
    storyBio2: "What started as creative sketches and storytelling has evolved into a full-fledged multi-channel digital footprint reaching 2M+ all-time reach, 400k+ YouTube views, and over 5K+ combined followers across Instagram, YouTube, and Facebook.",
    storyBio3: "As a social media manager and content creator, I blend creative UGC video production with data-driven Meta ad campaigns, having collaborated with 5+ brands across fashion, beauty, lifestyle, and local retail.",
    starterPrice: "₹15,000",
    starterDesc: "Ideal for emerging brands and personal accounts starting their content journey with curated visuals and community growth.",
    growthPrice: "₹35,000",
    growthDesc: "Comprehensive social strategy with weekly UGC Reels, engaging copy, and optimized Meta ad management.",
    premiumPrice: "₹65,000",
    premiumDesc: "Full-funnel digital branding, high-frequency UGC production, scriptwriting, dedicated Meta ad scaling, and weekly analytics.",
    whatsappNumber: "919368153189",
    email: "apoorva@apoorvakaushal.com",
    instagramHandle: "@apoorva__kaushal",
    youtubeHandle: "@_apoorva7__",
    location: "Hathras, Uttar Pradesh, India",
    postalCode: "204101",
  });

  // Load existing content on mount
  useEffect(() => {
    async function loadContent() {
      try {
        const res = await fetch("/api/admin/content");
        if (res.ok) {
          const json = await res.json();
          if (json?.content) {
            const c = json.content;
            setFormData({
              heroTitle: c.hero?.heroTitle || "Apoorva Kaushal",
              heroTagline: c.hero?.heroTagline || "Authentic storytelling that connects brands with audiences through relatable experiences",
              heroSignature: c.hero?.heroSignature || "Appu",
              domain: c.hero?.domain || "apoorva.hmorix.in",
              whoAmIHeading: c.homepage?.whoAmIHeading || "WHO AM I",
              whoAmIBio1: c.homepage?.whoAmIBio1 || "",
              whoAmIBio2: c.homepage?.whoAmIBio2 || "",
              statBrands: c.homepage?.statBrands || "5+",
              statReach: c.homepage?.statReach || "2M+",
              statFollowers: c.homepage?.statFollowers || "5K+",
              statExp: c.homepage?.statExp || "3YRS+",
              aboutHeroTitle: c.about?.pageHeroTitle || "APOORVA KAUSHAL",
              aboutHeroSub: c.about?.pageHeroSub || "Social Media Creator & Content Creator · Hathras, Uttar Pradesh, India",
              storyHeading: c.about?.storyHeading || "FROM HATHRAS\nTO THE DIGITAL WORLD",
              storyBio1: c.about?.storyBio1 || "",
              storyBio2: c.about?.storyBio2 || "",
              storyBio3: c.about?.storyBio3 || "",
              starterPrice: c.services?.starterPrice || "₹15,000",
              starterDesc: c.services?.starterDesc || "",
              growthPrice: c.services?.growthPrice || "₹35,000",
              growthDesc: c.services?.growthDesc || "",
              premiumPrice: c.services?.premiumPrice || "₹65,000",
              premiumDesc: c.services?.premiumDesc || "",
              whatsappNumber: c.contact?.whatsappNumber || "919368153189",
              email: c.contact?.email || "apoorva@apoorvakaushal.com",
              instagramHandle: c.contact?.instagramHandle || "@apoorva__kaushal",
              youtubeHandle: c.contact?.youtubeHandle || "@_apoorva7__",
              location: c.contact?.location || "Hathras, Uttar Pradesh, India",
              postalCode: c.contact?.postalCode || "204101",
            });
          }
        }
      } catch (err) {
        console.warn("Could not load stored content:", err);
      }
    }
    loadContent();
  }, []);

  // Close mobile drawer on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileDrawerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3200);
  };

  const handleInputChange = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSaveContent = async () => {
    setSavingContent(true);
    try {
      const payload = {
        hero: {
          heroTitle: formData.heroTitle,
          heroTagline: formData.heroTagline,
          heroSignature: formData.heroSignature,
          domain: formData.domain,
        },
        homepage: {
          whoAmIHeading: formData.whoAmIHeading,
          whoAmIBio1: formData.whoAmIBio1,
          whoAmIBio2: formData.whoAmIBio2,
          statBrands: formData.statBrands,
          statReach: formData.statReach,
          statFollowers: formData.statFollowers,
          statExp: formData.statExp,
        },
        about: {
          pageHeroTitle: formData.aboutHeroTitle,
          pageHeroSub: formData.aboutHeroSub,
          storyHeading: formData.storyHeading,
          storyBio1: formData.storyBio1,
          storyBio2: formData.storyBio2,
          storyBio3: formData.storyBio3,
        },
        services: {
          starterPrice: formData.starterPrice,
          starterPeriod: "month",
          starterDesc: formData.starterDesc,
          growthPrice: formData.growthPrice,
          growthPeriod: "month",
          growthDesc: formData.growthDesc,
          premiumPrice: formData.premiumPrice,
          premiumPeriod: "month",
          premiumDesc: formData.premiumDesc,
        },
        contact: {
          whatsappNumber: formData.whatsappNumber,
          email: formData.email,
          instagramHandle: formData.instagramHandle,
          instagramUrl: `https://instagram.com/${formData.instagramHandle.replace("@", "")}`,
          youtubeHandle: formData.youtubeHandle,
          youtubeUrl: `https://youtube.com/${formData.youtubeHandle}`,
          location: formData.location,
          postalCode: formData.postalCode,
        },
      };

      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        showToast("✓ Website content saved successfully!");
      } else {
        throw new Error("Save failed");
      }
    } catch (err) {
      showToast("✗ Failed to save content. Please try again.");
    } finally {
      setSavingContent(false);
    }
  };

  const handleUpload = useCallback(async (id: string, file: File) => {
    setUploadStates((prev) => ({ ...prev, [id]: "uploading" }));
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("slotId", id);
      const res = await fetch("/api/admin/upload", { method: "POST", body: form });
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

  const selectTab = (tab: Tab) => {
    setActiveTab(tab);
    setMobileDrawerOpen(false);
  };

  const grouped = groupBySection(PHOTO_SLOTS);

  return (
    <div className="admin-root" style={{
      minHeight: "100vh",
      display: "flex",
      fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      background: "#f8f9fb",
      color: "#111827",
    }}>
      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .admin-desktop-sidebar {
          display: flex;
        }
        .admin-mobile-header {
          display: none;
        }
        .admin-mobile-bottom-nav {
          display: none;
        }
        
        .admin-stat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 14px;
        }
        .admin-actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 10px;
        }
        .admin-pages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 8px;
        }
        .admin-photos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
        }
        .admin-form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .admin-form-row-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .admin-package-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 12px;
        }
        .admin-content-pad {
          padding: 28px;
        }
        .admin-topbar-pad {
          padding: 14px 28px;
        }

        /* ── MOBILE SCREEN ADAPTATIONS (< 768px) ── */
        @media (max-width: 768px) {
          .admin-desktop-sidebar {
            display: none !important;
          }
          .admin-mobile-header {
            display: flex !important;
          }
          .admin-mobile-bottom-nav {
            display: flex !important;
          }
          .admin-content-pad {
            padding: 16px 14px 90px 14px !important;
          }
          .admin-topbar-pad {
            padding: 12px 14px !important;
          }
          .admin-stat-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
          }
          .admin-actions-grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .admin-pages-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 6px !important;
          }
          .admin-photos-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .admin-form-row-2 {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .admin-form-row-4 {
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
          }
          .admin-package-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .admin-subnav-scroll {
            overflow-x: auto !important;
            white-space: nowrap !important;
            -webkit-overflow-scrolling: touch !important;
            padding-bottom: 8px !important;
          }
          .admin-toast-box {
            left: 14px !important;
            right: 14px !important;
            bottom: 74px !important;
            max-width: none !important;
            text-align: center !important;
          }
        }
      `}</style>

      {/* ── DESKTOP SIDEBAR ── */}
      <aside className="admin-desktop-sidebar" style={{
        width: sidebarOpen ? 230 : 68,
        minHeight: "100vh",
        background: "#fff",
        borderRight: "1px solid #e5e7eb",
        flexDirection: "column",
        transition: "width 0.2s cubic-bezier(.4,0,.2,1)",
        overflow: "hidden",
        position: "sticky",
        top: 0,
        height: "100vh",
        zIndex: 20,
        flexShrink: 0,
      }}>
        {/* Brand Logo */}
        <div style={{
          padding: "16px 14px",
          borderBottom: "1px solid #f3f4f6",
          display: "flex",
          alignItems: "center",
          gap: 10,
          minHeight: 64,
        }}>
          <div style={{
            width: 34,
            height: 34,
            borderRadius: 8,
            background: "linear-gradient(135deg,#152049,#7a1421)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            flexShrink: 0,
          }}>
            <SparkleIcon size={18} />
          </div>
          {sidebarOpen && (
            <div style={{ overflow: "hidden" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#111827", whiteSpace: "nowrap" }}>Admin Panel</div>
              <div style={{ fontSize: 11, color: "#9ca3af", whiteSpace: "nowrap" }}>Apoorva Kaushal</div>
            </div>
          )}
        </div>

        {/* Navigation Items */}
        <nav style={{ padding: "12px 10px", flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <NavItem icon={<HomeIcon size={17} />} label="Overview" active={activeTab === "overview"} onClick={() => selectTab("overview")} />
          <NavItem icon={<EditIcon size={17} />} label="Content Editor" active={activeTab === "content"} onClick={() => selectTab("content")} badge="LIVE" />
          <NavItem icon={<ImageIcon size={17} />} label="Photo Manager" active={activeTab === "photos"} onClick={() => selectTab("photos")} badge={String(PHOTO_SLOTS.length)} />
          <NavItem icon={<GridIcon size={17} />} label="Gallery Items" active={activeTab === "gallery"} onClick={() => selectTab("gallery")} />
          <NavItem icon={<SettingsIcon size={17} />} label="Settings & SEO" active={activeTab === "settings"} onClick={() => selectTab("settings")} />
        </nav>

        {/* Bottom Actions */}
        <div style={{ padding: "12px 10px", borderTop: "1px solid #f3f4f6" }}>
          <a
            href="/admin/studio"
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
              fontSize: 12,
              fontWeight: 600,
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              minHeight: 38,
            }}
          >
            <ExternalLinkIcon size={13} />
            {sidebarOpen && <span>Sanity Studio</span>}
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

      {/* ── MOBILE DRAWER OVERLAY ── */}
      {mobileDrawerOpen && (
        <div
          onClick={() => setMobileDrawerOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 99,
            backdropFilter: "blur(2px)",
          }}
        />
      )}

      {/* ── MOBILE SLIDE-OUT DRAWER ── */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        width: 270,
        background: "#fff",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        transform: mobileDrawerOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.25s cubic-bezier(.4,0,.2,1)",
        boxShadow: mobileDrawerOpen ? "0 0 25px rgba(0,0,0,0.3)" : "none",
      }}>
        <div style={{
          padding: "16px",
          borderBottom: "1px solid #f3f4f6",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "linear-gradient(135deg,#152049,#7a1421)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}>
              <SparkleIcon size={16} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800 }}>Admin Panel</div>
              <div style={{ fontSize: 10.5, color: "#9ca3af" }}>Apoorva Kaushal</div>
            </div>
          </div>
          <button
            onClick={() => setMobileDrawerOpen(false)}
            style={{ padding: "6px", background: "transparent", border: "none", color: "#6b7280", cursor: "pointer" }}
            aria-label="Close menu"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <nav style={{ padding: "14px 10px", flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
          <NavItem icon={<HomeIcon size={18} />} label="Overview" active={activeTab === "overview"} onClick={() => selectTab("overview")} />
          <NavItem icon={<EditIcon size={18} />} label="Content Editor" active={activeTab === "content"} onClick={() => selectTab("content")} badge="LIVE" />
          <NavItem icon={<ImageIcon size={18} />} label="Photo Manager" active={activeTab === "photos"} onClick={() => selectTab("photos")} badge={String(PHOTO_SLOTS.length)} />
          <NavItem icon={<GridIcon size={18} />} label="Gallery Items" active={activeTab === "gallery"} onClick={() => selectTab("gallery")} />
          <NavItem icon={<SettingsIcon size={18} />} label="Settings & SEO" active={activeTab === "settings"} onClick={() => selectTab("settings")} />
        </nav>

        <div style={{ padding: "14px", borderTop: "1px solid #f3f4f6" }}>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "10px",
              borderRadius: 8,
              background: "#152049",
              color: "#fff",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <ExternalLinkIcon size={14} /> View Live Website
          </a>
        </div>
      </div>

      {/* ── MAIN CONTENT WRAPPER ── */}
      <main style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>

        {/* ── MOBILE TOP HEADER ── */}
        <div className="admin-mobile-header" style={{
          position: "sticky",
          top: 0,
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          padding: "10px 14px",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 15,
          gap: 10,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={() => setMobileDrawerOpen(true)}
              style={{
                background: "#f3f4f6",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#111827",
                cursor: "pointer",
                minHeight: 38,
                minWidth: 38,
              }}
              aria-label="Open menu"
            >
              <MenuIcon size={18} />
            </button>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#111827" }}>
              {activeTab === "overview" && "Overview"}
              {activeTab === "content" && "Content Editor"}
              {activeTab === "photos" && "Photo Manager"}
              {activeTab === "gallery" && "Gallery"}
              {activeTab === "settings" && "Settings"}
            </div>
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {activeTab === "content" && (
              <button
                onClick={handleSaveContent}
                disabled={savingContent}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "7px 12px",
                  borderRadius: 7,
                  border: "none",
                  background: "#22c55e",
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: savingContent ? "not-allowed" : "pointer",
                  minHeight: 34,
                }}
              >
                <SaveIcon size={13} /> {savingContent ? "Saving…" : "Save"}
              </button>
            )}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: "7px 10px",
                borderRadius: 7,
                border: "1px solid #e5e7eb",
                background: "#f9fafb",
                color: "#374151",
                textDecoration: "none",
                fontSize: 12,
                fontWeight: 600,
                minHeight: 34,
              }}
            >
              <ExternalLinkIcon size={12} /> Site
            </a>
          </div>
        </div>

        {/* ── DESKTOP TOP BAR ── */}
        <div className="admin-desktop-sidebar admin-topbar-pad" style={{
          position: "sticky",
          top: 0,
          background: "rgba(248,249,251,0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #e5e7eb",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 10,
        }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#111827" }}>
              {activeTab === "overview" && "Dashboard Overview"}
              {activeTab === "content" && "Page Content Editor"}
              {activeTab === "photos" && "Photo Manager"}
              {activeTab === "gallery" && "Gallery Items"}
              {activeTab === "settings" && "Settings & SEO"}
            </div>
            <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 1 }}>
              {activeTab === "overview" && "Site performance stats and quick links"}
              {activeTab === "content" && "Edit text, bios, headings & pricing live across all pages"}
              {activeTab === "photos" && `${PHOTO_SLOTS.length} photo slots — tap or drag to replace`}
              {activeTab === "gallery" && "Manage video reels and gallery portfolio"}
              {activeTab === "settings" && "Global domain configuration and SEO meta status"}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {activeTab === "content" && (
              <button
                onClick={handleSaveContent}
                disabled={savingContent}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 18px",
                  borderRadius: 8,
                  border: "none",
                  background: "#22c55e",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: savingContent ? "not-allowed" : "pointer",
                  boxShadow: "0 2px 8px rgba(34,197,94,0.3)",
                }}
              >
                <SaveIcon size={14} /> {savingContent ? "Saving…" : "Save All Changes"}
              </button>
            )}
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
              <ExternalLinkIcon size={13} /> View Live Site
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
              <RefreshIcon size={13} /> Refresh Cache
            </button>
          </div>
        </div>

        {/* ── TAB CONTENT BODY ── */}
        <div className="admin-content-pad" style={{ flex: 1 }}>

          {/* ── TAB: OVERVIEW ── */}
          {activeTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Stats Grid */}
              <div className="admin-stat-grid">
                <StatCard label="Total Reach" value="2M+" sub="All-time across platforms" color="#7a1421" />
                <StatCard label="Avg. Reel Views" value="340K" sub="Per video (last 30 days)" color="#152049" />
                <StatCard label="Engagement Rate" value="6.8%" sub="Instagram + YouTube" color="#059669" />
                <StatCard label="Brands Collaborated" value="5+" sub="Active client campaigns" color="#d97706" />
                <StatCard label="Combined Followers" value="5K+" sub="Social community" color="#6366f1" />
                <StatCard label="Photo Slots" value={String(PHOTO_SLOTS.length)} sub="Original & custom" color="#ec4899" />
              </div>

              {/* Quick Actions */}
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: "#111827", marginBottom: 14 }}>Quick Management</div>
                <div className="admin-actions-grid">
                  {[
                    { label: "Edit Page Content", icon: <EditIcon size={16} />, tab: "content" as Tab },
                    { label: "Manage Photos", icon: <ImageIcon size={16} />, tab: "photos" as Tab },
                    { label: "Edit Gallery Items", icon: <GridIcon size={16} />, tab: "gallery" as Tab },
                    { label: "Settings & SEO", icon: <SettingsIcon size={16} />, tab: "settings" as Tab },
                  ].map((a) => (
                    <button
                      key={a.label}
                      onClick={() => selectTab(a.tab)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "12px 14px",
                        border: "1.5px solid #e5e7eb",
                        borderRadius: 8,
                        background: "#f9fafb",
                        cursor: "pointer",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#374151",
                        minHeight: 44,
                      }}
                    >
                      {a.icon} {a.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* How it works info banner */}
              <div style={{
                background: "rgba(21,32,73,0.05)",
                border: "1px solid rgba(21,32,73,0.12)",
                borderRadius: 10,
                padding: "14px 16px",
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
              }}>
                <div style={{ flexShrink: 0, color: "#152049", marginTop: 2 }}><InfoIcon size={16} /></div>
                <div style={{ fontSize: 12.5, color: "#374151", lineHeight: 1.55 }}>
                  <strong>Mobile &amp; Desktop Compatible:</strong> Use the <strong>Content Editor</strong> tab to change headlines, bios, and pricing. Use <strong>Photo Manager</strong> to preview default photos and replace any image on your phone or laptop.
                </div>
              </div>

              {/* All pages summary */}
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: "#111827", marginBottom: 12 }}>All Website Pages</div>
                <div className="admin-pages-grid">
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
                        fontSize: 12,
                        fontWeight: 500,
                        minHeight: 36,
                      }}
                    >
                      <span>{label}</span>
                      <span style={{ opacity: 0.5 }}><ExternalLinkIcon size={11} /></span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── TAB: CONTENT EDITOR ── */}
          {activeTab === "content" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {/* Section Sub-Navigation Tabs */}
              <div className="admin-subnav-scroll" style={{ display: "flex", gap: 6, borderBottom: "1px solid #e5e7eb", paddingBottom: 10 }}>
                {[
                  { id: "hero", label: "Hero" },
                  { id: "homepage", label: "Homepage Bio & Stats" },
                  { id: "about", label: "About Page" },
                  { id: "services", label: "Services & Pricing" },
                  { id: "contact", label: "Contact & Socials" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setContentSection(s.id as any)}
                    style={{
                      padding: "7px 14px",
                      borderRadius: 8,
                      border: contentSection === s.id ? "1.5px solid #7a1421" : "1.5px solid #e5e7eb",
                      background: contentSection === s.id ? "#7a1421" : "#fff",
                      color: contentSection === s.id ? "#fff" : "#374151",
                      fontSize: 12.5,
                      fontWeight: 600,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      minHeight: 36,
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* SECTION: HERO */}
              {contentSection === "hero" && (
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "18px 20px" }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#111827", marginBottom: 14 }}>Homepage Hero Content</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Hero Main Title / Name</label>
                      <input
                        type="text"
                        value={formData.heroTitle}
                        onChange={(e) => handleInputChange("heroTitle", e.target.value)}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, minHeight: 42 }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Hero Tagline</label>
                      <textarea
                        rows={2}
                        value={formData.heroTagline}
                        onChange={(e) => handleInputChange("heroTagline", e.target.value)}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, fontFamily: "inherit" }}
                      />
                    </div>
                    <div className="admin-form-row-2">
                      <div>
                        <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Hero Cursive Signature</label>
                        <input
                          type="text"
                          value={formData.heroSignature}
                          onChange={(e) => handleInputChange("heroSignature", e.target.value)}
                          style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, minHeight: 42 }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Domain Badge</label>
                        <input
                          type="text"
                          value={formData.domain}
                          onChange={(e) => handleInputChange("domain", e.target.value)}
                          style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, minHeight: 42 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION: HOMEPAGE */}
              {contentSection === "homepage" && (
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "18px 20px" }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#111827", marginBottom: 14 }}>Homepage Who Am I &amp; Stats</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Section Heading</label>
                      <input
                        type="text"
                        value={formData.whoAmIHeading}
                        onChange={(e) => handleInputChange("whoAmIHeading", e.target.value)}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, minHeight: 42 }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Bio Paragraph 1</label>
                      <textarea
                        rows={3}
                        value={formData.whoAmIBio1}
                        onChange={(e) => handleInputChange("whoAmIBio1", e.target.value)}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, fontFamily: "inherit" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Bio Paragraph 2</label>
                      <textarea
                        rows={3}
                        value={formData.whoAmIBio2}
                        onChange={(e) => handleInputChange("whoAmIBio2", e.target.value)}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, fontFamily: "inherit" }}
                      />
                    </div>
                    <div className="admin-form-row-4">
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Brands</label>
                        <input
                          type="text"
                          value={formData.statBrands}
                          onChange={(e) => handleInputChange("statBrands", e.target.value)}
                          style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 13.5, minHeight: 40 }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Reach</label>
                        <input
                          type="text"
                          value={formData.statReach}
                          onChange={(e) => handleInputChange("statReach", e.target.value)}
                          style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 13.5, minHeight: 40 }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Followers</label>
                        <input
                          type="text"
                          value={formData.statFollowers}
                          onChange={(e) => handleInputChange("statFollowers", e.target.value)}
                          style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 13.5, minHeight: 40 }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Experience</label>
                        <input
                          type="text"
                          value={formData.statExp}
                          onChange={(e) => handleInputChange("statExp", e.target.value)}
                          style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 13.5, minHeight: 40 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION: ABOUT */}
              {contentSection === "about" && (
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "18px 20px" }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#111827", marginBottom: 14 }}>About Page Bio &amp; Story</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div className="admin-form-row-2">
                      <div>
                        <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>About Page Hero Title</label>
                        <input
                          type="text"
                          value={formData.aboutHeroTitle}
                          onChange={(e) => handleInputChange("aboutHeroTitle", e.target.value)}
                          style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, minHeight: 42 }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>About Hero Subtitle</label>
                        <input
                          type="text"
                          value={formData.aboutHeroSub}
                          onChange={(e) => handleInputChange("aboutHeroSub", e.target.value)}
                          style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, minHeight: 42 }}
                        />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Story Heading</label>
                      <input
                        type="text"
                        value={formData.storyHeading}
                        onChange={(e) => handleInputChange("storyHeading", e.target.value)}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, minHeight: 42 }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Story Paragraph 1</label>
                      <textarea
                        rows={3}
                        value={formData.storyBio1}
                        onChange={(e) => handleInputChange("storyBio1", e.target.value)}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, fontFamily: "inherit" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Story Paragraph 2</label>
                      <textarea
                        rows={3}
                        value={formData.storyBio2}
                        onChange={(e) => handleInputChange("storyBio2", e.target.value)}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, fontFamily: "inherit" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Story Paragraph 3</label>
                      <textarea
                        rows={3}
                        value={formData.storyBio3}
                        onChange={(e) => handleInputChange("storyBio3", e.target.value)}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, fontFamily: "inherit" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION: SERVICES */}
              {contentSection === "services" && (
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "18px 20px" }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#111827", marginBottom: 14 }}>Services Packages &amp; Pricing</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {/* Starter */}
                    <div style={{ padding: 14, border: "1px solid #e5e7eb", borderRadius: 10, background: "#fafafa" }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: "#152049", marginBottom: 8 }}>Starter Package</div>
                      <div className="admin-package-row">
                        <input
                          type="text"
                          placeholder="Price"
                          value={formData.starterPrice}
                          onChange={(e) => handleInputChange("starterPrice", e.target.value)}
                          style={{ padding: "8px 10px", border: "1.5px solid #e5e7eb", borderRadius: 7, fontSize: 13.5, minHeight: 40 }}
                        />
                        <input
                          type="text"
                          placeholder="Short Description"
                          value={formData.starterDesc}
                          onChange={(e) => handleInputChange("starterDesc", e.target.value)}
                          style={{ padding: "8px 10px", border: "1.5px solid #e5e7eb", borderRadius: 7, fontSize: 13.5, minHeight: 40 }}
                        />
                      </div>
                    </div>

                    {/* Growth */}
                    <div style={{ padding: 14, border: "1px solid #e5e7eb", borderRadius: 10, background: "#fafafa" }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: "#7a1421", marginBottom: 8 }}>Growth Package (Popular)</div>
                      <div className="admin-package-row">
                        <input
                          type="text"
                          placeholder="Price"
                          value={formData.growthPrice}
                          onChange={(e) => handleInputChange("growthPrice", e.target.value)}
                          style={{ padding: "8px 10px", border: "1.5px solid #e5e7eb", borderRadius: 7, fontSize: 13.5, minHeight: 40 }}
                        />
                        <input
                          type="text"
                          placeholder="Short Description"
                          value={formData.growthDesc}
                          onChange={(e) => handleInputChange("growthDesc", e.target.value)}
                          style={{ padding: "8px 10px", border: "1.5px solid #e5e7eb", borderRadius: 7, fontSize: 13.5, minHeight: 40 }}
                        />
                      </div>
                    </div>

                    {/* Premium */}
                    <div style={{ padding: 14, border: "1px solid #e5e7eb", borderRadius: 10, background: "#fafafa" }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: "#111827", marginBottom: 8 }}>Premium Package</div>
                      <div className="admin-package-row">
                        <input
                          type="text"
                          placeholder="Price"
                          value={formData.premiumPrice}
                          onChange={(e) => handleInputChange("premiumPrice", e.target.value)}
                          style={{ padding: "8px 10px", border: "1.5px solid #e5e7eb", borderRadius: 7, fontSize: 13.5, minHeight: 40 }}
                        />
                        <input
                          type="text"
                          placeholder="Short Description"
                          value={formData.premiumDesc}
                          onChange={(e) => handleInputChange("premiumDesc", e.target.value)}
                          style={{ padding: "8px 10px", border: "1.5px solid #e5e7eb", borderRadius: 7, fontSize: 13.5, minHeight: 40 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION: CONTACT */}
              {contentSection === "contact" && (
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "18px 20px" }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#111827", marginBottom: 14 }}>Contact Info &amp; Social Handles</div>
                  <div className="admin-form-row-2">
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>WhatsApp (with country code)</label>
                      <input
                        type="text"
                        value={formData.whatsappNumber}
                        onChange={(e) => handleInputChange("whatsappNumber", e.target.value)}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, minHeight: 42 }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, minHeight: 42 }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Instagram Handle</label>
                      <input
                        type="text"
                        value={formData.instagramHandle}
                        onChange={(e) => handleInputChange("instagramHandle", e.target.value)}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, minHeight: 42 }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>YouTube Handle</label>
                      <input
                        type="text"
                        value={formData.youtubeHandle}
                        onChange={(e) => handleInputChange("youtubeHandle", e.target.value)}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, minHeight: 42 }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Location / City</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, minHeight: 42 }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#374151", marginBottom: 5, textTransform: "uppercase" }}>Postal PIN Code</label>
                      <input
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange("postalCode", e.target.value)}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, minHeight: 42 }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Save Action Bar */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
                border: "1.5px solid #e5e7eb",
                borderRadius: 12,
                padding: "14px 16px",
              }}>
                <div style={{ fontSize: 12, color: "#6b7280" }}>
                  Saved content updates all pages instantly without rebuilding.
                </div>
                <button
                  onClick={handleSaveContent}
                  disabled={savingContent}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 22px",
                    borderRadius: 8,
                    border: "none",
                    background: "#22c55e",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: savingContent ? "not-allowed" : "pointer",
                    boxShadow: "0 2px 8px rgba(34,197,94,0.3)",
                    minHeight: 42,
                  }}
                >
                  <SaveIcon size={15} /> {savingContent ? "Saving…" : "Save All Changes"}
                </button>
              </div>
            </div>
          )}

          {/* ── TAB: PHOTOS ── */}
          {activeTab === "photos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
              {/* Photo summary bar */}
              <div style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 10,
                padding: "12px 16px",
                display: "flex",
                gap: 12,
                alignItems: "center",
                flexWrap: "wrap",
                fontSize: 12,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#374151" }}>
                  <span style={{ background: "#f3f4f6", borderRadius: 4, padding: "2px 6px", fontSize: 10, fontWeight: 700 }}>DEFAULT</span>
                  <span>Original photo in use</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#374151" }}>
                  <span style={{ background: "#22c55e", borderRadius: 4, padding: "2px 6px", fontSize: 10, fontWeight: 700, color: "#fff" }}>NEW</span>
                  <span>Replaced photo</span>
                </div>
                <div style={{ marginLeft: "auto", color: "#9ca3af" }}>
                  {Object.values(uploadStates).filter(s => s === "success").length} of {PHOTO_SLOTS.length} replaced
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
                      gap: 8,
                      marginBottom: 14,
                      paddingBottom: 8,
                      borderBottom: "2px solid #f3f4f6",
                    }}>
                      <div style={{
                        width: 4,
                        height: 18,
                        borderRadius: 2,
                        background: "linear-gradient(to bottom,#152049,#7a1421)",
                        flexShrink: 0,
                      }} />
                      <h2 style={{ fontSize: 14, fontWeight: 800, color: "#111827" }}>{section}</h2>
                      <span style={{
                        background: "#f3f4f6",
                        color: "#6b7280",
                        borderRadius: 20,
                        padding: "1px 7px",
                        fontSize: 10.5,
                        fontWeight: 600,
                      }}>{slots.length}</span>
                    </div>
                    <div className="admin-photos-grid">
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
            <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "20px 18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <GridIcon size={18} />
                <h2 style={{ fontSize: 15, fontWeight: 800, color: "#111827" }}>Gallery &amp; Video Reels</h2>
              </div>
              <div style={{
                background: "rgba(21,32,73,0.04)",
                border: "1px solid rgba(21,32,73,0.1)",
                borderRadius: 10,
                padding: "14px 16px",
                marginBottom: 16,
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
              }}>
                <div style={{ color: "#152049", flexShrink: 0, marginTop: 1 }}><InfoIcon size={16} /></div>
                <div style={{ fontSize: 12.5, color: "#374151", lineHeight: 1.55 }}>
                  The interactive website gallery features 6 category tabs (All, Videos &amp; Reels, Photos, Portraits, UGC, Devotional) and supports MP4 video lightbox playback. Manage items directly through Sanity Studio.
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href="/admin/studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "9px 16px",
                    borderRadius: 8,
                    background: "linear-gradient(135deg,#152049,#7a1421)",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 700,
                    minHeight: 40,
                  }}
                >
                  <ExternalLinkIcon size={13} /> Open Sanity Studio
                </a>
                <a
                  href="/#gallery"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "9px 16px",
                    borderRadius: 8,
                    border: "1.5px solid #e5e7eb",
                    background: "#fff",
                    color: "#374151",
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 600,
                    minHeight: 40,
                  }}
                >
                  <ExternalLinkIcon size={13} /> Preview Live Gallery
                </a>
              </div>
            </div>
          )}

          {/* ── TAB: SETTINGS & SEO ── */}
          {activeTab === "settings" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {/* Profile Variables */}
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <UserIcon size={16} />
                  <h2 style={{ fontSize: 14, fontWeight: 800, color: "#111827" }}>Profile Overview</h2>
                </div>
                <div className="admin-form-row-2">
                  {[
                    { label: "Full Name", value: formData.heroTitle },
                    { label: "WhatsApp", value: formData.whatsappNumber },
                    { label: "Email", value: formData.email },
                    { label: "Instagram", value: formData.instagramHandle },
                    { label: "YouTube", value: formData.youtubeHandle },
                    { label: "Domain", value: formData.domain },
                  ].map((f) => (
                    <div key={f.label}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#6b7280", marginBottom: 4, textTransform: "uppercase" }}>{f.label}</div>
                      <div style={{
                        padding: "8px 12px",
                        border: "1.5px solid #e5e7eb",
                        borderRadius: 7,
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#111827",
                        background: "#f9fafb",
                        minHeight: 38,
                        display: "flex",
                        alignItems: "center",
                      }}>{f.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEO Checklist */}
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <SettingsIcon size={16} />
                  <h2 style={{ fontSize: 14, fontWeight: 800, color: "#111827" }}>SEO &amp; Indexing Status</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {[
                    { label: "Google Search Console", status: "Active", color: "#22c55e" },
                    { label: "Google Analytics (G-GXG8HVCP8L)", status: "Active", color: "#22c55e" },
                    { label: "Person JSON-LD Schema", status: "Active", color: "#22c55e" },
                    { label: "FAQ JSON-LD Schema", status: "Active", color: "#22c55e" },
                    { label: "LocalBusiness Schema", status: "Active", color: "#22c55e" },
                    { label: "Sitemap.xml", status: "Generated", color: "#6366f1" },
                    { label: "Robots.txt", status: "Configured", color: "#6366f1" },
                  ].map((item) => (
                    <div key={item.label} style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      border: "1px solid #f3f4f6",
                      borderRadius: 7,
                      background: "#fafafa",
                    }}>
                      <span style={{ fontSize: 12.5, color: "#374151", fontWeight: 500 }}>{item.label}</span>
                      <span style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: item.color,
                        background: item.color + "18",
                        padding: "2px 7px",
                        borderRadius: 20,
                      }}>{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployment Commands */}
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ fontSize: 13.5, fontWeight: 800, color: "#111827", marginBottom: 10 }}>Git &amp; Vercel Deployment</div>
                <div style={{ background: "#111827", borderRadius: 8, padding: "12px 14px", fontFamily: "monospace", fontSize: 12, color: "#86efac", lineHeight: 1.8, overflowX: "auto" }}>
                  <div><span style={{ color: "#9ca3af" }}>#</span> Push changes to live site</div>
                  <div>git add .</div>
                  <div>git commit -m &quot;Update content &amp; photos&quot;</div>
                  <div>git push origin main</div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ── MOBILE BOTTOM NAVIGATION BAR ── */}
        <nav className="admin-mobile-bottom-nav" style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#fff",
          borderTop: "1px solid #e5e7eb",
          padding: "6px 4px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          zIndex: 30,
          boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
        }}>
          {[
            { id: "overview", label: "Home", icon: <HomeIcon size={18} /> },
            { id: "content", label: "Content", icon: <EditIcon size={18} /> },
            { id: "photos", label: "Photos", icon: <ImageIcon size={18} /> },
            { id: "gallery", label: "Gallery", icon: <GridIcon size={18} /> },
            { id: "settings", label: "Settings", icon: <SettingsIcon size={18} /> },
          ].map((item) => {
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => selectTab(item.id as Tab)}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                  padding: "6px 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: active ? "#7a1421" : "#6b7280",
                  fontWeight: active ? 700 : 500,
                  fontSize: 10.5,
                  minHeight: 48,
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </main>

      {/* ── TOAST NOTIFICATIONS ── */}
      {toastMsg && (
        <div className="admin-toast-box" style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          background: "#111827",
          color: "#fff",
          borderRadius: 10,
          padding: "12px 18px",
          fontSize: 13,
          fontWeight: 600,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
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
