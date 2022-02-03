import { createContext, useContext, useState, useEffect } from "react";
import languages from "../assets/images/languages";
const AppContext = createContext();

export function AppWrapper({ children }) {
	const [languageSelected, setLanguageSelected] = useState("EN");
	const language = languages;
	const handleLanguage = () => {
		languageSelected === "EN"
			? setLanguageSelected("FR")
			: setLanguageSelected("EN");
	};

	return (
		<AppContext.Provider
			value={{
				languageSelected: languageSelected,
				handleLanguage: handleLanguage,
				setLanguageSelected: setLanguageSelected,
				languages: language[languageSelected],
			}}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
