/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `robinlinacre`,
    description: `Your site desccription`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/mdx`,
      },
    },

    {
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
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "posts",
        "path": "./src/posts/"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "mdx",
        "path": "./src/mdx/"
      }
    },
    "gatsby-transformer-javascript-frontmatter",
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
        resolveSiteUrl: () => `https://www.yourdomain.tld`,
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
            serialize: ({ query: { site, allJavascriptFrontmatter, allMdx } }) => {
              console.log(allJavascriptFrontmatter)
              console.log(allMdx)
              let a = allJavascriptFrontmatter.edges.map(edge => {
                return Object.assign({}, {
                  description: edge.node.frontmatter.title,
                  date: edge.node.frontmatter.title,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.title,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.title,
                  custom_elements: [{ "content:encoded": edge.node.frontmatter.title }],
                })
              })

              let b = allMdx.nodes.map(node => {
                return Object.assign({}, {
                  description: node.frontmatter.title,
                  date: node.frontmatter.title,
                  url: site.siteMetadata.siteUrl + node.frontmatter.title,
                  guid: site.siteMetadata.siteUrl + node.frontmatter.title,
                  custom_elements: [{ "content:encoded": node.frontmatter.title }],
                })
              })

              return a.concat(b)
            },
            query: `
            {
              allJavascriptFrontmatter {
                edges {
                  node {
                    frontmatter {
                      title
                      description
                    }
                  }
                }
              }
              allMdx {
                nodes {
                  frontmatter {
                    title
                    description
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
    },
  ]
};