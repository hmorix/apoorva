"use client";
import React, { useState, useEffect } from "react";

export interface GalleryItem {
  id: string;
  type: "photo" | "video";
  src: string;
  poster: string;
  title: string;
  category: "portrait" | "video" | "ugc" | "devotional" | "lifestyle";
  caption: string;
  tag: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "v1",
    type: "video",
    src: "/photos/VID_33401029_075125_655.mp4",
    poster: "/photos/profile.jpg",
    title: "Instagram Reel — Lifestyle & Aesthetic",
    category: "video",
    caption: "Short-form video styled for high watch-time and organic discoverability.",
    tag: "Reel / Video",
  },
  {
    id: "v2",
    type: "video",
    src: "/photos/VID_53140524_081603_903.mp4",
    poster: "/photos/IMG-20260205-WA0035.jpg",
    title: "Trending Hindi Content & Dialogue",
    category: "video",
    caption: "Relatable storytelling connecting with Hindi-speaking audiences across India.",
    tag: "Trending Reel",
  },
  {
    id: "v3",
    type: "video",
    src: "/photos/lv_0_20260127221107.mp4",
    poster: "/photos/IMG-20260608-WA0016.jpg",
    title: "Full Campaign Reel & Narrative",
    category: "video",
    caption: "Dynamic creative campaign edit featuring authentic UGC styling and soundtrack.",
    tag: "Campaign Video",
  },
  {
    id: "p1",
    type: "photo",
    src: "/photos/IMG-20260205-WA0035.jpg",
    poster: "/photos/IMG-20260205-WA0035.jpg",
    title: "Editorial Portrait — Apoorva Kaushal",
    category: "portrait",
    caption: "Creative director and social media manager portrait in Hathras, UP.",
    tag: "Portrait",
  },
  {
    id: "p2",
    type: "photo",
    src: "/photos/IMG-20260106-WA0010.jpg",
    poster: "/photos/IMG-20260106-WA0010.jpg",
    title: "Festive & Ethnic Lookbook Campaign",
    category: "portrait",
    caption: "Traditional Indian wear styling for festival and cultural campaigns.",
    tag: "Festive Style",
  },
  {
    id: "p3",
    type: "photo",
    src: "/photos/IMG-20260202-WA0003.jpg",
    poster: "/photos/IMG-20260202-WA0003.jpg",
    title: "Retro Sunglasses & Vinyl Aesthetic",
    category: "ugc",
    caption: "Vintage pastel aesthetic shot for lifestyle product integration.",
    tag: "UGC / Aesthetic",
  },
  {
    id: "p4",
    type: "photo",
    src: "/photos/IMG-20241220-WA0002.jpg",
    poster: "/photos/IMG-20241220-WA0002.jpg",
    title: "Casual Creator Behind-the-Scenes",
    category: "lifestyle",
    caption: "Everyday creator energy and relatable mood for student and youth audiences.",
    tag: "Lifestyle",
  },
  {
    id: "p5",
    type: "photo",
    src: "/photos/IMG-20260608-WA0016.jpg",
    poster: "/photos/IMG-20260608-WA0016.jpg",
    title: "Radha Raman Devotional Quote Post",
    category: "devotional",
    caption: "'When the world falls silent under the midnight sky, Radha Raman's love shines bright.'",
    tag: "Krishna Content",
  },
  {
    id: "p6",
    type: "photo",
    src: "/photos/IMG-20250107-WA0012.jpg",
    poster: "/photos/IMG-20250107-WA0012.jpg",
    title: "Corporate Blazer & Business Portfolio",
    category: "portrait",
    caption: "Professional digital strategist and brand consultant profile shot.",
    tag: "Business",
  },
  {
    id: "p7",
    type: "photo",
    src: "/photos/IMG-20240205-WA0003.jpg",
    poster: "/photos/IMG-20240205-WA0003.jpg",
    title: "Playful Pop-Art Mehndi & Filters",
    category: "ugc",
    caption: "Youth-centric pop stickers and Mehndi art for creative campaigns.",
    tag: "Creative",
  },
  {
    id: "p8",
    type: "photo",
    src: "/photos/IMG-20260108-WA0003.jpg",
    poster: "/photos/IMG-20260108-WA0003.jpg",
    title: "Natural Light Floral Portrait",
    category: "portrait",
    caption: "Authentic, relatable everyday look with delicate floral accent.",
    tag: "Portrait",
  },
  {
    id: "p9",
    type: "photo",
    src: "/photos/IMG-20260212-WA0000.jpg",
    poster: "/photos/IMG-20260212-WA0000.jpg",
    title: "Morning Routine & Sunflower Mug UGC",
    category: "ugc",
    caption: "Wellness and morning beverage product review creative concept.",
    tag: "UGC",
  },
  {
    id: "p10",
    type: "photo",
    src: "/photos/IMG_20260131_225741.jpg",
    poster: "/photos/IMG_20260131_225741.jpg",
    title: "Desi Art & Festival Vibes",
    category: "devotional",
    caption: "Traditional Indian Mehndi patterns and cultural celebration moments.",
    tag: "Culture",
  },
  {
    id: "p11",
    type: "photo",
    src: "/photos/Screenshot_2025-11-15-14-35-32-55.jpg",
    poster: "/photos/Screenshot_2025-11-15-14-35-32-55.jpg",
    title: "Classic Retro Hindi Cinema Story",
    category: "lifestyle",
    caption: "Nostalgic storytelling referencing timeless Hindi music and film classics.",
    tag: "Nostalgia",
  },
  {
    id: "p12",
    type: "photo",
    src: "/photos/Screenshot_2026-01-16-12-45-41-89.jpg",
    poster: "/photos/Screenshot_2026-01-16-12-45-41-89.jpg",
    title: "Pink Cozy Knit & Music Vibes",
    category: "lifestyle",
    caption: "Casual cozy creator mood with doodle art and music overlay.",
    tag: "Aesthetic",
  },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredItems = galleryItems.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "videos") return item.type === "video";
    if (activeTab === "photos") return item.type === "photo";
    if (activeTab === "portraits") return item.category === "portrait";
    if (activeTab === "ugc") return item.category === "ugc" || item.category === "lifestyle";
    if (activeTab === "devotional") return item.category === "devotional";
    return true;
  });

  return (
    <section className="gallery-section" id="gallery">
      {/* Header */}
      <div className="gallery-header animate-fade-in">
        <div>
          <span className="script" style={{ fontSize: 22 }}>Visual Portfolio</span>
          <h2 className="display" style={{ fontSize: "clamp(26px, 3.2vw, 42px)", color: "var(--navy)" }}>
            PHOTOS &amp; VIDEOS GALLERY
          </h2>
          <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 4, maxWidth: 500, lineHeight: 1.5 }}>
            Explore high-performing Reels, UGC shoots, creative photography, and devotional storyboards. Click any card to preview.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="gallery-filter-tabs" role="tablist">
          {[
            { key: "all", label: `All (${galleryItems.length})` },
            { key: "videos", label: `Videos & Reels (3)` },
            { key: "photos", label: `Photos (${galleryItems.filter(i => i.type === "photo").length})` },
            { key: "portraits", label: "Portraits" },
            { key: "ugc", label: "UGC & Aesthetic" },
            { key: "devotional", label: "Devotional" },
          ].map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`gallery-tab-btn ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="gallery-card animate-fade-in"
            onClick={() => setSelectedItem(item)}
            tabIndex={0}
            role="button"
            aria-label={`View ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedItem(item);
              }
            }}
          >
            <div className="gallery-card-media">
              <span className="gallery-card-badge">{item.tag}</span>

              {item.type === "video" ? (
                <>
                  <img
                    src={item.poster}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="gallery-card-play-btn" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--navy)">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>

            <div className="gallery-card-info">
              <div className="gallery-card-title">{item.title}</div>
              <div className="gallery-card-subtitle">{item.caption}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedItem && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedItem(null)}
              aria-label="Close preview modal"
            >
              ✕
            </button>

            <div className="modal-media-container">
              {selectedItem.type === "video" ? (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  style={{ maxHeight: "68vh", width: "100%" }}
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  decoding="async"
                  style={{ maxHeight: "68vh", objectFit: "contain" }}
                />
              )}
            </div>

            <div className="modal-caption">
              <span className="tag tag-maroon" style={{ marginBottom: 6 }}>{selectedItem.tag}</span>
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
