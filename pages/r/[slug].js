import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import RecipeTitle from "../../components/RecipeTitle";
import {
  Card,
  Container,
  Jumbotron,
  Badge,
  Image,
  Media,
} from "react-bootstrap";
import randomColor from "randomcolor";
import RecipeImage from "../../components/RecipeImage";
import Ingredients from "../../components/Ingredients";
import Method from "../../components/Method";

export default function Recipe(props) {
  const markdownBody = props.content;
  const frontmatter = props.data;
  return (
    <Layout siteTitle={props.title}>
      <div className="recipe_body">
        <RecipeTitle
          recipe_title={frontmatter.title}
          total_cook_time_mins={frontmatter.total_cook_time_mins}
          serves={frontmatter.serves}
        ></RecipeTitle>
        <RecipeImage image={frontmatter.image} className="test"></RecipeImage>
        <Ingredients ingredients={frontmatter.ingredients}></Ingredients>
        <Method method={frontmatter.method}></Method>
      </div>
      <style jsx>{`
        .recipe_body {
          display: flex;
          flex-flow: column nowrap;
        }
        .test {
          margin: 10px;
        }
      `}</style>
    </Layout>
  );
}

Recipe.getInitialProps = async function (context) {
  const siteConfig = await import(`../../data/config.json`);
  // context contains the query param
  const { slug } = context.query;
  // grab the file in the posts dir based on the slug
  const content = await import(`../../recipes/${slug}.md`);
  //gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default);
  return {
    ...data,
    ...siteConfig,
  };
};
