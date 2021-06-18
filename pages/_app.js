
import Head from 'next/head'
import NavBar from "../components/NavBar"
import GlobalStyles from '../styles/global-styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sharely</title>
        <link rel="icon" href="/random.png" />
        <meta name="title" content="Sharely" />
        <meta name="description" content="" />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yearngroup.herokuapp.com/" />
        <meta property="og:title" content="Sharely" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yearngroup.herokuapp.com/" />
        <meta property="twitter:title" content="Sharely" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content=""></meta>
      </Head>
      <GlobalStyles />
      <NavBar />
      <Component {...pageProps} />
      <footer >
        <div>
          powered by yearngroup
        </div>
      </footer>
    </>)
}

export default MyApp
