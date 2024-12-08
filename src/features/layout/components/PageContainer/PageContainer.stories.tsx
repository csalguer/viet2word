import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import PageContainer from "./PageContainer"
import { MantineProvider } from "@mantine/core"
import AppConfig from "../../../../config"

const meta: Meta<typeof PageContainer> = {
	component: PageContainer,
	decorators: [
		// (Story, { parameters }) => {
		// 	return (
		// 		<AppConfig>
		// 			<Story word={word} phonetic={phonetic} meanings={meanings} />
		// 		</AppConfig>
		// 	)
		// },
	],
}

type Story = StoryObj<typeof PageContainer>

export const Primary: Story = {
	args: { primary: true, label: "PageContainer" },
}

export default meta
