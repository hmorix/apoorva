import { defineField, defineType } from "sanity";

export const caseStudiesPage = defineType({
  name: "caseStudiesPage",
  title: "📈 Case Studies",
  type: "document",
  fields: [
    defineField({
      name: "pageHeroTitle",
      title: "Hero Title",
      type: "string",
      initialValue: "CASE STUDIES",
    }),
    defineField({
      name: "pageHeroSub",
      title: "Hero Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "casesList",
      title: "Case Studies List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "num", title: "Number (e.g. 01)", type: "string" },
            { name: "brand", title: "Brand Name", type: "string" },
            { name: "category", title: "Category", type: "string" },
            { name: "tagline", title: "Tagline", type: "string" },
            { name: "challenge", title: "Challenge", type: "text", rows: 2 },
            { name: "solution", title: "Solution", type: "text", rows: 2 },
            { name: "result", title: "Result", type: "text", rows: 2 },
            {
              name: "metrics",
              title: "Key Metrics",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "num", title: "Metric Number (e.g. 120%)", type: "string" },
                    { name: "label", title: "Metric Label", type: "string" },
                  ],
                },
              ],
            },
            {
              name: "tags",
              title: "Tags",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
  ],
});
