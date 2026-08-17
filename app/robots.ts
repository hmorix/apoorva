import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
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
    sitemap: "https://apoorvakaushal.vercel.app/sitemap.xml",
    host: "https://apoorvakaushal.vercel.app",
  };
}
