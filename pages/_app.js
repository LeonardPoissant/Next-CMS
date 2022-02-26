import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GlobalStyles from "../styles/global-styles";
import { LanguageContext } from "../Contexts/LanguageContext";
import { RoutingContext } from "../Contexts/RoutingContext";
import { EditorContext } from "../Contexts/EditorContext";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<EditorContext>
				<LanguageContext>
					<RoutingContext>
						<GlobalStyles />
						<NavBar />
						<Component {...pageProps} />
						<Footer />
					</RoutingContext>
				</LanguageContext>
			</EditorContext>
		</>
	);
}

export default MyApp;
