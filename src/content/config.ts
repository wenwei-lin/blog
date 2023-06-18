import { defineCollection, z } from "astro:content"

export const collections = {
    posts: defineCollection({
        schema: z.object({
            title: z.string(),
            date: z.date(),
            description: z.string().max(200),
            tags: z.string().array(),
        })
    })
}