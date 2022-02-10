import styled from "styled-components";
import { useRouter } from "next/router";

const AboutIcon = (props) => {
	const isComponentVisible = props.isComponentVisible;
	const setIsComponentVisible = props.setIsComponentVisible;
	const router = useRouter();

	const handleNavigation = () => {
		setIsComponentVisible(!isComponentVisible);
		router.push("/about");
	};

	return <Wrapper onClick={() => handleNavigation()}>{props.about}</Wrapper>;
};

const Wrapper = styled.a`
	text-decoration: none;
	width: 50px;
	height: 50px;
	margin: 15px;
	:hover {
		cursor: pointer;
		text-decoration: underline;
	}
	@media (max-width: 900px) {
		width: 2px;
		margin: 0px;
	}
`;

export default AboutIcon;
