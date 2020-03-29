import allRecipes from "../../recipes.json";

export default (req, res) => {
  res.status(200).json(allRecipes);
};
