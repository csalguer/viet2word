import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import Navigation from "./Navigation"
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
	args: { primary: true, label: "Navigation" },
}

export default meta
