import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
