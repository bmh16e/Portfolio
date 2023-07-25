import React, { useState } from 'react';
import { Box, SwipeableDrawer as Drawer, Grid, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Navigation } from './Navigation';

export interface MobileNavProps {}

export const MobileNav: React.FC<MobileNavProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <IconButton sx={{ zIndex: 1200 }} onClick={() => setOpen(true)}>
        <Menu color="secondary" />
      </IconButton>
      <Drawer
        swipeAreaWidth={110}
        keepMounted
        disableSwipeToOpen={false}
        onOpen={() => setOpen(true)}
        open={open}
        anchor={'left'}
        onClose={() => setOpen(false)}>
        <Grid
          sx={{
            height: '100%',
            background: 'rgba(7, 22, 35, 1)',
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
          }}
          justifyContent="left"
          container
          item>
          <Navigation />
        </Grid>
      </Drawer>
    </Box>
  );
};
