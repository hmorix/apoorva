import React from "react";

export const metadata = {
  title: "HMoriX Visual Studio — Live Content & Media Editor",
  description: "Visual live-preview CMS with MongoDB Atlas and Google Drive cloud storage",
  robots: { index: false, follow: false },
};

export default function HmorixAdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
