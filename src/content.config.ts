import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { PostSchema } from './types';
import { ProjectSchema } from './types/project';
import { WorkExperienceSchema } from './types/work-experience';

const post = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: './content/posts' }),
  schema: PostSchema,
});

const project = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './content/projects' }),
  schema: ProjectSchema,
});

const workExperience = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './content/work-experiences' }),
  schema: WorkExperienceSchema,
});

export const collections = { post, project, workExperience };
