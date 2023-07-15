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
        // background: 'linear-gradient(60deg, #A67B56 0%,  #40140A 100%)'
        background: 'linear-gradient(60deg, rgba(84, 107, 128,1) 0%, rgba(14, 35, 54,1)  100%)'
        // background:
        //   'linear-gradient(to top, rgba(14, 35, 54,1)  0%,   rgba(84, 107, 128,1) 85%, rgba(255, 255, 255,1)  100%)'
        // backgroundImage: 'linear-gradient(to top, #0e2336, #1b2f43, #283d51, #354a5f, #42586d, #57697d, #6c7b8e, #818d9f, #a2a8b6, #c1c4ce, #e1e1e6, #ffffff)'
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
          Contact Me
        </NavLink>
      </Grid>
    </Grid>
  );
};
