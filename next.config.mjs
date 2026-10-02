/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: produces a plain HTML/CSS/JS bundle in `out/` that any
  // shared host (Hostinger, etc.) can serve with no Node.js server — just
  // unzip into the web root. See DEPLOYMENT.md.
  output: "export",
  // Clean, folder-style URLs (/countries/ -> /countries/index.html) so a
  // plain Apache/Nginx static host resolves them without extra rewrite rules.
  trailingSlash: true,
  images: {
    // The built-in Image Optimization API needs a Node.js server to run on
    // request; static export has no server, so images are served as-is.
    // Every image in this project is already a locally-hosted, pre-sized
    // file (see BUILD_NOTES.md), so this has no visible quality impact.
    unoptimized: true,
  },
};

export default nextConfig;
