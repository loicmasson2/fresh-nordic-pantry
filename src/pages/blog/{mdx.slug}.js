// @ts-nocheck
import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { Heading, Text, Flex } from "../../components";
import RecipeFacts from "../../components/Recipes/RecipeFacts";
import { styled } from "../../../stitches.config";
import { keyframes } from "@stitches/react";
const components = {
    Text,
    Heading,
    RecipeFacts,
    p: (props) => (React.createElement(Text, { size: {
            "@initial": "4",
            "@bp2": "5",
        }, as: "p", css: {
            color: "$colors$green12",
            lineHeight: "24px",
            "@bp2": {
                lineHeight: "32px",
            },
        }, ...props })),
    li: (props) => (React.createElement(Text, { size: {
            "@initial": "4",
            "@bp2": "5",
        }, as: "li", css: {
            color: "$colors$green12",
            display: "list-item",
            lineHeight: "24px",
            "@bp2": {
                lineHeight: "32px",
            },
        }, ...props })),
    h2: (props) => (React.createElement(Heading, { size: "3", as: "h2", css: {
            color: "$colors$green12",
        }, ...props })),
};
const BlogPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.image);
    const title = data.mdx.frontmatter.title;
    return (React.createElement(Flex, null,
        React.createElement(PostOneColorStripSide, null),
        React.createElement(Flex, { direction: "column", css: {
                width: "70%",
                margin: "$3",
                "@bp2": { margin: "$4" },
            } },
            React.createElement(Link, { to: "/blog", replace: true }, "\u2190 Go back"),
            React.createElement(PostTitle, null, title),
            React.createElement(PublishedDate, null,
                "Published on ",
                data.mdx.frontmatter.date),
            React.createElement(MDXProvider, { components: components },
                React.createElement(MDXRenderer, null, data.mdx.body)))));
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
    background: "linear-gradient(to top, " +
        "$colors$green6, " +
        "$colors$green7, " +
        "$colors$green8, " +
        "$colors$green7," +
        "$colors$green6, " +
        "$colors$plum6, " +
        "$colors$plum7, " +
        "$colors$plum8, " +
        "$colors$plum7, " +
        "$colors$plum6 )",
    backgroundSize: "400% 400%",
    animation: `${gradient} 15s linear infinite`,
});
const PostTitle = ({ children }) => (React.createElement(Heading, { size: "4", as: "h2", css: {
        color: "$colors$green12",
        mt: "$3",
        "@bp2": { mt: 0 },
    } }, children));
const PublishedDate = ({ children }) => (React.createElement(Text, { as: "p", size: "4", css: {
        color: "$green11",
        my: "$4",
        "@bp2": { my: "0" },
    } }, children));
export const query = graphql `
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
