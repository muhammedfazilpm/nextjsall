

export default function user({users}){
    return(
        <div style={{textAlign:'center'}}>
            <h1>This is from next Api</h1>
           {
            users.map(u=>(
                <div>
                      <h3>{u.name}</h3>
                      <p>{u.place}</p>
                </div>
              
            ))
           }
        </div>
    )
}


export async function getStaticProps(){
    const res=await fetch('http://localhost:3000/api/users')
    const users=await res.json()


   return {
    props:{
        users
    }
   }



}