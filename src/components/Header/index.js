import React from 'react';
import Link from 'gatsby-link';
import partyWizard from '../../party-wizard.gif';

export default () => {
  return (
    <div id="header">
      {/* <Link to="/">
        <img src={partyWizard} width="16px" height="16px" />
      </Link> */}
      <h2 className="site-title">Tyler Reckart</h2>
      <p className="tagline"><a href="https://github.com/tylerreckart" target="_blank">Software developer</a>, <a href="https://dribbble.com/tylerreckart">occasional designer</a>, entrepreneur, and watch geek.</p>
    </div>
  );
};
