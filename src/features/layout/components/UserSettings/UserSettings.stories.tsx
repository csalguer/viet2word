import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { UserSettings } from "./UserSettings"

const meta: Meta<typeof UserSettings> = {
	component: UserSettings,
}

export default meta

type Story = StoryObj<typeof UserSettings>

export const Basic: Story = { args: {} }
