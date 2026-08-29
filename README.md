# 🚀 Apoorva Kaushal — Full Production Website & CMS (Next.js)

**Live Domain:** https://apoorva.hmorix.in (and https://apoorvakaushal.com)  
**Framework:** Next.js 15 (App Router, TypeScript)  
**Hosting:** Vercel  
**Social Handles:** `@apoorva__kaushal` (Instagram), `@_apoorva7__` (YouTube), `@apoorva_kaushal` (Pan-platform)  
**Git Repo:** `https://github.com/hmorix/apoorva.git` (Branch: `main`)

---

## 📁 Project Structure

```
apoorva-kaushal-next/
├── app/
│   ├── layout.tsx             ← Root layout (SEO metadata, JSON-LD Person schema, WhatsApp float)
│   ├── globals.css            ← Full design system (tokens, components, responsive)
│   ├── page.tsx               ← Homepage (hero, stats, services, case study teaser, FAQ)
│   ├── about/page.tsx         ← About page (bio, qualifications, content pillars, stats)
│   ├── services/page.tsx      ← Services & pricing page (6 services + 4-step process)
│   ├── case-studies/page.tsx  ← 4 detailed case studies with real metrics (120% growth, 3.2× ROAS)
│   ├── dashboard/page.tsx     ← Public analytics dashboard (reach, views, ads, chart)
│   ├── hire/page.tsx          ← Hire page (Starter/Growth/Premium packages + form + WhatsApp)
│   ├── contact/page.tsx       ← Contact page (India focus, Hathras coordinates, LocalBusiness schema)
│   ├── qna/page.tsx           ← Q&A knowledge base for Google AI Overviews & Search Entities
│   ├── terms/page.tsx         ← Terms & Conditions
│   ├── privacy/page.tsx       ← Privacy Policy
│   ├── legal/page.tsx         ← Legal Agreement
│   ├── admin/
│   │   ├── layout.tsx         ← Dedicated standalone Admin Layout
│   │   └── [[...tool]]/page.tsx ← Custom Admin Dashboard (Content Editor + Photo Manager + Settings)
│   ├── api/admin/
│   │   ├── content/route.ts   ← GET / POST API for live page text editing
│   │   └── upload/route.ts    ← Image upload API for replacing website photos
│   ├── sitemap.ts             ← Auto-generated sitemap.xml
│   └── robots.ts              ← robots.txt
├── components/
│   ├── Navbar.tsx             ← Sticky responsive navbar with mobile drawer & Q&A link
│   ├── Footer.tsx             ← Footer with highlights, social links, quick links, legal
│   ├── Gallery.tsx            ← Interactive Photos & Reels gallery with video lightbox
│   └── Icons.tsx              ← Clean, modern SVG icon set (no emojis)
├── data/
│   └── site-content.json      ← Local content store for live text editing across all pages
├── lib/
│   └── contentStore.ts        ← Server helper for reading & saving site-content.json
├── sanity/
│   ├── schemaTypes/           ← Clean schema definitions (emojis replaced with icons)
│   ├── components/            ← ImageWithDefault custom Sanity input component
│   └── lib/                   ← Sanity GROQ queries with local content store auto-merging
├── public/photos/             ← Static and uploaded assets (portraits, thumbnails, MP4s)
└── package.json
```

---

## 🎛 Admin Dashboard (`/admin`)

Access the custom management panel at `/admin`:

1. **Overview Tab:** System KPIs, verified reach stats, and direct links to all website pages.
2. **Page Content Editor (`content`):**
   - Live editing of **Homepage Hero & Tagline**, **Who Am I Bio & Stats**, **About Page Story**, **Services Packages & Pricing**, and **Contact Info & Socials**.
   - One-click **"Save All Changes"** persists directly to `data/site-content.json` and updates all pages in real time.
3. **Photo Manager (`photos`):**
   - Shows all **23 website photos** with their original default image previews.
   - Drag-and-drop or click to upload replacement photos with live instant preview, green `NEW` status badge, and **"Revert to default"** capability.
4. **Gallery Items (`gallery`):** Deep link to Sanity Studio for Reels and interactive items.
5. **Settings & SEO (`settings`):** Global profile variables, Google Search Console, Google Analytics (`G-GXG8HVCP8L`), and Git deploy commands.

---

## 🎨 Design System

| Token | Value | Description |
|---|---|---|
| `--navy` | `#152049` | Primary deep brand navy |
| `--navy-2` | `#1c2b5c` | Secondary dark blue |
| `--maroon` | `#7a1421` | Accent crimson / maroon |
| `--paper` | `#f4f4f2` | Clean neutral card background |
| `--white` | `#ffffff` | Surface white |
| `--muted` | `#5b5f6b` | Secondary text |

**Typography:** Anton (display headers) · Inter (body) · Caveat (cursive signature accents)

---

## 🔑 SEO & AEO Strategy

- **Person JSON-LD Schema:** Injected in root layout (`app/layout.tsx`).
- **LocalBusiness JSON-LD:** On Contact page (`app/contact/page.tsx`).
- **FAQ JSON-LD Schema:** On Homepage (`app/page.tsx`) and Q&A page (`app/qna/page.tsx`).
- **Q&A Knowledge Base (`/qna`):** Verified entity details, roots in Hathras UP, HMorix collaboration, content pillars (Hindi Comedy, Parodies, Knowledge, Krishna Prem), and official handles.
- **Sitemap & Robots:** Auto-generated at `/sitemap.xml` and `/robots.txt`.

---

## 📋 Pages Checklist

- [x] Homepage (`/`)
- [x] About (`/about`)
- [x] Services (`/services`)
- [x] Case Studies (`/case-studies`)
- [x] Dashboard (`/dashboard`)
- [x] Hire (`/hire`)
- [x] Contact (`/contact`) — Hathras, UP, India
- [x] Q&A Knowledge Base (`/qna`)
- [x] Custom Admin Dashboard (`/admin`)
- [x] Terms & Conditions (`/terms`)
- [x] Privacy Policy (`/privacy`)
- [x] Legal Agreement (`/legal`)
- [x] sitemap.xml
- [x] robots.txt

---

## 🚀 Quick Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev

# 3. Build for production
npm run build

# 4. Commit and push to GitHub
git add .
git commit -m "Update site content, photos and features"
git push -u origin main
```

---

## 📝 Conversation Memory Reference

**Current Conversation ID:** `39a0fe2a-5da5-430f-8d7c-71376f34a3fe`  
**Memory File:** `/root/.gemini/antigravity-cli/brain/39a0fe2a-5da5-430f-8d7c-71376f34a3fe/PROJECT_MEMORY.md`
