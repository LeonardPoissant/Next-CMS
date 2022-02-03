import React from "react";
import styled from "styled-components";
import { useAppContext } from "../Contexts/LanguageContext";

const Projects = () => {
	const value = useAppContext();
	return (
		<Wrapper id="project-section">
			{value.languages.ProjectsSection.map((project, index) => (
				<ProjectWrapper id={"project-section" + index}>
					<H2>{project.name}</H2>
					<MyProjects>
						<h3>{project.title} </h3>
						<p>{project.description} </p>
						<p>{project.stackUsed} </p>
					</MyProjects>
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
const ProjectWrapper = styled.section`
	display: flex;
	flex-direction: column;
	background: linear-gradient(#b4c4c3, #3a6864);
	margin-bottom: 12.5rem;
`;
const MyProjects = styled.section`
	display: flex;
	flex-direction: column;
	max-width: 600px;
	color: black;
	padding: 10px;
	color: white;
`;

const H2 = styled.h2`
	margin-top: -45px;
	text-align: center;
	font-size: 3.75rem;
	font-family: Snell Roundhand, cursive;
`;
export default Projects;
