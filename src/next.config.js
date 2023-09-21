/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //Allowed Endpoints
  images: {
    domains: ['localhost', 'via.placeholder.com'],
  },
}

module.exports = nextConfig
