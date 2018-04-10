import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 700px) {
    margin: 0 1em;
  }

  div {
    margin: 0 auto;
    max-width: 700px;
  }

  p {
    padding: 0 1em;

    @media (max-width: 700px) {
      padding: 0;
    }
  }
`;

export const Content = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;

  p {
    code {
      background-color: #E9EFF2;
      padding: 0 4px;
    }
  }

  h3 {
    padding: 0 16 px;
  }

  a {
    color: #ef3b7d;
    padding: 2px 0 0px 0;
    transition: all 50ms cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    border-bottom: 1px dotted #ef3b7d;

    &:before {
      content: " ";
      position: relative;
      z-index: 1;
      top: 0;
      width: 100%;
      display: inline;
      box-shadow: 0 -3px 0px 0px black;
    }
  }
`;

export const Date = styled.h3`
  color: #8194A4;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  max-width: 700px;
  padding: 0;
`;

export const LinkTitle = styled.h2`
  margin: 0 0 .5em 0;
  padding: 0;

  a {
    font-weight: bold !important;
  }
`;

export const Title = styled.h2`
  color: #000000;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.01em;
  margin: 0 0 .5em 0;
  padding: 0;
  max-width: 700px;
`;

export const TitleWrapper = styled.div`
  padding: 0 1em;

  @media (max-width: 700px) {
    padding: 0;
  }
`;