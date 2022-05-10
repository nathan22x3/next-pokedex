const path = require('path');
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
};

module.exports = withPlugins(
  [
    withPWA({
      pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
      },
    }),
  ],
  nextConfig
);
