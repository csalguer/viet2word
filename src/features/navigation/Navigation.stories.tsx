import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import Navigation from "./Navigation"
import { MantineProvider } from "@mantine/core"

const meta: Meta<typeof navigation> = {
	component: navigation,
}

export default meta

type Story = StoryObj<typeof navigation>

export const Primary: Story = { args: { primary: true, label: "Navigation" } }
