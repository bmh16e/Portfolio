import React from 'react';
import { AnimatedWave } from '../modules/AnimatedWave';
import { MediaCard } from '../modules/MediaCard';
import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import { Intro } from '../modules/Intro';
import { RecentWork } from '../modules/RecentWork';
const image = require('../Assets/static/images/BenH_edited_0000.jpg') as string;

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const CustomBox = styled(Box)({
    background: 'linear-gradient(60deg, rgba(84, 107, 128,1) 0%, rgba(14, 35, 54,1)  100%)'
  });

  return (
    <Box>
      <CustomBox>
        <Box pt={15} mt={-10}>
          <Grid container justifyContent="center" zIndex={1} position={'relative'} spacing={2}>
            <Grid item sm={8} lg={3} xl={2} mx={3} display="flex" justifyContent="center">
              <MediaCard
                sxMedia={{ height: 500, position: 'relative', zIndex: 1 }}
                sxCard={{ position: 'relative', zIndex: 1 }}
                image={image}
              />
            </Grid>
            <Grid display="flex" justifyContent="center" item sm={8} lg={4} xl={3} mx={3} mt={7}>
              <Intro />
            </Grid>
          </Grid>
        </Box>
        <AnimatedWave />
      </CustomBox>
      <Grid mt={10} container justifyContent="center">
        <RecentWork />
      </Grid>
    </Box>
  );
};
