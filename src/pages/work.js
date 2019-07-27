import React from 'react';
import Link from 'gatsby-link';
import Layout from '../templates/client';
import Slider from '../components/Slider';
import LinkIcon from '../components/Svg/link';

const btSlides = [
  'https://t-reckart.s3.us-east-2.amazonaws.com/portfolio/boomtown/bt-slide1.png',
  'https://t-reckart.s3.us-east-2.amazonaws.com/portfolio/boomtown/bt-slide2.png',
  'https://t-reckart.s3.us-east-2.amazonaws.com/portfolio/boomtown/bt-slide3.png',
  'https://t-reckart.s3.us-east-2.amazonaws.com/portfolio/boomtown/bt-slide4.png',
];

const graphQLSlides = [
  'https://t-reckart.s3.us-east-2.amazonaws.com/portfolio/graphql-in-motion/course-preview.png',
  'https://t-reckart.s3.us-east-2.amazonaws.com/portfolio/graphql-in-motion/graphq-news__website.png',
];

export default () => (
  <Layout>
    <div className="inner-page">
      <div className="section">
        <div className="post-header" style={{ alignItems: 'center' }}>
          <div className="post-title-wrapper">
            <h2 className="post-title">Projects</h2>
          </div>
        </div>
        <hr />
      </div>
      <div className="section">
        <h3 className="section-title">GraphQL in Motion <a href="https://manning.com/livevideo/graphql-in-motion" target="_blank"><LinkIcon /></a></h3>
        <p className="section-content">A comprehensive video course with over two and a half hours of content that teaches the foundations of building GraphQL APIs. Made in partnership with Manning Publications.</p>
        <Slider slides={graphQLSlides} duration={10} />
      </div>
      <div className="section">
        <h3 className="section-title">Hyperzsh <a href="https://github.com/tylerreckart/hyperzsh" target="_blank"><LinkIcon /></a></h3>
        <p className="section-content">A minimal one line git-oriented zsh prompt.</p>
      </div>
      <div className="section">
        <h3 className="section-title">Gondolin <a href="https://github.com/tylerreckart/gondolin-zsh" target="_blank"><LinkIcon /></a></h3>
        <p className="section-content">A two line git-oriented zsh and elvish shell prompt.</p>
      </div>

      <br />
      <br />

      <div className="section">
        <div className="post-header" style={{ alignItems: 'center' }}>
          <div className="post-title-wrapper">
            <h2 className="post-title">Experience</h2>
          </div>
        </div>
        <hr />
      </div>
      <div className="section">
        <h3 className="section-title">BoomTown <a href="https://boomtownroi.com" target="_blank"><LinkIcon /></a></h3>
        <p className="section-content">Software Engineer, March 2017 to Present</p>
        <Slider slides={btSlides} />
      </div>
      <div className="section">
        <h3 className="section-title">Freelance</h3>
        <p className="section-content">Software Developer &amp; Designer, September 2015 to Present</p>
      </div>
      <div className="section">
        <h3 className="section-title">TipHive <a href="https://friyay.io" target="_blank"><LinkIcon /></a></h3>
        <p className="section-content">Lead Front-end Engineer, November 2016 to March 2017</p>
      </div>
      <div className="section">
        <h3 className="section-title">Authentic Form &amp; Function <a href="https://authenticff.com" target="_blank"><LinkIcon /></a></h3>
        <p className="section-content">Front-end Engineer, March 2016 to September 2016</p>
      </div>
    </div>
  </Layout>
);
