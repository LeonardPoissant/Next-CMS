import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function UserContext({ children }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoggedIn, setLoggedIn] = useState(false);
	const api_url =
		process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL ||
		process.env.NEXT_PUBLIC_PRODUCTION_API_URL;

	const signIn = (e) => {
		e.preventDefault();
		console.log("HALLo", api_url);

		fetch(`${api_url}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ email: email, password: password }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.data) {
					localStorage.setItem("user", JSON.stringify(data.data));
					setLoggedIn(true);
				}
			})
			.catch((err) => console.log("err", err));
	};

	return (
		<AppContext.Provider
			value={{ email, setEmail, password, setPassword, signIn, isLoggedIn }}>
			{children}
		</AppContext.Provider>
	);
}

export function useUserContext() {
	return useContext(AppContext);
}
