import styled from "styled-components";
import BlogPostBanner from "./Blog-post-banner";

const Posts = ({ posts }) => {
	return (
		<>
			{posts[0] != undefined ? (
				posts.map((post, index) => (
					<BlogPostBanner
						key={index}
						id={post._id}
						title={post.post?.title}
						description={post.post?.description}
						category={post.post?.category}
						date={post.date}
					/>
				))
			) : (
				<div>Looks like something went wrong</div>
			)}
		</>
	);
};

export default Posts;

const Wrapper = styled.li`
	padding-top: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: 60vh;
	padding: 30px;
	@media only screen and (max-width: 667px) {
		width: 100%;
	}
`;
