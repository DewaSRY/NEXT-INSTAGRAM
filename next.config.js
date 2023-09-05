/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
    domains: [
      "upload.wikimedia.org",
      "i.pravatar.cc",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
