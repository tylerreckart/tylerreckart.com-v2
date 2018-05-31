import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Papa from 'papaparse';

import { Container, Content, Title, TitleWrapper } from '../components/styled';

export default ({ data }) => {
  const { edges: books } = data.allBooksCsv;

  const booksArr = books.map(item => {
    const node = item.node;
    return {
      author: node.author,
      book: node.book,
      cover: node.cover,
      favorite: node.favorite.toLowerCase() === "true",
      genre: node.genre.split(","),
      isbn: parseInt(node.isbn, 10),
      pages: parseInt(node.pages, 10),
    };
  });

  return (
    <Container>
      <TitleWrapper>
        <Title>Playground</Title>
        <div id="chart" />
      </TitleWrapper>
      <Content>
      </Content>
    </Container>
  );
};

export const booksQuery = graphql`
  query allBooks {
    allBooksCsv {
        edges {
          node {
            book
            rating
            cover
            author
            pages
            genre
            isbn
            favorite
          }
        }
      }
  }
`;
