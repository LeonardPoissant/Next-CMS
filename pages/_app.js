import head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GlobalStyles from "../styles/global-styles";
import { LanguageContext } from "../Contexts/LanguageContext";
import { RoutingContext } from "../Contexts/RoutingContext";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	/*useEffect(() => {
		const handleRouteChange = (url, { shallow }) => {
			console.log(
				`App is changing to ${url} ${
					shallow ? "with" : "without"
				} shallow routing`
			);
		};

		router.events.on("beforeHistoryChange", handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method:
		return () => {
			router.events.off("beforeHistoryChange", handleRouteChange);
		};
	}, []);*/
	return (
		<>
			<LanguageContext>
				<RoutingContext>
					<GlobalStyles />
					<NavBar />
					<Component {...pageProps} />
					<Footer />
				</RoutingContext>
			</LanguageContext>
		</>
	);
}

export default MyApp;
