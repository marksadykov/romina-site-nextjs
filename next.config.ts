import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@mui/material', '@emotion/react', '@emotion/styled'],
  },
  sassOptions: {
    includePaths: ['./src/styles'],
  },
};

export default nextConfig;
