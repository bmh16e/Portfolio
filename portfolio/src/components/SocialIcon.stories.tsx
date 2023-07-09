import type { Meta, StoryObj } from '@storybook/react';
import { GitHub } from '@mui/icons-material';
import { SocialIcon } from './SocialIcon';

const meta: Meta<typeof SocialIcon> = {
  title: 'SocialIcon',
  component: SocialIcon
};

export default meta;

export const Default: StoryObj<typeof SocialIcon> = {
  render: () => <SocialIcon href="" label="GitHub" icon={GitHub} />
};
