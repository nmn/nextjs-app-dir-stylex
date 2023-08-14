import Image from "next/image";
import styles from "./page.module.css";
import stylex from "@stylexjs/stylex";
import Card from "./Card";
import { globalTokens as $ } from "./globalTokens.stylex";

const MEDIA_MOBILE = "@media (max-width: 700px)";
const MEDIA_TABLET = "@media (min-width: 701px) and (max-width: 1120px)";

const s = stylex.create({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100vh",
    padding: "5rem",
  },
  description: {
    color: { default: "red", [MEDIA_MOBILE]: "blue" },
    display: "inherit",
    justifyContent: "inherit",
    alignItems: "inherit",
    fontSize: {
      default: "0.85rem",
      [MEDIA_MOBILE]: ".8rem",
    },
    maxWidth: $.maxWidth,
    width: "100%",
    zIndex: 2,
    fontFamily: $.fontMono,
  },
  descLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    padding: { [MEDIA_MOBILE]: "1rem" },
  },
  descP: {
    display: { [MEDIA_MOBILE]: "flex" },
    position: {
      default: "relative",
      [MEDIA_MOBILE]: "fixed",
    },
    justifyContent: { [MEDIA_MOBILE]: "center" },
    alignItems: { [MEDIA_MOBILE]: "center" },
    width: { [MEDIA_MOBILE]: "100%" },
    margin: 0,
    padding: {
      default: "1rem",
      [MEDIA_MOBILE]: "2rem 1rem 1.4rem",
    },
    background: {
      default: $.calloutRGB50,
      [MEDIA_MOBILE]: `linear-gradient(to bottom, ${$.bgStartRGB}, ${$.calloutRGB50})`,
    },
    borderWidth: {
      default: "1px",
      [MEDIA_MOBILE]: "0",
    },
    borderStyle: "solid",
    borderColor: `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.3)`,
    borderBottomColor: {
      [MEDIA_MOBILE]: `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.25)`,
    },
    borderRadius: {
      default: $.borderRadius,
      [MEDIA_MOBILE]: 0,
    },
    inset: { [MEDIA_MOBILE]: "0 0 auto" },
  },
  code: {
    fontWeight: 700,
    fontFamily: $.fontMono,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(4, minmax(25%, auto))",
      [MEDIA_MOBILE]: "1fr",
      [MEDIA_TABLET]: "repeat(2, 50%)",
    },
    marginBottom: { [MEDIA_MOBILE]: 120 },
    width: $.maxWidth,
    maxWidth: {
      default: "100%",
      [MEDIA_MOBILE]: 320,
    },
    textAlign: { [MEDIA_MOBILE]: "center" },
  },
});

export default function Home() {
  return (
    <main className={stylex(s.main)}>
      <div className={stylex(s.description)}>
        <p className={stylex(s.descP)}>
          Get started by editing&nbsp;
          <code className={stylex(s.code)}>app/page.tsx</code>
        </p>
      </div>

      <div>{JSON.stringify($.maxWidth)}</div>

      <div className={stylex(s.grid)}>
        <Card
          href="https://beta.nextjs.org/docs"
          title="Docs"
          body="Find in-depth information about Next.js features and API."
        />
        <Card
          href="https://nextjs.org/learn"
          title="Learn"
          body="Learn about Next.js in an interactive course with quizzes!"
        />
        <Card
          href="https://vercel.com/templates"
          title="Templates"
          body="Explore the Next.js 13 playground."
        />
        <Card
          href="https://vercel.com/new"
          title="Deploy"
          body="Instantly deploy your Next.js site to a public URL with Vercel."
        />
      </div>
    </main>
  );
}
