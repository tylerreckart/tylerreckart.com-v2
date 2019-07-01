import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import Slider from '../components/Slider';

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
    </div>
    <div className="section">
      <h3 className="section-title">BoomTown - 2017 to Present</h3>
      <Slider />
      <p className="section-content">Nulla laoreet enim ligula, sed faucibus justo interdum a. Nulla suscipit massa libero, id ullamcorper arcu dictum eget. Quisque rhoncus, ante ut ornare blandit, odio turpis maximus purus, et sagittis urna sem euismod ante. Aenean ultrices fringilla tellus vel feugiat. Aenean efficitur tellus ac tortor posuere sollicitudin. Nam mollis faucibus sagittis. Cras fringilla faucibus tellus.</p>
    </div>
    <div className="section">
      <h3 className="section-title">Freelance - 2015 to Present</h3>
      <Slider />
      <p className="section-content">Nulla laoreet enim ligula, sed faucibus justo interdum a. Nulla suscipit massa libero, id ullamcorper arcu dictum eget. Quisque rhoncus, ante ut ornare blandit, odio turpis maximus purus, et sagittis urna sem euismod ante. Aenean ultrices fringilla tellus vel feugiat. Aenean efficitur tellus ac tortor posuere sollicitudin. Nam mollis faucibus sagittis. Cras fringilla faucibus tellus.</p>
    </div>
    <div className="section">
      <h3 className="section-title">GraphQL in Motion - 2019</h3>
      <Slider />
      <p className="section-content">Nulla laoreet enim ligula, sed faucibus justo interdum a. Nulla suscipit massa libero, id ullamcorper arcu dictum eget. Quisque rhoncus, ante ut ornare blandit, odio turpis maximus purus, et sagittis urna sem euismod ante. Aenean ultrices fringilla tellus vel feugiat. Aenean efficitur tellus ac tortor posuere sollicitudin. Nam mollis faucibus sagittis. Cras fringilla faucibus tellus.</p>
    </div>
    <div className="section">
      <h3 className="section-title">TipHive - 2016 to 2017</h3>
      <Slider />
      <p className="section-content">Nulla laoreet enim ligula, sed faucibus justo interdum a. Nulla suscipit massa libero, id ullamcorper arcu dictum eget. Quisque rhoncus, ante ut ornare blandit, odio turpis maximus purus, et sagittis urna sem euismod ante. Aenean ultrices fringilla tellus vel feugiat. Aenean efficitur tellus ac tortor posuere sollicitudin. Nam mollis faucibus sagittis. Cras fringilla faucibus tellus.</p>
    </div>
    <div className="section">
      <h3 className="section-title">Authentic Form &amp; Function - 2016</h3>
      <Slider />
      <p className="section-content">Nulla laoreet enim ligula, sed faucibus justo interdum a. Nulla suscipit massa libero, id ullamcorper arcu dictum eget. Quisque rhoncus, ante ut ornare blandit, odio turpis maximus purus, et sagittis urna sem euismod ante. Aenean ultrices fringilla tellus vel feugiat. Aenean efficitur tellus ac tortor posuere sollicitudin. Nam mollis faucibus sagittis. Cras fringilla faucibus tellus.</p>
    </div>
    <div className="section">
      <h3 className="section-title">Quilt - 2011 to 2012</h3>
      <Slider />
      <p className="section-content">Nulla laoreet enim ligula, sed faucibus justo interdum a. Nulla suscipit massa libero, id ullamcorper arcu dictum eget. Quisque rhoncus, ante ut ornare blandit, odio turpis maximus purus, et sagittis urna sem euismod ante. Aenean ultrices fringilla tellus vel feugiat. Aenean efficitur tellus ac tortor posuere sollicitudin. Nam mollis faucibus sagittis. Cras fringilla faucibus tellus.</p>
    </div>
  </Layout>
);
