import Document, { Head, Html, Main, NextScript } from "next/document";
import * as React from "react";
import * as stylex from "@stylexjs/stylex";

// NOTE: Styles defined in this file don't show up in development mode.
// They do show up in production mode.
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" {...stylex.props(styles.reset, styles.html)}>
        <Head></Head>
        <body {...stylex.props(styles.reset, styles.body)}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const styles = stylex.create({
  reset: {
    margin: 0,
    padding: 0,
  },
  html: {
    colorScheme: "light dark",
  },
  body: {
    backgroundColor: "rgb(40, 40, 60)",
  },
});
