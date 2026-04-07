/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // dari Github
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // dari Google
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.newbalance.co.id', // dari Custom Assets Product
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'contents.mediadecathlon.com', // dari Custom Assets Product
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.adidas.com', // dari Custom Assets Product
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.store-assets.com', // dari Custom Assets Product
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
