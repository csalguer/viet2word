import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-styling",
        "@mantine/core",
        "storybook-addon-mantine",
        {
			name: "storybook-addon-mantine",
			options: {},
		},
        {
			name: "@storybook/addon-styling",
			options: {},
		},
        {
			name: "@storybook/addon-styling",
			options: {},
		},
        ({
              name: "@storybook/addon-styling",
              options: {}
            })
    ],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	core: {
		disableTelemetry: true
	},
	docs: {
		autodocs: "tag",
	},
}
export default config
