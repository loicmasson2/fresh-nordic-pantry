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
        backgroundColor: "$colors$green3",
        boxShadow: "inset 0 0 0 1px $colors$green7",
        color: "$green11",
        "@hover": {
          "&:hover": {
            // boxShadow: "inset 0 0 0 2px $colors$green4",
            cursor: "pointer",
            boxShadow: "inset 0 -3.25em 0 0 $colors$plum10",
            color: "$colors$plum12",
          },
        },
        "&:active": {
          backgroundColor: "$color$plum3",
          boxShadow: "inset 0 0 0 1px $colors$green8",
        },
        "&:focus": {
          // boxShadow: "inset 0 0 0 1px $colors$green8, 0 0 0 1px $colors$green8",
          boxShadow: "inset 0 -3.25em 0 0 $colors$plum10",
          color: "$colors$plum12",
          borderColor: "$colors$plum8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$green4",
            boxShadow: "inset 0 0 0 1px $colors$green8",
          },
      },
      secondary: {
        backgroundColor: "$colors$plum3",
        boxShadow: "inset 0 -3.25em 0 0 $colors$plum10",
        color: "$colors$plum12",
        borderColor: "$colors$plum8",
        "@hover": {
          "&:hover": {
            // boxShadow: "inset 0 0 0 2px $colors$green4",
            cursor: "pointer",
            boxShadow: "inset 0 -3.25em 0 0 $colors$plum10",
            color: "$colors$plum12",
          },
        },
        "&:active": {
          backgroundColor: "$color$plum3",
          boxShadow: "inset 0 0 0 1px $colors$green8",
        },
        "&:focus": {
          // boxShadow: "inset 0 0 0 1px $colors$green8, 0 0 0 1px $colors$green8",
          boxShadow: "inset 0 -3.25em 0 0 $colors$plum10",
          color: "$colors$plum12",
          borderColor: "$colors$plum8",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$green4",
            boxShadow: "inset 0 0 0 1px $colors$green8",
          },
      },
    },
  },
  defaultVariants: {
    size: "1",
    variant: "gray",
  },
});
