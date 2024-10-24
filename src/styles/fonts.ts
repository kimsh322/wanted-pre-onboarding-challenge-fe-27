const fontSize = {
  xxxl: "40px",
  xxl: "36px",
  xl: "32px",
  l: "28px",
  xxxm: "24px",
  xxm: "22px",
  xm: "20px",
  m: "18px",
  s: "16px",
  xs: "14px",
  xxs: "12px",
  xxxs: "10px",
};

const fontWeight = {
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400,
};

export type FontWeightKey = keyof typeof fontWeight;

const lineHeight = {
  xxxl: "48px",
  xxl: "44px",
  xl: "40px",
  l: "36px",
  xxxm: "32px",
  xxm: "30px",
  xm: "28px",
  m: "24px",
  s: "20px",
  xs: "16px",
  xxs: "12px",
};

const fontStyle = {
  title1: {
    fontSize: fontSize.xxxl,
    lineHeight: lineHeight.xxxl,
  },
  title2: {
    fontSize: fontSize.xxl,
    lineHeight: lineHeight.xxl,
  },
  title3: {
    fontSize: fontSize.xl,
    lineHeight: lineHeight.xl,
  },
  title4: {
    fontSize: fontSize.l,
    lineHeight: lineHeight.l,
  },
  title5: {
    fontSize: fontSize.xxxm,
    lineHeight: lineHeight.xxxm,
  },
  title6: {
    fontSize: fontSize.xxm,
    lineHeight: lineHeight.xxm,
  },
  subtitle1: {
    fontSize: fontSize.xm,
    lineHeight: lineHeight.xm,
  },
  subtitle2: {
    fontSize: fontSize.m,
    lineHeight: lineHeight.m,
  },
  body1: {
    fontSize: fontSize.s,
    lineHeight: lineHeight.m,
  },
  body2: {
    fontSize: fontSize.xs,
    lineHeight: lineHeight.s,
  },
  caption1: {
    fontSize: fontSize.xxs,
    lineHeight: lineHeight.xs,
  },
  caption2: {
    fontSize: fontSize.xxxs,
    lineHeight: lineHeight.xxs,
  },
};

export type FontStyleKey = keyof typeof fontStyle;

export default {
  fontSize,
  fontWeight,
  lineHeight,
  fontStyle,
};
