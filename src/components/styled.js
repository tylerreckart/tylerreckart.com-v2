import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 700px) {
    margin: 0 1em;
  }

  div {
    margin: 0 auto;
    max-width: 1000px;
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
    max-width: 700px;
    margin: 0 auto;
    padding: .75em 0;

    code {
      background-color: rgba(171, 205, 253, 0.4);
      padding: 0 4px;
    }
  }

  sup {
    font-family: sans-serif;
    font-size: 10px;
  }

  a.gatsby-resp-image-link {
    &:hover {
      border: none;
    }
  }

  hr {
    max-width: 700px;
    margin: 0 auto;
    height: 1px;
    border: none;
    display: block;
    background-color: rgba(220, 222, 222, 1.00);
    margin: 22px auto 32px auto;
  }

  ul {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 20px;
  }

  ol {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 20px;

    li {
      padding-left: 20px;
    }
  }

  blockquote {
    p {
      border-left: 5px solid rgba(171, 205, 253, 0.4);
      font-style: italic;
      padding-left: 20px;
    }
  }

  pre {
    max-width: 700px;
    margin: 0 auto;
  }

  h1,h2,h3,h4,h5,h6 {
    max-width: 700px;
    margin: 0 auto;
  }

  a {
    color: #ABCDFD;
    padding: 2px 0 0px 0;
    text-decoration: none;

    &:hover {
      border-bottom: 1px dotted #ABCDFD;
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

  a {
    color: #ef3b7d;
    padding: 0 8px;
    text-decoration: none;
  }
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
  max-width: 700px !important;
  margin: 0 auto !important;

  @media (max-width: 700px) {
    padding: 0;
  }
`;