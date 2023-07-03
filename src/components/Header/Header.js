import Link from 'next/link';
import React from 'react';
import { FaGithub, FaDiscord, FaLinkedin, FaTwitch, FaFacebook} from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>AshiqTasdid</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/">
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="/aboutme">
          <NavLink>About</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="/contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/ashiqtasdid">
          <FaGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ashiqtasdid/">
          <FaLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://discord.gg/kzSqqyM4Fg">
          <FaDiscord size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://twitch.tv/ashiqscarx">
          <FaTwitch size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://facebook.com/ashiq.tasdid.1">
          <FaFacebook size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
