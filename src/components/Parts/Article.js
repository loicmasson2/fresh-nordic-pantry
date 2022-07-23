import { styled } from "../../../stitches.config";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Flex } from "../Primitives/Flex";
import { Heading } from "../Primitives/Heading";
import * as React from "react";
export const Article = styled("article", {
    width: "100%",
    minHeight: "100%",
    "img:hover": {
        transform: "scale(1.3)",
        borderRadius: "8px",
    },
    variants: {
        flex: {
            "1": {
                flex: "100%",
                "@bp1": {
                    // Styles for bp1
                    flex: "30%",
                },
            },
            "2": {
                flex: "100%",
                flexDirection: "column",
                "@bp1": {
                    // Styles for bp1
                    flex: "60%",
                },
            },
        },
    },
    defaultVariants: {
        flex: "2",
    },
});
export const ArticleContent = ({ title, slug, image }) => {
    return (React.createElement(Link, { to: `${slug}`, replace: true },
        React.createElement(Flex, { direction: "column", css: {
                height: "100%",
            } },
            React.createElement(GatsbyImage, { imgStyle: {
                    transition: ".3s ease-in-out",
                }, style: {
                    flex: "80%",
                }, image: getImage(image) }),
            React.createElement(BottomSection, null,
                React.createElement(Heading, { size: "1", as: "h1", css: {
                        color: "$indigo12",
                    } }, title)))));
};
export const BottomSection = styled("div", {
    display: "flex",
    flex: "20%",
    textAlign: "center",
    backgroundColor: "$indigo7",
    justifyContent: "center",
    alignItems: "center",
});
export const Feed = styled(Flex, {
    gap: "$4",
    mt: "$4",
    mb: "$7",
});
