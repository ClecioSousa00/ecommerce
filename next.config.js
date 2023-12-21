/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'fsw-store.s3.sa-east-1.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
