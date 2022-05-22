import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Heading, Text, Flex, PageLayout } from "../../components";
import RecipeFacts from "../../components/RecipeFacts";
const components = {
    Text,
    Heading,
    RecipeFacts,
};
const BlogPost = () => {
    const data = useStaticQuery(graphql `
    query ($id: String) {
      mdx(id: { eq: $id }) {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          image {
            childImageSharp {
              gatsbyImageData(
                width: 600
                height: 600
                placeholder: TRACED_SVG
                formats: [AUTO, WEBP, AVIF]
                transformOptions: { cropFocus: ENTROPY, fit: INSIDE }
              )
            }
          }
        }
        body
      }
    }
  `);
    const image = getImage(data.mdx.frontmatter.image);
    return (React.createElement(PageLayout, null,
        React.createElement(Link, { to: "/en/blog", replace: true }, "Go back"),
        React.createElement("p", null,
            "Published on ",
            data.mdx.frontmatter.date),
        React.createElement(RecipeFacts, { prepTime: "10min", cookTime: "10min", level: "Medium", servings: "9" }),
        React.createElement(Flex, null,
            React.createElement(Flex, { direction: "column" },
                React.createElement(MDXProvider, { components: components },
                    React.createElement(MDXRenderer, null, data.mdx.body))),
            React.createElement(Flex, null,
                React.createElement(GatsbyImage, { image: image, imgStyle: {
                        "transform-origin": "center",
                    } })))));
};
export default BlogPost;
