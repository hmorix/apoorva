import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep mongodb and google-drive libs server-side only — never bundled by webpack
  serverExternalPackages: [
    "mongodb",
    "google-auth-library",
    "googleapis",
    "node:crypto",
    "node:tls",
    "node:net",
    "node:fs",
    "node:path",
  ],

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "drive.google.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "i.ibb.co" },
    ],
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // These are Node.js-only modules — tell webpack to ignore them in browser bundles
      config.resolve.fallback = {
        ...config.resolve.fallback,
        tls: false,
        net: false,
        fs: false,
        dns: false,
        child_process: false,
        "timers/promises": false,
      };
    }
    return config;
  },

  experimental: {},
};

export default nextConfig;

