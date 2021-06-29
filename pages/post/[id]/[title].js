import { useState, useEffect } from "react";
import Head from 'next/head';
import {
    Editor,
    EditorState,
    CompositeDecorator,
    convertFromRaw,
} from "draft-js";
import styled from "styled-components";
import editorStyles from "../../../styles/editorStyles";
import customStylemap from "../../../EditorStyles/CustomStyleMap";
import mobileStyles from "../../../styles/editorStylesMobile"
import {
    YOUTUBE_PREFIX,
    VIMEO_PREFIX,
    YOUTUBEMATCH_URL,
    VIMEOMATCH_URL
} from "../../../utils/media-players-regex";
import { useRouter } from 'next/router';
import SocialShare from "../../../components/Social-share";
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";

export async function getStaticPaths() {

    const res = await fetch(`https://quiet-peak-00993.herokuapp.com/test`);
    const data = await res.json();

    const paths = data.data.map((post, id) => {

        return {
            params: { id: post._id.toString(), title: post.post.title },
        };
    });
    return { paths, fallback: false };


};

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://quiet-peak-00993.herokuapp.com/post/${params.id}/${params.title}`);
    const post = await res.json();
    // Pass post data to the page via props
    return { props: { post, params } };
};

const Post = (data) => {
    const router = useRouter();
    let postPath = router.asPath;

    console.log('PATH:', postPath)
    let fullUrl = "https://yearngroup.herokuapp.com" + postPath
    let encodedUrl = encodeURIComponent("https://yearngroup.herokuapp.com" + postPath)

    console.log('ENCODED:', encodedUrl)

    //----META Definitions----
    let postDescription = data.post.data.post.description;

    //----Editor state and styling----
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    let convertedContent = convertFromRaw(data.post.data.post.convertedContent);
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

    useEffect(() => {
        setEditorState(
            EditorState.createWithContent(convertedContent, decorator)
        );
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
                return console.log("NOT YOUTUBE")
            };

            if (url.match(YOUTUBEMATCH_URL) != null) {
                id = url && url.match(YOUTUBEMATCH_URL)[1];

                return {
                    srcID: id,
                    srcType: "youtube",
                    url,
                };
            };


        };
        const getVimeoSrc = (url) => {
            if (!url.match(VIMEOMATCH_URL)) {
                return
            };
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
        };
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


    return (<>
        <Head>
            <title>Sharely</title>
            <link rel="icon" href="/random.jpg" />
            <meta name="title" content="Sharely" />
            <meta name="description" content="Sharely, how sharing is meant to be" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`https://quiet-peak-00993.herokuapp.com/post/${data.params.id}/${data.params.title}`} />
            <meta property="og:title" content="Sharely" />
            <meta property="og:description" content={postDescription} />
            <meta property="og:image" content="https://pantry-meta-images.s3.ca-central-1.amazonaws.com/Screen+Shot+2021-06-21+at+5.03.44+PM.png" />
            <meta property="og:image:secure_url" content="https://pantry-meta-images.s3.ca-central-1.amazonaws.com/cropped-jacques-brel1.jpg" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`https://quiet-peak-00993.herokuapp.com/post/${data.params.id}/${data.params.title}`} />
            <meta property="twitter:title" content="Sharely" />
            <meta property="twitter:description" content={postDescription} />
            <meta property="twitter:image" content="https://pantry-meta-images.s3.ca-central-1.amazonaws.com/Screen+Shot+2021-06-21+at+5.03.44+PM.png" ></meta>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" type="text/javascript"></script>

        </Head>

        <Wrapper tabIndex="3">
            <EditorWrapper className="EDITORWRAPPER" >
                <Editor
                    blockRendererFn={mediaBlockRender}
                    customStyleMap={customStylemap}
                    editorState={editorState}
                    onChange={onChange}
                    readOnly={true}
                ></Editor>
            </EditorWrapper>

            <SocialShare props={fullUrl} />
            <a href={`https://twitter.com/intent/tweet?text=${encodedUrl}`}
                className="twitter-share-button"
                data-show-count="false"
                target="_blank"
                rel="noopener"
            >
                Tweet
            </a>




        </Wrapper>


    </>)
};
const Wrapper = styled.div`
min-height:100vh;
 display: flex;
 flex-direction: column;
	justify-content: center;
	align-items: center;
    @media (max-width: 736px) {
  padding-top:100px;
  }
`;


const EditorWrapper = styled.div`
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
hyphens:auto;
  border-style: solid;
  border-color: rgb(161, 161, 161);
  border-width: 1px;
  min-width: 600px;
  min-height: fit-content;
  @media (min-width: 736px){
    &  {
    ${editorStyles}
  }
  }
 
  @media (max-width: 736px) {
    width: 100%;
    height: 75%;
    margin: 5px;
    & {
        ${mobileStyles}
    }
  }
`;

export default Post