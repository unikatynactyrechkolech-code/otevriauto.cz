import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "pub-1210b04a751146ca8c08bf867908398c.r2.dev" },
    ],
  },
};

export default nextConfig;
