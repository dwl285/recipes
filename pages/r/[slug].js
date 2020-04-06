import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import { Card, Container, Jumbotron, Badge } from "react-bootstrap";
import randomColor from "randomcolor";

export default function Recipe(props) {
  const markdownBody = props.content;
  const frontmatter = props.data;
  return (
    <Layout>
      <Container>
        <Jumbotron>
          <h1>{frontmatter.title}</h1>
          <div>
            <Badge pill variant="info">
              Cook time: {frontmatter.total_cook_time_mins} mins
            </Badge>
            {` `}
            <Badge pill variant="info">
              Serves: {frontmatter.serves}
            </Badge>
          </div>
        </Jumbotron>
        <Card>
          <Card.Body>
            <Card.Text>
              <ReactMarkdown source={markdownBody} />
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <style jsx>{`
        h1 {
          color: ${randomColor({
            luminosity: "dark",
            seed: frontmatter.title
          })};
        }
      `}</style>
    </Layout>
  );
}

Recipe.getInitialProps = async function(context) {
  // context contains the query param
  const { slug } = context.query;
  // grab the file in the posts dir based on the slug
  const content = await import(`../../recipes/${slug}.md`);
  //gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default);
  return {
    ...data
  };
};
