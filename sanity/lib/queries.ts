import { client } from "./client";
import { urlForImage } from "./image";

// Helper to resolve custom Sanity image or fallback to default original image path
export function resolveImage(customImage: any, defaultPath: string): string {
  if (customImage) {
    try {
      const url = urlForImage(customImage)?.url();
      if (url) return url;
    } catch {
      // fallback
    }
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
  if (!client) return null;
  try {
    const data = await client.fetch(HOME_PAGE_QUERY, {}, { next: { revalidate: 60 } });
    if (!data) return null;

    return {
      ...data,
      heroPhotoUrl: data.heroPhoto ? urlForImage(data.heroPhoto)?.url() : null,
      whoAmIPhotoUrl: data.whoAmIPhoto ? urlForImage(data.whoAmIPhoto)?.url() : null,
      qualificationsPhotoUrl: data.qualificationsPhoto
        ? urlForImage(data.qualificationsPhoto)?.url()
        : null,
    };
  } catch (error) {
    console.warn("Sanity fetch error for homePage, falling back:", error);
    return null;
  }
}

export async function getAboutPage() {
  if (!client) return null;
  try {
    const data = await client.fetch(ABOUT_PAGE_QUERY, {}, { next: { revalidate: 60 } });
    if (!data) return null;

    return {
      ...data,
      storyPhotoUrl: data.storyPhoto ? urlForImage(data.storyPhoto)?.url() : null,
    };
  } catch (error) {
    console.warn("Sanity fetch error for aboutPage, falling back:", error);
    return null;
  }
}

export async function getServicesPage() {
  if (!client) return null;
  try {
    return await client.fetch(SERVICES_PAGE_QUERY, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.warn("Sanity fetch error for servicesPage, falling back:", error);
    return null;
  }
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
  if (!client) return null;
  try {
    const data = await client.fetch(SITE_SETTINGS_QUERY, {}, { next: { revalidate: 60 } });
    if (!data) return null;

    return {
      ...data,
      profilePhotoUrl: data.profilePhoto ? urlForImage(data.profilePhoto)?.url() : null,
      whoAmIPhotoUrl: data.whoAmIPhoto ? urlForImage(data.whoAmIPhoto)?.url() : null,
      qualificationsPhotoUrl: data.qualificationsPhoto
        ? urlForImage(data.qualificationsPhoto)?.url()
        : null,
    };
  } catch (error) {
    console.warn("Sanity fetch error for site settings, falling back:", error);
    return null;
  }
}
