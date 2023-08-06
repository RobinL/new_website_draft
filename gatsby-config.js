/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteUrl = process.env.URL || `https://www.robinlinacre.com`

function merge_frontmatter(allJavascriptFrontmatter, allMdx) {
  let a = allJavascriptFrontmatter.edges.map(edge => edge.node.frontmatter);
  let b = allMdx.nodes.map(node => node.frontmatter);
  return [...a, ...b];
}


module.exports = {
  siteMetadata: {
    title: `> robinlinacre`,
    description: `Robin Linacre's blog: Data Science, Engineering and the Environment`,
    siteUrl: siteUrl
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-mdx",


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
            serialize: ({ query: { site, allJavascriptFrontmatter, allMdx } }) => {
              const frontm_list = merge_frontmatter(allJavascriptFrontmatter, allMdx)

              return frontm_list.map(frontmatter => Object.assign({}, {
                description: frontmatter.title,
                date: frontmatter.title,
                url: site.siteMetadata.siteUrl + frontmatter.title,
                guid: site.siteMetadata.siteUrl + frontmatter.title,
                custom_elements: [{ "content:encoded": frontmatter.title }],
              }))
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
    }
  ]
};