import styled from "styled-components";
import SubNav from "./SubNav";
import useComponentVisible from "../hooks/useComponentVisible";
import TranslateIcon from "./TranslateIcon";
import { useLanguageContext } from "../Contexts/LanguageContext";

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
				<Button onClick={() => openSubNav()}>
					<Section>
						<div className="line1"></div>
						<div className="line2"></div>
						<div className="line3"></div>
					</Section>
					<SectionTwo>
						<div className="line1 second-triangle"></div>
						<div className="line2 second-triangle"></div>
						<div className="line3 second-triangle"></div>
					</SectionTwo>
				</Button>
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

const Section = styled.div`
	position: relative;
	margin-left: 27px;
	margin-top: -25px;
`;

const SectionTwo = styled.div`
	position: relative;
	transform: rotate(260deg);
`;

const Button = styled.button`
	width: 45px;
	height: 45px;
	background: none;
	color: inherit;
	border: solid;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	border-style: none;
`;

export default NavBar;
