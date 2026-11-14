import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articleSchema = z.object({
	title: z.string(),
	date: z.date(),
	description: z.string().optional(),
	tags: z.array(z.string()).default([]),
	draft: z.boolean().default(false),
});

const tech = defineCollection({
	loader: glob({ base: './src/content/tech', pattern: '**/*.md' }),
	schema: articleSchema,
});

const notes = defineCollection({
	loader: glob({ base: './src/content/notes', pattern: '**/*.md' }),
	schema: articleSchema,
});

export const collections = { tech, notes };
