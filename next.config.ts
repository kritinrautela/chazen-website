import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubRepoName = "chazen-website";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: isGithubPages ? `/${githubRepoName}` : undefined,
  assetPrefix: isGithubPages ? `/${githubRepoName}/` : undefined
};

export default nextConfig;
