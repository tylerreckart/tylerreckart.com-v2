import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import partyWizard from '../../party-wizard.gif';

const Header = styled.header`
  margin: 1em auto 0 auto;
  max-width: 1100px;
`;

export default () => {
  return (
    <Header>
      <img src={partyWizard} width="16px" height="16px" />
    </Header>
  );
};