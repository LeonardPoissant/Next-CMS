import styled from "styled-components";
import { useRouter } from 'next/router'


const HomeNav = (props) => {
    const openSubNav = props.openSubNav
    const router = useRouter()

    const handleNavigation = () => {
        router.push('/');
        openSubNav();
    }

    return (


        <Wrapper onClick={() => handleNavigation()}>
            H





        </Wrapper>




    )
}

const Wrapper = styled.div`
z-index: 2;
position: absolute;
margin-top: 17px;
background-color: white;
margin-left: -25px;
padding: 12px;
border: solid;
border-radius: 50%;
width: 50px;
height: 50px;
text-align: center;
    
    :hover{
    background-color: rgb(0, 230, 230);
    cursor: pointer;
};
@media (max-width: 736px) {
    margin-top: -49px;};

`


export default HomeNav