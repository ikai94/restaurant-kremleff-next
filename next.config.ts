import type { NextConfig } from 'next';

const repoName = 'restaurant-kremleff-next';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
    reactStrictMode: true,

    output: 'export',
    trailingSlash: true,

    basePath: isGitHubActions ? `/${repoName}` : '',
    assetPrefix: isGitHubActions ? `/${repoName}/` : '',

    images: {
        unoptimized: true,
    },
};

export default nextConfig;
