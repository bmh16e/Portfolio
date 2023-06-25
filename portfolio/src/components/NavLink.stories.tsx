import type { Meta, StoryObj } from '@storybook/react';
import { NavLink } from './NavLink';

const meta: Meta<typeof NavLink> = {
  title: 'NavLink',
  component: NavLink
};

export default meta;

export const Default: StoryObj<typeof NavLink> = {
  args: {
    children: 'NavLink',
    color: 'primary'
  }
};
