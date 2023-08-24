import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const PostList = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: { fields: frontmatter___post_date, order: DESC }) {
                nodes {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                        post_date(formatString: "YYYY-MM-DD")
                        post_category
                    }
                }
            }
        }
    `);

    const mdxPosts = data.allMdx.nodes;

    // Group posts by category, including latest
    const postsByCategory = {
        latest: mdxPosts.slice(0, 3),
        ...mdxPosts.reduce((acc, node) => {
            const category = node.frontmatter.post_category || 'other'; // Default to 'other'
            if (!acc[category]) acc[category] = [];
            acc[category].push(node);
            return acc;
        }, {}),
    };

    // Lookup for category titles
    const categoryTitles = {
        latest: 'Latest Posts',
        data: 'Data science and engineering',
        energy: 'Energy and climate change',
        other: 'Other',
        probabilistic_linkage: 'Probabilistic record linkage',
    };

    return (
        <div>
            {Object.keys(postsByCategory).map(categoryKey => (
                <div key={categoryKey} className="mb-6">
                    <h2 className="text-xl font-bold mb-2">
                        {categoryTitles[categoryKey] || categoryKey}
                    </h2>
                    <div className="">
                        {postsByCategory[categoryKey].map(node => (
                            <div
                                key={node.frontmatter.title}
                                className="pb-2 flex"
                            >
                                <div className="text-base w-24 text-gray-500">
                                    {node.frontmatter.post_date}
                                </div>
                                <div className="text-base">
                                    <Link to={`${node.fields.slug}`}>
                                        {node.frontmatter.title}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostList;
