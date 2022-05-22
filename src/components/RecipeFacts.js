import React from "react";
import { Flex } from "./Flex";
const RecipeFacts = ({ prepTime, cookTime, servings, level, }) => {
    console.log("HELLo");
    return (React.createElement(Flex, null,
        React.createElement(Flex, { direction: "column" },
            React.createElement(Flex, null,
                "Preparation: ",
                prepTime),
            React.createElement(Flex, null,
                "Cooking: ",
                cookTime)),
        React.createElement(Flex, { direction: "column" },
            React.createElement(Flex, null,
                "Servings: ",
                servings),
            React.createElement(Flex, null,
                "Level: ",
                level))));
};
export default RecipeFacts;
