import {useRouter} from 'next/router'
const postData = [
    { id: 1, title: "first data", description: "this is first data" },
    { id: 2, title: "second data", description: "this is second data" },
    {id:3,title:"thired data",description:"this is thired data"}
  ];
  
  export default function Post({ post }) {
    const router=useRouter()
    const {id}=router.query
    console.log("id",id)
    return (
      <article>
        <div key={post.id}>
          <h1>{post.id}</h1>
          <h1>{post.title}</h1>
          <h1>{post.description}</h1>
        </div>
      </article>
    );
  }
  
  export async function getStaticProps({ params }) {
    const id = parseInt(params.id, 10);
    const post = postData.find((p) => p.id === id);
  
    return {
      props: { post },
    };
  }
  
  export async function getStaticPaths() {
    const paths = postData.map((post) => ({
      params: { id: post.id.toString() },
    }));
  
    return {
      paths,
      fallback: false, 
      
    };
  }
  