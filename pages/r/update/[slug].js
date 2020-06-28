import Layout from "../../../components/Layout";
import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import absoluteUrl from "next-absolute-url";

const EditRecipe = (props) => {
  let initialRecipe = {
    _id: props.recipe._id ?? "new",
    title: props.recipe.title ?? null,
    total_cook_time_mins: props.recipe.total_cook_time_mins ?? null,
    serves: props.recipe.serves ?? null,
    tags: props.recipe.tags ? props.recipe.tags.join(", ") : null,
    ingredients: props.recipe.ingredients ?? [],
    method: props.recipe.method ?? [],
  };

  const updateRecipe = async () => {
    const res = await fetch("/api/recipes", {
      method: "post",
      body: JSON.stringify(recipe),
    });
    const data = await res.json();
    // console.log(data);
    // console.log(data.doc.upsertedId._id);
    Router.push(`/r/${data.doc.upsertedId._id ?? data.recipeId}`);
  };

  const [recipe, setRecipe] = useState(initialRecipe);

  const onChange = (e) => {
    const data = { ...recipe };
    let name = e.target.name;
    if ((name == "ingredients") | (name == "method")) {
      data[name][e.target.id] = e.target.value;
    } else {
      data[name] = e.target.value;
    }
    setRecipe(data);
  };

  return (
    <Layout siteTitle={props.title}>
      <div>
        <label for="title">Recipe Title</label>
        <input
          type="text"
          name="title"
          onChange={onChange}
          placeholder="..."
          value={recipe.title}
        ></input>
      </div>
      <div>
        <label for="total_cook_time_mins">Cook Time (minutes)</label>
        <input
          type="number"
          name="total_cook_time_mins"
          onChange={onChange}
          placeholder="..."
          value={recipe.total_cook_time_mins}
        ></input>
      </div>
      <div>
        <label for="serves">Serves</label>
        <input
          type="number"
          name="serves"
          onChange={onChange}
          placeholder="..."
          value={recipe.serves}
        ></input>
      </div>
      <div>
        <label for="tags">Tags</label>
        <input
          type="text"
          name="tags"
          onChange={onChange}
          placeholder="..."
          value={recipe.tags}
        ></input>
      </div>
      <div>
        <h2>Ingredients</h2>
        {recipe.ingredients.map((i, index) => (
          <input
            type="text"
            name={`ingredients`}
            id={index}
            onChange={onChange}
            placeholder="..."
            value={i}
          ></input>
        ))}
      </div>
      <div>
        <h2>Method</h2>
        {recipe.method.map((i, index) => (
          <input
            type="text"
            name={`method`}
            id={index}
            onChange={onChange}
            placeholder="..."
            value={i}
          ></input>
        ))}
      </div>
      <button onClick={updateRecipe}>Save</button>
    </Layout>
  );
};

export default EditRecipe;

export const getServerSideProps = async (context) => {
  const host = absoluteUrl(context.req, context.req.headers.host);
  const siteConfig = await import(`../../../data/config.json`);

  // context contains the query param
  const { slug } = context.query;
  // grab the file in the posts dir based on the slug

  let recipe;

  if (slug != "new") {
    const res = await fetch(host.origin + `/api/recipes/` + slug);
    recipe = await res.json();
  } else {
    recipe = {};
  }

  return {
    props: {
      recipe,
      ...siteConfig,
    },
  };
};
