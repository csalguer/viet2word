import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

	addons: [
		"@storybook/addon-links",
		"@storybook/addon-docs",
		"@storybook/addon-a11y",
		"@chromatic-com/storybook",
	],

	framework: {
		name: "@storybook/react-vite",
		options: {},
	},

	core: {
		disableTelemetry: true,
	},

	refs: {
		// mantine: {
		// 	title: "Mantine",
		// 	url: "https://spigelli.github.io/mantine-storybook/",
		// 	srcUrl: "https://spigelli.github.io/mantine-storybook/",
		// 	expanded: false, // Optional, true by default
		// },
	},
}
export default config
