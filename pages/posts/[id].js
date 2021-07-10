import Posts from "../../components/Posts";

const PostPage = (props) => {
    return (

        <Posts posts={props} />

    )
}


export async function getServerSideProps({ params }) {
    const res = await fetch(`https://quiet-peak-00993.herokuapp.com/posts/${params.id}`);
    const posts = await res.json();

    console.log('POSTS------', posts)

    const getArrayOfPages = await fetch('https://quiet-peak-00993.herokuapp.com/posts');
    const arrayOfPages = await getArrayOfPages.json();

    return { props: { posts, arrayOfPages } };
}

export default PostPage;