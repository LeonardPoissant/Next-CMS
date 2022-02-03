import react, { useEffect, useState } from "react";
import styled from "styled-components";

const TranslateIcon = (props) => {
	const handleLanguage = props.handleLanguage;
	const languageSelected = props.languageSelected;
	const [currentLanguage, setCurrentLanguage] = useState("");
	useEffect(() => {
		languageSelected === "EN"
			? setCurrentLanguage("FR")
			: setCurrentLanguage("EN");
	}, [languageSelected]);

	return (
		<TranslateButton onClick={() => handleLanguage()}>
			{currentLanguage}
		</TranslateButton>
	);
};

const TranslateButton = styled.button`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	text-decoration: underline;
`;
export default TranslateIcon;
