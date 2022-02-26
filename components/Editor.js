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

import { useEditorContext } from "../Contexts/EditorContext";

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

	return (
		<EditorWrapper className="EDITORWRAPPER" onClick={() => getFocus()}>
			<Editor
				blockRendererFn={mediaBlockRender}
				customStyleMap={customStyleMap}
				editorState={editorState}
				onChange={onChange}
				handleKeyCommand={handleKeyCommand}
				decorators={decorator}
				spellCheck={true}
				ref={editor}
				readOnly={props.readOnly}></Editor>
		</EditorWrapper>
	);
};

const EditorWrapper = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	hyphens: auto;
	border-style: solid;
	border-color: rgb(161, 161, 161);
	border-width: 1px;
	height: max-content;
	min-height: fit-content;
	@media (min-width: 736px) {
		max-width: 600px;

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
