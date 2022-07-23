import { PageLayout } from "../Primitives/PageLayout";
import { MenuButton, MenuButtons } from "./Menu";
import { Article, ArticleContent, Feed } from "./Article";
import Wrapper from "../Primitives/Wrapper";
import * as React from "react";
import { styled } from "../../../stitches.config";
/**
 * Generate variant to not have the same size recipe card
 */
const getFlexVariant = (index) => {
    if (index % 4 === 0 || index % 4 === 3) {
        return 2;
    }
    if (index % 4 === 1 || index % 4 === 2) {
        return 1;
    }
};
export const BlogPage = ({ menuItems, recipes, currentCategory, changeCategoryClick, }) => {
    return (React.createElement(Wrapper, null,
        React.createElement(MainWithBackground, null,
            React.createElement(PageLayout, null,
                React.createElement(MenuButtons, null,
                    React.createElement(MenuButton, { isActive: currentCategory === "", tag: "all", clickCallback: () => changeCategoryClick("all") }),
                    menuItems.map((tag) => (React.createElement(MenuButton, { isActive: currentCategory === tag, tag: tag, clickCallback: () => changeCategoryClick(tag) }, tag)))),
                React.createElement(Feed, { wrap: "wrap" }, recipes.map(({ id, slug, frontmatter: { title, image } }, index) => (React.createElement(Article, { key: id, flex: getFlexVariant(index) },
                    React.createElement(ArticleContent, { title: title, slug: slug, image: image })))))))));
};
export const MainWithBackground = styled("main", {
    backgroundColor: "$indigo2",
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
});
