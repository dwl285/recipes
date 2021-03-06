import Layout from "../../components/Layout";
import RecipeTitle from "../../components/RecipeTitle";
import RecipeImage from "../../components/RecipeImage";
import Ingredients from "../../components/Ingredients";
import Method from "../../components/Method";
import absoluteUrl from "next-absolute-url";
import Link from "next/link";

export default function Recipe(props) {
  return (
    <Layout siteTitle={props.title}>
      <div className="recipe_body">
        <RecipeTitle
          recipe_title={props.recipe.title}
          total_cook_time_mins={props.recipe.total_cook_time_mins}
          serves={props.recipe.serves}
        ></RecipeTitle>
        <RecipeImage image={props.recipe.image} className="test"></RecipeImage>
        <Ingredients ingredients={props.recipe.ingredients}></Ingredients>
        <Method method={props.recipe.method}></Method>
        <Link href="/r/update/[slug]" as={`/r/update/${props.recipe._id}`}>
          <button type="button">Edit recipe</button>
        </Link>
      </div>
      <style jsx>{`
        .recipe_body {
          display: flex;
          flex-flow: column nowrap;
        }
        .test {
          margin: 10px;
        }
        button {
          display: flex;
          align-item: space-around;
        }
      `}</style>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const host = absoluteUrl(context.req, context.req.headers.host);

  const siteConfig = await import(`../../data/config.json`);
  // context contains the query param
  const { slug } = context.query;
  // grab the file in the posts dir based on the slug
  const res = await fetch(host.origin + `/api/recipes/` + slug);
  const recipe = await res.json();

  return {
    props: {
      recipe,
      ...siteConfig,
    },
  };
};
