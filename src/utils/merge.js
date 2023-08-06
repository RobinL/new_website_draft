function merge_frontmatter(allJavascriptFrontmatter, allMdx) {
    let a = allJavascriptFrontmatter.edges.map(edge => edge.node.frontmatter);
    let b = allMdx.nodes.map(node => node.frontmatter);
    return [...a, ...b];
}


module.exports = {
    merge_frontmatter: merge_frontmatter,
    // Other exports, if any
};