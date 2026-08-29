import { type SchemaTypeDefinition } from "sanity";
import { galleryItem } from "./galleryItem";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryItem, siteSettings],
};
