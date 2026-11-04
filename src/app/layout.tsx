import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rp-engineering.in"),
  title: {
    default: "R.P Engineering | Industrial Melt Casting, Induction Hardening & Machining",
    template: "%s | R.P Engineering",
  },
  description:
    "R.P Engineering is an industrial foundry and precision machining provider delivering melt casting, induction hardening (58-62 HRC), snag fettling, and light machining across Maharashtra (Shinoli BK, Kolhapur) and Karnataka (Belagavi).",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "melt casting",
    "induction hardening",
    "fettling works",
    "light machining",
    "foundry in Kolhapur",
    "foundry in Belgaum",
    "Belagavi engineering",
    "Shinoli BK foundry",
    "Kolhapur MIDC engineering",
    "Udyambag industrial area",
    "SG iron castings",
    "ductile iron foundry",
    "grey cast iron manufacturer",
    "surface hardening 58-62 HRC",
    "snag grinding job work",
    "casting fettling contractors",
    "precision turning job shop",
    "industrial components Maharashtra",
    "gear induction hardening",
    "metal casting manufacturer India",
  ],
  authors: [{ name: "R.P Engineering", url: "https://rp-engineering.in" }],
  creator: "R.P Engineering",
  publisher: "R.P Engineering",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "R.P Engineering | Melt Casting, Induction Hardening & Machining",
    description:
      "Reliable thermal casting, targeted induction hardening, fettling works, and precision light machining across Maharashtra and Karnataka.",
    url: "https://rp-engineering.in",
    siteName: "R.P Engineering",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/industrial/melt-casting-foundry.jpg",
        width: 1600,
        height: 1118,
        alt: "R.P Engineering melt casting and foundry operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "R.P Engineering | Industrial Foundry & Hardening",
    description:
      "High-integrity melt casting, induction hardening (58-62 HRC), fettling, and light machining across Maharashtra and Karnataka.",
    images: ["/assets/industrial/melt-casting-foundry.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Kolhapur, Maharashtra",
    "geo.position": "15.8497;74.4977",
    ICBM: "15.8497, 74.4977",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ManufacturingBusiness",
      "@id": "https://rp-engineering.in/#organization",
      name: "R.P Engineering",
      legalName: "R.P Engineering Works",
      url: "https://rp-engineering.in",
      logo: "https://rp-engineering.in/assets/branches/shinoli-bk/WhatsApp%20Image%202026-10-31%20at%201.03.57%20PM.jpeg",
      description:
        "Industrial foundry specializing in melt casting, precision induction hardening (58-62 HRC), casting fettling, and secondary light machining across Maharashtra and Karnataka.",
      telephone: "+919421240625",
      email: "sjbadaskar@reddifmail.com",
      founder: {
        "@type": "Person",
        name: "Sanjay Badaskar",
      },
      areaServed: [
        { "@type": "State", name: "Maharashtra" },
        { "@type": "State", name: "Karnataka" },
        { "@type": "Country", name: "India" },
      ],
      knowsAbout: [
        "Melt Casting",
        "Induction Hardening",
        "Fettling and Snag Grinding",
        "Light Machining",
        "SG Iron Castings",
        "Grey Iron Castings",
        "Ductile Iron",
        "Surface Heat Treatment",
        "Foundry Operations",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shinoli BK Industrial Zone",
        addressLocality: "Shinoli BK",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      department: [
        {
          "@type": "LocalBusiness",
          name: "R.P Engineering - Unit 01 (Foundry & Melt Casting)",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Shinoli BK",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        },
        {
          "@type": "LocalBusiness",
          name: "R.P Engineering - Unit 02 (Industrial Operations)",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kolhapur MIDC",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        },
        {
          "@type": "LocalBusiness",
          name: "R.P Engineering - Unit 03 (Machining Hub)",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Udyambag, Belagavi",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Engineering & Foundry Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Melt Casting",
              description:
                "High-integrity thermal melting and alloy casting for ductile iron, SG iron, and custom industrial specifications.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Precision Induction Hardening",
              description:
                "Targeted surface hardening up to 58-62 HRC for gears, shafts, and pins with zero core embrittlement or distortion.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fettling & Surface Dressing",
              description:
                "Thorough riser cutting, snag grinding, and deflashing ensuring clean Grade A casting surfaces.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Light Machining",
              description:
                "Secondary precision turning, boring, and facing converting raw castings to print-ready components.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://rp-engineering.in/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What metals, iron grades, and alloys does R.P Engineering melt and cast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We specialize in high-grade SG (Spheroidal Graphite) iron, ductile iron, grey cast iron, and custom alloy compositions. All melts are temperature-controlled at 1400°C+ with strict metallurgical verification for tensile strength, density, and microstructural integrity.",
          },
        },
        {
          "@type": "Question",
          name: "What surface hardness and case depth can your induction hardening achieve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our precision induction heat treatment delivers surface hardness between 58–62 HRC with calibrated case depth tailored to the component's working load. The core retains high impact ductility with sub-micron distortion control, ideal for gears, drive shafts, and pins.",
          },
        },
        {
          "@type": "Question",
          name: "Do you deliver rough castings or finished, assembly-ready parts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer end-to-end processing: raw melt casting, thorough snag fettling and riser cutoff, heat treatment, and precision light machining (turning, boring, and facing). Clients can receive rough castings, dressed blanks, or finished parts ready for immediate assembly.",
          },
        },
        {
          "@type": "Question",
          name: "Where are your manufacturing and dispatch facilities located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "R.P Engineering operates across three strategically located facilities: Unit 01 foundry in Shinoli BK (Maharashtra), industrial operations in Kolhapur MIDC (Maharashtra), and our regional machining facility in Udyambag, Belagavi (Karnataka).",
          },
        },
        {
          "@type": "Question",
          name: "How can I request a quote or submit technical part drawings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can send component specifications, 2D drawings, or RFQ details directly through our contact form, email Sanjay Badaskar at sjbadaskar@reddifmail.com, or call our engineering desk directly at +91 94212 40625.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </body>
    </html>
  );
}
