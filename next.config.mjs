/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/WebSite',
  assetPrefix: '/WebSite',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
