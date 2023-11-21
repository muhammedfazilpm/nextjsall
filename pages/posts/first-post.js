import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/sass/style.module.scss'
import Link from 'next/link'
import Layout from '../layout/layout'
import { useState } from 'react'
import { useEffect } from 'react'
function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}
export default function Firstpost(){
    const[post,setPost]=useState("")
    const[isloading,setIsloading]=useState(false)
    useEffect(()=>{
        setIsloading(true)
        sleep(3000).then(()=>{
           
            setPost({title:"New post",description:"post data from server side"})
            setIsloading(false)
    

        })
      
    },[])
if(isloading) return <p>loading.....</p>
if(!post) return <p>No data Available</p>

    return(
        <>
        <Head>
            <title>next-first</title>
        </Head>
        <Layout>
        <h1 className={styles.title}>{post.heading}</h1>  
        <p>{post.description}</p>
          

          <Image width={300} height={300} src='/IMAGES/1698643756327-WIN_20231025_17_39_14_Pro.jpg' alt='prof'/>
          <Link href='/'><h1> Go to Home</h1></Link>
        </Layout>
       
        </>
    )

}