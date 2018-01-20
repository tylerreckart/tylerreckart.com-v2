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
      <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet" />
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
