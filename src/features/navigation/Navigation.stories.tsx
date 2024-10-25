import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { navigation } from "./Navigation";

const meta: Meta<typeof navigation> = {
	component: navigation,
};

export default meta;

type Story = StoryObj<typeof navigation>;

export const Basic: Story = { args: {} };
