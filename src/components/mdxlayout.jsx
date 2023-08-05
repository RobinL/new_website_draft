import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export function Layout({ children }) {
    // Use useStaticQuery to get the frontmatter data
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

            <div>Description: {description}</div>

            {children}

            <footer>My Footer</footer>
        </>
    );
}

export default Layout;
