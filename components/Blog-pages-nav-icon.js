import styled from "styled-components";
import { useRouter } from "next/router";

const BlogIcon = (props) => {
	const isComponentVisible = props.isComponentVisible;
	const setIsComponentVisible = props.setIsComponentVisible;
	const router = useRouter();

	const handleNavigation = () => {
		setIsComponentVisible(!isComponentVisible);
	};

	return (
		<Wrapper onClick={() => handleNavigation()} href="/posts/1">
			{props.blog}
		</Wrapper>
	);
};

const Wrapper = styled.a`
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

export default BlogIcon;
