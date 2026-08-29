import { defineField, defineType } from "sanity";

export const dashboardPage = defineType({
  name: "dashboardPage",
  title: "Dashboard Analytics",
  type: "document",
  fields: [
    defineField({
      name: "kpis",
      title: "Key Performance Indicators (KPI Cards)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "num", title: "Number (e.g. 2M+, 340K)", type: "string" },
            { name: "change", title: "Change (e.g. 18% vs last quarter)", type: "string" },
            { name: "up", title: "Is Growth Positive?", type: "boolean", initialValue: true },
            { name: "sub", title: "Subtitle Note", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "platforms",
      title: "Platform Breakdown (Followers & Percentages)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Platform Name (e.g. Instagram)", type: "string" },
            { name: "handle", title: "Handle (e.g. @apoorva__kaushal)", type: "string" },
            { name: "followers", title: "Follower Count", type: "string" },
            { name: "pct", title: "Percentage (e.g. 74)", type: "number" },
          ],
        },
      ],
    }),
    defineField({
      name: "campaigns",
      title: "Campaign Performance Overview Table",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Campaign Name", type: "string" },
            { name: "platform", title: "Platform / Format", type: "string" },
            { name: "reach", title: "Total Reach", type: "string" },
            { name: "spend", title: "Ad Spend", type: "string" },
            { name: "roas", title: "ROAS / Performance", type: "string" },
            {
              name: "status",
              title: "Status",
              type: "string",
              options: {
                list: [
                  { title: "Completed", value: "completed" },
                  { title: "Active", value: "active" },
                ],
              },
              initialValue: "completed",
            },
          ],
        },
      ],
    }),
  ],
});
