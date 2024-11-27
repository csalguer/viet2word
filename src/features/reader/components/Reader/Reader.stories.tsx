import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Reader} from './Reader';

const meta: Meta<typeof Reader> = {
  component: Reader,
};

export default meta;

type Story = StoryObj<typeof Reader>;

export const Basic: Story = {args: {}};
