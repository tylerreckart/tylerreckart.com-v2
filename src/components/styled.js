import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 700px) {
    margin: 0 1em;
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
  line-height: 28px;

  a {
    color: #ABCDFD;
    padding: 6px 0 0px 0;
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
  padding: 0;
`;

export const LinkTitle = styled.h2`
  margin: 0 0 .5em 0;
  padding: 0;
`;

export const Title = styled.h2`
  color: #000000;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.01em;
  margin: 0 0 .5em 0;
  padding: 0;
`;

export const TitleWrapper = styled.div`
  padding: 0 1em;

  @media (max-width: 700px) {
    padding: 0;
  }
`;