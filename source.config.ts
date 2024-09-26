import { defineConfig, defineDocs } from 'fumadocs-mdx/config';

import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

export const { docs, meta } = defineDocs();

export default defineConfig({
  lastModifiedTime: 'git',
  mdxOptions: {
    rehypePlugins: [rehypeAccessibleEmojis],
  },
});
