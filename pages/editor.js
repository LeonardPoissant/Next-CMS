import TextEditor from "../components/Editor";
import ToolBar from "../components/Toolbar";
import styled from "styled-components";
import draftJsCss from "../utils/EditorUtils/EditorStyles/Editor-css";
import EditorDrawer from "../components/Editor-drawer";
import { ModalContext } from "../Contexts/ModalContext";
import { useEditorContext } from "../Contexts/EditorContext";

const EditorPage = () => {
	const {
		title,
		setTitle,
		category,
		setCategory,
		description,
		setDescription,
		keywords,
		setKeywords,
		postArticle,
	} = useEditorContext();
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
		<ModalContext>
			<MainWrapper>
				<Wrapper>
					<ToolBar></ToolBar>
					<TextArea>
						<TextEditor
							contentToConvert={contentToConvert}
							readOnly={false}></TextEditor>
					</TextArea>
				</Wrapper>
				<EditorDrawer
					props={{
						title,
						setTitle,
						category,
						setCategory,
						description,
						setDescription,
						keywords,
						setKeywords,
						postArticle,
					}}
				/>
			</MainWrapper>
		</ModalContext>
	);
};

const MainWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - (63px + 140px));
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 500px;
`;
const TextArea = styled.div`
	overflow-y: auto;
	width: 1000px;
	hyphens: auto;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	hyphens: auto;
	border-style: solid;
	border-color: rgb(161, 161, 161);
	border-width: 1px;

	padding-bottom: 5px;

	height: calc(100vh - (63px + 140px));
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
