import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Archive from '../components/Archive';

import { Container, Content, Title, TitleWrapper } from '../components/styled';

export default () => (
  <Container>
    <TitleWrapper>
      <Title>About</Title>
    </TitleWrapper>
    <Content>
      <p>I'm a software developer at <a href="https://bootmtownroi.com" target="_blank">BoomTownROI</a>, where I build engaging experiences that help real estate professionals aquire new leads and grow their businesses.</p>
      <p>I'm also the author of <a href="https://www.manning.com/livevideo/graphql-in-motion" target="_blank">GraphQL in Motion</a>: a comprehensive video course that teaches viewers how to use GraphQL to build easy to deploy, manage, and scale APIs that radically simplifiy communication between the client and server. Viewers begin by learning how GraphQL fits into various application architectures and what it offers when compared to other industry-standard API design methodologies. Following a series of examples, viewers learn how to write GraphQL queries, dig into schema design, and tackle more advanced chanllenges like direct data manipulation and error handling. Along the way, viewers can test their understanding of what they've learned with resources and exercises to further their learning.</p>
      <blockquote><p>It's a hands on bootcamp on setting up a GraphQL API. The pace is fast but you get through a lot of stuff and it rewards rewatching.<br></br><span>-Stephen Oates</span></p></blockquote>
      <p>If you're interested in getting in touch with me, send me a message on Twitter using the link in the header. Alternatively, you can try guessing my Gmail address. It may or may not have something to do with my first and last name.</p>
    </Content>
  </Container>
);
