// @ts-nocheck
import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { Heading, Text, Flex } from "../../components";
import RecipeFacts from "../../components/Recipes/RecipeFacts";
import { TransformProps } from "@stitches/react/types/styled-component";
import { CSS, styled } from "../../../stitches.config";
import { keyframes } from "@stitches/react";

const components = {
  Text,
  Heading,
  RecipeFacts,
  p: (props) => (
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
  li: (props) => (
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
        "@bp2": {
          lineHeight: "32px",
        },
      }}
      {...props}
    />
  ),
  h2: (props) => (
    <Heading
      size="3"
      as="h2"
      css={{
        color: "$colors$indigo12",
      }}
      {...props}
    />
  ),
};

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.image);
  const title = data.mdx.frontmatter.title;

  return (
    <Flex>
      {/*<PostImage*/}
      {/*  alt={title}*/}
      {/*  image={image}*/}
      {/*  style={{*/}
      {/*    maxWidth: "60px",*/}
      {/*    height: "100vh",*/}
      {/*    "@bp1": { minWidth: "600px" },*/}
      {/*  }}*/}
      {/*/>*/}
      <PostOneColorStripSide />
      <Flex
        direction={"column"}
        css={{
          width: "70%",
          margin: "$3",
          "@bp2": { margin: "$4" },
        }}
      >
        <Link to="/blog" replace>
          &#8592; Go back
        </Link>
        <PostTitle>{title}</PostTitle>
        <PublishedDate>Published on {data.mdx.frontmatter.date}</PublishedDate>
        <MDXProvider components={components}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </Flex>
    </Flex>
  );
};

const PostImage = styled(GatsbyImage, {
  "@initial": {
    maxWidth: "60px",
    height: "100vh",
  },
  "@bp2": { minWidth: "360px" },
});
const gradient = keyframes({
  "0%": { backgroundPosition: "0% 0%" },
  "50%": { backgroundPosition: "50% 50%" },
  "100%": { backgroundPosition: "100% 100%" },
});

const PostOneColorStripSide = styled("div", {
  minWidth: "20px",
  "@bp2": { minWidth: "360px" },
  background:
    "linear-gradient(to top, " +
    "$colors$indigo6, " +
    "$colors$indigo7, " +
    "$colors$indigo8, " +
    "$colors$indigo7," +
    "$colors$indigo6, " +
    "$colors$violet6, " +
    "$colors$violet7, " +
    "$colors$violet8, " +
    "$colors$violet7, " +
    "$colors$violet6 )",
  backgroundSize: "400% 400%",
  animation: `${gradient} 15s linear infinite`,
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
      "@bp2": { my: "0" },
    }}
  >
    {children}
  </Text>
);

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;
