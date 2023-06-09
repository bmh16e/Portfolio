import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedWave } from './AnimatedWave';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const meta: Meta<typeof AnimatedWave> = {
  title: 'AnimatedWave',
  component: AnimatedWave
};

export default meta;

const CustomBox = styled(Box)({
  background: 'linear-gradient(60deg, rgba(39, 68, 114,1) 0%, rgba(88, 133, 175,1)  100%)',
  // backgroundColor: "#273C72",
  position: 'relative',
  margin: 0
});

export const Default: StoryObj<typeof AnimatedWave> = {
  render: () => {
    return (
      <CustomBox>
        <Box display={'flex'} sx={{ height: '25vh' }} />
        <AnimatedWave />
      </CustomBox>
    );
  }
};
