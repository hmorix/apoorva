import { defineField, defineType } from "sanity";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services & Pricing",
  type: "document",
  fields: [
    defineField({
      name: "pageHeroTitle",
      title: "Hero Title",
      type: "string",
      initialValue: "SERVICES & PRICING",
    }),
    defineField({
      name: "pageHeroSub",
      title: "Hero Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "servicesList",
      title: "Services List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Service Name", type: "string" },
            { name: "tagline", title: "Tagline", type: "string" },
            { name: "price", title: "Price Tag", type: "string" },
            { name: "desc", title: "Description", type: "text", rows: 3 },
            {
              name: "features",
              title: "Features List",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "processSteps",
      title: "The 4 Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "step", title: "Step Number (e.g. 01)", type: "string" },
            { name: "title", title: "Step Title", type: "string" },
            { name: "desc", title: "Step Description", type: "text", rows: 2 },
          ],
        },
      ],
    }),
  ],
});
