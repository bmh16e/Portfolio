import React from 'react';
import { Grid, Button, Box, useTheme, styled } from '@mui/material';
import { Home, Code, Work, Person, AttachFile } from '@mui/icons-material';
import { NavLink } from '../components/NavLink';

const pdf = require('../Assets/static/files/Benjamin_Hybart_Resume_2023.pdf');

export interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  const theme = useTheme();

  const NavWrapper = styled(Box)({
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      textAlign: 'left',
      marginTop: 50,
      paddingRight: 50
    }
  });

  const MobileButtonWrapper = styled(Grid)({
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  });

  const DesktopButtonWrapper = styled(Grid)({
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  });

  return (
    <NavWrapper gap={2} display="flex">
      <Grid item mx={2}>
        <NavLink icon={Home} href="/" display="block" color="secondary">
          Home
        </NavLink>
      </Grid>
      <Grid item mx={2}>
        <NavLink icon={Person} href="/about" display="block" color="secondary">
          About
        </NavLink>
      </Grid>
      <Grid item mx={2}>
        <NavLink icon={Work} href="/experience" display="block" color="secondary">
          Experience
        </NavLink>
      </Grid>
      <Grid item mx={2}>
        <NavLink icon={Code} href="/projects" display="block" color="secondary">
          Projects
        </NavLink>
      </Grid>
      <DesktopButtonWrapper item mx={2}>
        <Button href={pdf} target="_blank" variant="outlined" color="secondary">
          Resume
        </Button>
      </DesktopButtonWrapper>
      <MobileButtonWrapper item mx={2}>
        <NavLink icon={AttachFile} target="_blank" href={pdf} display="block" color="secondary">
          Resume
        </NavLink>
      </MobileButtonWrapper>
    </NavWrapper>
  );
};
