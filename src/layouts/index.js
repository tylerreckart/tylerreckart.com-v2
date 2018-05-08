import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';
import './prism.css';

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
      <link href="./node_modules/c3/c3.min.css" rel="stylesheet" />
      <script src="./node_modules/d3/dist/d3.min.js" type="text/javascript"></script>
    </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: '1000px',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
