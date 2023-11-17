/** @type {import('next').NextConfig} */
const stylexPlugin = require("@stylexjs/nextjs-plugin");
const withMDX = require("@next/mdx")();

const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

module.exports = stylexPlugin({
  filename: "stylex-bundle.css",
  rootDir: __dirname,
})(withMDX(nextConfig));
