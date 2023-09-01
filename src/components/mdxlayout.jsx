import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from './Layout';

import PostInfo from './PostCodeLink';

// https://www.gatsbyjs.com/docs/how-to/routing/customizing-components/

export function MDXLayout({ children, pageContext }) {
    const { frontmatter } = pageContext;

    return (
        <Layout>
            <PostInfo frontmatter={frontmatter} />
            <div id="mdx-container-div">{children}</div>
        </Layout>
    );
}

export default MDXLayout;
