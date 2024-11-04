import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { MantineProvider } from "@mantine/core"

import InfoCard from "./InfoCard"

const meta: Meta<typeof InfoCard> = {
	component: InfoCard,
}

export default meta

type Story = StoryObj<typeof InfoCard>

export const Primary: Story = { args: { primary: true, label: "InfoCard" } }
