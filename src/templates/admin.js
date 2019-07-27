import React from 'react';
import Header from '../pages/dashboard/components/Header';
import TemplateWrapper from './layout';

const AdminViewTemplate = ({ children }) => (
  <TemplateWrapper>
    <Header />
    <div id="template">
      <div id="content-wrapper">
        {children}
      </div>
    </div>
  </TemplateWrapper>
);

export default AdminViewTemplate;
