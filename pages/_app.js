import '../styles/globals.css'
import Head from 'next/head'
import NavBar from "../components/NavBar"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sharely</title>
        <link rel="icon" href="/random.png" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>)
}

export default MyApp
