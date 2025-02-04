import { z } from 'astro:content';

export type Post = {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  createdAt: string;
  updatedAt: string;
};

export const PostSchema = z.object({
  title: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
  description: z.string().max(200),
  tags: z.string().array(),
});
