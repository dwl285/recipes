import allRecipes from "../../recipes.json";

export default (req, res) => {
  const recipe = allRecipes[Math.floor(Math.random() * allRecipes.length)];
  res.status(200).json(recipe);
};
