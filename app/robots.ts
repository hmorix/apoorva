import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/hmorix/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/hmorix/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/photos/", "/"],
      },
      {
        userAgent: "Googlebot-Video",
        allow: ["/photos/", "/"],
      },
    ],
    sitemap: "https://apoorva.hmorix.in/sitemap.xml",
    host: "https://apoorva.hmorix.in",
  };
}
