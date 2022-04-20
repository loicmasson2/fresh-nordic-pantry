import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { Card, Flex, Heading, PageLayout, Text } from "../../../components";
import Wrapper from "../../../components/Wrapper";
import { styled } from "../../../../stitches.config";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { slug: { regex: "/^fi/" } }
      ) {
        distinct(field: frontmatter___tags)
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            tags
            image {
              childImageSharp {
                gatsbyImageData(
                  height: 300
                  aspectRatio: 2
                  placeholder: BLURRED
                  transformOptions: { cropFocus: ATTENTION, fit: COVER }
                )
              }
            }
          }
          id
          slug
        }
      }
    }
  `);

  const getFlexVariant = (index: number) => {
    if (index % 4 === 0 || index % 4 === 3) {
      return 2;
    }
    if (index % 4 === 1 || index % 4 === 2) {
      return 1;
    }
  };

  console.log(data);

  return (
    <Wrapper>
      <main>
        <PageLayout>
          <Flex
            wrap={"wrap"}
            css={{
              mt: "$4",
              mb: "$7",
            }}
          >
            {data.allMdx.nodes.map(
              (
                {
                  id,
                  slug,
                  frontmatter: { date, title, image },
                }: {
                  id: string;
                  slug: string;
                  frontmatter: {
                    date: string;
                    title: string;
                    image: ImageDataLike;
                  };
                },
                index: number
              ) => (
                <Article
                  key={id}
                  flex={getFlexVariant(index)}
                  css={{ p: "$2" }}
                >
                  <GatsbyImage
                    style={{
                      height: "90%",
                    }}
                    image={getImage(image)}
                  />

                  <Heading css={{ textAlign: "center" }}>
                    <Link to={`${slug}`} replace>
                      {title}
                    </Link>
                  </Heading>
                </Article>
              )
            )}
          </Flex>
        </PageLayout>
      </main>
    </Wrapper>
  );
};

export const Article = styled("article", {
  width: "100%",
  minHeight: "100%",
  variants: {
    flex: {
      "1": {
        flex: "30%",
      },
      "2": {
        flex: "60%",
        flexDirection: "column",
      },
    },
  },
  defaultVariants: {
    flex: "2",
  },
});

export default BlogPage;
