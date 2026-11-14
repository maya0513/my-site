import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'tech'> | CollectionEntry<'notes'>;

export async function getArticles(collection: 'tech' | 'notes'): Promise<Article[]> {
	const entries = await getCollection(collection, ({ data }) => !data.draft);
	return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getLatestArticles(limit = 5): Promise<Article[]> {
	const [tech, notes] = await Promise.all([getArticles('tech'), getArticles('notes')]);
	return [...tech, ...notes]
		.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
		.slice(0, limit);
}

export function articlePath(article: Article): string {
	return `/${article.collection}/${article.id}`;
}

export function formatDate(date: Date): string {
	return date.toISOString().slice(0, 10);
}
