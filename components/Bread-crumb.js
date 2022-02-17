import styled from "styled-components";
import { useLanguageContext } from "../Contexts/LanguageContext";
import { useRoutingContext } from "../Contexts/RoutingContext";
import { sanitizeUrl, sanitizeTitle } from "../utils/breadcrumb-helper";

const BreadCrumbs = (props) => {
	const currentLanguage = useLanguageContext();
	const value = useRoutingContext();
	const title = sanitizeTitle(props.title);
	const previousRoute = sanitizeUrl(value.useRouteUrlHistory.previousRoute);

	const renderBreadCrumb = () => {
		if (!previousRoute) {
			return (
				<BreadCrumb href={"/posts/1"}>
					{currentLanguage.languages.Blog} <span>&gt;</span>
				</BreadCrumb>
			);
		} else {
			return (
				<>
					<BreadCrumb href={"/posts/1"}>
						{currentLanguage.languages.Blog} <span>&gt;</span>
					</BreadCrumb>
					<BreadCrumb href={`/posts/${previousRoute}`}>
						page {previousRoute} <span>&gt;</span>
					</BreadCrumb>
				</>
			);
		}
	};

	return (
		<Wrapper>
			{renderBreadCrumb()}
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
