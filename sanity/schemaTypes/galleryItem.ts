import { defineField, defineType } from "sanity";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery Photos & Videos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Photo", value: "photo" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "photo",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Portraits", value: "portrait" },
          { title: "Video / Reel", value: "video" },
          { title: "UGC & Aesthetic", value: "ugc" },
          { title: "Devotional", value: "devotional" },
          { title: "Lifestyle", value: "lifestyle" },
        ],
      },
      initialValue: "portrait",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Badge Tag",
      type: "string",
      description: "Short badge tag (e.g., 'Portrait', 'Trending Reel', 'UGC')",
    }),
    defineField({
      name: "image",
      title: "Photo File",
      type: "image",
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.type === "video",
    }),
    defineField({
      name: "videoFile",
      title: "Video File (MP4/MOV)",
      type: "file",
      description: "Upload reel or short video file directly to Sanity Cloud CDN",
      hidden: ({ parent }) => parent?.type !== "video",
    }),
    defineField({
      name: "poster",
      title: "Video Poster / Thumbnail",
      type: "image",
      description: "Thumbnail shown before playing video",
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.type !== "video",
    }),
    defineField({
      name: "caption",
      title: "Caption / Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first (e.g. 1, 2, 3...)",
      initialValue: 10,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
      posterMedia: "poster",
      type: "type",
    },
    prepare(selection) {
      const { title, subtitle, media, posterMedia, type } = selection;
      return {
        title: title || "Untitled",
        subtitle: `${type === "video" ? "🎬 Video" : "📷 Photo"} · ${subtitle || "No category"}`,
        media: type === "video" ? posterMedia : media,
      };
    },
  },
});
