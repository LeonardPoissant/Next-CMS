import styled from "styled-components";

const BlogNav = (props) => {
    console.log('IN BLOG NAV', props)
    let arrayOfPages = props.props.data;

    console.log(arrayOfPages)

    return (
        <Wrapper>

            {arrayOfPages.map((page, index) => (
                <div>{index + 1}</div>
            )
            )}
        </Wrapper>

    )
}

export default BlogNav;

const Wrapper = styled.div``;