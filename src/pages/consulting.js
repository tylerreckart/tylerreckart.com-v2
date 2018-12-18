import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <div id="container">
      <div className="title-wrapper">
        <h2 className="title">Consulting</h2>
      </div>
      <div id="content">
        <p>Hey there, I'm <Link to="/about">Tyler</Link>.</p>
      </div>
    </div>
  </Layout>
);
