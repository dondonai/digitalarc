import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://digitalarkprint.com",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
    {
      url: "https://digitalarkprint.com/about",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: "https://digitalarkprint.com/contact",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
  ];
}
