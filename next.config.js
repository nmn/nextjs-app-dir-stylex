/** @type {import('next').NextConfig} */
const stylexPlugin = require("@stylexjs/nextjs-plugin");

module.exports = stylexPlugin({
  filename: "stylex-bundle.css",
  rootDir: __dirname,
})({});
