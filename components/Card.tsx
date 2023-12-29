import "./globalTokens.stylex";
import { globalTokens, text } from "./globalTokens.stylex";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  container: {
    padding: 40,
    backgroundColor: globalTokens.calloutRGB,
    color: `rgb(${globalTokens.foregroundR}, ${globalTokens.foregroundG}, ${globalTokens.foregroundB})`,
    fontFamily: globalTokens.fontSans,
    fontSize: text.h4,
  },
});

export const Card = () => {
  return (
    <div {...stylex.props(styles.container)}>
      <span>Card Component</span>
    </div>
  );
};
