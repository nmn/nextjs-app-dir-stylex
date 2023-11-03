module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        // This should be process.env.NODE_ENV === "development"
        // But there is a bug in StyleX that prevents it from working.
        // Fix in beta 25.
        dev: false,
        stylexSheetName: "<>",
        genConditionalClasses: true,
        unstable_moduleResolution: {
          type: "commonJS",
          rootDir: __dirname,
        },
      },
    ],
  ],
};
