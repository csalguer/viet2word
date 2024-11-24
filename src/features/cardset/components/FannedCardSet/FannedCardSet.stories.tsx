import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {FannedCardSet} from './FannedCardSet';

const meta: Meta<typeof FannedCardSet> = {
  component: FannedCardSet,
};

export default meta;

type Story = StoryObj<typeof FannedCardSet>;

export const Basic: Story = {args: {}};
