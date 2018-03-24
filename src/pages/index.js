import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import moment from 'moment';

import { Container, Content, Date, LinkTitle as Title, TitleWrapper } from '../components/styled';

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
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
                      color: '#000000',
                      fontSize: '24px',
                      fontWeight: '500',
                      letterSpacing: '0.01em',
                      textDecoration: 'none'
                    }}>
                    {post.frontmatter.title}
                  </Link>
                </Title>
                <Date>{moment(post.frontmatter.date).format('MMMM Do YYYY')}</Date>
              </TitleWrapper>
              <Content dangerouslySetInnerHTML={{ __html: post.html }} />
              <div style={{ height: `4em`, width: `100%` }} />
            </div>
          );
        })}
    </Container>
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