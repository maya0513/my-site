export const tasks = {
	dev: {
		command: 'astro dev',
		cache: false,
	},
	check: {
		command: 'astro check',
	},
	build: {
		command: 'cf build',
		dependsOn: ['check'],
	},
	preview: {
		command: 'cf dev',
		cache: false,
	},
	deploy: {
		command: 'cf deploy',
		cache: false,
	},
};
