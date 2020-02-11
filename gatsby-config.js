module.exports = {
  siteMetadata: {
    title: `thembafund.com`,
    description: `A network of founders, executives and investors committed to mentoring and investing in leading early-stage, student and alumni founders.
`,
    author: `Valencia Fu valenciafu@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Json`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thembafund.com`,
        short_name: `thembafund`,
        start_url: `/`,
        background_color: `#1CD8D2`,
        theme_color: `#1CD8D2`,
        display: `minimal-ui`,
        icon: `src/images/mba-simple-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Inter'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-21029575-11',
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'Member',
        imagePath: 'photo',
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'GhostPost',
        imagePath: 'feature_image',
      },
    },
  ],
}
