import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    pillar: z.enum(['Money Mindset', 'Wealth in Practice', 'Intentional Living', 'The Journey']),
    readTime: z.string(),
    draft: z.boolean().default(false),
  }),
});

const shows = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    type: z.enum(['podcast', 'youtube']),
    platform: z.string(),
    url: z.string(),
    embedUrl: z.string().optional(),
    description: z.string(),
    published: z.boolean().default(true),
  }),
});

const resources = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    fileUrl: z.string(),
    published: z.boolean().default(true),
  }),
});

export const collections = { articles, shows, resources };
