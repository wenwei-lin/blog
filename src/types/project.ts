import type { ImageMetadata } from 'astro';
import { z, type InferEntrySchema } from 'astro:content';

export const ProjectSchema = ({ image }) =>
  z.object({
    title: z.string(),
    description: z.string().max(200),
    cover: image(),
    projectType: z.string(),
    productType: z.string(),
    technologies: z.string().array(),
    teamMembers: z.string().array(),
    roles: z.string().array(),
    start: z.string(),
    end: z.string(),
    githubRepo: z.string().optional(),
    liveDemo: z.string().optional(),
    videoDemo: z.string().optional(),
    context: z.string().optional(),
  });

export type Project = InferEntrySchema<'project'>;
