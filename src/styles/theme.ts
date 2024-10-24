import colors from "./colors";
import fonts from "./fonts";

const theme = {
  ...fonts,
  colors,
};

export default theme;

export type ThemeType = typeof theme;
