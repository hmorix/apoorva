import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Website Content & Profile",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Main Name/Title",
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
      name: "profilePhoto",
      title: "Hero Profile Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "whoAmIHeading",
      title: "About / Who Am I Heading",
      type: "string",
      initialValue: "WHO AM I",
    }),
    defineField({
      name: "whoAmIBio1",
      title: "Who Am I Paragraph 1",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "whoAmIBio2",
      title: "Who Am I Paragraph 2",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "whoAmIPhoto",
      title: "Who Am I Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "qualificationsPhoto",
      title: "Qualifications Panel Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "stats",
      title: "Key Stats (Homepage)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "num", title: "Number / Metric (e.g. 2M+, 5K+)", type: "string" },
            { name: "label", title: "Label (e.g. REACH, FOLLOWERS)", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number (with country code, e.g. 919368153189)",
      type: "string",
      initialValue: "919368153189",
    }),
    defineField({
      name: "instagramHandle",
      title: "Instagram Handle (e.g. apoorva__kaushal)",
      type: "string",
      initialValue: "apoorva__kaushal",
    }),
    defineField({
      name: "youtubeHandle",
      title: "YouTube Channel (e.g. @_apoorva7__)",
      type: "string",
      initialValue: "@_apoorva7__",
    }),
  ],
});
