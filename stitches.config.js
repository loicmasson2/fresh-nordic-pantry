"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkTheme = exports.globalCss = exports.styled = exports.getCssText = exports.createTheme = exports.config = void 0;
var colors_1 = require("@radix-ui/colors");
var react_1 = require("@stitches/react");
exports.config = (_a = (0, react_1.createStitches)({
    theme: {
        colors: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, colors_1.gray), colors_1.blue), colors_1.red), colors_1.green), colors_1.slate), colors_1.slateDark), colors_1.sage), colors_1.sageDark), colors_1.plum), colors_1.plumDark), { 
            // Semantic colors
            hiContrast: "$sage12", loContrast: "$sage1", canvas: "hsl(0 0% 93%)", panel: "white", transparentPanel: "hsl(0 0% 0% / 97%)", shadowLight: "hsl(206 22% 7% / 35%)", shadowDark: "hsl(206 22% 7% / 20%)" }),
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
        p: function (value) { return ({
            padding: value,
        }); },
        pt: function (value) { return ({
            paddingTop: value,
        }); },
        pr: function (value) { return ({
            paddingRight: value,
        }); },
        pb: function (value) { return ({
            paddingBottom: value,
        }); },
        pl: function (value) { return ({
            paddingLeft: value,
        }); },
        px: function (value) { return ({
            paddingLeft: value,
            paddingRight: value,
        }); },
        py: function (value) { return ({
            paddingTop: value,
            paddingBottom: value,
        }); },
        m: function (value) { return ({
            margin: value,
        }); },
        mt: function (value) { return ({
            marginTop: value,
        }); },
        mr: function (value) { return ({
            marginRight: value,
        }); },
        mb: function (value) { return ({
            marginBottom: value,
        }); },
        ml: function (value) { return ({
            marginLeft: value,
        }); },
        mx: function (value) { return ({
            marginLeft: value,
            marginRight: value,
        }); },
        my: function (value) { return ({
            marginTop: value,
            marginBottom: value,
        }); },
        ta: function (value) { return ({
            textAlign: value,
        }); },
        fd: function (value) { return ({
            flexDirection: value,
        }); },
        fw: function (value) { return ({ flexWrap: value }); },
        ai: function (value) { return ({
            alignItems: value,
        }); },
        ac: function (value) { return ({
            alignContent: value,
        }); },
        jc: function (value) { return ({
            justifyContent: value,
        }); },
        as: function (value) { return ({
            alignSelf: value,
        }); },
        fg: function (value) { return ({ flexGrow: value }); },
        fs: function (value) { return ({
            flexShrink: value,
        }); },
        fb: function (value) { return ({
            flexBasis: value,
        }); },
        bc: function (value) { return ({
            backgroundColor: value,
        }); },
        br: function (value) { return ({
            borderRadius: value,
        }); },
        btrr: function (value) { return ({
            borderTopRightRadius: value,
        }); },
        bbrr: function (value) { return ({
            borderBottomRightRadius: value,
        }); },
        bblr: function (value) { return ({
            borderBottomLeftRadius: value,
        }); },
        btlr: function (value) { return ({
            borderTopLeftRadius: value,
        }); },
        bs: function (value) { return ({
            boxShadow: value,
        }); },
        lh: function (value) { return ({
            lineHeight: value,
        }); },
        ox: function (value) { return ({
            overflowX: value,
        }); },
        oy: function (value) { return ({
            overflowY: value,
        }); },
        pe: function (value) { return ({
            pointerEvents: value,
        }); },
        us: function (value) { return ({
            WebkitUserSelect: value,
            userSelect: value,
        }); },
        userSelect: function (value) { return ({
            WebkitUserSelect: value,
            userSelect: value,
        }); },
        size: function (value) { return ({
            width: value,
            height: value,
        }); },
        appearance: function (value) { return ({
            WebkitAppearance: value,
            appearance: value,
        }); },
        backgroundClip: function (value) { return ({
            WebkitBackgroundClip: value,
            backgroundClip: value,
        }); },
    },
}), _a.config), exports.createTheme = _a.createTheme, exports.getCssText = _a.getCssText, exports.styled = _a.styled, exports.globalCss = _a.globalCss;
exports.darkTheme = (0, exports.createTheme)({
    colors: __assign(__assign(__assign(__assign({}, colors_1.grayDark), colors_1.blueDark), colors_1.redDark), colors_1.greenDark),
});
