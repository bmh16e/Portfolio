import type { Meta, StoryObj } from '@storybook/react';
import { Home } from './Home';

const meta: Meta<typeof Home> = {
  title: 'Home',
  component: Home
};

export default meta;

export const Default: StoryObj<typeof Home> = {
  render: () => <Home />
};
