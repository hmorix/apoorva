import siteContentJson from "@/data/site-content.json";

export interface SiteContent {
  hero: {
    heroTitle: string;
    heroTagline: string;
    heroSignature: string;
    domain: string;
  };
  homepage: {
    whoAmIHeading: string;
    whoAmIBio1: string;
    whoAmIBio2: string;
    statBrands: string;
    statReach: string;
    statFollowers: string;
    statExp: string;
  };
  about: {
    pageHeroTitle: string;
    pageHeroSub: string;
    storyHeading: string;
    storyBio1: string;
    storyBio2: string;
    storyBio3: string;
  };
  services: {
    starterPrice: string;
    starterPeriod: string;
    starterDesc: string;
    growthPrice: string;
    growthPeriod: string;
    growthDesc: string;
    premiumPrice: string;
    premiumPeriod: string;
    premiumDesc: string;
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
  };
  photos?: Record<string, string>;
  videos?: Record<string, string>;
}

export function getLocalContent(): SiteContent {
  return siteContentJson as unknown as SiteContent;
}

export async function getContent(): Promise<SiteContent> {
  // 1. Try MongoDB Atlas Published Content (server-side only, never runs in browser)
  if (typeof window === "undefined" && process.env.MONGODB_URI) {
    try {
      // Dynamic import keeps this server-only — webpack will not bundle mongodb
      const { getStoredContent } = await import("./mongodb");
      const mongoData = await getStoredContent("published");
      if (mongoData) {
        return { ...(siteContentJson as unknown as SiteContent), ...mongoData };
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
          return { ...(siteContentJson as unknown as SiteContent), ...parsed };
        }
      }
    } catch (err) {
      console.warn("[ContentStore] KV fetch failed, falling back to local JSON:", err);
    }
  }

  // 3. Fallback to Local JSON file
  return getLocalContent();
}


