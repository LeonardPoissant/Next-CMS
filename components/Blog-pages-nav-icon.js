import styled from "styled-components";
import { useRouter } from 'next/router'



const BlogIcon = (props) => {
    const openSubNav = props.openSubNav;
    const router = useRouter()

    const handleNavigation = () => {
        router.push('/posts/1');
        openSubNav();
    }

    return (<Wrapper onClick={() => handleNavigation()}>

        P

    </Wrapper>)
}

const Wrapper = styled.div`
position: absolute;
z-index: 2;
background-color: white;
margin-top: -49px;
margin-left: 25px;
padding: 12px;
border: solid;
border-radius: 50%;
width: 50px;
height: 50px;
text-align: center;
    
    :hover{
    cursor: pointer;
    background-color: rgb(0, 128, 255);
};

@media (max-width: 736px) {
    margin-left: 56px;};
`



export default BlogIcon