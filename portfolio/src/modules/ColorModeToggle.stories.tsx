import type { Meta, StoryObj } from '@storybook/react';
import { ColorModeToggle } from './ColorModeToggle';

const meta: Meta<typeof ColorModeToggle> = {
  title: 'ColorModeToggle',
  component: ColorModeToggle
};

export default meta;

export const Default: StoryObj<typeof ColorModeToggle> = {
  render: () => <ColorModeToggle />
};
