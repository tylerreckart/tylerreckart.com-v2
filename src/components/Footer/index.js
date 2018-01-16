import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  color: #8194A4;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin: 2em auto;
  max-width: 700px;

  @media (max-width: 700px) {
    margin: 2em 1em;
  }

  p {
    margin: 0;
    padding: 0 1em;

    @media (max-width: 700px) {
      padding: 0;
    }
  }
`;

export default () => (
  <Footer>
    <p>&copy; 2010-2018 Tyler Reckart. All Rights Reserved</p>
  </Footer>
);
