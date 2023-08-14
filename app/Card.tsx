import stylex from "@stylexjs/stylex";
import { globalTokens as $ } from "./globalTokens.stylex";

type Props = Readonly<{
  title: string;
  body: string;
  href: string;
}>;

export default function Card({ title, body, href }: Props) {
  return (
    <a
      href={href}
      className={stylex(styles.container)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={stylex(styles.h2)}>
        {title} <span className={stylex(styles.span)}>-&gt;</span>
      </h2>
      <p className={stylex(styles.p)}>{body}</p>
    </a>
  );
}

const styles = stylex.create({
  container: {
    "--color-opacity": {
      default: "0",
      ":hover": "0.1",
    },
    borderRadius: $.borderRadius,
    backgroundColor: `rgba(${$.cardR}, ${$.cardG}, ${$.cardB}, var(--color-opacity))`,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: `rgba(${$.cardBorderR}, ${$.cardBorderG}, ${$.cardBorderB}, var(--color-opacity))`,
    fontFamily: "system-ui, sans-serif",
    padding: {
      default: "1rem 1.2rem",
      "@media (max-width: 700px)": "1rem 2.5rem",
    },
    transitionProperty: "background, border",
    transitionDuration: "200ms",
    transform: {
      default: "translateX(0)",
      ":hover span": "translateX(4px)",
    },
  },
  h2: {
    fontWeight: 600,
    marginBottom: {
      default: "0.7rem",
      "@media (max-width: 700px)": "0.5rem",
    },
  },
  span: {
    display: "inline-block",
    transitionProperty: "transform",
    transitionDuration: {
      default: "200ms",
      "@media (prefers-reduced-motion: reduce)": "0s",
    },
  },
  p: {
    margin: 0,
    opacity: 0.6,
    fontSize: "0.9rem",
    lineHeight: 1.5,
    maxWidth: "30ch",
  },
});
