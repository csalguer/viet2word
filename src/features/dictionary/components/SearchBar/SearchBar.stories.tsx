import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { SearchBar } from "./SearchBar"
import { MantineProvider } from "@mantine/core"

const meta: Meta<typeof SearchBar> = {
	component: SearchBar,
}

export default meta

type Story = StoryObj<typeof SearchBar>

export const Primary: Story = { args: { primary: true, label: "SearchBar" } }
