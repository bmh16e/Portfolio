import React from 'react';
import { Box, Divider, Typography, Stack, styled, useTheme } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { SocialIcon } from '../components/SocialIcon';

export interface IntroProps {}

export const Intro: React.FC<IntroProps> = () => {
  const theme = useTheme();
  const SoftWareText = styled(Typography)({
    [theme.breakpoints.down('lg')]: {
      'text-align': 'center'
    }
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
    [theme.breakpoints.down('lg')]: {
      'text-align': 'center'
    }
    // width: '12ch',
    // animation: 'typing 1.5s steps(12)',
    // whiteSpace: 'nowrap',
    // overflow: 'hidden',
    // '@keyframes typing': {
    //   from: { width: 0 }
    // }
  });

  const NameText = styled(Typography)({
    [theme.breakpoints.down('lg')]: {
      'text-align': 'center'
    }
    // width: '15ch',
    // animation: 'typing 1.5s steps(12)',
    // whiteSpace: 'nowrap',
    // overflow: 'hidden',
    // '@keyframes typing': {
    //   from: { width: 0 }
    // }
  });

  const SocialStack = styled(Stack)({
    [theme.breakpoints.down('lg')]: {
      'justify-content': 'center'
    }
  });

  return (
    <Box color="white">
      <Stack direction="column" justifyContent={'center'}>
        <GreetText textTransform="uppercase" variant="h1">
          Hello World
        </GreetText>
        <NameText variant="subtitle2">My name is Ben</NameText>
        <SoftWareText variant="body2">and I&apos;m a Software Engineer</SoftWareText>
      </Stack>
      <SocialStack mt={2} direction="row" alignItems="center" gap={3} fontSize="45px">
        <Divider color="white" sx={{ width: '15%' }} />
        <SocialIcon
          href="https://www.linkedin.com/in/benjamin-hybart/"
          label="LinkedIn"
          icon={LinkedIn}
        />
        <SocialIcon href="https://github.com/bmh16e" label="GitHub" icon={GitHub} />
        <SocialIcon href="mailto:benhybart@gmail.com" label="Email" icon={Email} />
        <Divider color="white" sx={{ width: '15%' }} />
      </SocialStack>
    </Box>
  );
};
