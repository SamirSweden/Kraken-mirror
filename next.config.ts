import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: '/checklist',
  

  images: {
      domains: ['images.ctfassets.net', 'coin-images.coingecko.com'],
  }
};

export default nextConfig;
