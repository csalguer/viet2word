import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import PageContainer from "./PageContainer"
import { MantineProvider } from "@mantine/core"

const meta: Meta<typeof PageContainer> = {
	component: PageContainer,
}

export default meta

type Story = StoryObj<typeof PageContainer>

export const Primary: Story = {
	args: { primary: true, label: "PageContainer" },
}
