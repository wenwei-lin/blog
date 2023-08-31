import { defineCollection, z } from "astro:content"

export const collections = {
    posts: defineCollection({
        schema: z.object({
            title: z.string(),
            date: z.date(),
            description: z.string().max(200),
            tags: z.string().array(),
        })
    }),
    projects: defineCollection({
        schema: ({image}) => z.object({
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
            githubRepo: z.string(),
            liveDemo: z.string().optional(),
            videoDemo: z.string().optional(),
        })
    })
}