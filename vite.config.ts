import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react-swc"
import path from "node:path"
import { normalizePath } from "vite"
import { viteStaticCopy } from "vite-plugin-static-copy"
import { defineConfig } from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		TanStackRouterVite(),
		viteStaticCopy({
			targets: [
				{
					src: normalizePath(path.resolve("./src/assets/locales")),
					dest: normalizePath(path.resolve("./dist")),
				},
			],
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		host: true,
		strictPort: true,
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./vitest.setup.ts"],
		css: true,
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom", "framer-motion"],
					tanstack: ["@tanstack/react-router", "@tanstack/react-query"],
				},
			},
		},
	},
})
