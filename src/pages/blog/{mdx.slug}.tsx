import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Heading, Text, Paragraph, Flex, PageLayout } from "../../components";
import RecipeFacts from "../../components/RecipeFacts";

const components = {
  Text,
  Heading,
  RecipeFacts,
  // p: (props) => (
  //   <Text
  //     size="4"
  //     as="p"
  //     css={{
  //       color: "$colors$green12",
  //     }}
  //     {...props}
  //   />
  // ),
  // li: (props) => (
  //   <Text
  //     size="4"
  //     as="li"
  //     css={{
  //       color: "$colors$green12",
  //     }}
  //     {...props}
  //   />
  // ),
  h2: (props) => (
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
          margin: "$4",
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
