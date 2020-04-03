import matter from "gray-matter";

export default (req, res) => {
  const allRecipes = (context => {
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
        slug
      };
    });
    return data;
  })(require.context("../../recipes", true, /\.md$/));

  const recipe = allRecipes[Math.floor(Math.random() * allRecipes.length)];

  res.status(200).json(recipe);
};
