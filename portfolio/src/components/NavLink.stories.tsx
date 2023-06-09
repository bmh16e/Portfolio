import type { Meta, StoryObj } from '@storybook/react';
import { NavLink } from './NavLink';

const meta: Meta<typeof NavLink> = {
  title: 'NavLink',
  component: NavLink
};

export default meta;

export const Text: StoryObj<typeof NavLink> = {
  args: {
    children: 'NavLink',
    href: '#'
  }
};
