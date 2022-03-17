import React from "react";
import styled from "styled-components";
import { useLanguageContext } from "../Contexts/language-context";

const Projects = () => {
	const value = useLanguageContext();
	return (
		<Wrapper id="project-section">
			{value.languages.ProjectsSection.map((project, index) => (
				<ProjectWrapper id={"project-section" + index}>
					{project.name ? (
						<H2>{project.name}</H2>
					) : (
						<ImgWrapper>
							<FlowerLogo src="/Drawing.svg" alt="flower" />
						</ImgWrapper>
					)}

					<MyProjects>
						<h3>{project.title}</h3>
						<p>{project.description} </p>
						<p>{project.stackUsed} </p>
					</MyProjects>

					{project.links &&
						project.links.map((link) => (
							<LinksWrapper>
								<div>{link.name} :&nbsp;</div>
								<a href={link.href}>{link.href}</a>
							</LinksWrapper>
						))}
				</ProjectWrapper>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;

	margin-bottom: 12.5rem;
	@media (max-width: 900px) {
		margin-bottom: 0;
	}
`;

const ImgWrapper = styled.div`
	position: relative;
	margin-bottom: 45px;
`;

const FlowerLogo = styled.img`
	width: 12%;
	position: absolute;
	top: -67px;
`;

const ProjectWrapper = styled.section`
	display: flex;
	flex-direction: column;
	background-color: #9eb7c1;
	margin-bottom: 12.5rem;
	padding: 10px 10px 20px;
`;
const MyProjects = styled.section`
	display: flex;
	flex-direction: column;
	max-width: 600px;
	color: black;
	color: white;
`;

const H2 = styled.h2`
	margin-top: -45px;
	text-align: center;
	font-size: 3.75rem;
	font-family: Snell Roundhand, cursive;
`;

const LinksWrapper = styled.div`
	display: flex;
`;

export default Projects;
