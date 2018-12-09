import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import partyWizard from '../../party-wizard.gif';

const Header = styled.header`
  display: flex;
  justify-content: center;
  margin: 4em auto;
  max-width: 700px;

  a {
    text-decoration: none;
    border-bottom: none;

    &:hover {
      border-bottom: none;
    }
  }
`;

export default () => {
  return (
    <Header>
      <Link to="/">
        <img src={partyWizard} width="16px" height="16px" />
      </Link>
    </Header>
  );
};