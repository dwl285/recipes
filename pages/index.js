import matter from "gray-matter";
import Link from "next/link";
import Layout from "../components/Layout";
import {
  Card,
  Container,
  ListGroup,
  ListGroupItem,
  Jumbotron,
  Badge
} from "react-bootstrap";

export default function Index(props) {
  return (
    <Layout>
      <Jumbotron>
        <h1>{props.title}</h1>
      </Jumbotron>
      <Card>
        <ListGroup>
          {props.allRecipes.map(item => (
            <ListGroupItem key={item.recipe.data.title}>
              <Link href="/r/[slug]" as={`/r/${item.slug}`}>
                <a>{item.recipe.data.title}</a>
              </Link>
              {`  `}
              <Badge pill variant="info">
                Cook time: {item.recipe.data.total_cook_time_mins} mins
              </Badge>
              {` `}
              <Badge pill variant="info">
                Serves: {item.recipe.data.serves}
              </Badge>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    </Layout>
  );
}

Index.getInitialProps = async function() {
  const siteConfig = await import(`../data/config.json`);
  //get posts & context from folder
  const recipes = (context => {
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
  })(require.context("../recipes", true, /\.md$/));

  return {
    allRecipes: recipes,
    ...siteConfig
  };
};
