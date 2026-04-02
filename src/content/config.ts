import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date().optional(),
    tags: z.array(z.string()).optional().default([]),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
  }),
});

export const collections = { projects };
