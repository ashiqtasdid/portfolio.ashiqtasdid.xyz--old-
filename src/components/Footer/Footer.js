import React from 'react';
import { FaGithub, FaDiscord, FaLinkedin, FaTwitch, FaFacebook } from 'react-icons/fa';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+8801311807380">+880-1311-807380</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@ashiqtasdid.tk">
            contact@ashiqtasdid.tk
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Developing That Matters</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/ashiqtasdid">
            <FaGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/ashiqtasdid/">
            <FaLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://discord.gg/kzSqqyM4Fg">
            <FaDiscord size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitch.tv/ashiqscarx">
            <FaTwitch size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://facebook.com/ashiq.tasdid.1">
            <FaFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
