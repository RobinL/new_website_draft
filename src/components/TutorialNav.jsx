import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const TutorialNav = ({ frontmatter }) => {
    const { tutorial_number, title } = frontmatter;

    return (
        <StaticQuery
            query={graphql`
                query {
                    allMdx(
                        filter: {
                            frontmatter: { tutorial_number: { ne: null } }
                        }
                    ) {
                        edges {
                            node {
                                frontmatter {
                                    tutorial_number
                                    title
                                }
                                fields {
                                    slug
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                const sortedTutorials = data.allMdx.edges.sort(
                    (a, b) =>
                        a.node.frontmatter.tutorial_number -
                        b.node.frontmatter.tutorial_number
                );

                return (
                    <div className="bg-blue-100 border-t border-blue-300 py-4 mt-8 rounded-lg shadow-md">
                        <div className="container mx-auto">
                            <div className="text-blue-800 font-semibold text-lg mb-2">
                                Probabilistic Linkage Tutorials
                            </div>
                            <ul className="space-y-2">
                                {sortedTutorials.map(edge => (
                                    <li
                                        key={
                                            edge.node.frontmatter
                                                .tutorial_number
                                        }
                                        className="text-blue-600"
                                    >
                                        {tutorial_number ===
                                        edge.node.frontmatter
                                            .tutorial_number ? (
                                            <span className="font-bold">
                                                {edge.node.frontmatter.title}
                                            </span>
                                        ) : (
                                            <Link
                                                to={edge.node.fields.slug}
                                                className="hover:underline"
                                            >
                                                {edge.node.frontmatter.title}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            }}
        />
    );
};

export default TutorialNav;
