import styled from "styled-components";
import HomeNav from "./Home-nav-icon";
import BlogIcon from "./Blog-pages-nav-icon";
import AboutIcon from "./About-nav-icon";

const SubNav = (props) => {
	const isComponentVisible = props.isComponentVisible;
	const setIsComponentVisible = props.setIsComponentVisible;

	return (
		<Wrapper>
			<HomeNav
				isComponentVisible={isComponentVisible}
				setIsComponentVisible={setIsComponentVisible}
			/>
			<BlogIcon
				isComponentVisible={isComponentVisible}
				setIsComponentVisible={setIsComponentVisible}
			/>
			<AboutIcon
				isComponentVisible={isComponentVisible}
				setIsComponentVisible={setIsComponentVisible}
			/>
		</Wrapper>
	);
};

export default SubNav;

const Wrapper = styled.div`
	margin-left: 20px;
`;
