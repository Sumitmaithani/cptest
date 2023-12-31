/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"]
    },
    images: {
      domains: ["images.unsplash.com"]
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true
      };
      return config;
    }
  };
  
  module.exports = nextConfig;