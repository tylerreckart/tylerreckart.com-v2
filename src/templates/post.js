import React from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';
import moment from 'moment';

import { Container, Content, Date, Title, TitleWrapper } from '../components/styled';
import { disqus_config, initDisqusScript } from '../utils/disqus';

const Comments = styled.div`
  padding: 0 1em;

  @media (max-width: 700px) {
    padding: 0;
  }
`;

export default function Template({ data }) {
  initDisqusScript();

  const { markdownRemark: post } = data;
  return (
    <Container>
      <Helmet title={`Tyler Reckart - ${post.frontmatter.title}`} />
      <TitleWrapper>
        <Title>{post.frontmatter.title}</Title>
        <Date>{moment(post.frontmatter.date).format('MMMM Do YYYY')}</Date>
      </TitleWrapper>
      <Content
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <Comments>
        <div id="disqus_thread" />
      </Comments>
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