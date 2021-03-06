import { styled } from "../../../stitches.config";

export const Button = styled("button", {
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom reset?
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
  height: "$5",
  px: "$2",
  fontSize: "$2",
  fontWeight: 500,
  fontVariantNumeric: "tabular-nums",
  fontFamily: "$lora",
  transition: "0.25s",

  "&:disabled": {
    backgroundColor: "$slate2",
    boxShadow: "inset 0 0 0 1px $colors$slate7",
    color: "$slate8",
    pointerEvents: "none",
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        height: "$5",
        px: "$2",
        fontSize: "$1",
        lineHeight: "$sizes$5",
      },
      "2": {
        borderRadius: "$2",
        height: "$4",
        px: "$3",
        fontSize: "$3",
        lineHeight: "$sizes$6",
      },
      "3": {
        borderRadius: "$2",
        height: "$4",
        px: "$4",
        fontSize: "$4",
        lineHeight: "$sizes$7",
      },
      "4": {
        borderRadius: "$2",
        height: "$5",
        px: "$4",
        fontSize: "$5",
        lineHeight: "$sizes$7",
      },
    },
    variant: {
      main: {
        backgroundColor: "$colors$indigo3",
        boxShadow: "inset 0 0 0 1px $colors$indigo7",
        color: "$colors$indigo11",
        "@hover": {
          "&:hover": {
            // boxShadow: "inset 0 0 0 2px $colors$indigo4",
            cursor: "pointer",
            boxShadow: "inset 0 -3.25em 0 0 $colors$violet10",
            color: "$colors$violet1",
          },
        },
        "&:active": {
          color: "$colors$violet1",
          backgroundColor: "$color$violet3",
          boxShadow: "inset 0 0 0 1px $colors$indigo8",
        },
        "&:focus": {
          // boxShadow: "inset 0 0 0 1px $colors$indigo8, 0 0 0 1px $colors$indigo8",
          boxShadow: "inset 0 -3.25em 0 0 $colors$violet10",
          color: "$colors$violet1",
          borderColor: "$colors$violet8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$indigo4",
            boxShadow: "inset 0 0 0 1px $colors$indigo8",
          },
      },
      secondary: {
        backgroundColor: "$colors$violet3",
        boxShadow: "inset 0 -3.25em 0 0 $colors$violet10",
        color: "$colors$violet1",
        borderColor: "$colors$violet8",
        "@hover": {
          "&:hover": {
            color: "$colors$violet1",
            cursor: "pointer",
            boxShadow: "inset 0 -3.25em 0 0 $colors$violet10",
          },
        },
        "&:active": {
          color: "$colors$violet1",
          backgroundColor: "$color$violet3",
          boxShadow: "inset 0 0 0 1px $colors$indigo8",
        },
        "&:focus": {
          boxShadow: "inset 0 -3.25em 0 0 $colors$violet10",
          color: "$colors$violet1",
          borderColor: "$colors$violet8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$indigo4",
            boxShadow: "inset 0 0 0 1px $colors$indigo8",
          },
      },
    },
  },
});
