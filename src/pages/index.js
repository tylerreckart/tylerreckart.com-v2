import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { formatReadingTime } from '../utils/helpers';

export default ({ data }) => {
  const { edges: posts } = data.allMdx;
  const path = window.location.pathname.replace('/' , '');
  const page = parseInt(path.replace('/', ''), 10);
  const currentPage = Number.isNaN(page) ? 1 : page;
  const pageCount = Math.round(posts.length / 4);
  const sliceStart = currentPage === 1 ? 0 : (currentPage * 4) - 4;
  const sliceEnd = currentPage === 1 ? 4 : currentPage * 4;

  return (
    <Layout>
      <div id="container">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .slice(sliceStart, sliceEnd)
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
          <div className="pagination-container">
            <button
              type="button"
              onClick={() => {
                const nextPage = currentPage - 1;

                const origin = window.location.origin;
                if (nextPage === 1) {
                  window.location.replace(origin);
                } else {
                  window.location.replace(`${origin}/${currentPage - 1}`);
                }
              }}
              disabled={currentPage - 1 === 0}
            >
              Prev
            </button>
            <span className="page-count">{currentPage} of {pageCount}</span>
            <button
              type="button"
              onClick={() => {
                const origin = window.location.origin;
                window.location.replace(`${origin}/${currentPage + 1}`);
              }}
              disabled={currentPage + 1 > pageCount}
            >Next</button>
          </div>
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
