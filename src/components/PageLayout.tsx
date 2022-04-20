import React from "react";
import { Container, Flex, Heading, Link, Section } from "./index";

import useSiteMetadata from "../hooks/use-sitemetadata";
import { Context } from "./Wrapper";

type Props = {
  children: React.ReactNode;
};
export const PageLayout = ({ children }: Props): JSX.Element => {
  const { title = "", basePath } = useSiteMetadata();
  const context = React.useContext(Context);

  return (
    <Section size={{ "@initial": "2", "@bp1": "3" }}>
      <Container size="3">
        <header>
          <Flex
            css={{
              mt: "$4",
              mb: "$7",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Heading>
              <Link>{title}</Link>
            </Heading>
          </Flex>
        </header>
        <select value={context.locale} onChange={context.selectLanguage}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="fi">Finnish</option>
        </select>
        <main>{children}</main>
      </Container>
    </Section>
  );
};
