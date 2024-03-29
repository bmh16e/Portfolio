import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Button'
  }
};
