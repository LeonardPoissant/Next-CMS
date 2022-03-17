import Head from "next/head";
import styled from "styled-components";
import WorkExperienceComponent from "../components/work-experience";

import SideTitles from "../components/side-ancor";
import Projects from "../components/projects";
import { useLanguageContext } from "../Contexts/language-context";

export default function Home() {
	const value = useLanguageContext();

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
				<meta
					property="og:description"
					content="Sharely, how sharing is meant to be"
				/>
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
				<meta
					property="twitter:description"
					content="Sharely, how sharing is meant to be"
				/>
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
					<MobileTitle>{value.languages.ExperienceTitle}</MobileTitle>
					<WorkExperiencesWrapper>
						<WorkExperienceComponent></WorkExperienceComponent>
					</WorkExperiencesWrapper>
				</SectionWrapper>
				<SectionWrapper>
					<SideTitles title={value.languages.Projects} id="project-section" />
					<MobileTitle>{value.languages.Projects}</MobileTitle>
					<Projects />
				</SectionWrapper>
			</Wrapper>
		</>
	);
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
	@media (max-width: 900px) {
		margin-right: 0;
		margin-top: 6.125rem;
		flex-direction: column;
	}
`;
const WorkExperiencesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background: linear-gradient(#b4c4c3, #3a6864);
	padding-bottom: 20px;
	@media (max-width: 900px) {
		width: 100%;
	}
`;

const MobileTitle = styled.h2`
	display: none;
	text-align: center;
	@media (max-width: 900px) {
		width: 100%;
		display: inline;
		padding-bottom: 40px;
		margin-top: -20px;
	}
`;
