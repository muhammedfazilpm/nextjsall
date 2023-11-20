import style from '../../styles/sass/navbar.module.css';
import Link from 'next/link'

export default function Navbar(){
    return(
        <ul className={style.container}>
            <li><Link href='/'>home</Link></li>
           <Link href='/posts/user'> <li>users</li></Link>
           
         <Link href='/posts/first-post'> <li>Posts</li></Link>       
            <li>Order</li>
            <li>Posts</li>

        </ul>
    )
}