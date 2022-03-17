import styled from "styled-components";

const NavLogo = ({ openSubNav }) => {
	return (
		<Button onClick={() => openSubNav()}>
			<FirstTriangle>
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</FirstTriangle>
			<SecondTriangle>
				<div className="line1 second-triangle"></div>
				<div className="line2 second-triangle"></div>
				<div className="line3 second-triangle"></div>
			</SecondTriangle>
		</Button>
	);
};

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

const FirstTriangle = styled.div`
	position: relative;
	margin-left: 27px;
	margin-top: -25px;
`;

const SecondTriangle = styled.div`
	position: relative;
	transform: rotate(260deg);
`;

export default NavLogo;
