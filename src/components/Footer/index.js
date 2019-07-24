import React from 'react';
import EagleOutline from '../Svg/eagle-outline';

const currentYear = new Date().getFullYear();

export default () => (
  <div id="footer">
    <div className="footer__grid">
      <div className="cell">
        {/* <input className="footer__search-bar" type="text" placeholder="Search the archive" /> */}
        <h3>About</h3>
        <p>Tyler Reckart is a software developer, designer, consultant, and horologist currently building the future of online real estate platforms at <a href="https://boomtownroi.com" target="_blank">BoomTown</a>.</p>
      </div>
      <div className="cell">
        <h3>Projects</h3>
        <p><a href="https://www.manning.com/livevideo/graphql-in-motion" target="_blank">GraphQL in Motion</a><br /> A comprehensive video course with over two and a half hours of content and more than 30 exercises that covers the fundementals of building, deploying, and scaling a GraphQL API.</p>
        <p><a href="https://github.com/tylerreckart/hyperzsh" target="_blank">Hyperzsh</a><br /> A ZSH shell prompt designed for git-focused workflows.</p>
      </div>
    </div>
    <span className="copy">&copy; 2013-{currentYear} Tyler Reckart. All Rights Reserved.</span>
  </div>
);
