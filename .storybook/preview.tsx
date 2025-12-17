import React from 'react';
import { withThemeByClassName } from "@storybook/addon-themes"
import type { Preview } from "@storybook/react-vite"
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Provider as ChakraProvider } from '../src/components/ui/provider';

export const decorators = [
  (renderStory: any) => <ChakraProvider><MantineProvider>{renderStory()}</MantineProvider></ChakraProvider>,
]

export const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: decorators,
}

