import styled from "styled-components";
import { useAppContext } from "../Contexts/LanguageContext";
import { sanitizeUrl, sanitizeTitle } from "../utils/breadcrumb-helper";

const BreadCrumbs = (props) => {
	const value = useAppContext();
	const title = sanitizeTitle(props.title);
	const previousPage = sanitizeUrl(props.previousPage);

	return (
		<Wrapper>
			<BreadCrumb
				href={{
					pathname: `/posts/1`,
				}}>
				{value.languages.Blog} <span>&gt;</span>
			</BreadCrumb>
			<BreadCrumb
				href={{
					pathname: `/posts/${previousPage}`,
				}}>
				page {previousPage} <span>&gt;</span>
			</BreadCrumb>
			<LastBreadCrumb>{title}</LastBreadCrumb>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	width: 600px;
	max-width: 600px;
	margin: 20px 0;
`;

const BreadCrumb = styled.a`
	text-decoration: none;
	color: rgb(23, 91, 176);
	margin: 5px;
	&:nth-child(2) {
		margin-left: 0px;
	}
	&:hover {
		cursor: pointer;
	}
`;

const LastBreadCrumb = styled.div`
	margin: 5px;
`;
export default BreadCrumbs;
