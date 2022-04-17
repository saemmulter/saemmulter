/** @type {import('next').NextConfig} */
const withImages = require('next-images')
const Dotenv = require('dotenv-webpack')
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
  images: {
    disableStaticImages: true,
  }
}

module.exports = withImages({
  nextConfig,
  i18n
})
