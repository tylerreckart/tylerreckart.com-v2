import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import './index.css';
import './prism.css';

const Template = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  max-width: 700px;
  margin: 0 auto;
`;

const TemplateWrapper = ({ children, location }) => (
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
    <Template>
      <Sidebar />
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
    </Template>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
