/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
        'upload.wikimedia.org',
        "images.hothardware.com",
        'cdn.shopify.com',
        'wmstatic.global.ssl.fastly.net',
        'img.helpforsmartphone.com',
        'fonts.googleapis.com',
        'consumer.huawei.com'
    ],
  },
};

module.exports = nextConfig;
