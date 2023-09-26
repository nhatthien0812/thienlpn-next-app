/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: '/thienlpn-next-app',
}

module.exports = nextConfig
