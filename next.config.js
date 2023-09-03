/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb",
    domains: ["upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
