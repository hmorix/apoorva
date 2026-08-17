import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics Dashboard — Account Reach, Views & Ad Results",
  description:
    "Public analytics dashboard showing Apoorva Kaushal's account reach, Reel views, platform follower breakdown, ad campaign results, and India audience data.",
  alternates: { canonical: "https://apoorvakaushal.com/dashboard" },
  robots: { index: true, follow: true },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
