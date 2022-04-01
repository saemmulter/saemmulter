/** @type {import('next').NextConfig} */
const path = require('path')
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
}

module.exports = {
  nextConfig,
  i18n,
}
