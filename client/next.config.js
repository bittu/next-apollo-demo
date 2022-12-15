/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  env: {
    GRAPHQL_HOST: process.env.GRAPHQL_HOST,
  },
}

module.exports = nextConfig
