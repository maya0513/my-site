import { Hono } from 'hono';

const app = new Hono();

// Static Astro pages are served directly from Cloudflare's Assets binding.
// Keep this Worker available for future /api/* routes.

export default app;
