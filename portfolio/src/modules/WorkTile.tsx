import React from 'react';
import { Box, Stack, SxProps, Theme, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export interface WorkTileProps {
  image: string;
  title: string;
  summary: string;
  sx?: SxProps<Theme>;
  href?: string;
}

export const WorkTile: React.FC<WorkTileProps> = ({ href, sx, image, title, summary }) => {
  const CustomBox = styled(Box)({
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    transition: 'filter 0.3s, transform 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
      filter: 'sepia(.25) saturate(.75) hue-rotate(-10deg)'
    }
  });

  return (
    <Box
      sx={{
        ...sx
      }}>
      <Stack direction="row" spacing={2}>
        <Link
          to={`/projects#${href}`}
          style={{ width: '50%', maxWidth: '50%', overflow: 'hidden' }}>
          <CustomBox minHeight={250} width="100%" />
        </Link>
        <Box>
          <Typography mb={3} variant="h4" color="white">
            {title}
          </Typography>
          <Typography color="white" variant="body1">
            {summary}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};
