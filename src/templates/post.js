import React from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';
import moment from 'moment';

import { Container, Content, Date, Title } from '../components/styled';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Container>
      <Helmet title={`Tyler Reckart - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <Title>{post.frontmatter.title}</Title>
        <Date>{moment(post.frontmatter.date).format('MMMM Do YYYY')}</Date>
        <Content
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Container>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;