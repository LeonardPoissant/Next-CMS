import styled from "styled-components";
import Link from "next/link";
const BlogNav = (props) => {
	let arrayOfPages = props.props.arrayOfPages.data;

	return (
		<Wrapper>
			<span>Pages</span>

			{arrayOfPages.map((page, index) => (
				<LinkWrapper>
					<Link
						key={index}
						href={{
							pathname: "/posts/[id]",
							query: {
								id: index + 1,
							},
						}}>
						<div>{index + 1}</div>
					</Link>
				</LinkWrapper>
			))}
		</Wrapper>
	);
};

export default BlogNav;

const Wrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
`;

const LinkWrapper = styled.div`
	margin: 20px;
	cursor: pointer;
`;
