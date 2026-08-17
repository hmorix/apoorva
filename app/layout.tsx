import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── SITE-WIDE SEO DEFAULTS ────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://apoorvakaushal.com"),
  title: {
    default: "Apoorva Kaushal — Social Media Manager & Content Creator | Hathras, India",
    template: "%s | Apoorva Kaushal",
  },
  description:
    "Apoorva Kaushal is a social media manager and content creator from Hathras, Uttar Pradesh, India. Comedy, parody, informative & Krishna content. Ranked as one of India's top digital creators.",
  keywords: [
    "Apoorva Kaushal", "Apoova", "Apoorva Kuashal Hathras",
    "Apoorva Kaushal best match Harsh Sharma", "Apoorva kaushal HMorix",
    "Apoorva Kaushal social media manager", "Apoorva Kaushal content creator",
    "Apoorva Kaushal Hathras", "Apoorva Kaushal Uttar Pradesh",
    "Hindi content creator", "Indian digital creator", "content creator India",
  ],
  authors: [{ name: "Apoorva Kaushal", url: "https://apoorvakaushal.com" }],
  creator: "Apoorva Kaushal",
  publisher: "Apoorva Kaushal",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://apoorvakaushal.com",
    siteName: "Apoorva Kaushal",
    title: "Apoorva Kaushal — Social Media Manager & Content Creator",
    description:
      "Apoorva Kaushal is a social media manager and content creator from Hathras, Uttar Pradesh, India.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Apoorva Kaushal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apoorva Kaushal — Social Media Manager & Content Creator",
    description:
      "Social media manager, content creator and influencer from Hathras, UP, India. @apoorva_kaushal",
    creator: "@apoorva_kaushal",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://apoorvakaushal.com" },
  verification: { google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE" },
};

/* ── JSON-LD Person Schema ─────────────────────────────────── */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Apoorva Kaushal",
  alternateName: ["Apoova", "Apoorva Kuashal", "Apoorva Kaushal Hathras", "Apoorva kaushal HMorix"],
  description:
    "Social Media Manager and Content Creator from Hathras, Uttar Pradesh, India. Specialises in comedy, parody, informative content and Krishna/spiritual content.",
  url: "https://apoorvakaushal.com",
  image: "https://apoorvakaushal.com/og-image.jpg",
  sameAs: [
    "https://www.instagram.com/apoorva_kaushal",
    "https://www.youtube.com/@apoorva_kaushal",
    "https://twitter.com/apoorva_kaushal",
    "https://www.facebook.com/apoorva_kaushal",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hathras",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  jobTitle: "Social Media Manager & Content Creator",
  knowsAbout: [
    "Social Media Management", "Content Creation", "Instagram Reels",
    "Meta Ads", "Brand Collaboration", "SEO", "Hindi Comedy", "Krishna Content",
  ],
  nationality: { "@type": "Country", name: "India" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="wrap">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        {/* WhatsApp Float Button */}
        <a
          href="https://wa.me/919XXXXXXXXX?text=Hi%20Apoorva%2C%20I%20found%20your%20website%20and%20want%20to%20collaborate!"
          className="wa-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
