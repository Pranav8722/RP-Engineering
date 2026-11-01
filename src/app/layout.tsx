import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "R.P Engineering | Casting, Hardening & Machining",
  description:
    "R.P Engineering provides melt casting, induction hardening, fettling works and light machining from Maharashtra and Belagavi.",
  keywords: [
    "melt casting",
    "induction hardening",
    "fettling works",
    "light machining",
    "Kolhapur engineering",
    "Belagavi engineering",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "R.P Engineering",
              description: "Melt casting, induction hardening, fettling works and light machining.",
              telephone: "+919421240625",
              email: "sjbadaskar@reddifmail.com",
              areaServed: ["Maharashtra", "Karnataka"],
              founder: { "@type": "Person", name: "Sanjay Badaskar" },
            }),
          }}
        />
      </body>
    </html>
  );
}
