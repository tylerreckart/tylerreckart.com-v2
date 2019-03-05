import React from 'react';

const currentYear = new Date().getFullYear();

export default () => (
  <div id="footer">
    <p>&copy; 2013-{currentYear} Tyler Reckart. All Rights Reserved.</p>
  </div>
);
