import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
const image = require('../Assets/static/images/BenH_edited_0004.jpg') as string;

export interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <Grid pt={5} container justifyContent="center">
      <Grid item xs={10} md={8} lg={6} xl={4}>
        <Paper elevation={3} sx={{ p: 3, width: '100%' }}>
          <Box
            minHeight={450}
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          />
          <Typography my={2}>Hi, I&apos;m Ben</Typography>
          <Typography mb={2} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus placerat tortor,
            nec consequat mauris ultrices nec. Aenean lacinia fermentum pharetra. Vestibulum augue
            lacus, dignissim ullamcorper semper at, cursus nec nisl. Ut pellentesque felis nibh,
            quis eleifend turpis eleifend in. Sed in leo sapien. Donec vulputate imperdiet dui ac
            feugiat. Cras ligula massa, laoreet vitae maximus eget, dapibus quis magna.
          </Typography>
          <Typography mb={2} variant="body1">
            Etiam imperdiet bibendum lorem, sit amet congue dolor rutrum et. Nulla venenatis
            condimentum metus eu sagittis. Vivamus rutrum orci hendrerit ex convallis aliquam.
            Curabitur tincidunt eu dolor in ultricies. Mauris a diam placerat urna pharetra
            hendrerit. Sed tincidunt efficitur blandit. Aliquam libero nulla, efficitur eget
            vestibulum in, gravida a massa. Sed dignissim blandit imperdiet. Nulla in erat massa.
            Suspendisse potenti. Maecenas consectetur vel mi vel faucibus.
          </Typography>
          <Typography variant="body1">
            Duis rhoncus tempor molestie. Mauris convallis sapien a turpis vestibulum maximus.
            Mauris a commodo lectus, auctor molestie dolor. Proin eget nisi ipsum. Aliquam erat
            volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec malesuada nec ex pharetra eleifend. Cras maximus sit amet est id
            consectetur. Praesent facilisis lorem vitae risus ornare, et pellentesque ex sagittis.
            Aliquam sit amet massa ac nibh eleifend bibendum sit amet sed risus. Proin ultricies
            arcu ligula, vel efficitur ligula volutpat eget. Donec imperdiet tortor sem, at
            consequat lectus condimentum non.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
