"use client";

import * as stylex from "@stylexjs/stylex";
import { buttonTokens } from "./ButtonTokens.stylex";
import ThemeableButton from "./ThemeableButton";

type Props = Readonly<{}>;

export default function ButtonsDemo(_props: Props) {
  const onClick = () => {
    console.log("click");
  };
  return (
    <div {...stylex.props(styles.container)}>
      <ThemeableButton onClick={onClick}>Vanilla Button</ThemeableButton>

      <ThemeableButton onClick={onClick} style={styles.bordered}>
        Bordered Button
      </ThemeableButton>

      <ThemeableButton onClick={onClick} theme={redTheme}>
        Red Button
      </ThemeableButton>

      <ThemeableButton
        onClick={onClick}
        style={[styles.bordered, styles.greenBorder]}
        theme={redTheme}
      >
        Red - Bordered Button
      </ThemeableButton>
    </div>
  );
}

const redTheme = stylex.createTheme(buttonTokens, {
  bgColor: "red" as any,
  textColor: "white" as any,
  cornerRadius: "4px" as any,
  paddingBlock: "4px" as any,
  paddingInline: "8px" as any,
});

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    paddingBottom: 64,
  },
  bordered: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "red",
  },
  greenBorder: {
    borderColor: "green",
  },
});
