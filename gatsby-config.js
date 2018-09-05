module.exports = {
  pathPrefix: `/tylerreckart`,
  siteMetadata: {
    title: 'Tyler Reckart',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-csv`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/party-wizard.gif",
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
  ],
};
