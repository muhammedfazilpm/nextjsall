import styles from './layout.module.css'
import Link from 'next/link'
export default function Layout({children,home}){
    return <div className={styles.container} >
        <header>  {home?(
        <div>Home page Header</div>
    ):<div>Other page Header   </div>}
   </header>
      

       <middle> {children}</middle>
       <footer>Footer</footer>
        
       
        
    </div>
}