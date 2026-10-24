/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages needs directory-style URLs: /blog/index.html and /blog/<slug>/index.html
  // so /blog/ and individual article URLs resolve correctly.
  trailingSlash: true,
  basePath: '',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
