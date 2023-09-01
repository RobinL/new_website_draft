import React from 'react';

const PostCodeLink = ({ frontmatter }) => {
    const { post_date, code_url } = frontmatter;
    let text = 'View source code for this page';
    if (code_url.includes('observablehq.com')) {
        text = 'Live edit this notebook';
    }

    return (
        <p className="text-gray-400 text-sm">
            Originally posted: {post_date}. {text}{' '}
            <a
                href={code_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm"
            >
                here.
            </a>
        </p>
    );
};

export default PostCodeLink;
