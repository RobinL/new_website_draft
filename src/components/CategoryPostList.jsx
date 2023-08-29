import React from 'react';
import { Link } from 'gatsby';

const CategoryPostList = ({ categoryKey, posts = [], categoryTitles }) => (
    <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">
            {categoryTitles[categoryKey] || categoryKey}
        </h2>
        <div>
            {posts.map(node => (
                <div key={node.frontmatter.title} className="pb-2 flex">
                    <div className="text-base text-gray-500 w-20 font-source-sans">
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
);

export default CategoryPostList;
