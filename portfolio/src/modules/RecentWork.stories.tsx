import type { Meta, StoryObj } from '@storybook/react';
import { RecentWork } from './RecentWork';

const meta: Meta<typeof RecentWork> = {
  title: 'RecentWork',
  component: RecentWork
};

export default meta;

export const Default: StoryObj<typeof RecentWork> = {
  render: () => <RecentWork />
};
