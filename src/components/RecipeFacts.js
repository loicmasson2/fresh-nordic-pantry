import React from "react";
import { Text } from "./Text";
import { Flex } from "./Flex";
import { styled } from "../../stitches.config";
const RecipeFacts = ({ prepTime, cookTime, servings, level, }) => {
    return (React.createElement(RecipeFactsWrapper, { justify: "between", direction: { "@initial": "row", "@bp2": "column" }, wrap: { "@initial": "wrap", "@bp2": "nowrap" } },
        React.createElement(RecipeFactsBlock, { direction: { "@initial": "row", "@bp2": "column" }, align: "center" },
            React.createElement(Text, { as: "p", size: "4", css: {
                    color: "$green11",
                    pb: "$2",
                } }, "Prep"),
            React.createElement(Text, { as: "p", size: "5", css: {
                    color: "$green11",
                } },
                prepTime,
                " min")),
        React.createElement(RecipeFactsBlock, { align: "center" },
            React.createElement(Text, { as: "p", size: "4", css: {
                    color: "$green11",
                    pb: "$2",
                } }, "Cook"),
            React.createElement(Text, { as: "p", size: "5", css: {
                    color: "$green11",
                } },
                cookTime,
                " min")),
        React.createElement(RecipeFactsBlock, { align: "center" },
            React.createElement(Text, { as: "p", size: "4", css: {
                    color: "$green11",
                    pb: "$2",
                } }, "Servings"),
            React.createElement(Text, { as: "p", size: "5", css: {
                    color: "$green11",
                    pb: "$2",
                } }, servings)),
        React.createElement(RecipeFactsBlock, { align: "center" },
            React.createElement(Text, { as: "p", size: "4", css: {
                    color: "$green11",
                    pb: "$2",
                } }, "Level"),
            React.createElement(Text, { as: "p", size: "5", css: {
                    color: "$green11",
                } }, level))));
};
const RecipeFactsWrapper = styled(Flex, {
    "@bp1": {
        borderTop: "1px solid $green6",
        borderBottom: "1px solid $green6",
        borderRadius: "100px",
    },
    margin: "$5",
});
const RecipeFactsBlock = styled(Flex, {
    flexDirection: "row",
    "@bp1": {
        flexDirection: "column",
    },
    padding: "$2",
    flexGrow: "2",
    color: "$green11",
});
const Spacer = styled("div", {
    borderRight: "1px solid $green6",
});
export default RecipeFacts;
