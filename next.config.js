/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "fonts.googleapis.com",
      "images.hothardware.com",
    ],
  },
};

module.exports = nextConfig;
