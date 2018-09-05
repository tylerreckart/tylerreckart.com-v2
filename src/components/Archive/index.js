import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import moment from 'moment';

export default () => (
  <StaticQuery
    query={graphql`
      query allDates {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                date
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { edges: dates } = data.allMarkdownRemark;

      return (
        <ul>
          {dates.map(({ node: date }) => {
            const dateStr = moment(date.frontmatter.date).format("MMMM YYYY");
            const dateArr = dateStr.split(' ');

            const month = () => {
              const months = [
                'january',
                'february',
                'march',
                'april',
                'may',
                'june',
                'july',
                'august',
                'september',
                'october',
                'november',
                'december',
              ];

              let month = months.indexOf(dateArr[0].toLowerCase()) + 1;

              return month > 10 ? month : `0${month}`;
            };

            const archiveURL = `/archive/${dateArr[1]}/${month()}`;

            return (
              <li><a href={archiveURL}>{dateStr}</a> <SubPageIndicator pathname={month()} /></li>
            );
          })}
        </ul>
      );
    }}
  />
);

const Indicator = styled.span`
  font-size: 12px;
  color: #ef3b7d;
`;

const SubPageIndicator = props => {
  const location = window.location.pathname.split('/');

  if (location[3] === props.pathname) {
    return (
      <Indicator>← You Are Here</Indicator>
    );
  }

  return null;
};
