import React from 'react';
import { Card, CardMedia, SxProps, Theme, styled } from '@mui/material';

export interface MediaCardProps {
  height?: number | string;
  image?: string;
  backgroundPosition?: string;
  sxMedia?: SxProps<Theme>;
  sxCard?: SxProps<Theme>;
}

export const MediaCard: React.FC<MediaCardProps> = ({ image, sxMedia, sxCard }) => {
  const CustomCard = styled(CardMedia)({
    '&::after': {
      opacity: 0.99,
      content: '""',
      position: 'absolute',
      borderTopLeftRadius: '500px',
      borderTopRightRadius: '500px',
      background: '#8C8368',
      width: 'clamp(100px,100%,400px)',
      top: '1rem',
      left: '1.25rem',
      transform: 'translateZ(-1px)',
      height: 500,
      '@supports (-webkit-touch-callout: none)': {
        opacity: 0
      }
    }
  });

  return (
    <Card
      sx={{
        aspectRatio: '2 / 3',
        height: 500,
        width: 'clamp(100px,100%,375px)',
        borderTopLeftRadius: '500px',
        borderTopRightRadius: '500px',
        overflow: 'visible',
        ...sxCard
      }}>
      <CustomCard
        sx={{
          transformStyle: 'preserve-3d',
          borderTopLeftRadius: '500px',
          borderTopRightRadius: '500px',
          maxHeight: '100%',
          ...sxMedia
        }}
        image={image}
        title="Picture of Ben"
      />
    </Card>
  );
};
