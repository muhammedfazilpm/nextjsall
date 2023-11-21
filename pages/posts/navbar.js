import style from '../../styles/sass/navbar.module.css';
import Link from 'next/link'
import navLink from '../lib/navLink'

export default function Navbar(){
    return(
      <ul className={style.container}>
    <Link href='/'><li>Home</li></Link>    
  <Link href='/posts/first-post'><li>Posts</li></Link>  
      <Link href='/posts/user'><li>User</li></Link>  
        <li>Home</li>
      </ul>
    )
}

// function Home_nav(){
//     console.log(navLink)
//     return(
//         <nav>
//             {navLink.map((link)=>{
//                 return( 
//                     <ul className={style.container}  key={link.name}>
//                         <Link href={link.path}>
//                         <li>{link.name}</li>
                        
//                         </Link>

//                     </ul>
//                 )
//             })}
//         </nav>
//     )

// }