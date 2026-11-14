export const tasks = {
	dev: {
		command: 'astro dev',
		cache: false,
	},
	check: {
		command: 'astro check',
	},
	build: {
		command: 'astro build',
		dependsOn: ['check'],
	},
	preview: {
		command: 'wrangler dev --config wrangler.jsonc',
		dependsOn: ['build'],
		cache: false,
	},
	deploy: {
		command: 'wrangler deploy --config wrangler.jsonc',
		dependsOn: ['build'],
		cache: false,
	},
};
