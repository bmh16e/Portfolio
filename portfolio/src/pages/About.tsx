import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
const image = require('../Assets/static/images/BenH_edited_0004.jpg') as string;

export interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <Grid pt={5} container justifyContent="center">
      <Grid item xs={12} sm={10} md={8} lg={7} xl={4}>
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
          <Typography fontWeight={500} fontSize="160%" my={2}>
            Hi, I&apos;m Ben
          </Typography>
          <Typography fontSize="105%" mb={2} variant="body1">
            I work as a <strong>Software Engineer at Kikoda</strong> where we focus on building
            custom software solutions for clients in a variety of industries such as healthcare and
            insurance. There are always a number of different projects in flight in the mobile and
            web spaces at Kikoda. The range of applications has afforded me the opportunity to gain
            experience with many current technologies including
            <strong> ReactJS, C#, MySQL, and AWS</strong> to name a few.
          </Typography>

          <Typography fontSize="105%" variant="body1" mb={2}>
            Prior to joining Kikoda, I worked in Customer Service at Publix while attending
            <strong> Florida State University.</strong> I graduated with my Bachelor&apos;s in
            <strong> Computer Science</strong> and a Minor in Mathematics in the spring of 2019. I
            have a passion for learning and I&apos;m always looking for opportunities to grow and
            gain new experiences!
          </Typography>
          <Typography fontSize="105%" variant="body1" mb={2}>
            Outside of work, I&apos;m an avid gamer, and recently, I&apos;ve been putting my{' '}
            <strong>C++ </strong>
            skills to use and learning
            <strong> Unreal Engine.</strong> I find the creativity poured into developing games and
            their stories extremely compelling, and I would love to be a part of that industry in
            the future. Away from the tech world, you can find me either playing Valorant with my
            friends or living in my local gym, lifting weights.
          </Typography>
          <Typography fontSize="105%" mb={2}>
            Thanks for stopping by my site and don&apos;t hesitate to reach out!
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
