import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Layout',
  component: Layout
};

export default meta;

export const Default: StoryObj<typeof Layout> = {
  render: () => <Layout />
};
