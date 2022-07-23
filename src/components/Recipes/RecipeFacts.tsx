import React from "react";
import { Text } from "../Primitives/Text";
import { styled } from "../../../stitches.config";

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
    <RecipeFactsWrapper>
      <RecipeFactsBlock>
        <LabelFact>Prep</LabelFact>
        <Fact>{prepTime} min</Fact>
      </RecipeFactsBlock>
      <RecipeFactsBlock>
        <LabelFact>Cook</LabelFact>
        <Fact>{cookTime} min</Fact>
      </RecipeFactsBlock>
      <RecipeFactsBlock>
        <LabelFact>Servings</LabelFact>
        <Fact>{servings}</Fact>
      </RecipeFactsBlock>
      <RecipeFactsBlock>
        <LabelFact>Level</LabelFact>
        <Fact>{level}</Fact>
      </RecipeFactsBlock>
    </RecipeFactsWrapper>
  );
};

// TODO
// need to translate it
const LabelFact: React.FC = ({ children }) => (
  <Text
    as={"p"}
    size="5"
    css={{
      color: "$indigo11",
      pb: "$2",
      pr: "$4",
      "@bp1": { pr: "0" },
    }}
  >
    {children}
  </Text>
);

const Fact: React.FC = ({ children }) => (
  <Text
    as={"p"}
    size="4"
    css={{
      color: "$indigo11",
      fontWeight: "bold",
      "@bp1": { fontWeight: "normal" },
    }}
  >
    {children}
  </Text>
);

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
