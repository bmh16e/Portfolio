import React from 'react';
import { Box, Divider, Typography, Stack, styled } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { SocialIcon } from '../components/SocialIcon';

export interface IntroProps {}

export const Intro: React.FC<IntroProps> = () => {
  const SoftWareText = styled(Typography)({
    // width: '29ch',
    // animation: 'typing 1s steps(28)',
    // whiteSpace: 'nowrap',
    // overflow: 'hidden',
    // transition: 'width 10s linear',
    // '@keyframes typing': {
    //   from: { width: 0 }
    // }
  });

  const GreetText = styled(Typography)({
    transition: ''
    // width: '12ch',
    // animation: 'typing 1.5s steps(12)',
    // whiteSpace: 'nowrap',
    // overflow: 'hidden',
    // '@keyframes typing': {
    //   from: { width: 0 }
    // }
  });

  const NameText = styled(Typography)({
    // width: '15ch',
    // animation: 'typing 1.5s steps(12)',
    // whiteSpace: 'nowrap',
    // overflow: 'hidden',
    // '@keyframes typing': {
    //   from: { width: 0 }
    // }
  });

  return (
    <Box color={'white'}>
      <Stack direction="column" justifyContent={'center'}>
        <GreetText fontSize="clamp(2rem,6vw,4rem)" textTransform="uppercase" variant="h1">
          Hello World
        </GreetText>
        <NameText fontSize="clamp(1.5rem,5vw,3.25rem)" variant="subtitle2">
          My name is Ben
        </NameText>
        <SoftWareText fontSize="clamp(1.1rem,3vw,1.9rem)" variant="body2">
          and I am a Software Engineer
        </SoftWareText>
      </Stack>
      <Stack mt={2} direction="row" alignItems="center" gap={3} fontSize="45px">
        <Divider color="white" sx={{ width: '15%' }} />
        <SocialIcon label="LinkedIn" icon={LinkedIn} />
        <SocialIcon label="GitHub" icon={GitHub} />
        <SocialIcon label="Email" icon={Email} />
        <Divider color="white" sx={{ width: '15%' }} />
      </Stack>
    </Box>
  );
};
