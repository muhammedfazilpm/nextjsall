

export default function user({users}){
    return(
        <div style={{textAlign:'center'}}>
            <h1>This is from next Api</h1>
           {users&&
            users.map(u=>(
                <div key={u.id}>
                      <h3>{u.name}</h3>
                      <p>{u.Place}</p>
                </div>
              
            ))
           }
        </div>
    )
}


export async function getStaticProps(){
    const res=await fetch('http://localhost:3000/api/users')
    console.log(res)
    const users=await res.json()


   return {
    props:{
        users
    }
   }



}