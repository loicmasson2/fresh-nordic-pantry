import React from "react";
import { Container, Flex, Heading, Section } from "../index";
import useSiteMetadata from "../../hooks/use-sitemetadata";
import { Context } from "./Wrapper";
import { globalCss, styled } from "../../../stitches.config";
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
/**
 * Page Layout is the wrapper to have language selector and title on every blog page
 */
export const PageLayout = ({ children }) => {
    globalStyles();
    const { title = "" } = useSiteMetadata();
    return (React.createElement(Section, { size: { "@initial": "2", "@bp1": "3" }, css: {
            backgroundColor: "$green2",
            width: "100%",
            minHeight: "100%",
            margin: 0,
            padding: 0,
            overflowX: "hidden",
        } },
        React.createElement(LanguageSelector, null),
        React.createElement(Container, { size: { "@initial": "1", "@bp1": "2", "@bp2": "3" } },
            React.createElement("header", null,
                React.createElement(Flex, { css: {
                        my: "$4",
                        alignItems: "center",
                        justifyContent: "center",
                    } },
                    React.createElement(Heading, { size: "4", as: "h1", css: {
                            color: "$colors$green12",
                        } }, title))),
            React.createElement("main", null, children),
            React.createElement(LanguageSelector, null))));
};
/**
 * Component that will list two flags to change language
 */
const LanguageSelector = () => {
    const context = React.useContext(Context);
    return (React.createElement(LanguageSelectorWrapper, { css: {
            fontSize: "$7",
            gap: "$2",
            justifyContent: "flex-end",
        } },
        React.createElement(Flex, { onClick: () => context.selectLanguage("fi") }, "\uD83C\uDDEB\uD83C\uDDEE"),
        React.createElement(Flex, { onClick: () => context.selectLanguage("en") }, "\uD83C\uDDEC\uD83C\uDDE7")));
};
export const LanguageSelectorWrapper = styled(Flex, {
    fontSize: "$8",
    gap: "$2",
    justifyContent: "flex-end",
});
