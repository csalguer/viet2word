import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import PageContainer from "./PageContainer"
import { Center, MantineProvider } from "@mantine/core"
import AppConfig from "../../../../config"

const meta: Meta<typeof PageContainer> = {
	component: PageContainer,
	decorators: [
		(Story, { parameters }) => {
			return (
				<Center bg={"teal"} w="100%" h="100vh">
					{Story()}
				</Center>
			)
		},
	],
}

type Story = StoryObj<typeof PageContainer>

export const Primary: Story = {
	args: { primary: true, label: "PageContainer" },
}

export default meta
