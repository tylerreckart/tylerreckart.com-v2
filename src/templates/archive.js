import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';

import { Container, Content, Title, TitleWrapper } from '../components/styled';

export default () => (
  <Layout>
    <Container>
      <TitleWrapper>
        <Title>Consulting</Title>
      </TitleWrapper>
      <Content>
        <p>Hey there, I'm <Link to="/about">Tyler</Link>. I'm a software developer that primarily focuses on front end architecture and design. Much of my work centers around the research and development process, where I work closely with clients to develop products that fit their vision.</p>
      </Content>
    </Container>
  </Layout>
);

// query postByDate {
//   markdownRemark(
//     frontmatter: {
//       date: { eq: "2018-06-21T17:12:33.962Z" }
//     }
//   ) {
//     frontmatter {
//       title
//       date(formatString: "MMMM Do YYYY")
//     }
//     excerpt(pruneLength: 250)
//   }
// }