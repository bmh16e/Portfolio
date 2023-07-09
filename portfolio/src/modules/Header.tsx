import React from 'react';
import { Grid } from '@mui/material';
import { NavLink } from '../components/NavLink';
import { Button } from '../components/Button';

const pdf = require('../Assets/static/files/Benjamin_Hybart_Resume_2023.pdf');

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Grid
      justifyContent="right"
      padding={2}
      sx={{
        background: 'linear-gradient(60deg, #508BBF 0%, #024873  50%, #5E3727 100%)'
      }}
      container
      width="100%">
      <Grid item mx={2}>
        <NavLink href="/" display="block" color="secondary">
          Home
        </NavLink>
      </Grid>
      <Grid item mx={2}>
        <NavLink href="/about" display="block" color="secondary">
          About
        </NavLink>
      </Grid>
      <Grid item mx={2}>
        <NavLink href="/experience" display="block" color="secondary">
          Experience
        </NavLink>
      </Grid>
      <Grid item mx={2}>
        <NavLink href="/projects" display="block" color="secondary">
          Projects
        </NavLink>
      </Grid>
      <Grid item mx={2}>
        <Button href={pdf} target="_blank" variant="outlined" color="secondary">
          Resume
        </Button>
      </Grid>
    </Grid>
  );
};
