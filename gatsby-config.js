/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteUrl = process.env.URL || `https://www.robinlinacre.com`



module.exports = {
  siteMetadata: {
    title: `> robinlinacre`,
    description: `Robin Linacre's blog: Data Science, Engineering and the Environment`,
    siteUrl: siteUrl
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source serif pro\:600`,
          `source sans pro\:400`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "GA-TRACKING-ID", // Google Analytics / GA

        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "mdx",
        "path": "./src/mdx/"
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/mdx`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
        `
        ,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages }
        }) => {

          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          console.log(path)
          return {
            url: path,

          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {

              const nodes = allMdx.nodes

              return nodes.map(node => Object.assign({}, {
                description: node.frontmatter.title,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.frontmatter.title,
                guid: site.siteMetadata.siteUrl + node.frontmatter.title,
                custom_elements: [{ "content:encoded": node.frontmatter.title }],
              }))
            },
            query: `
            {
              allMdx {
                nodes {
                  frontmatter {
                    title
                    description
                    date
                  }
                }
              }
            }

            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
          },
        ],
      },
    }
  ]
};