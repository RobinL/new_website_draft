exports.onCreateNode = ({ node, actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions


    if (node.internal.type === 'JavascriptFrontmatter' || node.internal.type === 'Mdx') {

        const frontmatter = node.frontmatter


        createNode({
            id: createNodeId(`combined-${node.id}`),
            frontmatter,
            internal: {
                type: 'CombinedFrontmatter',
                contentDigest: createContentDigest(frontmatter),
            },
        })
    }
}
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions


    const typeDefs = `
      type CombinedFrontmatter implements Node {
         frontmatter: JSON
      }
    `


    createTypes(typeDefs)
}
