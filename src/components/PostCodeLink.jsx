import React from 'react';

const PostCodeLink = ({ frontmatter }) => {
    const { post_date, code_url } = frontmatter;

    return (
        <p>
            Originally posted: {post_date}. View{' '}
            <a href={code_url} target="_blank" rel="noopener noreferrer">
                source code for this page
            </a>{' '}
            here.
        </p>
    );
};

export default PostCodeLink;
