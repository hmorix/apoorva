import fs from "fs";
import path from "path";

const CONTENT_FILE_PATH = path.join(process.cwd(), "data", "site-content.json");

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
}

export function getLocalContent(): SiteContent | null {
  try {
    if (fs.existsSync(CONTENT_FILE_PATH)) {
      const fileData = fs.readFileSync(CONTENT_FILE_PATH, "utf-8");
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.warn("Failed to read local site-content.json:", error);
  }
  return null;
}

export function saveLocalContent(content: Partial<SiteContent>): boolean {
  try {
    const dir = path.dirname(CONTENT_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const current = getLocalContent() || {};
    const merged = { ...current, ...content };
    fs.writeFileSync(CONTENT_FILE_PATH, JSON.stringify(merged, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Failed to save local site-content.json:", error);
    return false;
  }
}
