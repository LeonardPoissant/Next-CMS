import head from "next/head";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GlobalStyles from "../styles/global-styles";
import { AppWrapper } from "../Contexts/LanguageContext";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<AppWrapper>
				<GlobalStyles />
				<NavBar />
				<Component {...pageProps} />
				<Footer />
			</AppWrapper>
		</>
	);
}

export default MyApp;
