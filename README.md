### Development notes


#### Frontmatter

To get a postlist for the main listing, and for the rss feed, we need to obtain frontmatter data (title, desc) for all posts

You get this for 'free' with the mdx posts, which have their own frontmatter
For jsx posts, you need a transformer

Annoyingly, you then have two separate queries to get the full list.

I should probably write another transformer that combines the results