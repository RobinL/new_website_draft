/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteUrl = process.env.URL || `https://www.robinlinacre.com`



module.exports = {
  pathPrefix: "/new_website_draft",
  siteMetadata: {
    title: `> robinlinacre`,
    description: `Robin Linacre's blog: Data Science, Engineering and the Environment`,
    siteUrl: siteUrl
  },
  plugins: ["gatsby-plugin-postcss",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
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
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "mdx",
        "path": "./src/images/"
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
                date: node.frontmatter.post_date,
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
                    post_date
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