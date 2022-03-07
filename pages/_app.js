import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GlobalStyles from "../styles/global-styles";
import { LanguageContext } from "../Contexts/LanguageContext";
import { RoutingContext } from "../Contexts/RoutingContext";
import { EditorContext } from "../Contexts/EditorContext";
import { UserContext } from "../Contexts/UserContext";
import { ModalContext } from "../Contexts/ModalContext";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<UserContext>
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
			</UserContext>
		</>
	);
}

export default MyApp;
