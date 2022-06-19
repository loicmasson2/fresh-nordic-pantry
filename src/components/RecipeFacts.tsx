import React from "react";
import { Text } from "./Text";
import { Flex } from "./Flex";
import { styled } from "../../stitches.config";

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
  return (
    <RecipeFactsWrapper justify={"between"}>
      <RecipeFactsBlock direction={"column"} align={"center"}>
        <Text
          as={"p"}
          size="4"
          css={{
            color: "$green11",
            pb: "$2",
          }}
        >
          Prep
        </Text>
        <Text
          as={"p"}
          size="5"
          css={{
            color: "$green11",
          }}
        >
          {prepTime} min
        </Text>
      </RecipeFactsBlock>
      {/*<Spacer />*/}
      <RecipeFactsBlock direction={"column"} align={"center"}>
        <Text
          as={"p"}
          size="4"
          css={{
            color: "$green11",
            pb: "$2",
          }}
        >
          Cook
        </Text>
        <Text
          as={"p"}
          size="5"
          css={{
            color: "$green11",
          }}
        >
          {cookTime} min
        </Text>
      </RecipeFactsBlock>
      {/*<Spacer />*/}
      <RecipeFactsBlock direction={"column"} align={"center"}>
        <Text
          as={"p"}
          size="4"
          css={{
            color: "$green11",
            pb: "$2",
          }}
        >
          Servings
        </Text>
        <Text
          as={"p"}
          size="5"
          css={{
            color: "$green11",
            pb: "$2",
          }}
        >
          {servings}
        </Text>
      </RecipeFactsBlock>
      {/*<Spacer />*/}
      <RecipeFactsBlock direction={"column"} align={"center"}>
        <Text
          as={"p"}
          size="4"
          css={{
            color: "$green11",
            pb: "$2",
          }}
        >
          Level
        </Text>
        <Text
          as={"p"}
          size="5"
          css={{
            color: "$green11",
          }}
        >
          {level}
        </Text>
      </RecipeFactsBlock>
    </RecipeFactsWrapper>
  );
};

const RecipeFactsWrapper = styled(Flex, {
  borderTop: "1px solid $green6",
  borderBottom: "1px solid $green6",
  borderRadius: "100px",
  margin: "$5",
});

const RecipeFactsBlock = styled(Flex, {
  padding: "$2",
  flexGrow: "2",
  color: "$green11",
});

const Spacer = styled("div", {
  borderRight: "1px solid $green6",
});
export default RecipeFacts;
