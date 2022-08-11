/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
}

module.exports = withContentlayer({
  nextConfig,
  images: {
     domains: ['applegate-paul.mo.cloudinary.net'],
     formats: ['image/avif', 'image/webp']
   }
})