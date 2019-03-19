const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/post.js`);

  return graphql(`{
    allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          timeToRead
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      console.log(result);

      result.data.allMdx.edges
        .forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {},
          });
        });
    });
};
