import TextEditor from "../components/Editor";
import ToolBar from "../components/Toolbar";
import styled from "styled-components";
import draftJsCss from "../utils/EditorUtils/EditorStyles/Editor-css";
import { useRef, useEffect } from "react";
import { useEditorContext } from "../Contexts/EditorContext";
const EditorPage = () => {
	/*const { openFsDropdown, openColorPicker, selectedIndex } = useEditorContext();
	const editor = useRef(null);

	useEffect(() => {
		console.log("in usefeects");
		editor.current && editor.current.focus();
	}, [openFsDropdown, openColorPicker, selectedIndex]);
	const getFocus = () => {
		editor.current && editor.current.focus();
	};*/
	const contentToConvert = {
		entityMap: {},
		blocks: [
			{
				text: "",
				key: "foo",
				type: "unstyled",
				entityRanges: [],
			},
		],
	};
	return (
		<Wrapper>
			<ToolBar></ToolBar>
			<TextArea>
				<TextEditor contentToConvert={contentToConvert}></TextEditor>
			</TextArea>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
`;
const TextArea = styled.div`
	height: 250px;
	overflow-y: auto;
	width: 500px;
	//overflow-wrap: anywhere ;
	hyphens: auto;
	border-style: solid;
	border-color: rgb(161, 161, 161);
	border-width: 1px;
	& {
		${draftJsCss}
	}
	@media (max-width: 736px) {
		width: 100%;
	}
	@keyframes drawing {
		0% {
			border-bottom-color: #19f6e8;
		}
		25% {
			border-right-color: #19f6e8;
			border-left-color: #19f6e8;
		}
		50% {
			border-top-color: #19f6e8;
		}
		75% {
			border-top-color: #19f6e8;
			border-right-color: #19f6e8;
		}
		80% {
			border-left-color: #19f6e8;
			border-bottom-color: #19f6e8;
		}
	}
	animation: drawing 1s linear forwards;
`;

export default EditorPage;
