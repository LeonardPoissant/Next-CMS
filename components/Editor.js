import styled from "styled-components";
import { useState, useEffect, useRef, useMemo, createRef } from "react";
import { Editor } from "draft-js";

import customStyleMap from "../utils/EditorUtils/EditorStyles/CustomStyleMap";
import editorStyles from "../styles/editorStyles";
import mobileStyles from "../styles/editorStylesMobile";
import mediaBlockRender from "../utils/EditorUtils/entities/mediaBlockRenderer";
import {
	EditorState,
	RichUtils,
	AtomicBlockUtils,
	CompositeDecorator,
	ContentState,
	convertToRaw,
	convertFromRaw,
	ContentBlock,
	DraftHandleValue,
	DraftEditorCommand,
	Modifier,
} from "draft-js";

import { useEditorContext } from "../Contexts/editor-context";

const TextEditor = (props) => {
	const {
		editorState,
		setEditorState,
		onChange,
		handleKeyCommand,
		decorator,
		openFsDropdown,
		openColorPicker,
		selectedIndex,
	} = useEditorContext();

	const editor = useRef(null);
	let readOnly = props.readOnly;

	//const [editorState, setEditorState] = useState(EditorState.createEmpty());

	/*editor.current.blocks = editor.current.blocks.map((b, i) => ({
		...b,
		key: `foo-${i}`,
	}));*/

	useEffect(() => {
		let convertedContent;
		if (props.contentToConvert) {
			convertedContent = convertFromRaw(props?.contentToConvert);
			setEditorState(
				EditorState.createWithContent(convertedContent, decorator)
			);
		}
	}, []);

	useEffect(() => {
		setTimeout(() => editor?.current && editor?.current?.focus(), 100);
	}, [openFsDropdown, openColorPicker, selectedIndex]);

	const getFocus = () => {
		//editor?.current && editor?.current?.focus();
	};
	const getBlockStyle = (block) => {
		console.log("bloc", block.getType());
		switch (block.getType()) {
			case "left":
				return "align-left";
			case "center":
				return "align-center";
			default:
				return null;
		}
	};

	return (
		<>
			<EditorWrapper
				className="EDITORWRAPPER"
				onClick={() => getFocus()}
				readOnly={readOnly}>
				<Editor
					blockRendererFn={mediaBlockRender}
					customStyleMap={customStyleMap}
					editorState={editorState}
					blockStyleFn={getBlockStyle}
					onChange={onChange}
					handleKeyCommand={handleKeyCommand}
					decorators={decorator}
					spellCheck={true}
					ref={editor}
					readOnly={readOnly}></Editor>
			</EditorWrapper>
		</>
	);
};

const EditorWrapper = styled.div`
	${(props) =>
		props.readOnly
			? {
					boxShadow:
						"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
					borderColor: "pink",
					borderWidth: "10px",
					minHeight: "fit-content",
					maxWidth: "600px",
			  }
			: ""};
	//box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	//hyphens: auto;
	//border-style: solid;
	//border-color: pink;
	//border-color: rgb(161, 161, 161);
	height: fit-content;
	//min-height: 100vh;
	//min-height: fit-content;
	//min-height: ${(props) => (props.readOnly ? "fit-content" : "100vh")};
	@media (min-width: 736px) {
		//	max-width: 600px;

		& {
			${editorStyles}
		}
	}

	@media (max-width: 736px) {
		max-height: 75%;
		margin: 5px;
		max-width: 404px;
		& {
			${mobileStyles}
		}
	}
`;

export default TextEditor;
