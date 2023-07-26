import React from 'react';
import { AnimatedWave } from '../modules/AnimatedWave';
import { MediaCard } from '../modules/MediaCard';
import { Box, Grid, useTheme, styled } from '@mui/material';
import { Intro } from '../modules/Intro';
import { Spotlight } from '../modules/Spotlight';
import { projectEntries } from '../data';
const image = require('../Assets/static/images/BenH_edited_0000.jpg') as string;

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const theme = useTheme();
  const CustomBox = styled(Box)({
    background: 'linear-gradient(60deg, rgba(84, 107, 128,1) 0%, rgba(14, 35, 54,1)  100%)'
  });

  const CustomGrid = styled(Grid)({
    [theme.breakpoints.only('sm')]: {
      justifyContent: 'space-between'
    }
  });

  const HomeBox = styled(Box)({
    [theme.breakpoints.down('sm')]: {
      marginTop: -135
    },

    [theme.breakpoints.up('sm')]: {
      marginTop: -100
    }
  });

  const projectIndex = React.useMemo(() => Math.floor(Math.random() * projectEntries.length), []);

  return (
    <Box>
      <CustomBox>
        <HomeBox pt={15}>
          <CustomGrid
            container
            justifyContent="center"
            zIndex={1}
            position={'relative'}
            spacing={2}>
            <Grid
              maxWidth="450px !important"
              item
              xs={8}
              sm={4}
              lg={4}
              xl={4}
              mx={3}
              display="flex">
              <MediaCard
                sxMedia={{ height: 500, position: 'relative', zIndex: 500 }}
                sxCard={{ position: 'relative', zIndex: -1 }}
                image={image}
              />
            </Grid>
            <Grid
              justifyContent="center"
              maxWidth="450px !important"
              minWidth="450px !important"
              display="flex"
              item
              xs={11}
              sm={5}
              md={6}
              lg={4}
              xl={4}
              mx={3}
              mt={7}>
              <Intro />
            </Grid>
          </CustomGrid>
        </HomeBox>
        <AnimatedWave />
      </CustomBox>
      <Grid container mt={10} justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <Spotlight project={projectEntries[projectIndex]} />
        </Grid>
      </Grid>
    </Box>
  );
};
