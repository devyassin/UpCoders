/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["uploadthing.com", "flagcdn.com"],
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
