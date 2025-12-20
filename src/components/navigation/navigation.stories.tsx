import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Navigation } from "./navigation"
import { Center, MantineProvider } from "@mantine/core"

const meta: Meta<typeof Navigation> = {
	component: Navigation,
	decorators: [
		// (Story, { parameters }) => {
		// 	return (
		// 		<Center bg={'teal'} w="100%" h="100vh">
		// 			{Story()}
		// 		</Center>
		// 	)
		// },
	],
}

type Story = StoryObj<typeof Navigation>

export const Primary: Story = {
	args: { children: <div>Navigation Content</div> },
}

export default meta
