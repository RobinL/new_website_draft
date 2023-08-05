/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `robinlinacre`,
    description: `Your site desccription`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        "GA-TRACKING-ID", // Google Analytics / GA

      ]
    }
  }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
  ]
};