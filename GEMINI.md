# Project Configuration & Guidelines for Gemini / Antigravity

## Environment Context
- **Environment**: Termux inside Ubuntu (Mobile / Resource-constrained environment).
- **Execution Rule**: **DO NOT run `npm run build` or heavy local compilation commands**.
- **Deployment**: Automatic CI/CD build and deployment occurs on **Vercel** when commits are pushed to `origin main`.
- **Primary Deployment Workflow**: Make edits, stage, commit, and push directly via `git push origin main`.

---

## Architecture: Content & Media Management
1. **Admin CMS Studio**:
   - Access URL: `/hmorix/admin`
   - Database: **MongoDB Atlas** (`site_content` collection, `doc._id = "live_site_content"`).
   - Media Storage: **Google Drive** with direct OAuth2 service account integration, fallback to Cloudinary/local.
   - Editability: 100% editable across all pages (Home, About, Services, Hire, Contact, Case Studies, Dashboard, FAQs, Gallery items, and all 24 photo slots).
   - Zero Emojis: All icons are pure inline SVGs for professional aesthetics and mobile responsiveness.

2. **Sync & Fast Static Rendering**:
   - The frontend reads synchronously from `data/site-content.json` via `getLocalContent()` in [lib/contentStore.ts](file:///root/Apoorva%20Kaushal/apoorva-kaushal-next/lib/contentStore.ts).
   - Visitors experience **instant, zero-latency page loads** with zero database blocking.
   - When content is saved or published in `/hmorix/admin`, it updates MongoDB Atlas and automatically writes to `data/site-content.json`.
   - Running `npm run sync-live` (`scripts/sync-content.mjs`) pulls the latest published content and downloads all remote Google Drive photos directly to `public/photos/` for permanent static hosting.

3. **UI & Styling Integrity**:
   - Keep all original classes, layouts, and structures in [app/globals.css](file:///root/Apoorva%20Kaushal/apoorva-kaushal-next/app/globals.css) intact.
   - All pages ([app/services/page.tsx](file:///root/Apoorva%20Kaushal/apoorva-kaushal-next/app/services/page.tsx), [app/hire/page.tsx](file:///root/Apoorva%20Kaushal/apoorva-kaushal-next/app/hire/page.tsx), [app/about/page.tsx](file:///root/Apoorva%20Kaushal/apoorva-kaushal-next/app/about/page.tsx), [app/contact/page.tsx](file:///root/Apoorva%20Kaushal/apoorva-kaushal-next/app/contact/page.tsx), [app/case-studies/page.tsx](file:///root/Apoorva%20Kaushal/apoorva-kaushal-next/app/case-studies/page.tsx), [app/page.tsx](file:///root/Apoorva%20Kaushal/apoorva-kaushal-next/app/page.tsx)) maintain their rich original card grids, badges, and forms.
