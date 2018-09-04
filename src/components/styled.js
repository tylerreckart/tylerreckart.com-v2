import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 700px) {
    margin: 0 1em;
  }

  div {
    margin: 0 auto;
    max-width: 800px;
  }

  p {
    padding: 0 1em;

    @media (max-width: 700px) {
      padding: 0;
    }
  }
`;

export const Content = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  max-width: 700px;

  p {
    max-width: 700px;
    margin: 0 auto;
    padding: .75em 0;
    overflow: visible;

    code {
      color: #0000EE;
      background-color: #DBE5EA;
      padding: 0 4px 1px 4px;
      border-radius: 2px;
    }

    img {
      width: 100%;
    }
  }

  sup {
    font-family: sans-serif;
    font-size: 10px;
  }

  @media (max-width: 1040px) {
    a.gatsby-resp-image-link {
      min-width: 760px;
      transform: translateX(42%);
    }
  }

  @media (max-width: 800px) {
    a.gatsby-resp-image-link {
      min-width: 100%;
      positon: static;
      left: 0%;
      transform: translateX(0%);
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
      border-left: 2px solid #0000EE;
      font-style: italic;
      padding-left: 20px;

      span {
        font-size: 12px;
        color: #8194A4;
      }
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
`;

export const Date = styled.h3`
  color: #8194A4;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  display: inline;
  margin: 0 0 0 0.5em;

  a {
    color: #ef3b7d;
    padding: 0 8px;
  }
`;

export const HomeLink = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  display: inline;
`;

export const LinkTitle = styled.h2`
  padding: 0;
  display: inline;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.01em;
  padding: 0;
  display: inline;
`;

export const TitleWrapper = styled.div`
  max-width: 700px !important;
  margin: 0 auto !important;
`;