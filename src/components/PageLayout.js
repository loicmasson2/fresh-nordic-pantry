import React from "react";
import { Container, Flex, Heading, Section } from "./index";
import useSiteMetadata from "../hooks/use-sitemetadata";
import { Context } from "./Wrapper";
import { globalCss } from "../../stitches.config";
const globalStyles = globalCss({
    "html, body, #___gatsby, #gatsby-focus-wrapper": {
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        fontFamily: "Lora, sans-serif",
    },
});
export const PageLayout = ({ children }) => {
    globalStyles();
    const { title = "" } = useSiteMetadata();
    const context = React.useContext(Context);
    return (React.createElement(Section, { size: { "@initial": "2", "@bp1": "3" }, css: {
            backgroundColor: "$green2",
            width: "100%",
            minHeight: "100%",
            margin: 0,
            padding: 0,
            overflowX: "hidden",
        } },
        React.createElement(Container, { size: "3" },
            React.createElement("header", null,
                React.createElement(Flex, { css: {
                        my: "$4",
                        alignItems: "center",
                        justifyContent: "center",
                    } },
                    React.createElement(Heading, { size: "4", as: "h1", css: {
                            color: "$colors$green12",
                        } }, title))),
            React.createElement("main", null, children))));
};
