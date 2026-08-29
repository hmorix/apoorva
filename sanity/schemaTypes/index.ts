import { type SchemaTypeDefinition } from "sanity";
import { homePage } from "./homePage";
import { aboutPage } from "./aboutPage";
import { servicesPage } from "./servicesPage";
import { caseStudiesPage } from "./caseStudiesPage";
import { dashboardPage } from "./dashboardPage";
import { galleryItem } from "./galleryItem";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    aboutPage,
    servicesPage,
    caseStudiesPage,
    dashboardPage,
    galleryItem,
    siteSettings,
  ],
};
