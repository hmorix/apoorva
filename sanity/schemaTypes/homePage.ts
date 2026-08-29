import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page & All Media",
  type: "document",
  fields: [
    // ── HERO SECTION ──
    defineField({
      name: "heroTitle",
      title: "Hero Main Name",
      type: "string",
      initialValue: "Apoorva Kaushal",
    }),
    defineField({
      name: "heroTagline",
      title: "Hero Tagline",
      type: "text",
      rows: 2,
      initialValue:
        "Authentic storytelling that connects brands with audiences through relatable experiences",
    }),
    defineField({
      name: "heroSignature",
      title: "Hero Signature / Nickname",
      type: "string",
      initialValue: "Appu",
    }),
    defineField({
      name: "heroPhoto",
      title: "Hero Profile Photo",
      type: "image",
      description: "Default: /photos/profile.jpg. Leave empty or delete to use original default photo.",
      options: { hotspot: true },
    }),

    // ── WHO AM I SECTION ──
    defineField({
      name: "whoAmIHeading",
      title: "Who Am I Heading",
      type: "string",
      initialValue: "WHO AM I",
    }),
    defineField({
      name: "whoAmIBio1",
      title: "Who Am I Paragraph 1",
      type: "text",
      rows: 3,
      initialValue:
        "I'm Apoorva, a Hathras & Uttar Pradesh–based Social Media Influencer and Content Creator. I help brands grow through cohesive visual identity, creative content, and high-performing advertising campaigns.",
    }),
    defineField({
      name: "whoAmIBio2",
      title: "Who Am I Paragraph 2",
      type: "text",
      rows: 3,
      initialValue:
        "I've elevated the online presence of brands across India, helping them take control of their digital narrative with authentic Hindi comedy, parody, informative videos, and Krishna spiritual content.",
    }),
    defineField({
      name: "whoAmIPhoto",
      title: "Who Am I Photo",
      type: "image",
      description: "Default: /photos/IMG-20260205-WA0035.jpg. Leave empty to use default photo.",
      options: { hotspot: true },
    }),

    // ── QUALIFICATIONS PANEL ──
    defineField({
      name: "qualificationsPhoto",
      title: "Qualifications Panel Photo",
      type: "image",
      description: "Default: /photos/IMG-20250107-WA0012.jpg. Leave empty to use default photo.",
      options: { hotspot: true },
    }),

    // ── MY WORK INCLUDES (6 CARDS WITH PHOTOS) ──
    defineField({
      name: "workItems",
      title: "My Work Includes (6 Cards & Photos)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Card Title", type: "string" },
            { name: "desc", title: "Description", type: "text", rows: 2 },
            { name: "badge", title: "Overlay Badge Text", type: "string" },
            {
              name: "image",
              title: "Custom Photo",
              type: "image",
              description: "Upload new photo or leave empty to keep default photo.",
              options: { hotspot: true },
            },
            {
              name: "defaultImage",
              title: "Default Original Image Path",
              type: "string",
              readOnly: true,
            },
          ],
        },
      ],
    }),

    // ── CASE STUDY INSTAGRAM GRID (8 PHOTOS) ──
    defineField({
      name: "caseInstaGrid",
      title: "Case Study — Instagram Feed Grid (8 Photos)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Post Label / Alt Text", type: "string" },
            {
              name: "image",
              title: "Custom Photo",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "defaultImage",
              title: "Default Original Image Path",
              type: "string",
              readOnly: true,
            },
          ],
        },
      ],
    }),

    // ── CASE STUDY 3 PHONE MOCKUPS (VIDEOS/POSTERS) ──
    defineField({
      name: "phoneMockups",
      title: "Case Study — 3 Video Mockups",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "badge", title: "Badge (e.g. Reels 01 · 340K)", type: "string" },
            {
              name: "poster",
              title: "Mockup Poster Photo",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "defaultImage",
              title: "Default Original Image Path",
              type: "string",
              readOnly: true,
            },
          ],
        },
      ],
    }),

    // ── ADDITIONAL PHOTOGRAPHY (4 CARDS) ──
    defineField({
      name: "additionalPhotos",
      title: "Additional Photography Section (4 Cards)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title (e.g. SUNGLASSES CAMPAIGN)", type: "string" },
            { name: "desc", title: "Description", type: "text", rows: 2 },
            {
              name: "image",
              title: "Custom Photo",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "defaultImage",
              title: "Default Original Image Path",
              type: "string",
              readOnly: true,
            },
          ],
        },
      ],
    }),
  ],
});
