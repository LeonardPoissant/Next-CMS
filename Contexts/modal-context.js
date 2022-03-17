import { createContext, useContext, useState, useEffect } from "react";

import LoginModal from "../components/login";

const AppContext = createContext();

export function ModalContext({ children }) {
	const [isLoginModalOpen, setOpenLoginModal] = useState(false);
	return (
		<AppContext.Provider
			value={{
				isLoginModalOpen,
				setOpenLoginModal,
			}}>
			{children}
		</AppContext.Provider>
	);
}

export function useModalContext() {
	return useContext(AppContext);
}
