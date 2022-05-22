import React from "react";
import { Flex } from "./Flex";

type RecipeFactsProps = {
  prepTime: string;
  cookTime: string;
  servings: string;
  level: string;
};
const RecipeFacts = ({
  prepTime,
  cookTime,
  servings,
  level,
}: RecipeFactsProps): JSX.Element => {
  console.log("HELLo");
  return (
    <Flex>
      <Flex direction={"column"}>
        <Flex>Preparation: {prepTime}</Flex>
        <Flex>Cooking: {cookTime}</Flex>
      </Flex>
      <Flex direction={"column"}>
        <Flex>Servings: {servings}</Flex>
        <Flex>Level: {level}</Flex>
      </Flex>
    </Flex>
  );
};

export default RecipeFacts;
