import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  // Reset
  boxSizing: "border-box",
  flexShrink: 0,

  // Custom
  ml: "auto",
  mr: "auto",
  px: "$5",

  variants: {
    size: {
      "1": {
        maxWidth: "430px",
        px: "$2",
      },
      "2": {
        maxWidth: "715px",
        px: "$4",
      },
      "3": {
        maxWidth: "1145px",
      },
      "4": {
        maxWidth: "none",
      },
    },
  },
  defaultVariants: {
    size: "4",
  },
});
