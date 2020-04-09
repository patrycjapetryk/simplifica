require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Simplifica`,
    description: `Strony internetowe, sklepy internetowe, aplikacje.`,
    author: `@pp`,
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'simplifica-pl', // (REQUIRED, replace with your own)
        accessToken: process.env.API_PRISMIC_KEY, // (optional API access token)
        path: '/preview', // (optional preview path. Default: /preview)
        previews: false, // (optional, activated Previews. Default: false)
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`600`, `700`],
            subsets: [`latin-ext`],
          },
          {
            family: `Lato`,
            variants: [`400`, `600`],
            subsets: [`latin-ext`],
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
