import React from 'react';
import Link from 'gatsby-link';
import NavMenu from '../../../../components/NavMenu';
import Keep from '../../../../components/Svg/keep';

export default () => {
  return (
    <div id="header" className="__admin">
      <Link className="keep" to="/">
        <Keep />
      </Link>
    </div>
  );
};
