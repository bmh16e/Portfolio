import type { Meta, StoryObj } from '@storybook/react';
import { Spotlight } from './Spotlight';

const meta: Meta<typeof Spotlight> = {
  title: 'Spotlight',
  component: Spotlight
};

export default meta;

export const Default: StoryObj<typeof Spotlight> = {};
