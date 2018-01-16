import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { Container, Content, Title } from '../components/styled';

export default () => (
  <Container>
    <Title>About</Title>
    <Content>
      <p>I'm a software developer at <a href="https://bootmtownroi.com" target="_blank">BoomTownROI</a>, where I build engaging experiences that help real estate professionals aquire new leads and grow their businesses. My work is primarily focused on front end architecture and design, however on the side I like to tinker with GraphQL and Haskell.</p>
      <p>I'm also currently working with Manning Publications to develop a video course on GraphQL. It's currently part of Manning's Early Access Program, or MEAP, where prospective students can follow along with the course's development, leave feedback, and contribute to the course's evolution. Check out <a href="https://www.manning.com/livevideo/graphql-in-motion" target="_blank">GraphQL in Motion</a>.</p>
    </Content>
  </Container>
);