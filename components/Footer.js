import React from "react";
import Link from 'next/link';
import Image from 'next/image'

import styled from "styled-components";


const Footer = () => {

    const GitHubLogo = "/GitHub_Logo.png";
    const LinkedInLogo = "/LI-In-Bug.png";
    const logo = "/random.jpg";

    /**
     * 
     *        <FooterContent>
                <LinkToPagesWrapper>
                    <Link to={"/"}>Home</Link>
                </LinkToPagesWrapper>
                <Image src={logo} width={"15%"} height={"5%"} />
                <LinksToSocial>
                    <a href="https://github.com/LeonardPoissant">
                        <Logo src={GitHubLogo} width={"65%"}></Logo>
                    </a>
                    <a href="https://www.linkedin.com/in/leonardpoissant/">
                        <Logo src={LinkedInLogo} width={"30%"}></Logo>
                    </a>
                    <div>leonardtati@gmail.com</div>
                </LinksToSocial>
            </FooterContent>
     * 


             <Link to={{ pathname: '/' }}>Home</Link>
     */
    return (
        <Wrapper>

            <LinkToPagesWrapper>
                <LinkToPages href={"/"}>Home</LinkToPages>
            </LinkToPagesWrapper>
            <Logo src={logo} width="15%" height="5%" />
            <LinksToSocial>
                <LinkTo href="https://github.com/LeonardPoissant" target="_blank">
                    <Logo src={GitHubLogo} width="65%" height="5%"></Logo>
                </LinkTo>
                <LinkTo href="https://www.linkedin.com/in/leonardpoissant/" target="_blank">
                    <Logo src={LinkedInLogo} width="65%" height="5%"></Logo>
                </LinkTo>
                <div>leonardtati@gmail.com</div>
            </LinksToSocial>



        </Wrapper>
    );
};

const Wrapper = styled.footer`
 
  
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-style: solid;
  border-width: 1px;
  padding-left:100px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 // width: 100%;
`;

/*const Image = styled.img`
  margin-top: 30px;
  padding: 10px;
`;*/

const Logo = styled.img``;

const LinkTo = styled.a`
  width: 100px;
`;

const LinksToSocial = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding-left: 15px;
`;

const LinkToPagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  margin-top: 19px;
  padding-right:15px;
`;

const LinkToPages = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 2px;
`;
export default Footer;
