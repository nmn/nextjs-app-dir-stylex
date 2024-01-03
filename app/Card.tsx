import * as stylex from "@stylexjs/stylex";
import { globalTokens as $, spacing, text } from "./globalTokens.stylex";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import { tokens } from "./CardTokens.stylex";

type Props = Readonly<{
  title: string;
  body: string;
  href: string;
}>;

export default function Card({ title, body, href }: Props) {
  return (
    <a
      href={href}
      {...stylex.props(styles.link)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 {...stylex.props(styles.h2)}>
        {title} <span {...stylex.props(styles.span)}>→</span>
      </h2>
      <p {...stylex.props(styles.p)}>{body}</p>
    </a>
  );
}

type TMobile = "@media (max-width: 700px)";

const MOBILE = "@media (max-width: 700px)" satisfies TMobile;
const REDUCE_MOTION = "@media (prefers-reduced-motion: reduce)";

const cardBgTransparent = `rgba(${$.cardR}, ${$.cardG}, ${$.cardB}, 0)`;
const CardBgTranslucent = `rgba(${$.cardR}, ${$.cardG}, ${$.cardB}, 0.1)`;
const cardBorderTransparent = `rgba(${$.cardBorderR}, ${$.cardBorderG}, ${$.cardBorderB}, 0)`;
const cardBorderHover = `rgba(${$.cardBorderR}, ${$.cardBorderG}, ${$.cardBorderB}, 0.1)`;

const styles = stylex.create({
  link: {
    display: {
      default: "flex",
      [MOBILE]: "block",
    },
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderRadius: spacing.xs,
    backgroundColor: {
      default: cardBgTransparent,
      ":hover": CardBgTranslucent,
    },
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: {
      default: cardBorderTransparent,
      ":hover": cardBorderHover,
    },
    color: "inherit",
    fontFamily: $.fontSans,
    padding: spacing.sm,
    transitionProperty: "background-color, border-color",
    transitionDuration: "400ms",
    [tokens.arrowTransform]: {
      // eslint-disable-next-line @stylexjs/valid-styles
      default: "translateX(0)",
      // eslint-disable-next-line @stylexjs/valid-styles
      ":hover": "translateX(4px)",
    },
    textAlign: "center",
    textDecoration: "none",
  },
  h2: {
    color: colors.blue3,
    fontSize: text.h4,
    fontWeight: 600,
    marginBottom: {
      default: spacing.xs,
      [MOBILE]: spacing.xxs,
    },
  },
  span: {
    display: "inline-block",
    transitionProperty: "transform",
    transitionDuration: {
      default: "200ms",
      [REDUCE_MOTION]: "0s",
    },
    transform: tokens.arrowTransform,
  },
  p: {
    margin: 0,
    opacity: 0.6,
    fontSize: text.p,
    textWrap: "balance",
    lineHeight: 1.5,
    maxWidth: "30ch",
  },
  dynamic: (color: string) => ({
    color: color,
  }),
});
