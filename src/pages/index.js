import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Pagination from "../components/Pagination";
import PostPreview from '../components/PostPreview';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: null,
      pageCount: null,
      nextPage: null,
      prevPage: null
    };
  }

  componentDidMount() {
    const {
      data: {
        allMdx: { edges: posts }
      }
    } = this.props;
    const path = window.location.pathname.replace("/", "");
    const page = parseInt(path.replace("/", ""), 10);

    const currentPage = Number.isNaN(page) ? 1 : page;
    const pageCount = Math.round(posts.length / 4);
    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;

    this.setState({
      currentPage,
      pageCount,
      nextPage,
      prevPage
    });
  }

  render() {
    const { currentPage, pageCount, nextPage, prevPage } = this.state;
    const {
      data: {
        allMdx: { edges: posts }
      }
    } = this.props;

    const sliceStart = currentPage === 1 ? 0 : currentPage * 4 - 4;
    const sliceEnd = currentPage === 1 ? 4 : currentPage * 4;
    const sliceLength = posts.slice(sliceStart, sliceEnd).length;

    // fetch(
    //   "https://www.goodreads.com/user/show/28962435.xml?key=Fma4EAruN5x1cUtoAq1nJw",
    //   {
    //     headers: {
    //       "Content-Type": "application/xml",
    //       "X-Content-Type-Options": "nosniff"
    //     },
    //     mode: "no-cors"
    //   }
    // ).then(response => console.log(response));

    return (
      <Layout>
        <div id="container">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .slice(sliceStart, sliceEnd)
          .map(({ node: post }, i) => {
            return <PostPreview post={post} lastOfType={i === sliceLength - 1} />;
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
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
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
