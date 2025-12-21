import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { NightModeSwitch, NightModeButton } from "./NightModeSwitch"
import { Center } from "@chakra-ui/react"

const meta: Meta<typeof NightModeSwitch> = {
	component: NightModeSwitch,
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

type Story = StoryObj<typeof NightModeSwitch>

export const Primary: Story = {
	args: { darkMode: false },
}

export default meta
