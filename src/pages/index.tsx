import * as React from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { StaticImage } from "gatsby-plugin-image";

import { Heading, PageLayout } from "../components";
import Wrapper from "../components/Wrapper";
import { styled } from "../../stitches.config";
// markup
const IndexPage = () => {
  return (
    <Wrapper>
      <main>
        <PageLayout>
          <Heading>HELLO</Heading>
          <FormattedMessage id="title" defaultMessage="I am an example" />
        </PageLayout>
      </main>
    </Wrapper>
  );
};
export default IndexPage;
