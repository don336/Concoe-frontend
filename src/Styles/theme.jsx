import { createTheme } from "@mui/material/styles";

export const COLORS = {
  OUTERSPACE_GREY: "#435058",
  WHITE_SMOKE: "#F1F2EE",
  BLAK_OLIVE: "#CEEAF7",
  ERIE_BLACK: "#222222",
  YELLOW_GREEN: "#A2D729",
  WHITE: "#fff",
  LIGHT_GREEN: "#d3e298",
  DARK_GREY: "#333",
  LIGHT: "#eee",
  MEDIUM_GREY: "#00aba6",
  WHITE: "#fff",
  LIGHT_BLUE: "#32b8cb",
  BLUE: "#0035C7",
  RED: "#dd4b39",
  LIGHT_RED: "#ee475b",
  MEDIUM_RED: "#808080",
  SKY_BLUE: "#4a90e2",
  BLACK: "#000",
  METAL_GREY: "#97a2a2",
  DARK_BLUE: "#001257",
};

export const ONE_REM_TO_PX = 16;

export const FONT = {
  // Define available font-families to be used throughout the app
  // font-family: 'Montserrat', sans-serif;
  FAMILY: {
    Montserrat: ["Montserrat", "sans-serif"].join(","),
  },
  LINE_HEIGHT: "136.4%",
  // Define font weights that would be used throughout the app
  WEIGHT: {
    LIGHT: 400,
    REGULAR: 500,
    MEDIUM: 600,
    SEMIBOLD: 700,
    BOLD: 800,
  },
  // Define font sizes that would be used throughout the app in rem
  // the numbers on the left indicates the px equivalent of the rem values
  SIZES: {
    48: "3rem",
    36: "2.25rem",
    32: "2rem",
    30: "1.875rem",
    28: "1.75rem",
    24: "1.5rem",
    22: "1.375rem",
    20: "1.25rem",
    18: "1.125rem",
    16: "1rem",
    14: "0.875rem",
    12: "0.75rem",
    10: "0.625rem",
    9: "0.563rem",
    8: "0.5rem",
  },
  LINE_HEIGHTS: {
    49: "3.063rem",
    33: "2.063rem",
    30: "1.875rem",
    27: "1.688rem",
    26: "1.563rem",
    22: "1.375rem",
    19: "1.188rem",
    16: "1rem",
    14: "0.875rem",
    13: "0.813rem",
    12: "0.75rem",
    11: "0.688rem",
  },
  STYLE: {
    ITALIC: "italic",
  },
};

export const theme = createTheme({
  typography: {
    fontFamily: FONT.FAMILY.Montserrat,
    h1: {
      fontSize: FONT.SIZES[49],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.MEDIUM,
    },
    h2: {
      fontSize: FONT.SIZES[24],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.MEDIUM,
      // color: COLORS.MEDIUM_RED,
    },
    h3: {
      fontSize: FONT.SIZES[22],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.BOLD,
    },
    h4: {
      fontSize: FONT.SIZES[20],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR,
    },
    h5: {
      fontSize: FONT.SIZES[16],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR,
    },
    h6: {
      fontSize: FONT.SIZES[14],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR,
    },

    w1: {
      fontSize: FONT.SIZES[12],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR,
    },
    w2: {
      fontSize: FONT.SIZES[10],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR,
    },
  },
});
