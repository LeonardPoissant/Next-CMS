import styled from "styled-components";

const BlogNav = (props) => {

    let arrayOfPages = props.props.data;



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