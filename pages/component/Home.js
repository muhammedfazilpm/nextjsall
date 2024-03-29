
import Layout from "../layout/layout";

export default function Home({ posts }) {
  return (
    <Layout>
      <h1>{posts.title}</h1>
      <p>{posts.description}</p>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = { title: "day tuition", description: "Post data" };

  return {
    props: {
      posts, 
    },
  };
}
