import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "../../components/MyLayout";
import fetch from "isomorphic-unfetch";

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

export default function Recipe() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    `/api/getRecipe${query.name ? "?name=" + query.name : ""}`,
    fetcher
  );

  const recipe = data;

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Layout>
      <h1>{recipe.name}</h1>
      <p>{recipe.steps}</p>
    </Layout>
  );
}
