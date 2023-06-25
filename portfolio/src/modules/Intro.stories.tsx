import type { Meta, StoryObj } from '@storybook/react';
import { Intro } from './Intro';

const meta: Meta<typeof Intro> = {
  title: 'Intro',
  component: Intro
};

export default meta;

export const Default: StoryObj<typeof Intro> = {
  render: () => <Intro />
};
