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
      // Add more patterns for production domains when needed
      // Example for production:
      // {
      //   protocol: 'https',
      //   hostname: 'your-api-domain.com',
      //   pathname: '/uploads/**',
      // },
    ],
  },
};

export default nextConfig;
