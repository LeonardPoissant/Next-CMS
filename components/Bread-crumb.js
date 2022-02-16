import { useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../Contexts/LanguageContext";
import Link from "next/link";
import { sanitizeUrl, sanitizeTitle } from "../utils/breadcrumb-helper";
import { useRouter } from "next/router";

const BreadCrumbs = (props) => {
	const [goToMainBlogPage, setGoToMainBlogPage] = useState(false);
	const router = useRouter();
	const value = useAppContext();
	const title = sanitizeTitle(props.title);
	const previousPage = sanitizeUrl(props.previousPage);
	const handleNavigation = () => {
		goToMainBlogPage
			? router.push("/posts/1")
			: router.push(`/posts/${previousPage}`);
	};

	const renderBreadCrumb = () => {
		if (props.previousPage === null) {
			return (
				<BreadCrumb onClick={() => handleNavigation(setGoToMainBlogPage(true))}>
					{value.languages.Blog} <span>&gt;</span>
				</BreadCrumb>
			);
		} else {
			return (
				<>
					<BreadCrumb
						onClick={() => handleNavigation(setGoToMainBlogPage(true))}>
						{value.languages.Blog} <span>&gt;</span>
					</BreadCrumb>
					<BreadCrumb onClick={() => handleNavigation()}>
						page {previousPage} <span>&gt;</span>
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
