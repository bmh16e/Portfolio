import type { Meta, StoryObj } from '@storybook/react';
import { Projects } from './Projects';

const meta: Meta<typeof Projects> = {
  title: 'Projects',
  component: Projects
};

export default meta;

export const Default: StoryObj<typeof Projects> = {
  render: () => <Projects />
};
