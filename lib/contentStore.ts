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
}

export function getLocalContent(): SiteContent {
  return siteContentJson as unknown as SiteContent;
}
