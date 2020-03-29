import useSWR from "swr";
import Link from "next/link";
import Layout from "../components/MyLayout";

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

export default function Index() {
  const { data, error } = useSWR("/api/getAllRecipes", fetcher);

  const recipes = data;

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Layout>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.name}>
            <Link href="/r/[id]" as={`/r/${recipe.name}`}>
              <a>{recipe.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
