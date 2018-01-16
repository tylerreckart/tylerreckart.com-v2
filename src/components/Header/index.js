import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Header = styled.header`
  background: #222232;
  margin: 0 0 2em 0;
  padding: 1em;

  @media (max-width: 700px) {
    padding: 1em;
  }

  div {
    color: #ffffff;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.01em;
    line-height: 1.75em;
    margin: 0 auto;
    max-width: 700px;

    a {
      color: #ABCDFD;
      text-decoration: none;

      &:hover {
        border-bottom: 1px dotted #ABCDFD;
      }
    }

    p {
      margin: 0 0 1em 0;
      max-width: 325px;
    }

    strong {
      font-weight: 600;
    }

    nav, p {
      padding: 0 1em;

      @media (max-width: 700px) {
        padding: 0;
      }
    }
  }
`;

const Navigation = styled.ul`
  margin: 0;
  overflow: auto;
  padding: 0;

  li {
    list-style: none;
    float: left;
    margin-right: 1em;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default (props) => {
  return (
    <Header>
      <div>
        <p>I'm <strong>Tyler Reckart</strong>; a <a href="https://github.com/tylerreckart" target="_blank">software developer</a> at <a href="https://boomtownroi.com" target="_blank">BoomTown</a> focusing on front end architecture and design.</p>

        <nav>
          <Navigation>
            <li><Link to="/">Journal</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="https://github.com/tylerreckart" target="_blank">Github</a></li>
            <li><a href="https://twitter.com/tylerreckart" target="_blank">@tylerreckart</a></li>
          </Navigation>
        </nav>
      </div>
    </Header>
  );
};