import styled from "styled-components";
import { useLanguageContext } from "../../Contexts/language-context";
import NavLink from "./nav-link";

const SubNav = () => {
	const value = useLanguageContext();
	//const isComponentVisible = props.isComponentVisible;
	//const setIsComponentVisible = props.setIsComponentVisible;

	return (
		<Wrapper>
			<NavLink href="/" displayedText={value.languages.Home} />
			<NavLink href="/posts/1" displayedText={value.languages.Blog} />
			<NavLink href="/about" displayedText={value.languages.About} />
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
