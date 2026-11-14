import { defineConfig } from 'vite-plus';
import { tasks } from './vite.tasks';

export default defineConfig({
	run: { tasks },
});
