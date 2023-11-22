import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles, Theme } from "@stylexjs/stylex/lib/StyleXTypes";

import "./ButtonTokens.stylex";
import { buttonTokens } from "./ButtonTokens.stylex";

type Props = Readonly<{
  onClick: () => void;
  children: React.ReactNode;
  // for Overrides
  style?: StyleXStyles;
  theme?: Theme<typeof buttonTokens>;
}>;

export default function Card({ onClick, children, style, theme }: Props) {
  return (
    <button
      {...stylex.props(theme as any, styles.base, style)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const styles = stylex.create({
  base: {
    appearance: "none",
    borderWidth: 0,
    borderStyle: "none",
    backgroundColor: buttonTokens.bgColor,
    color: buttonTokens.textColor,
    borderRadius: buttonTokens.cornerRadius,
    paddingBlock: buttonTokens.paddingBlock,
    paddingInline: buttonTokens.paddingInline,
  },
});
