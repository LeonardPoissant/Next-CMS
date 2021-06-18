
import Head from 'next/head'
import NavBar from "../components/NavBar"
import GlobalStyles from '../styles/global-styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
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
