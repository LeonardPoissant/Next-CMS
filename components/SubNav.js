




import styled from "styled-components"
import Link from 'next/link'
import HomeNav from "./Home-nav-icon"
import BlogIcon from "./Blog-pages-nav-icon"

const SubNav = (props) => {
    const isOpen = props.isOpen
    const openSubNav = props.openSubNav



    return (
        <>
            {isOpen ? <Wrapper>

                <HomeNav openSubNav={openSubNav} />
                <BlogIcon openSubNav={openSubNav} />



            </Wrapper> : <></>}

        </>
    )
}

export default SubNav

const Wrapper = styled.div`
z-index: 3;
position: absolute;

margin-left: 100px;

/*border: solid;
border-radius: 50%;
width: 50px;
height: 50px;
text-align: center;
    
    :hover{
    background-color: azure;
}*/

`





