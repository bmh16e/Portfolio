import React from 'react';
import { Grid, useTheme } from '@mui/material';
import { ColorModeToggle } from './ColorModeToggle';
import { Navigation } from './Navigation';
import styled from '@emotion/styled';
import { MobileNav } from './MobileNav';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const theme = useTheme();

  const LgNavWrapper = styled(Grid)({
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  });

  const SmNavWrapper = styled(Grid)({
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  });

  return (
    <Grid
      direction="row"
      padding={2}
      sx={{
        background: 'linear-gradient(60deg, rgba(84, 107, 128,1) 0%, rgba(14, 35, 54,1)  100%)'
      }}
      container
      width="100%">
      <SmNavWrapper alignItems="center" item container xs={10} sm={11} justifyContent="left">
        <MobileNav />
      </SmNavWrapper>
      <Grid xs={2} sm={1} container item justifyContent="left">
        <ColorModeToggle />
      </Grid>
      <LgNavWrapper item container sm={11} justifyContent="right">
        <Navigation />
      </LgNavWrapper>
    </Grid>
  );
};
