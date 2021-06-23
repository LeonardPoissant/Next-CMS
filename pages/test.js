import Head from 'next/head'
import { useState, useEffect } from "react"
import {
    Editor, EditorState,
    RichUtils,
    AtomicBlockUtils,
    CompositeDecorator,
    ContentState,
    convertToRaw,
    convertFromRaw,
    ContentBlock,
    DraftHandleValue,
    DraftEditorCommand,
} from "draft-js";

import editorStyles from "../styles/editorStyles";
import styled from "styled-components";
import customStylemap from "../EditorStyles/CustomStyleMap"

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:5000/post/608970b75a6b8f3e9f16dcb7/qwerty`)
    const data = await res.json()


    if (!data) {
        return {
            notFound: true,
        }
    }
    /*category: "random"
    date: "13/2/2021"sdfsdf
    description: "sffff"
    title: "test22FFFFF"xcvxcvxcv
    _id: "602836e83431205183e04a74"*/


    return {
        props: { data }, // will be passed to the page component as props
    }
}
const Test = (data) => {

    let convertedContent = convertFromRaw(data.data.data.post.convertedContent)

    const link = (props) => {
        const { url } = props.contentState.getEntity(props.entityKey).getData();
        return <a href={url}>{props.children}</a>;
    };
    const findLinkEntities = (
        contentBlock,
        callback,
        contentState
    ) => {
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
    const [editorState, setEditorState] = useState(EditorState.createEmpty());



    useEffect(() => {
        // console.log(convertedContent);
        setEditorState(
            EditorState.createWithContent(convertedContent, decorator)
        );



    }, [])

    const onChange = (editorState) => {
        setEditorState(editorState);
    }

    const YOUTUBE_PREFIX = "https://www.youtube.com/embed/";
    const VIMEO_PREFIX = "https://player.vimeo.com/video/";
    const YOUTUBEMATCH_URL = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    const VIMEOMATCH_URL = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;

    const getSrc = ({ src }) => {
        const isYoutube = (url) => YOUTUBEMATCH_URL.test(url);
        const isVimeo = (url) => VIMEOMATCH_URL.test(url);
        const getYoutubeSrc = (url) => {
            let id = "";
            if (!url.match(YOUTUBEMATCH_URL) === undefined) {
                return console.log("NOT YOUTUBE")
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
                return
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
        };
        if (isVimeo(src)) {
            const { srcID } = getVimeoSrc(src);
            return `${VIMEO_PREFIX}${srcID}`;
        };
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
        <div>
            <Head>
                <div>sdfsdf</div>
            </Head>
            <Wrapper className="IM HERE">

                <EditorWrapper className="EDITORWRAPPER" >
                    <Editor
                        blockRendererFn={mediaBlockRender}
                        customStyleMap={customStylemap}
                        editorState={editorState}
                        onChange={onChange}
                        readOnly={true}
                    ></Editor>
                </EditorWrapper>


            </Wrapper>
        </div>
    )
}


const Wrapper = styled.div`
min-height:100vh;
 display: flex;
	justify-content: center;
	align-items: center;
`;


const EditorWrapper = styled.div`

 
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
hyphens:auto;
  border-style: solid;
  border-color: rgb(161, 161, 161);
  border-width: 1px;
  & {
    ${editorStyles}
  }
  @media (max-width: 736px) {
    width: 100%;
    height: 75%;
  }
`;

export default Test