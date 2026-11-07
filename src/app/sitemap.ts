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
        "https://rp-engineering.in/assets/branches/shinoli-bk/melting.webp",
        "https://rp-engineering.in/assets/branches/shinoli-bk/cast-pour.webp",
        "https://rp-engineering.in/assets/industrial/precision-gears-hero.webp",
        "https://rp-engineering.in/assets/industrial/fettling-hero.webp",
        "https://rp-engineering.in/assets/industrial/light-machining-hero.webp",
        "https://rp-engineering.in/assets/industrial/precision-gears-pexels.webp",
        "https://rp-engineering.in/assets/industrial/fettling-sparks-pexels.webp",
        "https://rp-engineering.in/assets/industrial/light-machining-pexels.webp",
        "https://rp-engineering.in/assets/branches/shinoli-bk/facility-work.webp",
        "https://rp-engineering.in/assets/branches/shinoli-bk/facility-exterior.webp",
      ],
    },
  ];
}
