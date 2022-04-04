/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: process.env.SERVER,
    LOCAL_BACKEND: process.env.LOCAL_BACKEND
  },
};
console.log("envirooooooonment",process.env)
module.exports = nextConfig;