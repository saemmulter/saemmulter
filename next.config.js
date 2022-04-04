/** @type {import('next').NextConfig} */
const withImages = require('next-images')
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.module = {
      ...config.module, exprContextCritical: false,
    }
    return config
  },
  images: {
    disableStaticImages: true,
  },
}

module.exports = withImages({
  nextConfig,
  i18n,
})
