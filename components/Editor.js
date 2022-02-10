import styled from "styled-components";
import { useState, useEffect } from "react";
import {
	Editor,
	EditorState,
	CompositeDecorator,
	convertFromRaw,
} from "draft-js";

import customStyleMap from "../EditorStyles/CustomStyleMap";
import editorStyles from "../styles/editorStyles";
import mobileStyles from "../styles/editorStylesMobile";
import {
	YOUTUBE_PREFIX,
	VIMEO_PREFIX,
	YOUTUBEMATCH_URL,
	VIMEOMATCH_URL,
} from "../utils/media-players-regex";

const RenderedPost = ({ contentToConvert }) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const convertedContent = convertFromRaw(contentToConvert);
	const link = (props) => {
		const { url } = props.contentState.getEntity(props.entityKey).getData();
		return <a href={url}>{props.children}</a>;
	};
	const findLinkEntities = (contentBlock, callback, contentState) => {
		contentBlock.findEntityRanges((character) => {
			const entityKey = character.getEntity();
			return (
				entityKey !== null &&
				contentState.getEntity(entityKey).getType() === "LINK"
			);
		}, callback);
	};
	const decorator = new CompositeDecorator([
		{
			strategy: findLinkEntities,
			component: link,
		},
	]);

	useEffect(() => {
		setEditorState(EditorState.createWithContent(convertedContent, decorator));
	}, []);

	const onChange = (editorState) => {
		setEditorState(editorState);
	};

	const getSrc = ({ src }) => {
		const isYoutube = (url) => YOUTUBEMATCH_URL.test(url);
		const isVimeo = (url) => VIMEOMATCH_URL.test(url);
		const getYoutubeSrc = (url) => {
			let id = "";
			if (!url.match(YOUTUBEMATCH_URL) === undefined) {
				return console.log("NOT YOUTUBE");
			}

			if (url.match(YOUTUBEMATCH_URL) != null) {
				id = url && url.match(YOUTUBEMATCH_URL)[1];

				return {
					srcID: id,
					srcType: "youtube",
					url,
				};
			}
		};
		const getVimeoSrc = (url) => {
			if (!url.match(VIMEOMATCH_URL)) {
				return;
			}
			const id = url.match(VIMEOMATCH_URL)[3];
			return {
				srcID: id,
				srcType: "vimeo",
				url,
			};
		};

		if (isYoutube(src)) {
			const { srcID } = getYoutubeSrc(src);

			return `${YOUTUBE_PREFIX}${srcID}`;
		}
		if (isVimeo(src)) {
			const { srcID } = getVimeoSrc(src);
			return `${VIMEO_PREFIX}${srcID}`;
		}
		return undefined;
	};

	const mediaBlockRender = (block) => {
		if (block.getType() === "atomic") {
			return {
				component: Media,
				editable: false,
			};
		}
		return null;
	};

	const Image = (props) => {
		if (!!props.src) {
			return <img src={props.src} alt={props.src} />;
		}
		return null;
	};

	const Video = (props) => {
		if (!!props.src) {
			return <iframe controls src={props.src} title={props.src} />;
		}
		return null;
	};

	const Media = (props) => {
		const entity = props.contentState.getEntity(props.block.getEntityAt(0));
		const { src } = entity.getData();
		getSrc(src);
		const type = entity.getType();

		let media;

		if (type === "image") {
			media = <Image src={src} />;
		} else if (type === "VIDEOTYPE") {
			media = <Video src={src} crossorigin="anonymous" />;
		}
		return media;
	};
	return (
		<EditorWrapper className="EDITORWRAPPER">
			<Editor
				blockRendererFn={mediaBlockRender}
				customStyleMap={customStyleMap}
				editorState={editorState}
				onChange={onChange}
				readOnly={true}></Editor>
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

export default RenderedPost;
