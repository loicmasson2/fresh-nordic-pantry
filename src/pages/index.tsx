import * as React from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { StaticImage } from "gatsby-plugin-image";

import { Heading, PageLayout } from "../components";
import Wrapper from "../components/Wrapper";
// markup
const IndexPage = () => {
  return (
    <Wrapper>
      <main>
        <PageLayout>
          <Heading>HELLO</Heading>
          <FormattedMessage id="title" defaultMessage="I am an example" />
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="../images/heather-barnes-U7NcygdW_dM-unsplash.jpg"
          />
        </PageLayout>
      </main>
    </Wrapper>
  );
};

export default IndexPage;
