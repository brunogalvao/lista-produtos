import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
  },
  webpack(config: WebpackConfig) {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": __dirname,
    };
    return config;
  },
};

export default nextConfig;
