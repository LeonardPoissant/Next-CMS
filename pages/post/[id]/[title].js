import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
import SocialShare from "../../../components/Social-share";
import BreadCrumbs from "../../../components/Bread-crumb";
import RenderedPost from "../../../components/Editor";

export async function getServerSideProps(context) {
	const params = context.params;
	const id = context.params.id;
	const title = context.params.title;
	const previousPage = context?.req?.headers?.referer || null;

	const res = await fetch(
		`https://quiet-peak-00993.herokuapp.com/post/${id}/${title}`
	);

	const post = await res.json();

	return { props: { post, params, previousPage } };
}

const Post = (data) => {
	const router = useRouter();
	const postPath = router.asPath;
	const fullUrl = "https://yearngroup.herokuapp.com" + postPath;
	const encodedUrl = encodeURIComponent(
		"https://yearngroup.herokuapp.com" + postPath
	);
	const url = decodeURI(postPath);
	const title = data.params.title;
	const previousPage = data.previousPage;
	const contentToConvert = data.post.data.post.convertedContent;

	//----META Definitions----
	const postDescription = data.post.data.post.description;

	return (
		<>
			<Head>
				<title>Sharely</title>
				<link rel="icon" href="/random.jpg" />
				<meta name="title" content="Sharely" />
				<meta
					name="description"
					content="Sharely, how sharing is meant to be"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content={`https://quiet-peak-00993.herokuapp.com/post/${data.params.id}/${data.params.title}`}
				/>
				<meta property="og:title" content="Sharely" />
				<meta property="og:description" content={postDescription} />
				<meta
					property="og:image"
					content="https://pantry-meta-images.s3.ca-central-1.amazonaws.com/Screen+Shot+2021-06-21+at+5.03.44+PM.png"
				/>
				<meta
					property="og:image:secure_url"
					content="https://pantry-meta-images.s3.ca-central-1.amazonaws.com/cropped-jacques-brel1.jpg"
				/>
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content={`https://quiet-peak-00993.herokuapp.com/post/${data.params.id}/${data.params.title}`}
				/>
				<meta property="twitter:title" content="Sharely" />
				<meta property="twitter:description" content={postDescription} />
				<meta
					property="twitter:image"
					content="https://pantry-meta-images.s3.ca-central-1.amazonaws.com/Screen+Shot+2021-06-21+at+5.03.44+PM.png"></meta>
				<script
					async
					src="https://platform.twitter.com/widgets.js"
					charSet="utf-8"
					type="text/javascript"></script>
			</Head>

			<Wrapper>
				<BreadCrumbs title={title} previousPage={previousPage} />
				<RenderedPost contentToConvert={contentToConvert}></RenderedPost>
			</Wrapper>
			<SocialShare encodedUrl={url} />
		</>
	);
};

const Wrapper = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 100px;
	@media (max-width: 736px) {
		//width:fit-content;
	}
`;

export default Post;
