"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    siteMetadata: {
        title: "Fresh Nordic Pantry",
        siteUrl: "https://www.yourdomain.tld",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-typescript",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "".concat(__dirname, "/src/images"),
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "locales",
                path: "./src/intl/",
            },
        },
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: ["lora"],
                display: "swap",
            },
        },
        "gatsby-plugin-mdx",
    ],
};
exports.default = config;
