import allRecipes from "../../recipes.json";

export default (req, res) => {
  const { name } = req.query;
  let recipes = allRecipes;

  if (name) {
    recipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  const recipe = recipes[Math.floor(Math.random() * recipes.length)];

  res.status(200).json(recipe);
};
