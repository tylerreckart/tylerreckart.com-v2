import React from "react";
import Helmet from "react-helmet";
import Link from 'gatsby-link';
import moment from 'moment';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import { MDXRenderer } from 'gatsby-mdx';

export default function Template({ data }) {
  const initDisqusScript = () => {
    const d = document;
    const s = d.createElement('script');

    s.src = 'https://tylerreckart.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());

    (d.head || d.body).appendChild(s);

    return (
      <div id="disqus_thread" />
    );
  };

  const { mdx: post } = data;

  return (
    <Layout>
      <div id="post">
        <Helmet title={`Tyler Reckart - ${post.frontmatter.title}`} />
        <div className="post-header">
          <div className="post-title-wrapper">
            <h2 className="post-title">{post.frontmatter.title}</h2>
            <span className="date">
              Published {moment(post.frontmatter.date).format('MMMM Do YYYY')}
            </span>
          </div>
          <Link style={{ textDecoration: 'none' }}to="/"><span className="back-button">← Go Back</span></Link>
        </div>
        <article id="article-body">
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </article>
        <div id="comments">
          {canUseDOM ? initDisqusScript() : null}
        </div>
      </div>
    </Layout>
  );
}

export const postQuery = graphql`
  query MDXForPost($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        date
      }
      code {
        body
      }
      timeToRead
    }
  }
`;