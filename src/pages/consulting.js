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
        <p>Hey there, I'm <Link to="/about">Tyler</Link>.</p>
      </Content>
    </Container>
  </Layout>
);
