import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <div id="container">
      <div
        className="title-wrapper"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h2 className="title">About</h2>
        <h3 className="home-link"><Link to="/">← Go Back</Link></h3>
      </div>
      <article id="article-body">
        <p>I'm a software engineer at <a href="https://bootmtownroi.com" target="_blank">BoomTownROI</a>, where I build engaging experiences that help real estate professionals aquire new leads and grow their businesses. Previously, I've worked as a front end engineer at <a href="https://tiphive.com" target="_blank">TipHive</a>, where I led the development of their cross-platform mobile application, and as a UI engineer at <a href="https://authenticff.com" target="_blank">Authentic Form &amp; Function</a>, where I worked directly with our clients to develop engaging digital experiences and turn their visions into reality.</p>
        <p>I'm also the author of <a href="https://www.manning.com/livevideo/graphql-in-motion" target="_blank">GraphQL in Motion</a>: a comprehensive video course that teaches viewers how to use GraphQL to build easy to deploy, manage, and scale APIs that radically simplifiy communication between the client and server. Viewers begin by learning how GraphQL fits into various application architectures and what it offers when compared to other industry-standard API design methodologies. Following a series of examples, viewers learn how to write GraphQL queries, dig into schema design, and tackle more advanced chanllenges like direct data manipulation and error handling. Along the way, viewers can test their understanding of what they've learned with resources and exercises to further their learning.</p>
        <blockquote><p>This course is exactly what you need to understand and start using GraphQL.<br></br><span>-Carlos Corutto</span></p></blockquote>
        <p>If you're interested in getting in touch with me, send me a message on Twitter using the link in the header. Alternatively, you can try guessing my Gmail address. It may or may not have something to do with my first and last name.</p>
      </article>
    </div>
  </Layout>
);
