import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(1),
    excerpt: z.string().min(1),
    date: z.coerce.date(),
    tags: z.array(z.string()).transform((tags) => tags.map((tag) => tag.trim().toLowerCase())),
  }),
});

export const collections = {
  blog,
};
