import siteContentJson from "@/data/site-content.json";

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

export interface ServiceItem {
  id?: string;
  name: string;
  tagline: string;
  price: string;
  desc: string;
  features: string[];
}

export interface PricingPackage {
  id?: string;
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface QualificationItem {
  title: string;
  org: string;
}

export interface ContentPillar {
  title: string;
  desc: string;
  stats: string;
}

export interface CreatorValue {
  title: string;
  desc: string;
}

export interface CaseStudyItem {
  num: string;
  brand: string;
  category: string;
  tagline: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: { num: string; label: string }[];
  tags: string[];
  visual?: string;
}

export interface KpiItem {
  label: string;
  num: string;
  change: string;
  up: boolean;
  sub: string;
}

export interface PlatformItem {
  name: string;
  handle: string;
  followers: string;
  pct: number;
  fill: string;
}

export interface AudienceLocation {
  loc: string;
  pct: number;
}

export interface CampaignItem {
  name: string;
  platform: string;
  reach: string;
  spend: string;
  roas: string;
  status: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  hero: {
    heroTitle: string;
    heroTagline: string;
    heroSignature: string;
    domain: string;
    badge1?: string;
    badge2?: string;
  };
  homepage: {
    whoAmIHeading: string;
    whoAmIBio1: string;
    whoAmIBio2: string;
    statBrands: string;
    statReach: string;
    statFollowers: string;
    statExp: string;
    statBrandsSub?: string;
    statReachSub?: string;
    statFollowersSub?: string;
    statExpSub?: string;
    workSectionTitle?: string;
    workSectionSub?: string;
    ctaTitle?: string;
    ctaSub?: string;
    ctaButtonText?: string;
  };
  about: {
    pageHeroTitle: string;
    pageHeroSub: string;
    storyHeading: string;
    storyBio1: string;
    storyBio2: string;
    storyBio3: string;
    qualifications?: QualificationItem[];
    contentPillars?: ContentPillar[];
    brandCategories?: string[];
    creatorValues?: CreatorValue[];
  };
  services: {
    pageHeroTitle?: string;
    pageHeroSub?: string;
    starterPrice: string;
    starterPeriod: string;
    starterDesc: string;
    growthPrice: string;
    growthPeriod: string;
    growthDesc: string;
    premiumPrice: string;
    premiumPeriod: string;
    premiumDesc: string;
    servicesList?: ServiceItem[];
    packages?: PricingPackage[];
    processSteps?: ProcessStep[];
  };
  hire?: {
    pageHeroTitle?: string;
    pageHeroSub?: string;
    packages?: PricingPackage[];
  };
  contact: {
    whatsappNumber: string;
    email: string;
    instagramHandle: string;
    instagramUrl: string;
    youtubeHandle: string;
    youtubeUrl: string;
    twitterUrl: string;
    facebookUrl: string;
    location: string;
    postalCode: string;
    coverageAreas?: string[];
  };
  cases?: {
    pageHeroTitle?: string;
    pageHeroSub?: string;
    caseStudiesList?: CaseStudyItem[];
  };
  dashboard?: {
    kpis?: KpiItem[];
    monthlyReach?: number[];
    monthlyEngagement?: number[];
    platforms?: PlatformItem[];
    topLocations?: AudienceLocation[];
    campaigns?: CampaignItem[];
  };
  gallery?: GalleryItem[];
  faqs?: FaqItem[];
  photos?: Record<string, string>;
  videos?: Record<string, string>;
}

export function getLocalContent(): SiteContent {
  return siteContentJson as unknown as SiteContent;
}

export async function getContent(): Promise<SiteContent> {
  const fallback = getLocalContent();

  // 1. Try MongoDB Atlas Published Content (server-side only)
  if (typeof window === "undefined" && process.env.MONGODB_URI) {
    try {
      const { getStoredContent } = await import("./mongodb");
      const mongoData = await getStoredContent("published");
      if (mongoData) {
        return {
          ...fallback,
          ...mongoData,
          hero: { ...fallback.hero, ...(mongoData.hero || {}) },
          homepage: { ...fallback.homepage, ...(mongoData.homepage || {}) },
          about: { ...fallback.about, ...(mongoData.about || {}) },
          services: { ...fallback.services, ...(mongoData.services || {}) },
          hire: { ...fallback.hire, ...(mongoData.hire || {}) },
          contact: { ...fallback.contact, ...(mongoData.contact || {}) },
          cases: { ...fallback.cases, ...(mongoData.cases || {}) },
          dashboard: { ...fallback.dashboard, ...(mongoData.dashboard || {}) },
          gallery: mongoData.gallery && mongoData.gallery.length > 0 ? mongoData.gallery : fallback.gallery,
          faqs: mongoData.faqs && mongoData.faqs.length > 0 ? mongoData.faqs : fallback.faqs,
          photos: { ...fallback.photos, ...(mongoData.photos || {}) },
          videos: { ...fallback.videos, ...(mongoData.videos || {}) },
        };
      }
    } catch (err) {
      console.warn("[ContentStore] MongoDB fetch error, falling back:", err);
    }
  }

  // 2. Try Vercel KV / Upstash Redis
  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (kvUrl && kvToken) {
    try {
      const res = await fetch(`${kvUrl}/get/site_content`, {
        headers: { Authorization: `Bearer ${kvToken}` },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        if (data.result) {
          const parsed = typeof data.result === "string" ? JSON.parse(data.result) : data.result;
          return { ...fallback, ...parsed };
        }
      }
    } catch (err) {
      console.warn("[ContentStore] KV fetch failed, falling back to local JSON:", err);
    }
  }

  // 3. Fallback to Local JSON
  return fallback;
}
