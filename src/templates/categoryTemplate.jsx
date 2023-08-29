import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
    query ($category: String) {
        allMdx(filter: { frontmatter: { post_category: { eq: $category } } }) {
            edges {
                node {
                    frontmatter {
                        post_type
                    }
                }
            }
        }
    }
`;

const CategoryTemplate = ({ data, pageContext }) => {
    const { category } = pageContext;

    const posts = data.allMdx.edges;

    return <div>{category}</div>;
};

export default CategoryTemplate;
