import type { Meta, StoryObj } from '@storybook/react';
import { MediaCard } from './MediaCard';
const image = require('../Assets/static/images/BenH_edited_0004.jpg') as string;

const meta: Meta<typeof MediaCard> = {
  title: 'MediaCard',
  component: MediaCard
};

export default meta;

export const Default: StoryObj<typeof MediaCard> = {
  render: () => <MediaCard image={image} />
};
