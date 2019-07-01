import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Pagination from '../components/Pagination';
import { formatReadingTime } from '../utils/helpers';
import { MDXRenderer } from 'gatsby-mdx';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: null,
      pageCount: null,
      nextPage: null,
      prevPage: null,
    };
  }

  componentDidMount() {
  const { data: { allMdx: { edges: posts } } } = this.props;
    const path = window.location.pathname.replace('/' , '');
    const page = parseInt(path.replace('/', ''), 10);

    const currentPage = Number.isNaN(page) ? 1 : page;
    const pageCount = Math.round(posts.length / 4);
    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;

    this.setState({
      currentPage,
      pageCount,
      nextPage,
      prevPage,
    });
  }

  render() {
    const { currentPage, pageCount, nextPage, prevPage } = this.state;
    const { data: { allMdx: { edges: posts } } } = this.props;

    const sliceStart = currentPage === 1 ? 0 : (currentPage * 4) - 4;
    const sliceEnd = currentPage === 1 ? 4 : currentPage * 4;
    const sliceLength = posts.slice(sliceStart, sliceEnd).length;

    return (
      <Layout>
        <div id="container">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .slice(sliceStart, sliceEnd)
            .map(({ node: post }, i) => {
              return (
                <div className={`post-preview ${i === sliceLength - 1 ? 'last-of-type' : ''}`}>
                  <div id="post-wrapper" key={post.id}>
                    <div className="preview-title-wrapper">
                        <h2 className="link-title">
                          <Link
                            to={post.frontmatter.path}
                            style={{
                              letterSpacing: '0.01em',
                            }}>
                            {post.frontmatter.title}
                          </Link>
                        </h2>
                        <h3 className="date">
                          Published {moment(post.frontmatter.date).format('MMMM Do YYYY')}
                        </h3>
                    </div>
                    {post.frontmatter.featuredImage ? <img className="featured-image" src={post.frontmatter.featuredImage} /> : null}
                  </div>
                  <div className="preview-content__wrapper">
                    <article id="article-body" dangerouslySetInnerHTML={{ __html: `<p>${post.excerpt}</p>` }} />
                    <button type="button" className="continue-reading__button">Continue Reading</button>
                  </div>
                </div>
              );
            })}
            <Pagination
              currentPage={currentPage}
              pageCount={pageCount}
              nextPage={nextPage}
              prevPage={prevPage}
            />
        </div>
      </Layout>
    );
  }
}

export const postsQuery = graphql`
  query allPosts {
    allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
      edges {
        node {
          excerpt(pruneLength: 750)
          code {
            body
          }
          id
          timeToRead
          frontmatter {
            date
            path
            title
            featuredImage
          }
        }
      }
    }
  }
`;

export default Index;
