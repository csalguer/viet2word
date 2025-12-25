import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { SearchBar } from "./SearchBar"

const queryClient = new QueryClient()

const meta: Meta<typeof SearchBar> = {
	component: SearchBar,
	decorators: [
		(Story) => (
			<QueryClientProvider client={queryClient}>
				<Story />
			</QueryClientProvider>
		),
	],
}

export default meta

type Story = StoryObj<typeof SearchBar>

export const Primary: Story = {
	args: {
		word: "rồi",
		onSearch: async () => {},
		onWordChange: () => {},
	},
}
