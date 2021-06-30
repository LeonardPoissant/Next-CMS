import styled from "styled-components";
import SubNav from "./SubNav";
import { useEffect } from "react";
import useComponentVisible from "../hooks/useComponentVisible";

const NavBar = () => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    const openSubNav = () => {
        setIsComponentVisible(!isComponentVisible)
    }

    useEffect(() => {
        if (isComponentVisible) {
            setTimeout(() => setIsComponentVisible(!isComponentVisible), 5 * 1000)
        }
    }, [isComponentVisible])




    return (
        <>
            <Nav ref={ref} tabIndex="1">
                <Button onClick={() => openSubNav()}>NAV</Button>
                {isComponentVisible && <SubNav setIsComponentVisible={setIsComponentVisible} isComponentVisible={isComponentVisible} />}
            </Nav>

        </>
    )


}

const Nav = styled.nav`
z-index:2;
position: fixed;
padding: 16px;
display: flex;
    align-items: center;
width: 100%;
    height: 63px;
    


    @media (max-width: 736px) {
        margin-left: 6px;
    background-color: white;
        width: 97%;}
    

`

const Button = styled.button`
border-radius: 50%;
 width: 50px;
    height: 50px;
    text-align: center;
    background: none;
	color: inherit;
	border: solid;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    :hover{
        background-color: salmon;
    }

`;




export default NavBar