import * as React from "react";
import { graphql } from "gatsby";

import RecipePage from "../../../components/Recipes/RecipePage";
import { RootObject } from "../../../types/GraphQLTypes";

const BlogPostFinnish = ({ data }: { data: RootObject }) => {
  const title = data.mdx.frontmatter.title;
  const date = data.mdx.frontmatter.date;
  const body = data.mdx.body;
  const tags = data.mdx.frontmatter.tags;
  const slug = data.mdx.frontmatter.slug;

  return (
    <RecipePage title={title} date={date} body={body} tags={tags} slug={slug} />
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        tags
        slug
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

export default BlogPostFinnish;
