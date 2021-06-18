import styled from "styled-components"
import SubNav from "./SubNav"
import { useState } from "react"



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openSubNav = () => {
        setIsOpen(!isOpen)

    }


    return (
        <Nav>
            <Button onClick={() => openSubNav()}>NAV</Button>
            <SubNav isOpen={isOpen} openSubNav={openSubNav} />


        </Nav>
    )


}

const Nav = styled.nav`
z-index:9;
position: fixed;
padding: 16px;
width:193px;
height:136px;


  

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