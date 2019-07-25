import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import ContactForm from '../components/ContactForm';

export default () => (
  <Layout>
    <div id="container" className="page-wrapper">
      <div className="post-header" style={{ alignItems: 'center' }}>
        <div className="post-title-wrapper">
          <h2 className="post-title">About</h2>
        </div>
        {/* <Link style={{ textDecoration: 'none' }}to="/"><span className="back-button">← Go Back</span></Link> */}
      </div>
      <article id="article-body">
        <p>I'm a software engineer at <a href="https://boomtownroi.com" target="_blank">BoomTownROI</a>, where I build engaging experiences that help real estate professionals aquire new leads and grow their businesses. Previously, I've worked as a front end engineer at <a href="https://tiphive.com" target="_blank">TipHive</a>, where I led the development of their cross-platform mobile application, and as a UI engineer at <a href="https://authenticff.com" target="_blank">Authentic Form &amp; Function</a>, where I worked directly with our clients to develop engaging digital experiences and turn their visions into reality.</p>
        <p>I'm also the author of <a href="https://www.manning.com/livevideo/graphql-in-motion" target="_blank">GraphQL in Motion</a>: a comprehensive video course that teaches viewers how to use GraphQL to build easy to deploy, manage, and scale APIs that radically simplifiy communication between the client and server. Viewers begin by learning how GraphQL fits into various application architectures and what it offers when compared to other industry-standard API design methodologies. Following a series of examples, viewers learn how to write GraphQL queries, dig into schema design, and tackle more advanced chanllenges like direct data manipulation and error handling. Along the way, viewers can test their understanding of what they've learned with resources and exercises to further their learning.</p>
        <blockquote><p>This course is exactly what you need to understand and start using GraphQL.<br></br><span>-Carlos Corutto</span></p></blockquote>
      </article>
      <div className="section">
        <h2 className="contact">Contact</h2>
        <p style={{ fontSize: '18px', lineHeight: '32px' }}>If you're interested in getting in touch with me, feel free to fill out the form below and send me an email.</p>
        <ContactForm />
      </div>
    </div>
  </Layout>
);
