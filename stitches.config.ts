import {
  blue,
  blueDark,
  slate,
  slateDark,
  sage,
  sageDark,
  plum,
  plumDark,
  gray,
  grayDark,
  green,
  greenDark,
  red,
  redDark,
  indigo,
  indigoDark,
  violet,
  violetDark,
} from "@radix-ui/colors";
import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";

export type { VariantProps } from "@stitches/react";

export const { config, createTheme, getCssText, styled, globalCss } =
  createStitches({
    theme: {
      colors: {
        ...gray,
        ...indigo,
        ...violet,

        // Semantic colors
        canvas: "hsl(0 0% 93%)",
        panel: "white",
        transparentPanel: "hsl(0 0% 0% / 97%)",
        shadowLight: "hsl(206 22% 7% / 35%)",
        shadowDark: "hsl(206 22% 7% / 20%)",
      },
      fonts: {
        lora: "Lora, sans-serif",
      },
      fontSizes: {
        1: "12px",
        2: "14px",
        3: "16px",
        4: "20px",
        5: "24px",
        6: "32px",
        7: "40px",
        8: "48px",
        9: "64px",
      },
      space: {
        1: "4px",
        2: "8px",
        3: "16px",
        4: "32px",
        5: "64px",
        6: "128px",
        7: "256px",
        8: "512px",
      },
      sizes: {
        1: "4px",
        2: "8px",
        3: "16px",
        4: "32px",
        5: "64px",
        6: "128px",
      },
      radii: {
        1: "2px",
        2: "4px",
        3: "8px",
        round: "9999px",
      },
    },
    media: {
      bp1: "(min-width: 520px)",
      bp2: "(min-width: 900px)",
      bp3: "(min-width: 1200px)",
      bp4: "(min-width: 1800px)",
      motion: "(prefers-reduced-motion)",
      hover: "(any-hover: hover)",
      dark: "(prefers-color-scheme: dark)",
      light: "(prefers-color-scheme: light)",
    },
    utils: {
      p: (value: Stitches.PropertyValue<"padding">) => ({
        padding: value,
      }),
      pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
        paddingTop: value,
      }),
      pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
        paddingRight: value,
      }),
      pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
        paddingLeft: value,
      }),
      px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<"paddingTop">) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      m: (value: Stitches.PropertyValue<"margin">) => ({
        margin: value,
      }),
      mt: (value: Stitches.PropertyValue<"marginTop">) => ({
        marginTop: value,
      }),
      mr: (value: Stitches.PropertyValue<"marginRight">) => ({
        marginRight: value,
      }),
      mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
        marginLeft: value,
      }),
      mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<"marginTop">) => ({
        marginTop: value,
        marginBottom: value,
      }),

      ta: (value: Stitches.PropertyValue<"textAlign">) => ({
        textAlign: value,
      }),

      fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
        flexDirection: value,
      }),
      fw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),

      ai: (value: Stitches.PropertyValue<"alignItems">) => ({
        alignItems: value,
      }),
      ac: (value: Stitches.PropertyValue<"alignContent">) => ({
        alignContent: value,
      }),
      jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
        justifyContent: value,
      }),
      as: (value: Stitches.PropertyValue<"alignSelf">) => ({
        alignSelf: value,
      }),
      fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
      fs: (value: Stitches.PropertyValue<"flexShrink">) => ({
        flexShrink: value,
      }),
      fb: (value: Stitches.PropertyValue<"flexBasis">) => ({
        flexBasis: value,
      }),

      bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
        backgroundColor: value,
      }),

      br: (value: Stitches.PropertyValue<"borderRadius">) => ({
        borderRadius: value,
      }),
      btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
        borderTopRightRadius: value,
      }),
      bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
        borderBottomRightRadius: value,
      }),
      bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
        borderBottomLeftRadius: value,
      }),
      btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
        borderTopLeftRadius: value,
      }),

      bs: (value: Stitches.PropertyValue<"boxShadow">) => ({
        boxShadow: value,
      }),

      lh: (value: Stitches.PropertyValue<"lineHeight">) => ({
        lineHeight: value,
      }),

      ox: (value: Stitches.PropertyValue<"overflowX">) => ({
        overflowX: value,
      }),
      oy: (value: Stitches.PropertyValue<"overflowY">) => ({
        overflowY: value,
      }),

      pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
        pointerEvents: value,
      }),
      us: (value: Stitches.PropertyValue<"userSelect">) => ({
        WebkitUserSelect: value,
        userSelect: value,
      }),

      userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
        WebkitUserSelect: value,
        userSelect: value,
      }),

      size: (value: Stitches.PropertyValue<"width">) => ({
        width: value,
        height: value,
      }),

      appearance: (value: Stitches.PropertyValue<"appearance">) => ({
        WebkitAppearance: value,
        appearance: value,
      }),
      backgroundClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
        WebkitBackgroundClip: value,
        backgroundClip: value,
      }),
    },
  });

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
});
