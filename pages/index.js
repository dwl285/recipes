import matter from "gray-matter";
import Layout from "../components/Layout";
import RecipeCard from "../components/RecipeCard";
import Slider from "react-input-slider";
import React, { useState, UseEffect, useEffect } from "react";
import RecipeFilters from "../components/RecipeFilters";

const Index = (props) => {
  const [state, setState] = useState(props.max_cook_time);

  const handleSlider = ({ x }) => {
    setState(x);
  };

  return (
    <Layout siteTitle={props.title}>
      <RecipeFilters
        className="recipe_filters"
        cook_time={state}
        max_cook_time={props.max_cook_time}
        handleSlider={handleSlider}
      ></RecipeFilters>
      <div className="recipe_cards">
        {props.allRecipes
          .filter((i) => i.recipe.data.total_cook_time_mins <= state)
          .map((item) => (
            <RecipeCard
              recipe={item.recipe.data}
              slug={item.slug}
              className="recipe_card"
            ></RecipeCard>
          ))}
      </div>

      <style jsx>
        {`
          .recipe_cards {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            width: 100%;
          }
        `}
      </style>
    </Layout>
  );
};

export default Index;

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
