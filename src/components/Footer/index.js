import React from 'react';
import Castle from '../Svg/castle-unified';

const currentYear = new Date().getFullYear();

export default () => (
  <div id="footer">
    <Castle className="castle" fill="#20262C" />
    <span className="copy">&copy; 2013-{currentYear} Tyler Reckart. All Rights Reserved.</span>
  </div>
);
