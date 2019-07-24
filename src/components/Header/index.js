import React from 'react';
import Link from 'gatsby-link';
import NavMenu from '../NavMenu';
import Eagle from '../Svg/eagle';

export default () => {
  return (
    <div id="header">
      <Link className="eagle" to="/">
        <Eagle fill="#DC2938" />
      </Link>
      <NavMenu />
    </div>
  );
};
