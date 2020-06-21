import matter from "gray-matter";
import Layout from "../components/Layout";
import RecipeGroup from "../components/RecipeGroup";
import RecipeCard from "../components/RecipeCard";
import Slider from "react-input-slider";
import React, { useState, Fragment } from "react";
import theme from "../styles/theme.js";

export default function Index(props) {
  const [state, setState] = useState({ x: props.max_cook_time });

  return (
    <Layout siteTitle={props.title}>
      {/* <Container>
        <Row>
          <Col>
            <Fragment>
              <div>{"Max cooking time: " + state.x + " mins"}</div>
              <Slider
                axis="x"
                xstep={5}
                xmin={0}
                xmax={props.max_cook_time}
                x={state.x}
                onChange={({ x }) => setState({ x: parseFloat(x.toFixed(2)) })}
              />
            </Fragment>
          </Col>
        </Row>
      </Container> */}
      <div className="recipe_cards">
        {props.allRecipes.map((item) => (
          <RecipeCard recipe={item.recipe.data} slug={item.slug}></RecipeCard>
        ))}
      </div>
      {/* <RecipeGroup
        category="mains"
        recipes={props.allRecipes
          .filter((i) => i.recipe.data.category == "main")
          .filter((i) => i.recipe.data.total_cook_time_mins <= state.x)}
      ></RecipeGroup>
      <RecipeGroup
        category="soups_and_sides"
        recipes={props.allRecipes.filter(
          (i) => i.recipe.data.category == "soups_and_sides"
        )}
      ></RecipeGroup>
      <RecipeGroup
        category="salads"
        recipes={props.allRecipes.filter(
          (i) => i.recipe.data.category == "salads"
        )}
      ></RecipeGroup>
      <RecipeGroup
        category="sweets"
        recipes={props.allRecipes.filter(
          (i) => i.recipe.data.category == "sweets"
        )}
      ></RecipeGroup> */}

      <style jsx>
        {`
          .recipe_cards {
            margin: 16px;
            display: flex;
            flex-flow: column wrap;
          }
        `}
      </style>
    </Layout>
  );
}

Index.getInitialProps = async function () {
  const siteConfig = await import(`../data/config.json`);
  //get posts & context from folder
  const recipes = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const recipe = matter(value.default);
      return {
        recipe,
        slug,
      };
    });
    return data;
  })(require.context("../recipes", true, /\.md$/));

  const max_cook_time_array = recipes.map(
    (i) => i.recipe.data.total_cook_time_mins
  );
  const max_cook_time = Math.max(...max_cook_time_array);

  return {
    allRecipes: recipes,
    ...siteConfig,
    max_cook_time,
  };
};
