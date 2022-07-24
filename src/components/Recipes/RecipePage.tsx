import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Disqus } from "gatsby-plugin-disqus";
import { useLocation } from "@reach/router";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { keyframes } from "@stitches/react";
import { Link } from "gatsby";
import { FormattedMessage } from "react-intl";
import { Text } from "../Primitives/Text";
import { styled } from "../../../stitches.config";
import { Heading } from "../Primitives/Heading";
import { Flex } from "../Primitives/Flex";
import Wrapper from "../Primitives/Wrapper";

const components = {
  Text,
  Heading,
  p: (props: any) => (
    <Text
      size={{
        "@initial": "4",
        "@bp2": "5",
      }}
      as="p"
      css={{
        color: "$colors$indigo12",
        lineHeight: "24px",
        "@bp2": {
          lineHeight: "32px",
        },
      }}
      {...props}
    />
  ),
  li: (props: any) => (
    <Text
      size={{
        "@initial": "4",
        "@bp2": "5",
      }}
      as="li"
      css={{
        color: "$colors$indigo12",
        display: "list-item",
        lineHeight: "24px",
        my: "$3",
        "@bp2": {
          lineHeight: "32px",
          my: "$4",
        },
      }}
      {...props}
    />
  ),
  h2: (props: any) => (
    <Heading
      size="3"
      as="h2"
      css={{
        color: "$colors$indigo12",
        mt: "$3",
      }}
      {...props}
    />
  ),
};

type RecipePageProps = {
  title: string;
  date: string;
  body: any;
  tags: string[];
  slug: string;
};

const RecipePage = ({
  title,
  date,
  body,
  tags,
  slug,
}: RecipePageProps): JSX.Element => {
  const location = useLocation();
  return (
    <Wrapper>
      <Flex>
        <PostOneColorStripSide />
        <Flex
          direction={"column"}
          css={{
            width: "95%",
            margin: "$3",
            "@bp2": { margin: "$4", width: "70%" },
          }}
        >
          <Link to="/blog" replace>
            &#8592; <FormattedMessage id={"back"} defaultMessage={"Go back"} />
          </Link>
          <PostTitle>{title}</PostTitle>
          <PublishedDate>Published on {date}</PublishedDate>
          <HashtagWrapper>
            {tags.map((tag: string) => (
              <Tags>#{tag}</Tags>
            ))}
          </HashtagWrapper>

          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
          <Disqus
            identifier={slug}
            title={title}
            url={`$${location.pathname}`}
          />
        </Flex>
      </Flex>
    </Wrapper>
  );
};

const gradient = keyframes({
  "0%": { backgroundPosition: "10% 10%" },
  "50%": { backgroundPosition: "50% 50%" },
  "100%": { backgroundPosition: "100% 100%" },
});

const HashtagWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  "@bp1": {
    flexDirection: "row",
  },
});
const Tags = styled("div", {
  fontSize: "32px",
  fontWeight: "900",
  color: "$colors$indigo12",
  px: "$1",
  pb: "$3",
  textShadow: "1px 1px 0px $colors$indigo8, 2px 2px 0px $colors$indigo8",
});

const PostOneColorStripSide = styled("div", {
  minWidth: "20px",
  "@bp2": { minWidth: "360px" },
  background:
    "linear-gradient(to top, " +
    "$colors$indigo8, " +
    "$colors$indigo8, " +
    "$colors$violet8, " +
    "$colors$violet8, " +
    "$colors$indigo8, " +
    "$colors$indigo8, " +
    "$colors$indigo8 )",
  backgroundSize: "400% 400%",
  animation: `${gradient} 5s linear infinite`,
});

const PostTitle: React.FC = ({ children }) => (
  <Heading
    size="4"
    as="h2"
    css={{
      color: "$colors$indigo12",
      mt: "$3",
      "@bp2": { mt: 0 },
    }}
  >
    {children}
  </Heading>
);

const PublishedDate: React.FC = ({ children }) => (
  <Text
    as={"p"}
    size="4"
    css={{
      color: "$indigo11",
      my: "$4",
      "@bp2": { my: "$3" },
    }}
  >
    {children}
  </Text>
);

export default RecipePage;
