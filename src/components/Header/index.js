import React from 'react';
import Link from 'gatsby-link';
import NavMenu from '../NavMenu';
import Castle from '../Svg/castle';

export default () => {
  return (
    <div id="header">
      <Link className="eagle" to="/">
        <Castle />
      </Link>
      <NavMenu />
    </div>
  );
};
