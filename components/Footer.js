import React from "react";
import Link from 'next/link';
import Image from 'next/image'

import styled from "styled-components";


const Footer = () => {

  const GitHubLogo = "/GitHub_Logo.png";
  const LinkedInLogo = "/LI-In-Bug.png";
  const logo = "/random.jpg";

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
          <Logo src={LinkedInLogo} width="45%" height="5%"></Logo>
        </LinkTo>
        <Email href="mailto: leonardtati@gmail.com">leonardtati@gmail.com</Email>
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


const Email = styled.a`
text-decoration: none;
color:black;
`;

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
  color: yellow;
  padding: 2px;
  font-size: 50px;
`;
export default Footer;
