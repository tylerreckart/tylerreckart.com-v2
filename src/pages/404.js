import React from 'react';

import { Container, Content, Title, TitleWrapper } from '../components/styled';

export default () => (
  <Container>
    <TitleWrapper>
      <Title>These aren't the droids you are looking for.</Title>
    </TitleWrapper>
    <Content>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <iframe 
        width='700' 
        height='394' 
        src='https://www.youtube.com/embed/SIaFtAKnqBU?start=2&autoplay=1&showinfo=0&controls=0&rel=0&iv_load_policy=3' 
        frameBorder='0' 
        style={{ border: 'none' }}>
      </iframe>
    </Content>
  </Container>
);
