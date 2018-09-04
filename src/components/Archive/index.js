import React from 'react';

import { Container, Content, Title, TitleWrapper } from '../styled';

export default ({ data }) => {
  // const { edges: dates } = data.allMarkdownRemark;
  console.log(data);
  return (
    <Container>
      <TitleWrapper>
        <Title>Archive</Title>
      </TitleWrapper>
      <Content>
        <p>June 2018</p>
        {/* {dates.map(({ node: date }) => (
          <p>{date.frontmatter.date}</p>
        ))} */}
      </Content>
    </Container>
  );
};

export const archiveQuery = graphql`
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
