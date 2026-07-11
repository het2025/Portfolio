const isGithubActions = process.env.GITHUB_ACTIONS || false;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: isGithubActions ? '/Portfolio' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? '/Portfolio' : ''
  }
};

export default nextConfig;
