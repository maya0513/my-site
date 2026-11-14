import { defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "my-site",
		compatibilityDate: "2026-11-08",
		compatibilityFlags: ["nodejs_compat"],
		observability: {
			enabled: true,
		},
		assets: {
			notFoundHandling: "404-page",
		},
	},
});
