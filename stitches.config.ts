import {blue, blueDark, gray, grayDark, green, greenDark, red, redDark,} from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
import {createStitches} from '@stitches/react';

export type {VariantProps} from '@stitches/react';

export const {config, createTheme, styled} = createStitches({
    theme: {
        colors: {
            ...gray,
            ...blue,
            ...red,
            ...green,
        },
        fonts: {
            sans: 'Inter, sans-serif',
        },
        fontSizes: {
            1: '12px',
            2: '14px',
            3: '16px',
            4: '20px',
            5: '24px',
            6: '32px',
        },
        space: {
            1: '4px',
            2: '8px',
            3: '16px',
            4: '32px',
            5: '64px',
            6: '128px',
        },
        sizes: {
            1: '4px',
            2: '8px',
            3: '16px',
            4: '32px',
            5: '64px',
            6: '128px',
        },
        radii: {
            1: '2px',
            2: '4px',
            3: '8px',
            round: '9999px',
        },
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        borderWidths: {},
        borderStyles: {},
        shadows: {},
        zIndices: {},
        transitions: {},
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

