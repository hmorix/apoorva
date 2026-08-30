import { client } from "./client";
import { urlForImage } from "./image";
import { getContent } from "@/lib/contentStore";

// Helper to resolve custom Sanity image or fallback to default original image path
export function resolveImage(customImage: any, defaultPath: string): string {
  if (!customImage) return defaultPath;
  if (typeof customImage === "string") return customImage;
  try {
    const url = urlForImage(customImage)?.url();
    if (url) return url;
  } catch {
    // fallback
  }
  return defaultPath;
}

// ── 1. HOME PAGE & MEDIA QUERY ──
export const HOME_PAGE_QUERY = `*[_type == "homePage"][0] {
  heroTitle,
  heroTagline,
  heroSignature,
  heroPhoto,
  whoAmIHeading,
  whoAmIBio1,
  whoAmIBio2,
  whoAmIPhoto,
  qualificationsPhoto,
  workItems,
  caseInstaGrid,
  phoneMockups,
  additionalPhotos
}`;

// ── 2. ABOUT PAGE QUERY ──
export const ABOUT_PAGE_QUERY = `*[_type == "aboutPage"][0] {
  pageHeroTitle,
  pageHeroSub,
  storyHeading,
  storyBio1,
  storyBio2,
  storyBio3,
  storyPhoto,
  contentPillars,
  creatorValues,
  qualifications,
  brandCategories
}`;

// ── 3. SERVICES PAGE QUERY ──
export const SERVICES_PAGE_QUERY = `*[_type == "servicesPage"][0] {
  pageHeroTitle,
  pageHeroSub,
  servicesList,
  processSteps
}`;

// ── 4. CASE STUDIES QUERY ──
export const CASE_STUDIES_PAGE_QUERY = `*[_type == "caseStudiesPage"][0] {
  pageHeroTitle,
  pageHeroSub,
  casesList
}`;

// ── 5. DASHBOARD QUERY ──
export const DASHBOARD_PAGE_QUERY = `*[_type == "dashboardPage"][0] {
  kpis,
  platforms,
  campaigns
}`;

// ── 6. GALLERY QUERY ──
export const GALLERY_QUERY = `*[_type == "galleryItem"] | order(order asc, _createdAt desc) {
  _id,
  title,
  type,
  category,
  tag,
  caption,
  image,
  poster,
  "videoUrl": videoFile.asset->url
}`;

