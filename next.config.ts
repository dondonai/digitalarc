import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.enfenetydev.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [384, 640, 750, 1080, 1200, 1920],
    imageSizes: [384, 512, 640, 750, 1080, 1200, 1920],
  },
};

export default nextConfig;
