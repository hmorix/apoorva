import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "pageHeroTitle",
      title: "Hero Title",
      type: "string",
      initialValue: "APOORVA KAUSHAL",
    }),
    defineField({
      name: "pageHeroSub",
      title: "Hero Subtitle",
      type: "string",
      initialValue:
        "Social Media Creator & Content Creator · Hathras, Uttar Pradesh, India",
    }),
    defineField({
      name: "storyHeading",
      title: "Story Heading",
      type: "string",
      initialValue: "FROM HATHRAS TO THE DIGITAL WORLD",
    }),
    defineField({
      name: "storyBio1",
      title: "Story Paragraph 1",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "storyBio2",
      title: "Story Paragraph 2",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "storyBio3",
      title: "Story Paragraph 3",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "storyPhoto",
      title: "About Portrait Photo",
      type: "image",
      description: "Default: /photos/IMG-20260205-WA0035.jpg. Leave empty or delete to use default original photo.",
      options: { hotspot: true },
    }),
    defineField({
      name: "contentPillars",
      title: "4 Content Pillars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Pillar Title", type: "string" },
            { name: "desc", title: "Description", type: "text", rows: 2 },
            { name: "stats", title: "Stat Tag (e.g. 340K avg. views)", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "creatorValues",
      title: "Creator Values & Philosophy",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Value Title", type: "string" },
            { name: "desc", title: "Description", type: "text", rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: "qualifications",
      title: "Qualifications & Certifications",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Certificate Name", type: "string" },
            { name: "org", title: "Issuing Organization", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "brandCategories",
      title: "Industries & Niches",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
