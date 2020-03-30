import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/MyLayout";

export default function Recipe(props) {
  const markdownBody = props.content;
  const frontmatter = props.data;
  return (
    <Layout>
      <h1>{frontmatter.name}</h1>
      <div>
        <ReactMarkdown source={markdownBody} />
      </div>
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
