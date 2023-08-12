import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Footer from './Footer';

// https://www.gatsbyjs.com/docs/how-to/routing/customizing-components/

export function Layout({ children }) {
    const data = useStaticQuery(graphql`
        query {
            mdx {
                frontmatter {
                    description
                }
            }
        }
    `);

    const { description } = data.mdx.frontmatter;

    return (
        <>
            <div className="text-base mx-auto w-full max-w-prose px-4">
                <Header />

                <div id="mdx-container-div">{children}</div>
                <Footer />
            </div>
        </>
    );
}

export default Layout;
