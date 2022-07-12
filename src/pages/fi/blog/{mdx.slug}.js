// @ts-nocheck
import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { Heading, Text, Flex, } from "../../../components";
import RecipeFacts from "../../../components/RecipeFacts";
const components = {
    Text,
    Heading,
    RecipeFacts,
    h2: (props) => (React.createElement(Heading, { size: "3", as: "h2", css: {
            color: "$colors$green12",
        }, ...props })),
};
const BlogPost = ({ data }) => {
    // const data = useStaticQuery(graphql`
    //   query ($id: String) {
    //     mdx(id: { eq: $id }) {
    //       frontmatter {
    //         title
    //         date(formatString: "MMMM D, YYYY")
    //         image {
    //           childImageSharp {
    //             gatsbyImageData(
    //               placeholder: TRACED_SVG
    //               formats: [AUTO, WEBP, AVIF]
    //               transformOptions: { cropFocus: ENTROPY, fit: INSIDE }
    //             )
    //           }
    //         }
    //       }
    //       body
    //     }
    //   }
    // `);
    const image = getImage(data.mdx.frontmatter.image);
    const title = data.mdx.frontmatter.title;
    console.log(data);
    return (React.createElement(Flex, null,
        React.createElement(GatsbyImage, { alt: title, image: image, style: {
                maxWidth: "360px",
            } }),
        React.createElement(Flex, { direction: "column", css: {
                margin: "$4",
            } },
            React.createElement(Link, { to: "/blog", replace: true }, "\u2190 Go back"),
            React.createElement(Heading, { size: "4", as: "h2", css: {
                    color: "$colors$green12",
                } }, title),
            React.createElement(Text, { as: "p", size: "4", css: {
                    color: "$green11",
                } },
                "Published on ",
                data.mdx.frontmatter.date),
            React.createElement(MDXProvider, { components: components },
                React.createElement(MDXRenderer, null, data.mdx.body)))));
};
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
