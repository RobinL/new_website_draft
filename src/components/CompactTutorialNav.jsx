import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const CompactTutorialNav = ({ frontmatter }) => {
    const { tutorial_number } = frontmatter;

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
                const tutorials = data.allMdx.edges.map(
                    edge => edge.node.frontmatter.tutorial_number
                );
                const prevExists = tutorials.includes(tutorial_number - 1);
                const nextExists = tutorials.includes(tutorial_number + 1);

                const prevSlug = data.allMdx.edges.find(
                    edge =>
                        edge.node.frontmatter.tutorial_number ===
                        tutorial_number - 1
                )?.node?.fields?.slug;
                const nextSlug = data.allMdx.edges.find(
                    edge =>
                        edge.node.frontmatter.tutorial_number ===
                        tutorial_number + 1
                )?.node?.fields?.slug;

                return (
                    <div className="bg-gray-100 p-2 mt-2 mb-2 italic rounded-md  text-gray-600 text-xs">
                        <span>
                            This is part {tutorial_number} of the tutorial.
                        </span>
                        {prevExists && (
                            <Link
                                to={prevSlug}
                                className="ml-4 text-blue-500 hover:underline"
                            >
                                &larr; Previous article
                            </Link>
                        )}
                        {nextExists && (
                            <Link
                                to={nextSlug}
                                className="ml-4 text-blue-500 hover:underline"
                            >
                                Next article &rarr;
                            </Link>
                        )}
                    </div>
                );
            }}
        />
    );
};

export default CompactTutorialNav;
