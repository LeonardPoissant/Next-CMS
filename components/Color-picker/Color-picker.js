// @ts-nocheck
import React, { useState } from "react";
import { primaries } from "../../utils/EditorUtils/EditorStyles/Inline-styles/Color-palette";
import styled from "styled-components";
import SecondaryPicker from "./Color-picker-choices";
import { useEditorContext } from "../../Contexts/EditorContext";
import Animation from "./Animation";

const ColorPicker = (props) => {
	const { selectedIndex, handleChoosePrimaryColor } = useEditorContext();
	const [isVisible, setIsVisible] = useState(false);
	const onToggle = props.onToggle;

	return (
		<Wrapper>
			<PrimaryColorsWrapper>
				{primaries.map((c, i) => (
					<ColorWrapper key={i}>
						<Circle
							key={i}
							style={{ backgroundColor: c.shade }}
							onClick={() => handleChoosePrimaryColor(i, setIsVisible(true))}>
							{" "}
						</Circle>
					</ColorWrapper>
				))}
			</PrimaryColorsWrapper>
			<Animation color={primaries[selectedIndex].id} isVisible={isVisible} />
			<SecondaryPicker
				onToggle={onToggle}
				secondaryKey={primaries[selectedIndex].id}
				isVisible={isVisible}
			/>
		</Wrapper>
	);
};

export default ColorPicker;

const Wrapper = styled.div`
	display: flex;
	width: 500px;

	position: absolute;
	justify-content: space-around;
	margin-left: -484px;

	margin-top: 47px;
`;

const PrimaryColorsWrapper = styled.div`
	display: flex;
	position: absolute;
	margin-left: -300px;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 104px;
	margin-top: -10px;
`;

const Circle = styled.div`
	border-radius: 60%;
	width: 15px;
	height: 15px;
	border: solid;
	border-width: 1px;
	cursor: pointer;
`;

const ColorWrapper = styled.div`
	padding: 2px;
`;
