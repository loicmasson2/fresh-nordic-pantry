import { PageLayout } from "../Primitives/PageLayout";
import { MenuButton, MenuButtons } from "./Menu";
import { Article, ArticleContent, Feed } from "./Article";
import Wrapper from "../Primitives/Wrapper";
import * as React from "react";
import { styled } from "../../../stitches.config";
import {ImageDataLike} from "gatsby-plugin-image";

/**
 * Generate variant to not have the same size recipe card
 */
const getFlexVariant = (index: number) => {
  if (index % 4 === 0 || index % 4 === 3) {
    return 2;
  }
  if (index % 4 === 1 || index % 4 === 2) {
    return 1;
  }
};

export type Frontmatter = {
  id: string;
  slug: string;
  frontmatter: {
    date: string;
    title: string;
    image: ImageDataLike;
    tags: string[];
  };
};

interface BlogPageProps {
  menuItems: string[];
  recipes: Frontmatter[];
  currentCategory: string;
  changeCategoryClick: (category: string) => void;
}
export const BlogPage = ({menuItems, recipes, currentCategory, changeCategoryClick}:BlogPageProps) => {
  return (
      <Wrapper>
        <MainWithBackground>
          <PageLayout>
            <MenuButtons>
              <MenuButton
                  isActive={currentCategory === ""}
                  tag={"all"}
                  clickCallback={() => changeCategoryClick("all")}
              />

              {menuItems.map((tag: string) => (
                  <MenuButton
                      isActive={currentCategory === tag}
                      tag={tag}
                      clickCallback={() => changeCategoryClick(tag)}
                  >
                    {tag}
                  </MenuButton>
              ))}
            </MenuButtons>
            <Feed wrap="wrap">
              {recipes.map(
                  (
                      { id, slug, frontmatter: { title, image } }: Frontmatter,
                      index: number
                  ) => (
                      <Article key={id} flex={getFlexVariant(index)}>
                        <ArticleContent title={title} slug={slug} image={image} />
                      </Article>
                  )
              )}
            </Feed>
          </PageLayout>
        </MainWithBackground>
      </Wrapper>;
  )
}


export const MainWithBackground = styled("main", {
  backgroundColor: "$indigo2",
  width: "100%",
  height: "100%",
  margin: 0,
  padding: 0,
  overflowX: "hidden",
});
