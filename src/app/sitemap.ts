import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rp-engineering.in/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        "https://rp-engineering.in/assets/industrial/melt-casting-foundry.jpg",
        "https://rp-engineering.in/assets/industrial/precision-gears-pexels.jpg",
        "https://rp-engineering.in/assets/industrial/fettling-sparks-pexels.jpg",
        "https://rp-engineering.in/assets/industrial/light-machining-pexels.jpg",
        "https://rp-engineering.in/assets/branches/shinoli-bk/WhatsApp%20Image%202026-10-31%20at%201.03.57%20PM.jpeg",
      ],
    },
  ];
}
