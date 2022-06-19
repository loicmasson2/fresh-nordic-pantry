import * as React from "react";

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
          <Link to="/blog" replace>
            Go to blog
          </Link>
        </PageLayout>
      </main>
    </Wrapper>
  );
};
export default IndexPage;
