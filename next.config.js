/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  images: {
    domains: ['imgur.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgur.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig; 