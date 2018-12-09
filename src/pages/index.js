import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import { graphql } from 'gatsby';

import { Container, Content, Date, LinkTitle as Title, TitleWrapper, TimeToRead } from '../components/styled';
import Layout from '../components/layout';
import { formatReadingTime } from '../utils/helpers';

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout>
      <Container>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post" key={post.id}>
                <TitleWrapper>
                    <Title>
                      <Link
                        to={post.frontmatter.path}
                        style={{
                          letterSpacing: '0.01em',
                        }}>
                        {post.frontmatter.title}
                      </Link>
                    </Title>
                    <Date>
                      {moment(post.frontmatter.date).format('MMMM Do YYYY')}
                    </Date>
                    <TimeToRead>
                      {' ' + formatReadingTime(post.timeToRead)}
                    </TimeToRead>
                </TitleWrapper>
                <Content dangerouslySetInnerHTML={{ __html: `<p>${post.excerpt}</p>` }} />
                <div style={{ height: `1em`, width: `100%` }} />
              </div>
            );
          })}
      </Container>
    </Layout>
  );
};

export const postsQuery = graphql`
  query allPosts {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
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
