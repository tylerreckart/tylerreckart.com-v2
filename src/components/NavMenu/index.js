import React from 'react';
import Link from 'gatsby-link';

export default () => (
  <div id="nav-menu">
    <div className="separator">***</div>
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
      <li><a href="https://www.manning.com/livevideo/graphql-in-motion" target="_blank">GraphQL In Motion</a>: A comprehensive video course that covers the fundementals of building, deploying, and scaling a GraphQL API.</li>
      <li><a href="https://github.com/tylerreckart/hyperzsh" target="_blank">Hyperzsh</a>: A z shell theme designed to complement a git-focused workflow.</li>
    </ul>
  </div>
);

const PageIndicator = props => {
  let location;
  if (typeof window !== 'undefined') {
    location = window.location.pathname.split('/');

    if (location[1] === props.pathname) {
      return (
        <span className="page-indicator">← You Are Here</span>
      );
    }
  }

  return null;
};
