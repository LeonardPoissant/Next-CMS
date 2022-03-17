import styled from "styled-components";
import SubNav from "./sub-nav";
import NavLogo from "./nav-logo";
import useComponentVisible from "../../hooks/useComponentVisible";
import TranslateIcon from "./translate-button";
import { useLanguageContext } from "../../Contexts/language-context";
const NavBar = () => {
	const value = useLanguageContext();

	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(false);

	const openSubNav = () => {
		setIsComponentVisible(!isComponentVisible);
	};

	return (
		<>
			<Nav ref={ref} tabIndex="1">
				<NavLogo openSubNav={openSubNav} />
				{isComponentVisible && (
					<SubNav
						setIsComponentVisible={setIsComponentVisible}
						isComponentVisible={isComponentVisible}
					/>
				)}
				<TranslateIcon
					handleLanguage={value.handleLanguage}
					languageSelected={value.languageSelected}
				/>
			</Nav>
		</>
	);
};

const Nav = styled.nav`
	z-index: 2;
	position: fixed;
	padding: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 63px;
	background-color: white;
`;

export default NavBar;
