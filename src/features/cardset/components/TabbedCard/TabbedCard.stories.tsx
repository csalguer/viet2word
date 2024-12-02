import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { TabbedCard } from "./TabbedCard"

const meta: Meta<typeof TabbedCard> = {
	component: TabbedCard,
}

export default meta

type Story = StoryObj<typeof TabbedCard>

export const Basic: Story = { args: {} }
