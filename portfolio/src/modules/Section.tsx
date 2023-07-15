import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { ExperienceEntry, ProjectEntry } from '../data';
import { Chip } from '../components/Chip';

export interface SectionProps {
  sectionInfo: ProjectEntry | ExperienceEntry;
}

export const Section: React.FC<SectionProps> = ({
  sectionInfo: { id, title, dates, subtitle, summary, skills, bulletPoints, divider }
}) => {
  return (
    <Box id={id}>
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
        <Grid item sm={12} mt={1}>
          <Typography>{summary}</Typography>
        </Grid>
        <Grid my={1.5} container direction="row">
          {skills?.map((skill, index) => {
            return <Chip my={1} mr={1} ml={1} label={skill} key={index} />;
          })}
        </Grid>
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
