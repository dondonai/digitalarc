import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["storage.enfenetydev.com"],
    imageSizes: [384, 512, 640, 750, 1080, 1200, 1920],
  },
};

export default nextConfig;
