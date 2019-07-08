import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import Slider from '../components/Slider';

const btSlides = [
  'https://t-reckart.s3.us-east-2.amazonaws.com/portfolio/boomtown/bt-slide1.png',
  'https://t-reckart.s3.us-east-2.amazonaws.com/portfolio/boomtown/bt-slide2.png',
  'https://t-reckart.s3.us-east-2.amazonaws.com/portfolio/boomtown/bt-slide3.png',
  'https://t-reckart.s3.us-east-2.amazonaws.com/portfolio/boomtown/bt-slide4.png',
];

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
      <Slider slides={btSlides} />
      <p className="section-content">At <a href="https://boomtownroi.com" target="_blank">BoomTown</a>, I work as a core contributor to the Consumer software team where I build engaging experiences that help real estate professionals aquire new leads and grow their businesses. We utilize a modern stack (React/Redux, WordPress) to create tailored IDX experiences for our clients that allow them to showcase their MLS listings on any device.</p>
    </div>
    <div className="section">
      <h3 className="section-title">Freelance - 2015 to Present</h3>
      <Slider />
      <p className="section-content">As a freelance software developer and designer, I work closely with my clients to craft rich digital experiences and identities that work seamlessly across devices.</p>
    </div>
    <div className="section">
      <h3 className="section-title">GraphQL in Motion - 2019</h3>
      <Slider />
      <p className="section-content">GraphQL in Motion is an in-depth course that covers the fundementals of building a GraphQL API and connecting it to a <a href="https://graphqlnews.co" target="_blank">modern client-side application</a>. Viewers begin by learning how GraphQL fits into various application architectures, including how it compares to REST and other API styles. Following a series of examples, they learn to use the GraphQL syntax to write simple data-retrieval queries, dig into schema design, and tackle more advanced challenges like direct data manipulation and error handling. Along the way, the course is peppered with quizzes that check viewer's understanding of the material and exercises that encourage them to practice as they go so they'll be ready to take on the real world.</p>
    </div>
    <div className="section">
      <h3 className="section-title">TipHive - 2016 to 2017</h3>
      <Slider />
      <p className="section-content">While at TipHive, I was tasked with leading the design and development of a cross-platform mobile application that worked as a companion to the TipHive web client.</p>
    </div>
    <div className="section">
      <h3 className="section-title">Authentic Form &amp; Function - 2016</h3>
      <Slider />
      <p className="section-content">At <a href="https://authenticff.com" target="_blank">Authentic</a>, I worked directly with the design team to implement client websites from the ground up. Websites were scratch-built from designs with a CMS (CraftCMS, WordPress) working behind the scenes to tie everything together.</p>
    </div>
  </Layout>
);
