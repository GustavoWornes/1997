import Footer from '../src/components/Footer/Footer'
import NavBar from '../src/components/NavBar/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp
