import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ProjectEntry } from '../data';
import { Grid, Box, Divider, styled, Paper, useTheme } from '@mui/material';
import { NavLink } from '../components/NavLink';

export interface SpotlightProps {
  project: ProjectEntry;
}

export const Spotlight: React.FC<SpotlightProps> = ({
  project: { bulletPoints, image, title }
}) => {
  const Li = styled('li')({
    '&::marker': {
      color: 'white',
      fontSize: '1.3rem'
    }
  });

  const HeadingText = styled(Typography)({
    [useTheme().breakpoints.up('sm')]: {
      fontSize: '2.3rem'
    },
    [useTheme().breakpoints.down('sm')]: {
      fontSize: '2rem'
    }
  });

  return (
    <Paper
      elevation={3}
      sx={{
        minWidth: 400,
        background: 'linear-gradient(60deg, rgba(84, 107, 128,1) 0%, rgba(14, 35, 54,1)  100%)',
        color: 'white'
      }}>
      <HeadingText fontFamily="lekton" px={2} py={2} gutterBottom variant="h4">
        {`Project Spotlight`}
      </HeadingText>

      <CardMedia component="img" sx={{ px: 2, height: 350 }} image={image} />
      <CardContent>
        <Typography
          fontSize="1.75rem"
          fontWeight="normal"
          gutterBottom
          fontFamily="lekton"
          variant="subtitle1">
          {title}
        </Typography>
        <Grid ml={2} container direction="column">
          <Box
            component="ul"
            sx={{ paddingInlineStart: '10px', paddingInlineEnd: '20px', marginBlock: 0 }}>
            {bulletPoints.map((bulletPoint, index) => {
              return (
                <Typography mb={1} component={Li} variant="body1" key={index}>
                  {bulletPoint}
                </Typography>
              );
            })}
          </Box>
        </Grid>
      </CardContent>
      <Divider variant="middle" color="white" />
      <CardActions sx={{ display: 'flex', justifyContent: 'right', p: 2 }}>
        <NavLink color="secondary" display="block" href="/projects">
          View More
        </NavLink>
      </CardActions>
    </Paper>
  );
};
