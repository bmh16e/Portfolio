import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { NavLink } from '../components/NavLink';

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Grid
      maxWidth="100%"
      position="absolute"
      bottom={0}
      justifyContent="center"
      alignItems={'center'}
      padding={2}
      sx={{
        background: 'linear-gradient(60deg, rgba(84, 107, 128,1) 0%, rgba(14, 35, 54,1)  100%)'
      }}
      container
      width="100%">
      <Grid item mx={2}>
        <Typography paddingX={'6px'} variant="button" color="white">
          &copy; 2023 Benjamin Hybart
        </Typography>
      </Grid>
      <Grid item>
        <Divider
          sx={{ height: 20, borderColor: 'white' }}
          orientation="vertical"
          variant="middle"
        />
      </Grid>
      <Grid item mx={2}>
        <NavLink href="mailto:benhybart@gmail.com" color="secondary">
          Get In Touch
        </NavLink>
      </Grid>
    </Grid>
  );
};
