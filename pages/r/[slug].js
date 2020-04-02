import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import { Button, Card, Elevation } from "@blueprintjs/core";

export default function Recipe(props) {
  const markdownBody = props.content;
  const frontmatter = props.data;
  return (
    <Layout>
      <Card>
        <h1>{frontmatter.name}</h1>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </Card>
    </Layout>
  );
}

Recipe.getInitialProps = async function(context) {
  // context contains the query param
  const { slug } = context.query;
  console.log(slug);
  // grab the file in the posts dir based on the slug
  const content = await import(`../../recipes/${slug}.md`);
  //gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default);
  return {
    ...data
  };
};
