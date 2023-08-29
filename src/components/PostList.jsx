import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import CategoryPostList from './CategoryPostList';

const PostList = () => {
    const [selectedCategory, setSelectedCategory] = useState('all'); // Added this line

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

    const filteredPosts =
        selectedCategory === 'all'
            ? mdxPosts
            : mdxPosts.filter(
                  post => post.frontmatter.post_category === selectedCategory
              );

    // Function to group posts by category
    const groupPostsByCategory = (posts, includeLatest = false) => {
        let categorizedPosts = posts.reduce((acc, node) => {
            const category = node.frontmatter.post_category || 'other'; // Default to 'other'
            if (!acc[category]) acc[category] = [];
            acc[category].push(node);
            return acc;
        }, {});

        // Optionally include 'latest' posts
        if (includeLatest) {
            categorizedPosts = {
                latest: posts.slice(0, 3),
                ...categorizedPosts,
            };
        }

        return categorizedPosts;
    };

    const includeLatest = selectedCategory === 'all';
    const postsByCategory = groupPostsByCategory(filteredPosts, includeLatest);

    const headerOrder = [
        'latest',
        'data',
        'other',
        'probabilistic_linkage',
        'energy',
    ];

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
            <div>
                <button onClick={() => setSelectedCategory('all')}>All</button>
                <button onClick={() => setSelectedCategory('data')}>
                    Data
                </button>
                {/* Add more buttons as needed */}
            </div>
            {headerOrder.map(
                categoryKey =>
                    postsByCategory[categoryKey]?.length > 0 && (
                        <CategoryPostList
                            categoryKey={categoryKey}
                            posts={postsByCategory[categoryKey]}
                            categoryTitles={categoryTitles}
                        />
                    )
            )}
        </div>
    );
};

export default PostList;
