import matter from "gray-matter";
import Layout from "../components/Layout";
import RecipeCard from "../components/RecipeCard";
import React, { useState, useEffect } from "react";
import RecipeFilters from "../components/RecipeFilters";
import absoluteUrl from "next-absolute-url";

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
      i.title.toLowerCase().includes(searchTerm.toLowerCase())
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
        {searchResults
          .filter((i) => i.total_cook_time_mins <= cookTime)
          .filter((i) => i.tags)
          .filter((i) => {
            return !selected[0]
              ? i
              : i.tags.some((item) =>
                  selected.map((s) => s.value).includes(item)
                );
          })
          .map((item) => (
            <RecipeCard
              recipe={item}
              slug={item._id}
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

export const getServerSideProps = async (context) => {
  const host = absoluteUrl(context.req, context.req.headers.host);

  const siteConfig = await import(`../data/config.json`);
  //get posts & context from folder
  const res = await fetch(host.origin + "/api/recipes");
  const recipes = await res.json();

  const max_cook_time = Math.max(
    ...recipes.map((i) => i.total_cook_time_mins ?? 0)
  );

  const tags = [].concat.apply(
    [],
    recipes.map((i) => i.tags)
  );

  const unique_tags = [...new Set(tags)].sort();
  return {
    props: {
      allRecipes: recipes,
      ...siteConfig,
      max_cook_time,
      unique_tags,
    },
  };
};
