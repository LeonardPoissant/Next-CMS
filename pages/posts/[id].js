import Posts from "../../components/Posts"
import BlogNav from "../../components/Blog-pages-nav"

const PostPage = (props) => {

    return (
        <>
            <Posts posts={props.posts} />

            <BlogNav props={props.arrayOfPages} />
        </>)
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://quiet-peak-00993.herokuapp.com/posts')
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.data.map((post, id) => {

        //start our paths at page 1 not 0;
        id = id + 1;
        return {
            params: { id: id.toString() },


        }
    })
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://quiet-peak-00993.herokuapp.com/posts/${params.id}`);
    const posts = await res.json();

    console.log("POSTS AAWIT", posts)

    const getArrayOfPages = await fetch('https://quiet-peak-00993.herokuapp.com/posts')
    const arrayOfPages = await getArrayOfPages.json()


    // Pass post data to the page via props
    return { props: { posts, arrayOfPages } }
}

export default PostPage;