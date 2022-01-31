import styled from "styled-components";
import { useRouter } from "next/router";

const HomeNav = (props) => {
	const isComponentVisible = props.isComponentVisible;
	const setIsComponentVisible = props.setIsComponentVisible;
	const router = useRouter();

	const handleNavigation = () => {
		router.push("/");
		setIsComponentVisible(!isComponentVisible);
	};

	return <Wrapper onClick={() => handleNavigation()}>Home</Wrapper>;
};

const Wrapper = styled.a`
	margin: 15px;
	width: 50px;
	height: 50px;
	text-align: center;

	:hover {
		cursor: pointer;
		text-decoration: underline;
	}

	@media (max-width: 736px) {
		margin-left: 56px;
	} ;
`;

export default HomeNav;
