import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { PostSchema } from './types';
import { ProjectSchema } from './types/project';

const post = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: './content/posts' }),
  schema: PostSchema,
});

const project = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './content/projects' }),
  schema: ProjectSchema,
});

export const collections = { post, project };
