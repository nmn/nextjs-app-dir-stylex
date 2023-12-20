import { props, StyleXStyles } from "@stylexjs/stylex";
import { utilitis as _ } from "./utilities";

type Props = {
  linkStyle?: StyleXStyles;
};

export default function Page({ linkStyle }: Props) {
  return (
    <div
      {...props(
        _.flex,
        _.flex_col,
        _.items_center,
        _.justify_center,
        _.h_full,
        _.c_gray_700
      )}
    >
      <h1 {...props(_.font_size_4rem, _.bold, _.c_red_500)}>Hello World</h1>
      <a {...props(_.c_blue_500, _.link, linkStyle)}>Link</a>
    </div>
  );
}
