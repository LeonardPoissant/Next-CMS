import styled from "styled-components";
import Posts from "../../components/posts";
import BlogNav from "../../components/blog-pages-nav";
import BlogDrawer from "../../components/Drawers/blog-drawer";
import { ModalContext } from "../../Contexts/modal-context";

const PostsPage = (props) => {
	return (
		<ModalContext>
			<MainWrapper>
				<BlogDrawer />

				<Wrapper>
					{props ? (
						<>
							<UlWrapper>
								<Posts posts={props.posts.data} />
							</UlWrapper>
							<BlogNav arrayOfPages={props.arrayOfPages.data} />
						</>
					) : (
						<div>Seems like I'm out of juice</div>
					)}
				</Wrapper>
			</MainWrapper>
		</ModalContext>
	);
};

const MainWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - (63px + 140px));
`;
const Wrapper = styled.section`
	padding-top: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	padding: 30px;
	@media only screen and (max-width: 667px) {
		width: 50%;
	}
`;

const UlWrapper = styled.ul`
	list-style-type: none;
`;

export async function getServerSideProps({ params }) {
	const api_url =
		process.env.DEVELOPMENT_API_URL || process.env.PRODUCTION_API_URL;
	let posts;
	let arrayOfPages;
	const res = await fetch(`${api_url}/posts/${params.id}`);

	if (res !== 503) {
		posts = await res.json();
	} else {
		posts = null;
	}

	const getArrayOfPages = await fetch(`${api_url}/posts`);

	if (getArrayOfPages !== 503) {
		arrayOfPages = await getArrayOfPages.json();
	} else {
		arrayOfPages = null;
	}

	return { props: { posts, arrayOfPages } };
}

export default PostsPage;
