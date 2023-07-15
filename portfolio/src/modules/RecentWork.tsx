import React from 'react';
import { Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import '@fontsource/lekton';
import { WorkTile } from './WorkTile';

const unrealImg = require('../Assets/static/images/Unreal_Engine.jpg') as string;
const abstractMusicImg = require('../Assets/static/images/Abstract_Music.jpeg') as string;
const storybookImg = require('../Assets/static/images/Storybook.jpg') as string;

export interface RecentWorkProps {}

export const RecentWork: React.FC<RecentWorkProps> = () => {
  return (
    <Grid pt={5} container justifyContent="center">
      <Grid item xs={10} md={8} lg={6} xl={4}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            width: '100%',
            background: 'linear-gradient(60deg, rgba(84, 107, 128,1) 0%, rgba(14, 35, 54,1)  100%)'
          }}>
          <Typography color="white" variant="h4">
            New and Upcoming Projects
          </Typography>
          <Divider color="white" sx={{ mt: 2, mb: 4 }} />
          <Stack>
            <WorkTile
              href="kikoda"
              sx={{ mb: 5 }}
              image={unrealImg}
              title="Unreal Engine"
              summary="Some cool gaming stuff"
            />
            <WorkTile
              sx={{ mb: 5 }}
              image={storybookImg}
              title="Website"
              summary="Some cool web dev stuff"
            />
            <WorkTile
              sx={{ mb: 5 }}
              image={abstractMusicImg}
              title="Discord Bot"
              summary="Some cool Discord stuff"
            />
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};
