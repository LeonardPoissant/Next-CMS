import styled from "styled-components";
import { useRouter } from 'next/router'



const BlogIcon = (props) => {
    const isComponentVisible = props.isComponentVisible
    const setIsComponentVisible = props.setIsComponentVisible
    const router = useRouter()

    const handleNavigation = () => {
        setIsComponentVisible(!isComponentVisible)
        router.push('/posts/1');

    }

    return (<Wrapper onClick={() => handleNavigation()}>

        P

    </Wrapper>)
}

const Wrapper = styled.div`
position: absolute;

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
    :active{
        background-color: rgb(0, 128, 255);
 }
};

@media (max-width: 736px) {
    margin-left: 56px;};
`



export default BlogIcon