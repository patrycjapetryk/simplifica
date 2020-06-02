require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Simplifica - strony internetowe i sklepy`,
    description: `Strony internetowe, sklepy internetowe, aplikacje.`,
    author: `@pp`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `simplifica - strony internetowe i sklepy`,
        short_name: `simplifica`,
        start_url: `/`,
        background_color: `#F0F6FC`,
        theme_color: `#4A658A`,
        display: `minimal-ui`,
        // icons: [
        //   {
        //     src: 'src/assets/icons/icon-72x72.png',
        //     sizes: '72x72',
        //     type: 'image/png',
        //   },
        //   {
        //     src: 'src/assets/icons/icon-96x96.png',
        //     sizes: '96x96',
        //     type: 'image/png',
        //   },
        //   {
        //     src: 'src/assets/icons/icon-128x128.png',
        //     sizes: '128x128',
        //     type: 'image/png',
        //   },
        //   {
        //     src: 'src/assets/icons/icon-144x144.png',
        //     sizes: '144x144',
        //     type: 'image/png',
        //   },
        //   {
        //     src: 'src/assets/icons/icon-152x152.png',
        //     sizes: '152x152',
        //     type: 'image/png',
        //   },
        //   {
        //     src: 'src/assets/icons/icon-192x192.png',
        //     sizes: '192x192',
        //     type: 'image/png',
        //   },
        //   {
        //     src: 'src/assets/icons/icon-384x384.png',
        //     sizes: '384x384',
        //     type: 'image/png',
        //   },
        //   {
        //     src: 'src/assets/icons/icon-512x512.png',
        //     sizes: '512x512',
        //     type: 'image/png',
        //   },
        // ],
        icon: `src/assets/icons/icon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
