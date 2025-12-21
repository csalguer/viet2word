import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { SearchBar } from "./SearchBar"

const meta: Meta<typeof SearchBar> = {
	component: SearchBar,
}

export default meta

type Story = StoryObj<typeof SearchBar>

export const Primary: Story = {
	args: {
		word: "",
		onSearch: async () => {},
		onWordChange: () => {},
	},
}
