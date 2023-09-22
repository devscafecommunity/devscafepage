/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'via.placeholder.com', 'raw.githubusercontent.com', 'github.com'],
  },
  experimental: {
    mdxRs: true,
  },
}
 
const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)