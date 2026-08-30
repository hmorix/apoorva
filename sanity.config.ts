import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {
  HomeIcon,
  UserIcon,
  StarIcon,
  TrendUpwardIcon,
  DashboardIcon,
  ImagesIcon,
  CogIcon,
} from "@sanity/icons";
import { schema } from "./sanity/schemaTypes";
import { apiVersion, dataset, projectId } from "./sanity/env";

export default defineConfig({
  basePath: "/admin/studio",
  projectId: projectId || "placeholder",
  dataset: dataset || "production",
  title: "Apoorva Kaushal — Content Manager",
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Pages & Media")
          .items([
            S.listItem()
              .title("Home Page & All Media")
              .icon(HomeIcon)
              .child(
                S.document()
                  .schemaType("homePage")
                  .documentId("homePage")
                  .title("Home Page & All Media")
              ),
            S.listItem()
              .title("About Page")
              .icon(UserIcon)
              .child(
                S.document()
                  .schemaType("aboutPage")
                  .documentId("aboutPage")
                  .title("About Page")
              ),
            S.listItem()
              .title("Services & Pricing")
              .icon(StarIcon)
              .child(
                S.document()
                  .schemaType("servicesPage")
                  .documentId("servicesPage")
                  .title("Services & Pricing")
              ),
            S.listItem()
              .title("Case Studies")
              .icon(TrendUpwardIcon)
              .child(
                S.document()
                  .schemaType("caseStudiesPage")
                  .documentId("caseStudiesPage")
                  .title("Case Studies")
              ),
            S.listItem()
              .title("Dashboard Analytics")
              .icon(DashboardIcon)
              .child(
                S.document()
                  .schemaType("dashboardPage")
                  .documentId("dashboardPage")
                  .title("Dashboard Analytics")
              ),
            S.divider(),
            S.documentTypeListItem("galleryItem")
              .title("Photos & Reels Gallery")
              .icon(ImagesIcon),
            S.divider(),
            S.listItem()
              .title("Global Settings & Contact")
              .icon(CogIcon)
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Global Settings & Contact")
              ),
          ]),
    }),
  ],
});
