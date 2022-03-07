import { createContext, useContext, useState, useEffect } from "react";
import BlogDrawer from "../components/Blog-drawer";
import LoginModal from "../components/Login";

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
