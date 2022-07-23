import { blue, blueDark, slate, slateDark, sage, sageDark, plum, plumDark, gray, grayDark, green, greenDark, red, redDark, indigo, violet, } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";
export const { config, createTheme, getCssText, styled, globalCss } = createStitches({
    theme: {
        colors: {
            ...gray,
            ...blue,
            ...red,
            ...green,
            ...slate,
            ...slateDark,
            ...sage,
            ...sageDark,
            ...plum,
            ...plumDark,
            ...indigo,
            ...violet,
            // Semantic colors
            hiContrast: "$sage12",
            loContrast: "$sage1",
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
        p: (value) => ({
            padding: value,
        }),
        pt: (value) => ({
            paddingTop: value,
        }),
        pr: (value) => ({
            paddingRight: value,
        }),
        pb: (value) => ({
            paddingBottom: value,
        }),
        pl: (value) => ({
            paddingLeft: value,
        }),
        px: (value) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        m: (value) => ({
            margin: value,
        }),
        mt: (value) => ({
            marginTop: value,
        }),
        mr: (value) => ({
            marginRight: value,
        }),
        mb: (value) => ({
            marginBottom: value,
        }),
        ml: (value) => ({
            marginLeft: value,
        }),
        mx: (value) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value) => ({
            marginTop: value,
            marginBottom: value,
        }),
        ta: (value) => ({
            textAlign: value,
        }),
        fd: (value) => ({
            flexDirection: value,
        }),
        fw: (value) => ({ flexWrap: value }),
        ai: (value) => ({
            alignItems: value,
        }),
        ac: (value) => ({
            alignContent: value,
        }),
        jc: (value) => ({
            justifyContent: value,
        }),
        as: (value) => ({
            alignSelf: value,
        }),
        fg: (value) => ({ flexGrow: value }),
        fs: (value) => ({
            flexShrink: value,
        }),
        fb: (value) => ({
            flexBasis: value,
        }),
        bc: (value) => ({
            backgroundColor: value,
        }),
        br: (value) => ({
            borderRadius: value,
        }),
        btrr: (value) => ({
            borderTopRightRadius: value,
        }),
        bbrr: (value) => ({
            borderBottomRightRadius: value,
        }),
        bblr: (value) => ({
            borderBottomLeftRadius: value,
        }),
        btlr: (value) => ({
            borderTopLeftRadius: value,
        }),
        bs: (value) => ({
            boxShadow: value,
        }),
        lh: (value) => ({
            lineHeight: value,
        }),
        ox: (value) => ({
            overflowX: value,
        }),
        oy: (value) => ({
            overflowY: value,
        }),
        pe: (value) => ({
            pointerEvents: value,
        }),
        us: (value) => ({
            WebkitUserSelect: value,
            userSelect: value,
        }),
        userSelect: (value) => ({
            WebkitUserSelect: value,
            userSelect: value,
        }),
        size: (value) => ({
            width: value,
            height: value,
        }),
        appearance: (value) => ({
            WebkitAppearance: value,
            appearance: value,
        }),
        backgroundClip: (value) => ({
            WebkitBackgroundClip: value,
            backgroundClip: value,
        }),
    },
});
export const darkTheme = createTheme({
    colors: {
        ...grayDark,
        ...blueDark,
        ...redDark,
        ...greenDark,
    },
});
