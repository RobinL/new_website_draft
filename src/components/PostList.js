// src/components/PostList.js
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const PostList = () => {
    const data = useStaticQuery(graphql`
    query {
      allJavascriptFrontmatter {
        edges {
          node {
            frontmatter {
              title
              description
            }
          }
        }
      }
      allMdx {
        nodes {
          frontmatter {
            title
            description
          }
        }
      }
    }
  `);

    const javascriptPosts = data.allJavascriptFrontmatter.edges;
    const mdxPosts = data.allMdx.nodes;

    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {javascriptPosts.map(({ node }) => (
                    <li key={node.frontmatter.title}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>{node.frontmatter.description}</p>
                    </li>
                ))}
                {mdxPosts.map(({ frontmatter }) => (
                    <li key={frontmatter.title}>
                        <h2>{frontmatter.title}</h2>
                        <p>{frontmatter.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
