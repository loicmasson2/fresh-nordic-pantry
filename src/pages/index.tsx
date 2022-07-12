import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Heading, PageLayout } from "../components";
import Wrapper from "../components/Wrapper";
import { Link } from "gatsby";
// markup
const IndexPage = () => {
  return (
    <Wrapper>
      <main>
        <PageLayout>
          <Heading>HELLO</Heading>
          <FormattedMessage id="title" defaultMessage="I am an example" />
          <Link to="/blog" replace>
            Go back
          </Link>
        </PageLayout>
      </main>
    </Wrapper>
  );
};
export default IndexPage;
