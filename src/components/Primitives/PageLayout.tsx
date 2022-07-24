import React from "react";
import { Container, Flex, Heading, Link, Section } from "../index";
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

type Props = {
  children: React.ReactNode;
};

/**
 * Page Layout is the wrapper to have language selector and title on every blog page
 */
export const PageLayout = ({ children }: Props): JSX.Element => {
  globalStyles();
  const { title = "" } = useSiteMetadata();

  return (
    <Section
      size={{ "@initial": "2", "@bp1": "3" }}
      css={{
        backgroundColor: "$indigo2",
        width: "100%",
        minHeight: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      <LanguageSelector />

      <Container size={{ "@initial": "1", "@bp1": "2", "@bp2": "3" }}>
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
                color: "$colors$indigo12",
              }}
            >
              {title}
            </Heading>
          </Flex>
        </header>
        <main>{children}</main>
      </Container>
    </Section>
  );
};

/**
 * Component that will list two flags to change language
 */
const LanguageSelector = () => {
  const context = React.useContext(Context);

  return (
    <LanguageSelectorWrapper>
      <Flex onClick={() => context.selectLanguage("fi")}>🇫🇮</Flex>
      <Flex onClick={() => context.selectLanguage("en")}>🇬🇧</Flex>
    </LanguageSelectorWrapper>
  );
};

export const LanguageSelectorWrapper = styled("div", {
  display: "flex",
  fontSize: "$8",
  gap: "$3",
  p: "$3",
  justifyContent: "flex-end",
});
