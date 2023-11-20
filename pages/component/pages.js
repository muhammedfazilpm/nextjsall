import Layout from "../layout/layout";

export default function Home({ posts }) {
 
  return (
    <Layout>
      <h1>{posts.title}</h1>
      <p>{posts.description}</p>
    </Layout>
  );
}

export async function getServerSideProps() {
  const posts = { title: "Daily Tuition post", description: 'this is from server-side props' };

  return {
    props: {
      posts,
    },
  };
}
