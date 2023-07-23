import React from 'react';
import {
  Box,
  Collapse,
  Divider,
  Grid,
  IconButton,
  IconButtonProps,
  Typography,
  styled
} from '@mui/material';
import { ExperienceEntry, ProjectEntry } from '../data';
import { Chip } from '../components/Chip';
import { ColorModeContext } from '../Theme';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

export interface SectionProps {
  sectionInfo: ProjectEntry | ExperienceEntry;
}

export const Section: React.FC<SectionProps> = ({ sectionInfo }) => {
  const { id, title, subtitle, dates, skills, summary, bulletPoints, divider, subEntries } =
    sectionInfo;
  const { colorMode } = React.useContext(ColorModeContext);
  const [expanded, setExpanded] = React.useState(false);

  const Li = styled('li')({
    '&::marker': {
      color: colorMode === 'dark' ? '#fff' : 'rgba(7, 22, 35, 1)',
      fontSize: '1.3rem'
    }
  });

  interface ExpandMoreProps extends IconButtonProps {}

  const ExpandMore = styled((props: ExpandMoreProps) => {
    return <IconButton {...props} />;
  })(({ theme }) => ({
    transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  }));

  return (
    <Box id={id}>
      <Grid container direction="column">
        <Grid item display="flex" justifyContent="space-between">
          <Typography variant="h4">{title}</Typography>
          <Typography fontFamily="lekton" fontSize={'90%'} variant="body1" fontWeight="bold">
            {dates}
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography variant="subtitle1">{subtitle}</Typography>
        </Grid>

        <Grid my={1} container direction="row">
          {skills?.map((skill, index) => {
            return <Chip my={1} mr={1} label={skill} key={index} />;
          })}
        </Grid>
        <Collapse in={!expanded}>
          <Grid item sm={12}>
            <Typography variant="body1">{summary}</Typography>
          </Grid>
        </Collapse>
      </Grid>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {subEntries !== undefined ? (
          <Grid>
            {subEntries.map((subEntry, index) => {
              return (
                <Grid mb={3} key={index}>
                  <Grid item sm={12}>
                    <Typography variant="subtitle1">{`${subEntry.subTitle}`}</Typography>
                  </Grid>
                  <Grid my={1} container direction="row">
                    {subEntry.subSkills?.map((skill, index) => {
                      return <Chip my={1} mr={1} label={skill} key={index} />;
                    })}
                  </Grid>

                  <Grid ml={2} container direction="column" mt={1}>
                    <Box
                      component="ul"
                      sx={{ paddingInlineStart: '10px', paddingInlineEnd: '10px', marginBlock: 0 }}>
                      {subEntry.subBulletPoints.map((bulletPoint, index) => {
                        return (
                          <Typography mb={1} component={Li} variant="body1" key={index}>
                            {bulletPoint}
                          </Typography>
                        );
                      })}
                    </Box>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Grid ml={2} container direction="column" mt={1}>
            <Box
              component="ul"
              sx={{ paddingInlineStart: '10px', paddingInlineEnd: '10px', marginBlock: 0 }}>
              {bulletPoints?.map((bulletPoint, index) => {
                return (
                  <Typography mb={1} component={Li} variant="body1" key={index}>
                    {bulletPoint}
                  </Typography>
                );
              })}
            </Box>
          </Grid>
        )}
      </Collapse>
      <ExpandMore
        sx={{ display: 'flex', justifyContent: 'right', mt: 3 }}
        onClick={() => setExpanded(!expanded)}>
        <ExpandMoreIcon />
      </ExpandMore>
      {divider && <Divider sx={{ mb: 4 }} />}
    </Box>
  );
};
