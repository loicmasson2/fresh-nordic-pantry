import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Flex, PageLayout } from "../../../components";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.image);
  return (
    <PageLayout>
      <Link to="/blog"> Go back</Link>
      <p>Published on {data.mdx.frontmatter.date}</p>
      <Flex>
        <Flex direction={"column"}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
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

export const query = graphql`
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
`;
export default BlogPost;
