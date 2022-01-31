import React from "react";
import styled from "styled-components";

const SideTitles = (props) => {
	const backToTop = () => {
		const element = document.getElementById(props.id);
		element.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<WorkExperience onClick={() => backToTop()}>{props.title}</WorkExperience>
	);
};

const WorkExperience = styled.a`
	position: sticky;
	isolation: isolate;
	z-index: 1;
	top: 100px;
	height: 2px;
	padding: 10px;
	text-decoration: none;
	color: inherit;
	z-index: 0;
	font-size: 1.625rem;
	margin-right: 6.25rem;
	&:hover {
		cursor: pointer;
	}
`;

export default SideTitles;
