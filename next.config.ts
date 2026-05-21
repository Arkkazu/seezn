import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  trailingSlash: true,
  output: "export", // ← 必須
  images: { unoptimized: true }, // next/image を静的対応
};

export default nextConfig;
