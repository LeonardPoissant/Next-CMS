import styled from "styled-components";
import HomeNav from "./Home-nav-icon";
import BlogIcon from "./Blog-pages-nav-icon";

const SubNav = (props) => {
    const isComponentVisible = props.isComponentVisible;
    const setIsComponentVisible = props.setIsComponentVisible;

    return (
        <Wrapper>
            <HomeNav isComponentVisible={isComponentVisible} setIsComponentVisible={setIsComponentVisible} />
            <BlogIcon isComponentVisible={isComponentVisible} setIsComponentVisible={setIsComponentVisible} />
        </Wrapper>
    )
}

export default SubNav

const Wrapper = styled.div`

position: absolute;

margin-left: 100px;
margin-top: 47px;

/*border: solid;
border-radius: 50%;
width: 50px;
height: 50px;
text-align: center;
    
    :hover{
    background-color: azure;
}*/

`





