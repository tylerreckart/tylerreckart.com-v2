import React from 'react';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <div id="container">
      <div className="title-wrapper">
        <h2 className="post-title">These aren't the droids you are looking for.</h2>
      </div>
      <article id="article-body">
        <p>The page you&#39;re looking for doesn&#39;t exist...</p>
        <iframe
          width='700'
          height='394'
          src='https://www.youtube.com/embed/SIaFtAKnqBU?start=2&autoplay=1&showinfo=0&controls=0&rel=0&iv_load_policy=3'
          frameBorder='0'
          style={{ border: 'none' }}>
        </iframe>
      </article>
    </div>
  </Layout>
);
