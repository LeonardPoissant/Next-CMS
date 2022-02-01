import { useContext } from "react";
import { useAppContext } from "../Contexts/LanguageContext";
import styled from "styled-components";
import SideTitles from "./SideTitles";

const WorkExperienceComponent = (props) => {
	const value = useAppContext();
	return (
		<>
			{value.languages.workExperience.map((workDescription, index) => (
				<Wrapper id={"work-section" + index} key={"work-section" + index}>
					<CompanyAndPosition>
						<h2>{workDescription.company} - </h2>
						<Position>{workDescription.title}</Position>
					</CompanyAndPosition>
					<p>{workDescription.description}</p>
					{workDescription.description1 && (
						<p>{workDescription.description1}</p>
					)}
					{workDescription.description2 && (
						<p>{workDescription.description2}</p>
					)}
					{workDescription?.description3 && (
						<p>{workDescription?.description3}</p>
					)}
					{workDescription?.description4 && (
						<p>{workDescription?.description4}</p>
					)}
					{workDescription?.description5 && (
						<p>{workDescription?.description5}</p>
					)}
					{workDescription?.description6 && (
						<p>{workDescription?.description6}</p>
					)}

					{workDescription.links.map((link) => (
						<a href={link.href} target="_blank">
							{link.name}
						</a>
					))}
				</Wrapper>
			))}
		</>
	);
};

export default WorkExperienceComponent;

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: 600px;
	max-width: 600px;
	color: white;
	padding: 10px;
`;

const CompanyAndPosition = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
`;

const Position = styled.p`
	margin: 0px;
`;
