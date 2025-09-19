/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Arvind-Portfolio', // Replace with your repository name
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;