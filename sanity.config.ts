import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schemaTypes";
import { apiVersion, dataset, projectId } from "./sanity/env";

export default defineConfig({
  basePath: "/admin",
  projectId: projectId || "placeholder",
  dataset: dataset || "production",
  title: "Apoorva Kaushal Content Manager",
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Website Content & Media")
          .items([
            S.listItem()
              .title("🏠 Home Page & All Media")
              .child(S.document().schemaType("homePage").documentId("homePage")),
            S.listItem()
              .title("👤 About Page")
              .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
            S.listItem()
              .title("💼 Services & Pricing")
              .child(S.document().schemaType("servicesPage").documentId("servicesPage")),
            S.listItem()
              .title("📈 Case Studies")
              .child(S.document().schemaType("caseStudiesPage").documentId("caseStudiesPage")),
            S.listItem()
              .title("📊 Dashboard Analytics")
              .child(S.document().schemaType("dashboardPage").documentId("dashboardPage")),
            S.divider(),
            S.documentTypeListItem("galleryItem").title("🖼️ Photos & Reels Gallery"),
            S.divider(),
            S.listItem()
              .title("⚙️ Global Settings & Contact")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
          ]),
    }),
  ],
});
