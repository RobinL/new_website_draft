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
            serialize: ({ query: { site, allCombinedFrontmatter } }) => {

              return allCombinedFrontmatter.nodes.map(node => {
                return Object.assign({}, {
                  description: node.title,
                  date: node.title,
                  url: site.siteMetadata.siteUrl + node.title,
                  guid: site.siteMetadata.siteUrl + node.title,
                  custom_elements: [{ "content:encoded": node.title }],
                })
              })


            },
            query: `
            {
              allCombinedFrontmatter {
                nodes {
                  description
                  title
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