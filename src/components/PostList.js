import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const PostList = () => {
  const data = useStaticQuery(graphql`
query {
  allMdx {
    nodes {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date
      }
    }
  }
}
  `);

  const mdxPosts = data.allMdx.nodes;

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Post List</h1>
      <ul>
        {mdxPosts.map(node => (
          <li key={node.frontmatter.title}>
            <Link to={`${node.fields.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
