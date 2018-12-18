import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import '../assets/scss/main.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Tyler Reckart"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700" rel="stylesheet" />
    </Helmet>
    <Header />
    <div id="template">
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 0,
          marginBottom: 0,
          maxWidth: '800px',
          position: 'relative',
        }}
      >
        {children}
      </div>
      <NavMenu />
      <Footer />
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
