import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { ExperienceEntry, ProjectEntry } from '../data';

export interface SectionProps {
  sectionInfo: ProjectEntry | ExperienceEntry;
}

export const Section: React.FC<SectionProps> = ({
  sectionInfo: { title, dates, subtitle, summary, skills, bulletPoints, divider }
}) => {
  return (
    <Box>
      <Grid container direction="column">
        <Grid item display="flex" justifyContent="space-between">
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1" fontWeight="bold">
            {dates}
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography variant="subtitle1">{subtitle}</Typography>
        </Grid>
        <Grid item sm={12} my={1}>
          <Typography>{summary}</Typography>
        </Grid>
        <Grid item>{skills && <Typography>{skills.join(', ')}</Typography>}</Grid>
      </Grid>
      <Grid ml={2} container direction="column">
        {bulletPoints.map((bulletPoint, index) => {
          return (
            <Typography sx={{ listStyleType: 'disc' }} component="li" variant="body1" key={index}>
              {bulletPoint}
            </Typography>
          );
        })}
      </Grid>
      {divider && <Divider sx={{ mb: 4, mt: 4 }} />}
    </Box>
  );
};
