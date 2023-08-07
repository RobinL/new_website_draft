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

      <div class="mx-auto w-full max-w-md" id="mdx-container-div">

        {children}

      </div>
      <footer>My Footer</footer>

    </>
  );
}

export default Layout;
