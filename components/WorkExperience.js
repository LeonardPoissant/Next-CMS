import { useAppContext } from "../Contexts/LanguageContext";
import styled from "styled-components";

const WorkExperienceComponent = (props) => {
	const value = useAppContext();
	return (
		<>
			<section>
				{value.languages.workExperience.map((workDescription, index) => (
					<Wrapper id={"work-section"} key={"work-section" + index}>
						<CompanyAndPosition>
							<H2>{workDescription.company}</H2>
							<Position>{workDescription.title}</Position>
						</CompanyAndPosition>
						<ul>
							<li>{workDescription.description}</li>
							{workDescription.description1 && (
								<li>{workDescription.description1}</li>
							)}
							{workDescription.description2 && (
								<li>{workDescription.description2}</li>
							)}
							{workDescription?.description3 && (
								<li>{workDescription?.description3}</li>
							)}
							{workDescription?.description4 && (
								<li>{workDescription?.description4}</li>
							)}
							{workDescription?.description5 && (
								<li>{workDescription?.description5}</li>
							)}
							{workDescription?.description6 && (
								<li>{workDescription?.description6}</li>
							)}
						</ul>

						{workDescription.links &&
							workDescription.links.map((link) => (
								<WorkLink href={link.href} target="_blank">
									{link.alt === "LostiNXBemoved" ? (
										<ReducedImg src={link.src}></ReducedImg>
									) : (
										<Img src={link.src} loading="lazy" alt={link.alt}></Img>
									)}

									{link.name}
								</WorkLink>
							))}
						<div
							className={
								index !== 4 ? "separator-wrapper" : "separator-wrapper-none"
							}>
							<div className={index !== 4 ? "separator" : "separator-none"} />
						</div>
					</Wrapper>
				))}
			</section>
		</>
	);
};

export default WorkExperienceComponent;

const Img = styled.img`
	width: 100%;
`;

const ReducedImg = styled.img`
	width: 72%;
`;
const WorkLink = styled.a`
	text-decoration: none;
	text-align: center;
	color: inherit;
	margin-bottom: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
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

const H2 = styled.h2`
	margin-bottom: 0px;
`;
