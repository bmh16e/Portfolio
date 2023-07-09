import type { Meta, StoryObj } from '@storybook/react';
import { Section } from './Section';
import { projectEntries } from '../data';

const meta: Meta<typeof Section> = {
  title: 'Section',
  component: Section
};

export default meta;

export const Default: StoryObj<typeof Section> = {
  render: () => <Section sectionInfo={projectEntries[0]} />
};
