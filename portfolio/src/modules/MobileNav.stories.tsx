import type { Meta, StoryObj } from '@storybook/react';
import { MobileNav } from './MobileNav';

const meta: Meta<typeof MobileNav> = {
  title: 'MobileNav',
  component: MobileNav
};

export default meta;

export const Default: StoryObj<typeof MobileNav> = {
  render: () => <MobileNav />
};
