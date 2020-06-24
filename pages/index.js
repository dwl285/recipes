import matter from "gray-matter";
import Layout from "../components/Layout";
import RecipeCard from "../components/RecipeCard";
import React, { useState, useEffect } from "react";
import RecipeFilters from "../components/RecipeFilters";

const Index = (props) => {
  // Slider state
  const [cookTime, setCookTime] = useState(props.max_cook_time);
  const handleSlider = ({ x }) => {
    setCookTime(x);
  };

  // tags state
  const tag_options = props.unique_tags.map((tag) => {
    const option = {
      label: tag,
      value: tag,
    };
    return option;
  });

  const [selected, setSelected] = useState(tag_options);

  // search box state
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = props.allRecipes.filter((i) =>
      i.recipe.data.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <Layout siteTitle={props.title}>
      <RecipeFilters
        cook_time={cookTime}
        max_cook_time={props.max_cook_time}
        handleSlider={handleSlider}
        tag_options={tag_options}
        tags_selected={selected}
        setSelectedTags={setSelected}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      ></RecipeFilters>
      <div className="recipe_cards">
        {console.log(selected[0])}
        {searchResults
          .filter((i) => i.recipe.data.total_cook_time_mins <= cookTime)
          .filter((i) => {
            return !selected[0]
              ? i
              : i.recipe.data.tags.some((item) =>
                  selected.map((s) => s.value).includes(item)
                );
          })
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

  const max_cook_time = Math.max(
    ...recipes.map((i) => i.recipe.data.total_cook_time_mins)
  );

  const tags = [].concat.apply(
    [],
    recipes.map((i) => i.recipe.data.tags)
  );

  const unique_tags = [...new Set(tags)].sort();

  console.log(unique_tags);

  return {
    allRecipes: recipes,
    ...siteConfig,
    max_cook_time,
    unique_tags,
  };
};
