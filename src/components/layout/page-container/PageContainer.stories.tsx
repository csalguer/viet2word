import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import PageContainer from "./PageContainer"
import { Center } from "@mantine/core"

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
	args: { children: <div>Page Content</div> },
}

export default meta
