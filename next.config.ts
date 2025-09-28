import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Development - Strapi on localhost
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      // Production - Strapi on Render
      {
        protocol: "https",
        hostname: "motorhome-be.onrender.com",
        pathname: "/uploads/**",
      },
      // Cloudinary CDN for images
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  // API Proxy to avoid CORS issues
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "https://motorhome-be.onrender.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
