import type { MDXComponents } from "mdx/types";

import * as stylex from "@stylexjs/stylex";
import { globalTokens as $, spacing, text } from "./app/globalTokens.stylex";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";

const MOBILE = "@media (max-width: 700px)";
const styles = stylex.create({
  base: {
    fontFamily: $.fontSans,
    padding: 0,
    margin: 0,
    marginTop: "0.5em",
  },
  h1: {
    color: colors.blue3,
    fontSize: text.h3,
    fontWeight: 200,
  },
  h2: {
    fontSize: text.h4,
    fontWeight: 400,
  },
  h3: {
    fontSize: text.h5,
    fontWeight: 600,
  },
  p: {
    marginTop: "1em",
    fontSize: text.p,
  },
  li: {
    marginInlineStart: "1.1em",
  },
});

function H1(props: any) {
  return <h1 {...props} {...stylex.props(styles.base, styles.h1)} />;
}

function H2(props: any) {
  return <h2 {...props} {...stylex.props(styles.base, styles.h2)} />;
}

function H3(props: any) {
  return <h3 {...props} {...stylex.props(styles.base, styles.h3)} />;
}

function P(props: any) {
  return <p {...props} {...stylex.props(styles.base, styles.p)} />;
}

function Ul(props: any) {
  return <ul {...props} {...stylex.props(styles.base, styles.p)} />;
}
function Ol(props: any) {
  return <ol {...props} {...stylex.props(styles.base, styles.p)} />;
}

function Li(props: any) {
  return <li {...props} {...stylex.props(styles.base, styles.p, styles.li)} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    ul: Ul,
    ol: Ol,
    li: Li,
    ...components,
  };
}
