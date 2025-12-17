import React from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';

import {FeatureSection} from './FeatureSection';

const meta: Meta<typeof FeatureSection> = {
  component: FeatureSection,
};

export default meta;

type Story = StoryObj<typeof FeatureSection>;

export const Basic: Story = {args: {}};
