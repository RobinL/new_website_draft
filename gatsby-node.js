exports.onCreateNode = ({ node, actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions
    console.log(node)
    // Check if the node is either JavascriptFrontmatter or Mdx
    if (node.internal.type === 'JavascriptFrontmatter' || node.internal.type === 'Mdx') {
        // Get the title and description from the frontmatter
        const { title, description } = node.frontmatter

        // Create a new node of type CombinedFrontmatter
        createNode({
            id: createNodeId(`combined-${node.id}`),
            title,
            description,
            internal: {
                type: 'CombinedFrontmatter',
                contentDigest: createContentDigest({ title, description }),
            },
        })
    }
}
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions

    // Define the new CombinedFrontmatter type
    const typeDefs = `
      type CombinedFrontmatter implements Node {
        title: String
        description: String
      }
    `

    // Create the type
    createTypes(typeDefs)
}
