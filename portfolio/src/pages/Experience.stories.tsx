import type { Meta, StoryObj } from '@storybook/react';
import { Experience } from './Experience';

const meta: Meta<typeof Experience> = {
  title: 'Experience',
  component: Experience
};

export default meta;

export const Default: StoryObj<typeof Experience> = {
  render: () => <Experience />
};
