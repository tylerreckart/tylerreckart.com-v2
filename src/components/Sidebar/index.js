import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMailBulk, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/fontawesome-free-brands';

library.add(faHome, faMailBulk, faTwitter, faGithub, faUserAstronaut);

const Sidebar = styled.div`
  font-size: 14px;
  width: 320px;
  position: relative;

  p {
    margin: 0 0 .2em 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 0.25em;
    }
  }

  h4 {
    margin: 2em 0 .25em 0;
  }
`;

export default () => (
  <Sidebar>
    <div style={{ position: 'fixed', width: '320px' }}>
    <p>I'm <strong>Tyler Reckart</strong>; a <a href="https://github.com/tylerreckart" target="_blank">software developer</a> at <a href="https://boomtownroi.com" target="_blank">BoomTown</a> focusing on front end architecture and design.</p>

    <nav>
      <ul>
        <li><FontAwesomeIcon icon="home" /> <Link to="/">Home</Link> <PageIndicator pathname="/" /></li>
        <li><FontAwesomeIcon icon="user-astronaut" /> <Link to="/about">About</Link> <PageIndicator pathname="/about" /></li>
        <li><FontAwesomeIcon icon="mail-bulk" /> <a href="mailto:tyler@tylerreckart.com">tyler@tylerreckart.com</a></li>
        <li><FontAwesomeIcon icon={['fab', 'github']} /> <a href="https://github.com/tylerreckart" target="_blank">Github</a></li>
        <li><FontAwesomeIcon icon={['fab', 'twitter']} /> <a href="https://twitter.com/tylerreckart" target="_blank">@tylerreckart</a></li>
      </ul>
    </nav>

    <h4>Projects</h4>
    <ul>
      <li><a href="#" target="_blank">GraphQL In Motion</a>, a comprehensive video course that covers the fundementals of building, deploying, and scaling a GraphQL API.</li>
      <li><a href="#" target="_blank">Hyperzsh</a>, A hyperminimal, git-oriented zsh prompt.</li>
    </ul>

    <h4 style={{ display: 'inline-block' }}>Consulting</h4> <PageIndicator pathname="/consulting" />
    <p><Link to="/consulting">Click here</Link> to learn about my consulting services.</p>
    </div>
  </Sidebar>
);

const Indicator = styled.span`
  font-size: 12px;
  color: #ef3b7d;
`;

const PageIndicator = props => {
  if (window.location.pathname === props.pathname) {
    return (
      <Indicator>← You Are Here</Indicator>
    );
  }

  return null;
};

