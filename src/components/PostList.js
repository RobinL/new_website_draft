// src/components/PostList.js
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { merge_frontmatter } from "../utils/merge"


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

    const javascriptPosts = data.allJavascriptFrontmatter;
    const mdxPosts = data.allMdx;

    const all_posts = merge_frontmatter(javascriptPosts, mdxPosts)

    return (
        <div>
            <h1 className="text-3xl font-bold underline">Post List</h1>
            <ul>
                {all_posts.map(frontm => (
                    <li key={frontm.title}>
                        <h2>{frontm.title}</h2>
                        <p>{frontm.description}</p>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default PostList;
