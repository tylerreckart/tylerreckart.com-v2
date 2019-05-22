import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Pagination from '../components/Pagination';
import { formatReadingTime } from '../utils/helpers';

export default ({ data }) => {
  const { edges: posts } = data.allMdx;

  const path = window.location.pathname.replace('/' , '');
  const page = parseInt(path.replace('/', ''), 10);
  const currentPage = Number.isNaN(page) ? 1 : page;
  const pageCount = Math.round(posts.length / 4);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  const sliceStart = currentPage === 1 ? 0 : (currentPage * 4) - 4;
  const sliceEnd = currentPage === 1 ? 4 : currentPage * 4;
  const sliceLength = posts.slice(sliceStart, sliceEnd).length;

  return (
    <Layout>
      <div id="container">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .slice(sliceStart, sliceEnd)
          .map(({ node: post }, i) => {
            return (
              <div className={`post-preview ${i === sliceLength - 1 ? 'last-of-type' : ''}`}>
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
                </div>
              </div>
            );
          })}
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            nextPage={nextPage}
            prevPage={prevPage}
          />
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
