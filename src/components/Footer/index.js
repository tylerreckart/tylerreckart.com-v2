import React from "react";
import Link from "gatsby-link";
import Castle from "../Svg/castle-unified";

const currentYear = new Date().getFullYear();

export default () => (
  <div id="footer">
    {/* <Castle className="castle" fill="#6C7D8F" /> */}
    <ul className="footer-nav">
      <li>
        <Link to="/">Blog</Link>
      </li>{'|'}
      <li>
        <Link to="/work">Work</Link>
      </li>{'|'}
      <li>
        <Link to="/about">About</Link>
      </li>{'|'}
      <li>
        <a href="https://github.com/tylerreckart" target="_blank">
          Github
        </a>
      </li>{'|'}
      <li>
        <a href="https://twitter.com/tylerreckart" target="_blank">
          Twitter
        </a>
      </li>
    </ul>
    <span className="copy">
      &copy; 2013-{currentYear} Tyler Reckart. All Rights Reserved.
    </span>
  </div>
);
