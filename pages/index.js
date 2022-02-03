import Head from "next/head";
import styled from "styled-components";
import WorkExperienceComponent from "../components/WorkExperience";

import SideTitles from "../components/SideTitles";
import Projects from "../components/Projects";
import { useAppContext } from "../Contexts/LanguageContext";

export default function Home({ metaTags }) {
	const value = useAppContext();
	const description = metaTags.data[0].description;

	return (
		<>
			<Head>
				<title>Leonard Poissant</title>
				<link rel="icon" href="/random.jpg" />
				<meta name="title" content="Sharely" />
				<meta
					name="description"
					content="Sharely, how sharing is meant to be"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://yearngroup.herokuapp.com/" />
				<meta property="og:title" content="Sharely" />
				<meta property="og:description" content={description} />
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
					content="https://yearngroup.herokuapp.com/"
				/>
				<meta property="twitter:title" content="Sharely" />
				<meta property="twitter:description" content={description} />
				<meta
					property="twitter:image"
					content="https://pantry-meta-images.s3.ca-central-1.amazonaws.com/Screen+Shot+2021-06-21+at+5.03.44+PM.png"></meta>
			</Head>

			<Wrapper>
				<SectionWrapper>
					<SideTitles
						title={value.languages.ExperienceTitle}
						id="work-section"
					/>
					<WorkExperiencesWrapper>
						<WorkExperienceComponent></WorkExperienceComponent>
					</WorkExperiencesWrapper>
				</SectionWrapper>
				<SectionWrapper>
					<SideTitles title={value.languages.Projects} id="project-section" />
					<Projects></Projects>
				</SectionWrapper>
			</Wrapper>
		</>
	);
}

export async function getStaticProps() {
	// Call an external API endpoint to get posts
	const res = await fetch("https://quiet-peak-00993.herokuapp.com/meta");
	const metaTags = await res.json();
	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			metaTags,
		},
	};
}

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const SectionWrapper = styled.section`
	display: flex;
	margin-top: 12.5rem;
	margin-right: 18.25rem;
	justify-content: center;
	width: 100%;
`;
const WorkExperiencesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background: linear-gradient(#b4c4c3, #3a6864);
	padding-bottom: 20px;
`;
