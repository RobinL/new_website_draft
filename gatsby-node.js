const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
      query {
        allMdx {
          distinct(field: frontmatter___post_category)
        }
      }
    `);

  result.data.allMdx.distinct.forEach((category) => {
    createPage({
      path: `/${category}`,
      component: require.resolve(`./src/templates/categoryTemplate.jsx`),
      context: { category },
    });
  });
};
