import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import '../assets/scss/main.scss';

const TemplateWrapper = ({ children }) => (
  <div id="template-wrapper">
    <Helmet
      title="Tyler Reckart"
      meta={[
        { name: 'author', content: 'Tyler Reckart' },
        { name: 'description', content: 'Software and watches, among other things.' },
        { name: 'keywords', content: 'javascript, haskell, graphql, software, watches, horology' },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700" rel="stylesheet" />
    </Helmet>
    {children}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
