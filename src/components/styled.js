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

  div.blog-post-content > p:last-of-type {
    background-color: red;
    padding-bottom: 0;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    padding: .75em 0;
    overflow: visible;

    code {
      color: #ef3b7d !important;
      font-weight: 300;
      background-color: #fff !important;
      padding: 0 4px 1px 4px !important;
    }

    img {
      width: 100%;
    }
  }

  .gatsby-resp-image-link {
    border: none;
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
    margin: 1em auto 1em auto;
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
      border-left: 1px dotted #0000EE;
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
  font-size: 14px !important;
  color: #8194A4;
  font-weight: 300;
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
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  display: inline;
`;

export const LinkTitle = styled.h2`
  font-size: 14px !important;
  padding: 0;
  display: inline;
  font-weight: 300;
`;

export const Title = styled.h2`
  font-size: 14px !important;
  font-weight: bold;
  letter-spacing: 0.01em;
  padding: 0;
  display: inline;
`;

export const TitleWrapper = styled.div`
  max-width: 700px !important;
  margin: 0 auto !important;
`;

export const TimeToRead = styled.div`
  display: inline;
  color: #8194A4;
  font-size: 14px;
`;