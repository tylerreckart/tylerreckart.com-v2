import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <div id="container" className="page-wrapper">
      <div className="post-header" style={{ alignItems: 'center' }}>
        <div className="post-title-wrapper">
          <h2 className="post-title">Work</h2>
        </div>
        <Link style={{ textDecoration: 'none' }}to="/"><span className="back-button">← Go Back</span></Link>
      </div>
      <article id="article-body">
        <p>Sed varius consequat aliquam. Quisque eu lobortis arcu. In vestibulum nunc iaculis suscipit bibendum. Aliquam a lorem neque. In varius neque ut tincidunt suscipit.</p>
      </article>
      <div className="section">
        <h3 className="project-title">BoomTown - 2017 to Present</h3>
      </div>
    </div>
  </Layout>
);
