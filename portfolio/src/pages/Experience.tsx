import React from 'react';
import { Grid, Paper } from '@mui/material';
import { projectEntries } from '../data';
import { Section } from '../modules/Section';

export interface ExperienceProps {}

export const Experience: React.FC<ExperienceProps> = () => {
  return (
    <Grid pt={5} container justifyContent="center">
      <Grid item xs={10} md={8} lg={6} xl={4}>
        <Paper elevation={3} sx={{ p: 3, width: '100%' }}>
          {projectEntries.map((projectEntry, index) => {
            return <Section key={index} sectionInfo={projectEntry} />;
          })}
        </Paper>
      </Grid>
    </Grid>
  );
};
