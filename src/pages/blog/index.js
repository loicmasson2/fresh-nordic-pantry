import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { BlogPage } from "../../components";
/**
 * Main page of the blog in english
 * Contains a menu that you can swipe on mobile
 */
const EnglishBlogPage = () => {
    const data = useStaticQuery(graphql `
    query {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { lang: { eq: "en" } } }
      ) {
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
    const [recipes, setRecipes] = React.useState(data.allMdx.nodes);
    const [currentCategory, setCurrentCategory] = React.useState("");
    /**
     * Will filter in graphQL per tag
     *
     */
    const handleCategoryChange = (category) => {
        if (category !== "all") {
            let newItems = data.allMdx.nodes.filter(({ frontmatter }) => {
                return frontmatter.tags.includes(category);
            });
            setRecipes(newItems);
            setCurrentCategory(category);
        }
        else {
            setRecipes(data.allMdx.nodes);
            setCurrentCategory("");
        }
    };
    return (React.createElement(BlogPage, { menuItems: data.allMdx.distinct, recipes: recipes, currentCategory: currentCategory, changeCategoryClick: handleCategoryChange }));
};
export default EnglishBlogPage;
