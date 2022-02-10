import styled from "styled-components";
import Posts from "../../components/Posts";
import BlogNav from "../../components/Blog-pages-nav";

const PostPage = (props) => {
	return (
		<Wrapper>
			<UlWrapper>
				<Posts posts={props} />
			</UlWrapper>
			<BlogNav props={props} />
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding-top: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: calc(100vh - (63px + 140px));
	padding: 30px;
	@media only screen and (max-width: 667px) {
		width: 100%;
	}
`;

const UlWrapper = styled.ul`
	list-style-type: none;
`;

export async function getServerSideProps({ params }) {
	const res = await fetch(
		`https://quiet-peak-00993.herokuapp.com/posts/${params.id}`
	);
	const posts = await res.json();
	const getArrayOfPages = await fetch(
		"https://quiet-peak-00993.herokuapp.com/posts"
	);
	const arrayOfPages = await getArrayOfPages.json();

	return { props: { posts, arrayOfPages } };
}

export default PostPage;
