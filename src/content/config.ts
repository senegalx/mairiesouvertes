import { defineCollection, z } from "astro:content";

// Post collection schema
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().default("Admin"),
    author_avatar: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .array(z.object({ icon: z.string(), link: z.string() }))
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// integrations collection schema
const integrationsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    email: z.string().optional(),
    icon: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// integrations collection schema
const publicationsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    email: z.string().optional(),
    icon: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  posts: postsCollection,
  authors: authorsCollection,
  integrations: integrationsCollection,
  publications: publicationsCollection

};
