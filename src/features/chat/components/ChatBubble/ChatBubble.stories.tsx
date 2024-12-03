import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { ChatBubble } from "./ChatBubble"

const meta: Meta<typeof ChatBubble> = {
	component: ChatBubble,
}

export default meta

type Story = StoryObj<typeof ChatBubble>

export const Basic: Story = { args: {} }
