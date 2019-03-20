import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { formatReadingTime } from '../utils/helpers';

export default ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <div id="container">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div id="post-wrapper" key={post.id}>
                <div className="post-title-wrapper">
                    <h2 className="link-title">
                      <Link
                        to={post.frontmatter.path}
                        style={{
                          letterSpacing: '0.01em',
                        }}>
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <h3 className="date">
                      {moment(post.frontmatter.date).format('MMMM Do YYYY')}
                    </h3>
                    <h3 className="reading-time">
                      {' ' + formatReadingTime(post.timeToRead)}
                    </h3>
                </div>
                <article id="article-body" dangerouslySetInnerHTML={{ __html: `<p>${post.excerpt}</p>` }} />

                <div style={{ height: `1em`, width: `100%` }} />
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export const postsQuery = graphql`
  query allPosts {
    allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          timeToRead
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`;
