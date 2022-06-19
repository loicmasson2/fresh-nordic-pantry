import React from "react";
import { Container, Flex, Heading, Link, Section } from "./index";
import useSiteMetadata from "../hooks/use-sitemetadata";
import { Context } from "./Wrapper";
import { styled, globalCss } from "../../stitches.config";

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

type Props = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: Props): JSX.Element => {
  globalStyles();
  const { title = "" } = useSiteMetadata();
  const context = React.useContext(Context);

  return (
    <Section
      size={{ "@initial": "2", "@bp1": "3" }}
      css={{
        backgroundColor: "$green2",
        width: "100%",
        minHeight: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      <Container size="3">
        <header>
          <Flex
            css={{
              my: "$4",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Heading
              size="4"
              as="h1"
              css={{
                color: "$colors$green12",
              }}
            >
              {title}
            </Heading>
          </Flex>
        </header>
        {/*  TODO ADD LATER LANGUAGE SELECTION AND PAGE GENERATION*/}
        {/*<select value={context.locale} onChange={context.selectLanguage}>*/}
        {/*  <option value="en">English</option>*/}
        {/*  <option value="fr">French</option>*/}
        {/*  <option value="fi">Finnish</option>*/}
        {/*</select>*/}
        <main>{children}</main>
      </Container>
    </Section>
  );
};
