import NavBar from "../components/Header/nav-bar";
import Footer from "../components/Footer/footer";
import GlobalStyles from "../styles/global-styles";
import { LanguageContext } from "../Contexts/language-context";
import { RoutingContext } from "../Contexts/routing-context";
import { EditorContext } from "../Contexts/editor-context";
import { UserContext } from "../Contexts/user-context";

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
