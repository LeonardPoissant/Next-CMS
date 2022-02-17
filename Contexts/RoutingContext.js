import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
const AppContext = createContext();

export function RoutingContext({ children }) {
	const useRouteUrlHistory = () => {
		const [previousRoute, setPreviousRouter] = useState("");
		const router = useRouter();

		const handleBeforeHistoryChange = (url) => {
			const [nextUrl] = url?.split("?") || [];

			if (nextUrl !== router.asPath) {
				setPreviousRouter(router.asPath);
			}
		};

		useEffect(() => {
			router.events.on("beforeHistoryChange", handleBeforeHistoryChange);

			return () => {
				router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
			};
		}, []);

		return { previousRoute };
	};

	return (
		<AppContext.Provider
			value={{
				useRouteUrlHistory: useRouteUrlHistory(),
			}}>
			{children}
		</AppContext.Provider>
	);
}

export function useRoutingContext() {
	return useContext(AppContext);
}
