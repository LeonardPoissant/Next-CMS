import styled from "styled-components";
import SideTitles from "./SideTitles";

const WorkExperienceComponent = (props) => {
	return (
		<>
			<Wrapper id="work-section">
				<CompanyAndPosition>
					<h2>{props.workExperience.company} - </h2>
					<Position>{props.workExperience.title}</Position>
				</CompanyAndPosition>
				<p>{props.workExperience.description}</p>

				{props.workExperience.links.map((link) => (
					<a href={link.href} target="_blank">
						{link.name}
					</a>
				))}
			</Wrapper>
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