// ── 7. SITE SETTINGS QUERY ──
export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  heroTitle,
  heroTagline,
  heroSignature,
  profilePhoto,
  whoAmIHeading,
  whoAmIBio1,
  whoAmIBio2,
  whoAmIPhoto,
  qualificationsPhoto,
  stats,
  whatsappNumber,
  instagramHandle,
  youtubeHandle
}`;

// ── FETCH FUNCTIONS ──

export async function getHomePage() {
  const local = await getContent();
  let sanityData: any = null;

  if (client) {
    try {
      sanityData = await client.fetch(HOME_PAGE_QUERY, {}, { next: { revalidate: 60 } });
    } catch (error) {
      console.warn("Sanity fetch error for homePage, falling back:", error);
    }
  }

  return {
    heroTitle: sanityData?.heroTitle || local?.hero?.heroTitle || "Apoorva Kaushal",
    heroTagline: sanityData?.heroTagline || local?.hero?.heroTagline || "Authentic storytelling that connects brands with audiences through relatable experiences",
    heroSignature: sanityData?.heroSignature || local?.hero?.heroSignature || "Appu",
    heroPhotoUrl: sanityData?.heroPhoto ? urlForImage(sanityData.heroPhoto)?.url() : null,
    whoAmIHeading: sanityData?.whoAmIHeading || local?.homepage?.whoAmIHeading || "WHO AM I",
    whoAmIBio1: sanityData?.whoAmIBio1 || local?.homepage?.whoAmIBio1 || "I'm Apoorva, a Hathras & Uttar Pradesh–based Social Media Influencer and Content Creator. I help brands grow through cohesive visual identity, creative content, and high-performing advertising campaigns.",
    whoAmIBio2: sanityData?.whoAmIBio2 || local?.homepage?.whoAmIBio2 || "I've elevated the online presence of brands across India, helping them take control of their digital narrative with authentic Hindi comedy, parody, informative videos, and Krishna spiritual content.",
    whoAmIPhotoUrl: sanityData?.whoAmIPhoto ? urlForImage(sanityData.whoAmIPhoto)?.url() : null,
    qualificationsPhotoUrl: sanityData?.qualificationsPhoto
      ? urlForImage(sanityData.qualificationsPhoto)?.url()
      : null,
    workItems: sanityData?.workItems || null,
    caseInstaGrid: sanityData?.caseInstaGrid || null,
    phoneMockups: sanityData?.phoneMockups || null,
    additionalPhotos: sanityData?.additionalPhotos || null,
  };
}

export async function getAboutPage() {
  const local = await getContent();
  let sanityData: any = null;

  if (client) {
    try {
      sanityData = await client.fetch(ABOUT_PAGE_QUERY, {}, { next: { revalidate: 60 } });
    } catch (error) {
      console.warn("Sanity fetch error for aboutPage, falling back:", error);
    }
  }

  return {
    pageHeroTitle: sanityData?.pageHeroTitle || local?.about?.pageHeroTitle || "APOORVA KAUSHAL",
    pageHeroSub: sanityData?.pageHeroSub || local?.about?.pageHeroSub || "Social Media Creator & Content Creator · Hathras, Uttar Pradesh, India",
    storyHeading: sanityData?.storyHeading || local?.about?.storyHeading || "FROM HATHRAS\nTO THE DIGITAL WORLD",
    storyBio1: sanityData?.storyBio1 || local?.about?.storyBio1 || null,
    storyBio2: sanityData?.storyBio2 || local?.about?.storyBio2 || null,
    storyBio3: sanityData?.storyBio3 || local?.about?.storyBio3 || null,
    storyPhotoUrl: sanityData?.storyPhoto ? urlForImage(sanityData.storyPhoto)?.url() : null,
    contentPillars: sanityData?.contentPillars || null,
    creatorValues: sanityData?.creatorValues || null,
    qualifications: sanityData?.qualifications || null,
    brandCategories: sanityData?.brandCategories || null,
  };
}

export async function getServicesPage() {
  const local = await getContent();
  let sanityData: any = null;

  if (client) {
    try {
      sanityData = await client.fetch(SERVICES_PAGE_QUERY, {}, { next: { revalidate: 60 } });
    } catch (error) {
      console.warn("Sanity fetch error for servicesPage, falling back:", error);
    }
  }

  return {
    ...sanityData,
    localServices: local?.services || null,
  };
}

export async function getCaseStudiesPage() {
  if (!client) return null;
  try {
    return await client.fetch(CASE_STUDIES_PAGE_QUERY, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.warn("Sanity fetch error for caseStudiesPage, falling back:", error);
    return null;
  }
}

export async function getDashboardPage() {
  if (!client) return null;
  try {
    return await client.fetch(DASHBOARD_PAGE_QUERY, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.warn("Sanity fetch error for dashboardPage, falling back:", error);
    return null;
  }
}

export async function getGalleryItems() {
  if (!client) return null;
  try {
    const data = await client.fetch(GALLERY_QUERY, {}, { next: { revalidate: 60 } });
    if (!data || data.length === 0) return null;

    return data.map((item: any) => {
      const photoUrl = item.image ? urlForImage(item.image)?.url() : "";
      const posterUrl = item.poster ? urlForImage(item.poster)?.url() : photoUrl;
      const videoSrc = item.videoUrl || photoUrl;

      return {
        id: item._id,
        type: item.type || "photo",
        title: item.title || "Untitled",
        category: item.category || "portrait",
        tag: item.tag || (item.type === "video" ? "Reel / Video" : "Photo"),
        caption: item.caption || "",
        src: item.type === "video" ? videoSrc : photoUrl,
        poster: posterUrl,
      };
    });
  } catch (error) {
    console.warn("Sanity fetch error for gallery items, falling back:", error);
    return null;
  }
}

export async function getSiteSettings() {
  const local = await getContent();
  let sanityData: any = null;

  if (client) {
    try {
      sanityData = await client.fetch(SITE_SETTINGS_QUERY, {}, { next: { revalidate: 60 } });
    } catch (error) {
      console.warn("Sanity fetch error for site settings, falling back:", error);
    }
  }

  return {
    heroTitle: sanityData?.heroTitle || local?.hero?.heroTitle || "Apoorva Kaushal",
    heroTagline: sanityData?.heroTagline || local?.hero?.heroTagline || "Authentic storytelling that connects brands with audiences through relatable experiences",
    heroSignature: sanityData?.heroSignature || local?.hero?.heroSignature || "Appu",
    profilePhotoUrl: sanityData?.profilePhoto ? urlForImage(sanityData.profilePhoto)?.url() : null,
    whoAmIHeading: sanityData?.whoAmIHeading || local?.homepage?.whoAmIHeading || "WHO AM I",
    whoAmIBio1: sanityData?.whoAmIBio1 || local?.homepage?.whoAmIBio1 || null,
    whoAmIBio2: sanityData?.whoAmIBio2 || local?.homepage?.whoAmIBio2 || null,
    whoAmIPhotoUrl: sanityData?.whoAmIPhoto ? urlForImage(sanityData.whoAmIPhoto)?.url() : null,
    qualificationsPhotoUrl: sanityData?.qualificationsPhoto
      ? urlForImage(sanityData.qualificationsPhoto)?.url()
      : null,
    stats: sanityData?.stats || null,
    whatsappNumber: sanityData?.whatsappNumber || local?.contact?.whatsappNumber || "919368153189",
    instagramHandle: sanityData?.instagramHandle || local?.contact?.instagramHandle || "@apoorva__kaushal",
    youtubeHandle: sanityData?.youtubeHandle || local?.contact?.youtubeHandle || "@_apoorva7__",
  };
}

