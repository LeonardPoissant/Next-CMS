import styled from "styled-components";
import HomeNav from "./Home-nav-icon";
import BlogIcon from "./Blog-pages-nav-icon";
import AboutIcon from "./About-nav-icon";
import { useAppContext } from "../Contexts/LanguageContext";

const SubNav = (props) => {
	const value = useAppContext();
	const isComponentVisible = props.isComponentVisible;
	const setIsComponentVisible = props.setIsComponentVisible;

	return (
		<Wrapper>
			<HomeNav
				isComponentVisible={isComponentVisible}
				setIsComponentVisible={setIsComponentVisible}
				home={value.languages.Home}
			/>
			<BlogIcon
				isComponentVisible={isComponentVisible}
				setIsComponentVisible={setIsComponentVisible}
				blog={value.languages.Blog}
			/>
			<AboutIcon
				isComponentVisible={isComponentVisible}
				setIsComponentVisible={setIsComponentVisible}
				about={value.languages.About}
			/>
		</Wrapper>
	);
};

export default SubNav;

const Wrapper = styled.div`
	position: absolute;
	margin-left: 90px;

	@media (max-width: 900px) {
		margin-top: 45px;
		margin-left: 34px;
	}
`;
