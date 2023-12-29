module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev: true, // process.env.NODE_ENV === "development",
        genConditionalClasses: true,
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: "commonJS",
          rootDir: __dirname,
        },
      },
    ],
  ],
};
