import { client } from "./client";
import { urlForImage } from "./image";

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
    console.warn("Sanity fetch error for gallery items, falling back to local data:", error);
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
    console.warn("Sanity fetch error for site settings, falling back to local data:", error);
    return null;
  }
}


