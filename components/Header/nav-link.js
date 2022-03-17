import styled from "styled-components";

const NavLink = ({ href, displayedText }) => {
	return <Anchor href={href}>{displayedText}</Anchor>;
};

const Anchor = styled.a`
	text-decoration: none;
	color: black;
	width: 50px;
	height: 50px;
	margin: 15px;
	text-align: center;
	:hover {
		cursor: pointer;
		text-decoration: underline;
	}
	@media (max-width: 736px) {
		margin-top: -49px;
	} ;
`;

export default NavLink;
