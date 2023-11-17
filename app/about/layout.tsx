import * as stylex from "@stylexjs/stylex";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div {...stylex.props(styles.container)}>{children}</div>;
}

const styles = stylex.create({
  container: {
    width: "100%",
    maxWidth: 768,
    marginInline: "auto",
  },
});
