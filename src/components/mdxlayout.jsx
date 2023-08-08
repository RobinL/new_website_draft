import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
            <header>My Header</header>

            <p>{description}</p>

            <div
                className="text-base mx-auto w-full max-w-prose px-4"
                id="mdx-container-div"
            >
                {children}
            </div>
            <footer>My Footer</footer>
        </>
    );
}

export default Layout;
