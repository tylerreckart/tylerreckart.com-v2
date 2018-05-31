import React from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';
import moment from 'moment';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

import { Container, Content, Date, Title, TitleWrapper } from '../components/styled';

const Comments = styled.div`
  max-width: 700px !important;
  margin: 0 auto !important;

  @media (max-width: 700px) {
    padding: 0;
  }
`;

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

  const { markdownRemark: post } = data;
  console.log(post);
  return (
    <Container>
      <Helmet title={`Tyler Reckart - ${post.frontmatter.title}`} />
      <TitleWrapper>
        <Title>{post.frontmatter.title}</Title>
        <Date>
          {moment(post.frontmatter.date).format('MMMM Do YYYY')}
        </Date>
      </TitleWrapper>
      <Content
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <Comments>
        {canUseDOM ? initDisqusScript() : null}
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