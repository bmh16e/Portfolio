import React from 'react';
import { Grid, Paper } from '@mui/material';
import { projectEntries } from '../data';
import { Section } from '../modules/Section';

export interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <Grid pt={5} container justifyContent="center">
      <Grid xs={12} sm={10} md={8} lg={7} xl={6} item>
        <Paper elevation={3} sx={{ p: 3, width: '100%' }}>
          {projectEntries.map((projectEntry, index) => {
            return <Section key={index} sectionInfo={projectEntry} />;
          })}
        </Paper>
      </Grid>
    </Grid>
  );
};
