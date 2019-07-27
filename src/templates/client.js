import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TemplateWrapper from './layout';

const ClientViewTemplate = ({ children }) => (
  <TemplateWrapper>
    <Header />
    <div id="template">
      <div id="content-wrapper">
        {children}
      </div>
      <Footer />
    </div>
  </TemplateWrapper>
);

export default ClientViewTemplate;
