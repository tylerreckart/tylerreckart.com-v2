const path = require('path');
const createPaginatedPages = require('gatsby-paginate');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
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
    }
  `);

  if (result.errors) {
    console.log(result.errors);
    throw new Error('Could not query posts', result.errors);
  }

  const { allMdx } = result.data;

  createPaginatedPages({
    createPage: createPage,
    edges: allMdx.edges,
    pageTemplate: path.resolve('src/pages/index.js'),
    pageLength: 4,
  });

  allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve('src/templates/post.js'),
    });
  });
};
