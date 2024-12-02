import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { ReadingContent } from "./ReadingContent"

const meta: Meta<typeof ReadingContent> = {
	component: ReadingContent,
}

export default meta

type Story = StoryObj<typeof ReadingContent>

export const Basic: Story = { args: {} }
