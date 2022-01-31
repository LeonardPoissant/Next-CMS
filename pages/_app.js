import head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GlobalStyles from "../styles/global-styles";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
