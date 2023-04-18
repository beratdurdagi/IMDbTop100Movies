import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "##fd5c63", // airbnb
    secondary: "#D2122E",   // AJAX RED
    cartBackground:'#088F8F',
    borderColor:'#BEBEBE',

    green: "#66D59A",
    lightGreen: "#E6FEF0",

    lime: "#00BA63",
    emerald: "#2BC978",

    red: "#FF4134",
    lightRed: "#FFF1F0",

    purple: "#6B3CE9",
    lightpurple: "#F3EFFF",

    yellow: "#FFC664",
    lightyellow: "#FFF9EC",

    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#FCFBFC",
    gray: "#C1C3C5",
    darkgray: "#C3C6C7",

    transparent: "transparent",
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 7,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 45,
    h1: 23,
    h2: 20,
    h3: 18,
    h4: 16,
    p:14,
    body1: 25,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const LINE_HEIGHTS={
    h1:Math.round(SIZES.h1*1.3),
    h2:Math.round(SIZES.h2*1.3),
     h3:Math.round(SIZES.h3*1.3) ,
    h4:Math.round(SIZES.h4*1.3),
    p: Math.round(SIZES.p*1.3),
    text:Math.round(SIZES.text*1.3),
   small: Math.round(SIZES.small*1.3),
   }

   export const LETTER_SPACİNG={
    h1:-(SIZES.h1*0.03),
    h2:-(SIZES.h2*0.03),
     h3:-(SIZES.h3*0.03),
    h4:-(SIZES.h4*0.03),
    p:0,
  text:0,
  small:0,
   }

export const FONTS = {
    largeTitle: { fontWeight:'500', fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontWeight:'bold', fontSize: SIZES.h1, lineHeight: LINE_HEIGHTS.h1,letterSpacing:LETTER_SPACİNG.h1 },
    h2: {fontWeight:'300', fontSize: SIZES.h2, lineHeight: LINE_HEIGHTS.h2,letterSpacing:LETTER_SPACİNG.h2},
    h3: {fontWeight:'300', fontSize: SIZES.h3, lineHeight: LINE_HEIGHTS.h3,letterSpacing:LETTER_SPACİNG.h3},
    h4: {fontWeight:'300', fontSize: SIZES.h4, lineHeight: LINE_HEIGHTS.h4,letterSpacing:LETTER_SPACİNG.h4},
    p: { fontWeight:'300',fontSize: SIZES.p, lineHeight:LINE_HEIGHTS.p,letterSpacing:LETTER_SPACİNG.p },
    body1: { fontWeight:'400', fontSize: SIZES.body1, lineHeight: LINE_HEIGHTS.h1,letterSpacing:LETTER_SPACİNG.h1 },
    body2: { fontWeight:'400', fontSize: SIZES.body2, lineHeight: LINE_HEIGHTS.h2,letterSpacing:LETTER_SPACİNG.h2 },
    body3: { fontWeight:'400', fontSize: SIZES.body3, lineHeight: LINE_HEIGHTS.h3,letterSpacing:LETTER_SPACİNG.h3 },
    body4: { fontWeight:'400', fontSize: SIZES.body4, lineHeight: LINE_HEIGHTS.h4,letterSpacing:LETTER_SPACİNG.h4 },
    body5: { fontWeight:'400', fontSize: SIZES.body5, lineHeight: LINE_HEIGHTS.p ,letterSpacing:LETTER_SPACİNG.p},
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;