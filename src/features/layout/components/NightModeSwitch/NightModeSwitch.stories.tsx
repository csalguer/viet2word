import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { NightModeSwitch } from "./NightModeSwitch"

const meta: Meta<typeof NightModeSwitch> = {
	component: NightModeSwitch,
}

export default meta

type Story = StoryObj<typeof NightModeSwitch>

export const Basic: Story = { args: {} }
