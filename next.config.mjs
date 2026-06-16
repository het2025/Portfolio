/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/Portfolio',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Portfolio'
  }
};

export default nextConfig;
