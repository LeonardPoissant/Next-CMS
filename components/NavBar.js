import styled from "styled-components";
import SubNav from "./SubNav";
import useComponentVisible from "../hooks/useComponentVisible";
//import styles from "./NavBar.module.css";

const NavBar = () => {
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(false);

	const openSubNav = () => {
		setIsComponentVisible(!isComponentVisible);
	};

	/**	<Nav ref={ref} tabIndex="1">
				<Button onClick={() => openSubNav()}></Button>
				{isComponentVisible && (
					<SubNav
						setIsComponentVisible={setIsComponentVisible}
						isComponentVisible={isComponentVisible}
					/>
				)}
			</Nav> */

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
	width: 100%;
	height: 63px;
	background-color: white;

	@media (max-width: 736px) {
		margin-left: 6px;
		background-color: white;
		width: 97%;
		display: flex;
	}
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
