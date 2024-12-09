import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import {NightModeSwitch, NightModeButton} from "./NightModeSwitch"
import { Center, MantineProvider } from "@mantine/core"

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
	args: { primary: true, label: "NightModeSwitch" },
}

export default meta
