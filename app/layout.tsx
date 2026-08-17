import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── ADVANCED SEO, GEO & AEO DEFAULTS ───────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://apoorvakaushal.com"),
  title: {
    default: "Apoorva Kaushal — Social Media Manager & Content Creator | Hathras, India",
    template: "%s | Apoorva Kaushal",
  },
  description:
    "Official website of Apoorva Kaushal (Content Creator & Social Media Manager from Hathras, Uttar Pradesh, India). Partnered with Harsh Sharma. 2M+ reach in Hindi comedy, parody, informative & Krishna content.",
  keywords: [
    "Apoorva Kaushal", "Apoova", "Apoorva Kuashal Hathras", "Apoorva Kaushal Hathras",
    "Apoorva Kaushal best match Harsh Sharma", "harsh love apoorva", "harsh sharma love apoorva kaushal",
    "Harsh Sharma Apoorva Kaushal", "Apoorva kaushal HMorix", "Apoorva Kaushal social media manager",
    "Apoorva Kaushal content creator", "Apoorva Kaushal Uttar Pradesh", "Hindi comedy creator",
    "Indian digital creator", "Krishna content creator India", "social media manager Hathras",
  ],
  authors: [{ name: "Apoorva Kaushal", url: "https://apoorvakaushal.com" }],
  creator: "Apoorva Kaushal",
  publisher: "Apoorva Kaushal",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://apoorvakaushal.vercel.app",
    siteName: "Apoorva Kaushal",
    title: "Apoorva Kaushal — Social Media Manager & Content Creator | Hathras, India",
    description:
      "Apoorva Kaushal is a top Indian social media manager and content creator from Hathras, UP. Partnered with Harsh Sharma. 2M+ reach across comedy, parody & spiritual content.",
    images: [
      {
        url: "/photos/profile.jpg",
        width: 800,
        height: 800,
        alt: "Apoorva Kaushal — Social Media Manager & Content Creator",
      },
      {
        url: "/photos/IMG-20260205-WA0035.jpg",
        width: 1200,
        height: 630,
        alt: "Apoorva Kaushal Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apoorva Kaushal — Social Media Manager & Content Creator",
    description:
      "Social media manager, content creator from Hathras, UP, India. Best match Harsh Sharma. @apoorva_kaushal",
    creator: "@apoorva_kaushal",
    images: ["/photos/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "https://apoorvakaushal.vercel.app" },
  verification: {
    google: "J3Ye67XomlkhUSkpLf7AIDPo_qXhc2YMDB6c1BkR5yQ",
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Hathras",
    "geo.position": "27.5954;78.0524",
    "ICBM": "27.5954, 78.0524",
    "DC.title": "Apoorva Kaushal — Social Media Manager & Content Creator",
    "DC.creator": "Apoorva Kaushal",
    "DC.coverage": "Hathras, Uttar Pradesh, India",
    "rating": "General",
  },
};

/* ── JSON-LD Structured Data (Person + Knowledge Graph + LocalBusiness) ── */
const graphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://apoorvakaushal.com/#person",
      name: "Apoorva Kaushal",
      alternateName: [
        "Apoova",
        "Apoorva Kuashal",
        "Apoorva Kaushal Hathras",
        "Apoorva kaushal HMorix",
        "Apoorva Kaushal best match Harsh Sharma",
      ],
      description:
        "Indian Social Media Manager and Content Creator based in Hathras, Uttar Pradesh. Known for Hindi comedy, parodies, informative videos, and Krishna prem devotional content.",
      url: "https://apoorvakaushal.com",
      image: "https://apoorvakaushal.com/photos/profile.jpg",
      gender: "Female",
      nationality: { "@type": "Country", name: "India" },
      homeLocation: {
        "@type": "Place",
        name: "Hathras, Uttar Pradesh, India",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 27.5954,
          longitude: 78.0524,
        },
      },
      jobTitle: "Social Media Manager & Digital Content Creator",
      knowsAbout: [
        "Social Media Marketing",
        "Content Strategy",
        "Instagram Reels",
        "Meta Ads",
        "UGC Video Production",
        "Hindi Comedy Content",
        "Krishna & Spiritual Content",
        "SEO & Copywriting",
      ],
      colleague: [
        {
          "@type": "Person",
          name: "Harsh Sharma",
          description: "Creative partner and collaborator with Apoorva Kaushal (Harsh love Apoorva / Harsh Sharma love Apoorva Kaushal).",
        },
      ],
      sameAs: [
        "https://www.instagram.com/apoorva_kaushal",
        "https://www.youtube.com/@apoorva_kaushal",
        "https://twitter.com/apoorva_kaushal",
        "https://www.facebook.com/apoorva_kaushal",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://apoorvakaushal.com/#website",
      url: "https://apoorvakaushal.com",
      name: "Apoorva Kaushal Official",
      description: "Official portfolio, analytics dashboard, case studies, and Q&A for Apoorva Kaushal.",
      publisher: { "@id": "https://apoorvakaushal.com/#person" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://apoorvakaushal.com/#business",
      name: "Apoorva Kaushal Digital Media Services",
      url: "https://apoorvakaushal.com",
      telephone: "+91-9368153189",
      priceRange: "₹₹",
      image: "https://apoorvakaushal.com/photos/profile.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hathras",
        addressRegion: "Uttar Pradesh",
        postalCode: "204101",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 27.5954,
        longitude: 78.0524,
      },
      areaServed: [
        { "@type": "State", name: "Uttar Pradesh" },
        { "@type": "Country", name: "India" },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
        />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Hathras" />
        <meta name="geo.position" content="27.5954;78.0524" />
        <meta name="ICBM" content="27.5954, 78.0524" />
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
          href="https://wa.me/919368153189?text=Hi%20Apoorva%2C%20I%20found%20your%20website%20and%20want%20to%20collaborate!"
          className="wa-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#ffffff">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
