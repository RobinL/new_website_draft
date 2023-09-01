import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import PostInfo from './PostCodeLink';

// https://www.gatsbyjs.com/docs/how-to/routing/customizing-components/

export function Layout({ children, pageContext }) {
    const { frontmatter } = pageContext;

    return (
        <>
            <div className="text-base mx-auto w-full max-w-prose px-4">
                <Header />
                <PostInfo frontmatter={frontmatter} />
                <div id="mdx-container-div">{children}</div>
                <Footer />
            </div>
        </>
    );
}

export default Layout;
