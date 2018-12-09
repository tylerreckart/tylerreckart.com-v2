import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Footer from '../Footer';

const Sidebar = styled.div`
  font-size: 14px;
  max-width: 700px !important;

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

  .intro {
    margin: 0 0 2em 0;
  }

  .hr {
    display: none;
    text-align: center;
    margin-bottom: 2em;
  }

  .hr {
    display: block;
  }
`;

export default () => (
  <Sidebar className="sidebar">
    <div className="hr">***</div>
    <div className="intro">
      <p>I'm <strong>Tyler Reckart</strong>; a <a href="https://github.com/tylerreckart" target="_blank">software developer</a>, <a href="https://dribbble.com/tylerreckart" target="_blank">occasional designer</a>, and watch geek.</p>
    </div>

    <nav>
      <ul>
        <li>🏠 <Link to="/">Home</Link> <PageIndicator pathname="" /></li>
        <li>📖 <Link to="/about">About</Link> <PageIndicator pathname="about" /></li>
        <li>👨‍💻 <a href="https://github.com/tylerreckart" target="_blank">Github</a></li>
        <li>🐣 <a href="https://twitter.com/tylerreckart" target="_blank">@tylerreckart</a></li>
      </ul>
    </nav>

    <h4>Projects</h4>
    <ul>
      <li><a href="https://www.manning.com/livevideo/graphql-in-motion" target="_blank">GraphQL In Motion</a>, a comprehensive video course that covers the fundementals of building, deploying, and scaling a GraphQL API.</li>
      <li><a href="https://github.com/tylerreckart/hyperzsh" target="_blank">Hyperzsh</a>, a z shell theme designed to complement a git-focused workflow.</li>
    </ul>

    <Footer />
  </Sidebar>
);

const Indicator = styled.span`
  font-size: 12px;
  color: #ef3b7d;
`;

const PageIndicator = props => {
  let location;
  if (typeof window !== 'undefined') {
    location = window.location.pathname.split('/');

    if (location[1] === props.pathname) {
      return (
        <Indicator>← You Are Here</Indicator>
      );
    }
  }

  return null;
};
