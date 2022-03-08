/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: process.env.SERVER,
  },
};

module.exports = nextConfig;
