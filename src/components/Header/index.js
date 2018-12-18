import React from 'react';
import Link from 'gatsby-link';
import partyWizard from '../../party-wizard.gif';

export default () => {
  return (
    <div id="header">
      <Link to="/">
        <img src={partyWizard} width="16px" height="16px" />
      </Link>
    </div>
  );
};
