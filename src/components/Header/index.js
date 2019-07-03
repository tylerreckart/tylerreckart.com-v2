import React from 'react';
import Link from 'gatsby-link';
import NavMenu from '../NavMenu';
import Wizard from '../Svg/wizard';

export default () => {
  return (
    <div id="header">
      <Link className="wizard" to="/">
        <Wizard />
      </Link>
      <NavMenu />
    </div>
  );
};
