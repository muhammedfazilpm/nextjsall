import '../styles/globals.css'
import Navbar from './posts/navbar'

function MyApp({ Component, pageProps }) {

  return (
    <>
     <Navbar/>
  <Component {...pageProps} />
    </>)
 
}

export default MyApp
