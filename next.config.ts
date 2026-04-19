import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Prod: inline globals.css/Tailwind as <style> to avoid a blocking CSS chunk fetch.
    inlineCss: true,
    // Smaller client bundles by avoiding barrel re-exports from framer-motion.
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
