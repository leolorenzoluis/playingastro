import { z, defineCollection } from 'astro:content';


const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()).optional(),
        publishedAt: z.date(),
    })
})

const videoSchema = defineCollection({
    schema: z.object({
        title: z.string(),
        publishedAt: z.date(),
        tags: z.array(z.string()).optional(),
        privacyStatus: z.enum(["public"]),
        short: z.boolean(),
        thumbnails: z.object({
            medium: z.object({
                url: z.string(),
                width: z.number(),
                height: z.number(),
            }),
            high: z.object({
                url: z.string(),
                width: z.number(),
                height: z.number(),
            }),
            maxres: z.object({
                url: z.string(),
                width: z.number(),
                height: z.number(),
            }).optional(),
        }),
    }),
});

export const collections = {
    videos: videoSchema,
    blog: blogCollection,
}