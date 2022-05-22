import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import {
  Button,
  Box,
  Card,
  Flex,
  Heading,
  PageLayout,
  Text,
} from "../../components";
import Wrapper from "../../components/Wrapper";
import { styled } from "../../../stitches.config";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        distinct(field: frontmatter___tags)
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            tags
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  height: 360
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

  const [items, setItems] = React.useState(data.allMdx.nodes);

  const getFlexVariant = (index: number) => {
    if (index % 4 === 0 || index % 4 === 3) {
      return 2;
    }
    if (index % 4 === 1 || index % 4 === 2) {
      return 1;
    }
  };

  const handleClick = (event: { target: { textContent: any } }) => {
    const filter = event.target.textContent;
    if (filter !== "all") {
      let newItems = data.allMdx.nodes.filter(({ frontmatter }) => {
        return frontmatter.tags.includes(filter);
      });
      setItems(newItems);
    } else {
      setItems(data.allMdx.nodes);
    }
  };

  return (
    <Wrapper>
      <MainWithBackground
        css={{
          width: "100%",
          height: "100%",
        }}
      >
        <PageLayout>
          <Flex
            css={{
              gap: "$2",
              alignItems: "center",
              justifyContent: "center",
              mt: "$4",
              textTransform: "capitalize",
            }}
          >
            <Button variant="main" size="3" onClick={handleClick}>
              all
            </Button>
            {data.allMdx.distinct.map((tag: string) => (
              <Button variant="main" size="3" onClick={handleClick}>
                {tag}
              </Button>
            ))}
          </Flex>
          <Flex
            wrap={"wrap"}
            gap="4"
            css={{
              mt: "$4",
              mb: "$7",
            }}
          >
            {items.map(
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
                <Article key={id} flex={getFlexVariant(index)}>
                  <Link to={`${slug}`} replace>
                    <Flex
                      direction={"column"}
                      css={{
                        height: "100%",
                      }}
                    >
                      <GatsbyImage
                        imgStyle={{
                          transition: ".3s ease-in-out",
                        }}
                        style={{
                          flex: "80%",
                        }}
                        image={getImage(image)}
                      />
                      <Flex
                        css={{
                          flex: "20%",
                          textAlign: "center",
                          backgroundColor: "$green7",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Heading
                          size="1"
                          as="h1"
                          css={{
                            color: "$green12",
                          }}
                        >
                          {title}
                        </Heading>
                      </Flex>
                    </Flex>
                  </Link>
                </Article>
              )
            )}
          </Flex>
        </PageLayout>
      </MainWithBackground>
    </Wrapper>
  );
};

export const MainWithBackground = styled("main", {
  backgroundColor: "$green2",
  width: "100%",
  height: "100%",
  margin: 0,
  padding: 0,
  overflowX: "hidden",
});

export const Article = styled("article", {
  width: "100%",
  minHeight: "100%",
  "img:hover": {
    transform: "scale(1.3)",
    borderRadius: "8px",
  },
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
