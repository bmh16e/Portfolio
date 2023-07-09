import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Carousel',
  component: Carousel
};

export default meta;

export const Default: StoryObj<typeof Carousel> = {
  render: () => <Carousel />
};
