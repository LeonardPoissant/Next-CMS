import styled from "styled-components";

const BlogNav = (props) => {

    let arrayOfPages = props.props.data;

    console.log('PAGES', arrayOfPages)



    return (
        <Wrapper>

            {arrayOfPages.map((page, index) => (
                <div key={index}>{index + 1}</div>
            )
            )}
        </Wrapper>

    )
}

export default BlogNav;

const Wrapper = styled.div``;