module.exports = {
  siteMetadata: {
    title: `Incremental site`,
  },
  plugins: [
    // 'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-offline',
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/docs`,
        omitFields: [`accessTime`, `atime`, `atimeMs`],
      }
    },    
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // `gatsby-remark-graphviz`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
          // `gatsby-remark-autolink-headers`,
          // {
          //   resolve: `gatsby-remark-toc`,
          //   options: {
          //     header: `Table of Contents`,
          //     include: [
          //       `docs/*.md`
          //     ],
          //     mdastUtilTocOptions: {
          //       maxDepth: 3
          //     }
          //   }
          // },
          // `gatsby-remark-prismjs`
        ]
      }
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography.js`
    //   }
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'incremental-site',
    //     short_name: 'incremental',
    //     start_url: '/',
    //     background_color: '#663399',
    //     theme_color: '#663399',
    //     display: 'minimal-ui',
    //     icon: 'src/images/gatsby-icon.png',
    //   },
    // }
  ],
}
