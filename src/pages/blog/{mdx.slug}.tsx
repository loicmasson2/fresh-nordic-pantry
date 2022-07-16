// @ts-nocheck
import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { Heading, Text, Flex } from "../../components";
import RecipeFacts from "../../components/Recipes/RecipeFacts";
import { TransformProps } from "@stitches/react/types/styled-component";
import { CSS } from "../../../stitches.config";

const components = {
  Text,
  Heading,
  RecipeFacts,
  h2: (
    props: JSX.IntrinsicAttributes &
      Pick<
        React.ClassAttributes<HTMLHeadingElement> &
          React.HTMLAttributes<HTMLHeadingElement> & {
            size?: ("1" | "2" | "3" | "4") | undefined;
          } & Omit<
            TransformProps<
              {
                size?:
                  | number
                  | "1"
                  | "2"
                  | "3"
                  | "4"
                  | "5"
                  | "6"
                  | "7"
                  | "8"
                  | "9"
                  | undefined;
                variant?:
                  | "red"
                  | "crimson"
                  | "pink"
                  | "purple"
                  | "violet"
                  | "indigo"
                  | "blue"
                  | "cyan"
                  | "teal"
                  | "green"
                  | "lime"
                  | "yellow"
                  | "orange"
                  | "gold"
                  | "bronze"
                  | "gray"
                  | "contrast"
                  | undefined;
                gradient?: boolean | "true" | undefined;
              },
              {
                bp1: "(min-width: 520px)";
                bp2: "(min-width: 900px)";
                bp3: "(min-width: 1200px)";
                bp4: "(min-width: 1800px)";
                motion: "(prefers-reduced-motion)";
                hover: "(any-hover: hover)";
                dark: "(prefers-color-scheme: dark)";
                light: "(prefers-color-scheme: light)";
              }
            >,
            "size"
          > & { css?: CSS | undefined; as?: any },
        | "key"
        | keyof React.HTMLAttributes<HTMLHeadingElement>
        | "size"
        | "as"
        | "variant"
        | "gradient"
        | "css"
      > &
      React.RefAttributes<HTMLHeadingElement>
  ) => (
    <Heading
      size="3"
      as="h2"
      css={{
        color: "$colors$green12",
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
      <GatsbyImage
        alt={title}
        image={image}
        style={{
          maxWidth: "360px",
        }}
      />
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
        <Heading
          size="4"
          as="h2"
          css={{
            color: "$colors$green12",
          }}
        >
          {title}
        </Heading>
        <Text
          as={"p"}
          size="4"
          css={{
            color: "$green11",
            my: "$4",
            "@bp2": { my: "0" },
          }}
        >
          Published on {data.mdx.frontmatter.date}
        </Text>
        <MDXProvider components={components}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </Flex>
    </Flex>
  );
};

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
