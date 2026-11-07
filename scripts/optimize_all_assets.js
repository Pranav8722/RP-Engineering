const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function run() {
  const tasks = [
    // Hero Desktop (1600w)
    { in: 'public/assets/branches/shinoli-bk/melting.png', out: 'public/assets/branches/shinoli-bk/melting.webp', w: 1600, q: 80 },
    { in: 'public/assets/branches/shinoli-bk/melting.png', out: 'public/assets/branches/shinoli-bk/melting-sm.webp', w: 800, q: 78 },

    { in: 'public/assets/industrial/precision-gears-hero.png', out: 'public/assets/industrial/precision-gears-hero.webp', w: 1600, q: 80 },
    { in: 'public/assets/industrial/precision-gears-hero.png', out: 'public/assets/industrial/precision-gears-hero-sm.webp', w: 800, q: 78 },

    { in: 'public/assets/industrial/fettling-hero.png', out: 'public/assets/industrial/fettling-hero.webp', w: 1600, q: 80 },
    { in: 'public/assets/industrial/fettling-hero.png', out: 'public/assets/industrial/fettling-hero-sm.webp', w: 800, q: 78 },

    { in: 'public/assets/industrial/light-machining-hero.png', out: 'public/assets/industrial/light-machining-hero.webp', w: 1600, q: 80 },
    { in: 'public/assets/industrial/light-machining-hero.png', out: 'public/assets/industrial/light-machining-hero-sm.webp', w: 800, q: 78 },

    // Services Cards (max 700w is plenty for 300px display)
    { in: 'public/assets/branches/shinoli-bk/cast pour.png', out: 'public/assets/branches/shinoli-bk/cast-pour.webp', w: 700, q: 80 },
    { in: 'public/assets/industrial/precision-gears-pexels.jpg', out: 'public/assets/industrial/precision-gears-pexels.webp', w: 700, q: 80 },
    { in: 'public/assets/industrial/fettling-sparks-pexels.jpg', out: 'public/assets/industrial/fettling-sparks-pexels.webp', w: 700, q: 80 },
    { in: 'public/assets/industrial/light-machining-pexels.jpg', out: 'public/assets/industrial/light-machining-pexels.webp', w: 700, q: 80 },

    // Facilities & Metadata
    { in: 'public/assets/industrial/melt-casting-foundry.jpg', out: 'public/assets/industrial/melt-casting-foundry.webp', w: 1200, q: 80 },
    { in: 'public/assets/branches/shinoli-bk/WhatsApp Image 2026-10-31 at 1.03.57 PM.jpeg', out: 'public/assets/branches/shinoli-bk/facility-exterior.webp', w: 1200, q: 80 },
    { in: 'public/assets/branches/shinoli-bk/WhatsApp Image 2026-10-31 at 1.03.58 PM.jpeg', out: 'public/assets/branches/shinoli-bk/facility-work.webp', w: 1200, q: 80 },
    { in: 'public/assets/branches/shinoli-bk/WhatsApp Image 2026-10-31 at 1.03.58 PM (1).jpeg', out: 'public/assets/branches/shinoli-bk/facility-pouring.webp', w: 800, q: 80 }
  ];

  for (const t of tasks) {
    if (!fs.existsSync(t.in)) {
      console.warn('Missing file:', t.in);
      continue;
    }
    await sharp(t.in)
      .resize({ width: t.w, withoutEnlargement: true })
      .webp({ quality: t.q, effort: 6 })
      .toFile(t.out);

    const s = fs.statSync(t.out);
    console.log(`Created ${t.out} (${(s.size/1024).toFixed(1)} KB)`);
  }
}

run().catch(console.error);
