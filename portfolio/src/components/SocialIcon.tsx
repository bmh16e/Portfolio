import React, { useState } from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { Box, SvgIcon, Typography } from '@mui/material';

export interface SocialIconProps {
  icon: SvgIconComponent;
  label: string;
  href: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ icon, label, href }) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <Box zIndex={1200} position="relative">
      <SvgIcon
        onClick={() => {
          window.open(href, '_blank');
        }}
        onMouseOut={onLeave}
        onMouseOver={onHover}
        cursor="pointer"
        fontSize="inherit"
        component={icon}
        sx={{ display: 'flex !important' }}
      />
      <Typography
        mt={1}
        fontSize="1rem"
        position="absolute"
        style={{
          transform: 'translate(-50%)',
          left: '50%',
          transition: 'opacity 0.3s',
          opacity: hover ? 1 : 0
        }}>
        {label}
      </Typography>
    </Box>
  );
};
