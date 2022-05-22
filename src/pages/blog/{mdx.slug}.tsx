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
};
const BlogPost = () => {
  const data = useStaticQuery(graphql`
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
  return (
    <PageLayout>
      <Link to="/en/blog" replace>
        Go back
      </Link>
      <p>Published on {data.mdx.frontmatter.date}</p>
      <RecipeFacts
        prepTime={"10min"}
        cookTime={"10min"}
        level={"Medium"}
        servings={"9"}
      />
      <Flex>
        <Flex direction={"column"}>
          <MDXProvider components={components}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </Flex>
        <Flex>
          <GatsbyImage
            image={image}
            imgStyle={{
              "transform-origin": "center",
            }}
          />
        </Flex>
      </Flex>
    </PageLayout>
  );
};

export default BlogPost;
