// PWA to be updated
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
});

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.alquran.cloud"],
  },
};
