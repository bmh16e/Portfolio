import type { Meta, StoryObj } from '@storybook/react';
import { WorkTile } from './WorkTile';

const meta: Meta<typeof WorkTile> = {
  title: 'WorkTile',
  component: WorkTile
};

export default meta;

export const Default: StoryObj<typeof WorkTile> = {
  render: () => <WorkTile image="" summary="" title="" />
};
