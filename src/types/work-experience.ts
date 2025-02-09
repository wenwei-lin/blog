import { z, type InferEntrySchema } from 'astro:content';

export const WorkExperienceSchema = ({ image }) =>
  z.object({
    title: z.string(),
    company: z.string(),
    location: z.string(),
    companyLogo: image(),
    // time
    start: z.date(),
    end: z.date().optional(),
    description: z.string(),
  });

export type WorkExperience = InferEntrySchema<'workExperience'>;
