import React from "react";
import { Text } from "../Primitives/Text";
import { styled } from "../../../stitches.config";
const RecipeFacts = ({ prepTime, cookTime, servings, level, }) => {
    return (React.createElement(RecipeFactsWrapper, null,
        React.createElement(RecipeFactsBlock, null,
            React.createElement(LabelFact, null, "Prep"),
            React.createElement(Fact, null,
                prepTime,
                " min")),
        React.createElement(RecipeFactsBlock, null,
            React.createElement(LabelFact, null, "Cook"),
            React.createElement(Fact, null,
                cookTime,
                " min")),
        React.createElement(RecipeFactsBlock, null,
            React.createElement(LabelFact, null, "Servings"),
            React.createElement(Fact, null, servings)),
        React.createElement(RecipeFactsBlock, null,
            React.createElement(LabelFact, null, "Level"),
            React.createElement(Fact, null, level))));
};
// TODO
// need to translate it
const LabelFact = ({ children }) => (React.createElement(Text, { as: "p", size: "5", css: {
        color: "$indigo11",
        pb: "$2",
        pr: "$4",
        "@bp1": { pr: "0" },
    } }, children));
const Fact = ({ children }) => (React.createElement(Text, { as: "p", size: "4", css: {
        color: "$indigo11",
        fontWeight: "bold",
        "@bp1": { fontWeight: "normal" },
    } }, children));
const RecipeFactsWrapper = styled("div", {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "$3",
    "@bp1": {
        borderTop: "1px solid $indigo6",
        borderBottom: "1px solid $indigo6",
        borderRadius: "100px",
        flexDirection: "row",
    },
});
const RecipeFactsBlock = styled("div", {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "@bp1": {
        flexDirection: "column",
        alignItems: "center",
    },
    padding: "$2",
    flexGrow: "2",
    color: "$indigo11",
});
const Spacer = styled("div", {
    borderRight: "1px solid $indigo6",
});
export default RecipeFacts;
