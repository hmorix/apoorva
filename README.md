# 🚀 Apoorva Kaushal — Full Website (Next.js)

**Live URL:** https://apoorvakaushal.com  
**Framework:** Next.js 15 (App Router, TypeScript)  
**Hosting:** Vercel  
**Social Handle:** @apoorva_kaushal

---

## 📁 Project Structure

```
apoorva-kaushal-next/
├── app/
│   ├── layout.tsx          ← Root layout (SEO metadata, JSON-LD Person schema, WhatsApp float)
│   ├── globals.css         ← Full design system (tokens, components, responsive)
│   ├── page.tsx            ← Homepage (hero, stats, services, case study teaser, FAQ)
│   ├── about/page.tsx      ← About page (bio, qualifications, content types)
│   ├── services/page.tsx   ← Services & pricing page (6 services with features)
│   ├── case-studies/       ← 4 detailed case studies with real metrics
│   ├── dashboard/          ← Public analytics dashboard (reach, views, ads, chart)
│   ├── hire/page.tsx       ← Hire page (3 packages + form + testimonials)
│   ├── contact/page.tsx    ← Contact page (India focus, LocalBusiness schema)
│   ├── terms/page.tsx      ← Terms & Conditions
│   ├── privacy/page.tsx    ← Privacy Policy
│   ├── legal/page.tsx      ← Legal Agreement
│   ├── sitemap.ts          ← Auto-generated sitemap.xml
│   └── robots.ts           ← robots.txt
├── components/
│   ├── Navbar.tsx          ← Sticky responsive navbar with mobile hamburger
│   └── Footer.tsx          ← Footer with social links, quick links, legal
├── public/                 ← Static assets (add og-image.jpg here)
├── package.json
├── next.config.ts
├── tsconfig.json
├── vercel.json             ← Vercel deployment config
└── .gitignore
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| `--navy` | `#152049` |
| `--navy-2` | `#1c2b5c` |
| `--maroon` | `#7a1421` |
| `--paper` | `#f4f4f2` |
| `--white` | `#ffffff` |
| `--muted` | `#5b5f6b` |

**Fonts:** Anton (display/headings) · Inter (body) · Caveat (script accents)

---

## 🔑 SEO Strategy

- **Person JSON-LD schema** on every page (root layout)
- **LocalBusiness JSON-LD** on Contact page
- **FAQ JSON-LD** on Homepage
- **sitemap.xml** auto-generated at `/sitemap.xml`
- **robots.txt** at `/robots.txt`
- **Keyword clusters** per page (from keywords.txt — 220 keywords):
  - Homepage → Brand + Identity keywords
  - About → Biography + journey keywords
  - Services → Hiring intent keywords
  - Case Studies → Results keywords
  - Dashboard → Analytics keywords
  - Contact → Local/GEO keywords (Hathras, UP, India)

---

## 📋 Pages Checklist

- [x] Homepage (`/`)
- [x] About (`/about`)
- [x] Services (`/services`)
- [x] Case Studies (`/case-studies`)
- [x] Dashboard (`/dashboard`)
- [x] Hire (`/hire`)
- [x] Contact (`/contact`) — India, Hathras, UP
- [x] Terms & Conditions (`/terms`)
- [x] Privacy Policy (`/privacy`)
- [x] Legal Agreement (`/legal`)
- [x] sitemap.xml
- [x] robots.txt

---

## 🚀 Deploy to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit — Apoorva Kaushal website"
git remote add origin https://github.com/YOUR_USERNAME/apoorva-kaushal.git
git push -u origin main

# 2. Go to vercel.com → Import Git Repository → Select repo
# 3. Set domain: apoorvakaushal.com
# 4. Click Deploy
```

---

## 🔧 Setup Needed After Deploy

1. **Google Search Console** — Add site, get verification code → paste into `layout.tsx` line: `verification: { google: "REPLACE_WITH_..." }`
2. **Formspree** — Create account at formspree.io, get form ID → replace `YOUR_FORM_ID` in `/hire/page.tsx` and `/contact/page.tsx`
3. **WhatsApp number** — Replace `919XXXXXXXXX` with real number in all files
4. **OG Image** — Add `og-image.jpg` (1200×630px) to `/public/` folder
5. **Google Analytics** — Add GA4 tracking code to `layout.tsx`

---

## 👤 Subject Details
- **Name:** Apoorva Kaushal
- **Also known as:** Apoova, Apoorva Kuashal, Apoorva Kaushal Hathras, Apoorva kaushal HMorix
- **Location:** Hathras, Uttar Pradesh, India 🇮🇳
- **Handle:** @apoorva_kaushal (all platforms)
- **Email:** apoorva@apoorvakaushal.com

---

## 📝 Conversation Memory

**Conversation ID:** `350186e6-a3d0-4e89-ae9a-16d751e004ca`  
**Memory File:** `/root/.gemini/antigravity-cli/brain/350186e6-a3d0-4e89-ae9a-16d751e004ca/PROJECT_MEMORY.md`  

If credits ran out, resume from: `cd "/root/Apoorva Kaushal/apoorva-kaushal-next" && npm run dev`
